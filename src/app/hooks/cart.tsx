"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface props {
  cart: any[];
  AddToCart: (a: any) => void;
  SubFromCart: (a: any) => void;
  RemoveFromCart: (a: any) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const CartContext = createContext<props>({
  cart: [],
  open: false,
  setOpen: (a) => {},
  AddToCart: (a: any) => {},
  SubFromCart: (a: any) => {},
  RemoveFromCart: (a: any) => {},
});

export const CartProvider = ({ children }: { children: any }) => {
  const [cart, setCart] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    const cartLS = JSON.parse(localStorage.getItem("cart") || "[]") || [];
    setCart(cartLS?.length == undefined ? [] : cartLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    if (!cart?.length) setOpen(false);
  }, [cart]);

  function AddToCart(item: any) {
    const itemInCart = cart.find((ic: any) => ic?.item?.id == item?.id);
    if (!itemInCart) {
      setCart(cart.concat([{ item: item, cant: 1 }]));
      return;
    }

    setCart(
      cart.map((ic) => {
        if (ic?.item?.id != itemInCart?.item?.id) return ic;

        return { item: ic.item, cant: ic.cant + 1 };
      })
    );
  }

  function SubFromCart(item: any) {
    const itemInCart = cart.find((ic: any) => ic?.item?.id == item?.id);
    if (!itemInCart) {
      return;
    }

    if (itemInCart?.cant == 1) {
      RemoveFromCart(item);
      return;
    }

    setCart(
      cart.map((ic) => {
        if (ic?.item?.id != itemInCart?.item?.id) return ic;

        return { item: ic.item, cant: ic.cant - 1 };
      })
    );
  }

  function RemoveFromCart(item: any) {
    setCart(cart.filter((ic) => ic?.item?.id != item.id));
  }

  return (
    <CartContext.Provider
      value={{ cart, AddToCart, SubFromCart, RemoveFromCart, open, setOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
