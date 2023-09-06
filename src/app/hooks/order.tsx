"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useCart } from "./cart";

interface props {
  setOrderCart: (a: any, b: any) => void;
  orderCart: any;
  setOrderEnroll: (a: any, b: any) => void;
  orderEnroll: any;
  cleanOrderEnroll: () => void;
  cleanOrderCart: () => void;
}

const OrderContext = createContext<props>({
  setOrderCart: (a: any, b: any) => {},
  orderCart: null,
  setOrderEnroll: (a: any, b: any) => {},
  orderEnroll: null,
  cleanOrderEnroll: () => {},
  cleanOrderCart: () => {},
});

export const OrderProvider = ({ children }: { children: any }) => {
  const [orderEnroll, setOrderEnroll] = useState<any>(null);
  const [orderCart, setOrderCart] = useState<any>(null);

  useEffect(() => {
    const orderE = JSON.parse(localStorage.getItem("order") || "{}");
    const orderC = JSON.parse(localStorage.getItem("order_cart") || "{}");

    if (orderE?.orderId) {
      setOrderEnroll(orderE);
    }

    if (orderC?.orderId) {
      setOrderCart(orderC);
    }
  }, []);
  function handleSetOrderCart(orderId: string, courses: any) {
    localStorage.setItem("order_cart", JSON.stringify({ orderId, courses }));

    setOrderCart({ orderId, courses });
  }

  function handleSetOrderEnroll(orderId: string, courses: any) {
    localStorage.setItem("order", JSON.stringify({ orderId, courses }));

    setOrderEnroll({ orderId, courses });
  }

  function cleanOrderCart() {
    setOrderCart(null);
    localStorage.removeItem("order_cart");
  }

  function cleanOrderEnroll() {
    setOrderEnroll(null);
    localStorage.removeItem("order");
  }

  return (
    <OrderContext.Provider
      value={{
        orderCart,
        setOrderCart: handleSetOrderCart,
        orderEnroll,
        setOrderEnroll: handleSetOrderEnroll,
        cleanOrderCart,
        cleanOrderEnroll,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  return useContext(OrderContext);
};
