"use client";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useCart } from "@/app/hooks/cart";
import DialogCart from "./dialogCart";
import { useEffect, useState } from "react";
import { useReactPixel } from "@/app/hooks/reactPixel";
import { viewCart } from "@/facebook-pixel/utils";

export default function Cart() {
  const [isInHome, setIsInHome] = useState(true);
  const [firstView, setFirstView] = useState(false);
  const cart = useCart();
  const { reactPixel } = useReactPixel();

  function calculateSum() {
    let sum = 0;
    cart.cart.forEach((item) => (sum += item.cant));
    return sum;
  }

  useEffect(() => {
    const path = window.location.pathname;
    if (path == "/" && !isInHome) {
      setIsInHome(true);
      return;
    }

    if (path != "/" && isInHome) setIsInHome(false);
  });

  useEffect(() => setFirstView(false), [cart.cart]);

  return cart?.cart?.length > 0 ? (
    <>
      <DialogCart
        open={cart.open}
        setOpen={cart.setOpen}
        courses={cart.cart}
        AddToCart={cart.AddToCart}
        RemoveFromCart={cart.RemoveFromCart}
        SubFromCart={cart.SubFromCart}
      />
      <button
        style={{
          height: "3.2rem",
          width: "3.2rem",
          right: "1.5rem",
          bottom: isInHome ? "5.3rem" : "2rem",
          zIndex: "39",
        }}
        onClick={() => {
          if (!firstView) {
            viewCart(reactPixel, cart.cart);
            setFirstView(true);
          }

          cart.setOpen(true);
        }}
        className="bg-blue-600 shadow-md fixed rounded-full hover:bg-blue-700"
      >
        <ShoppingCartOutlinedIcon
          sx={{ width: "1.75rem", height: "1.75rem", fill: "white" }}
        />
        <span
          style={{
            right: "1rem",
            bottom: isInHome ? "7.3rem" : "4rem",
          }}
          className="text-white text-sm flex items-center justify-center text-center z-40 w-6 h-6 bg-red-500 font-bold fixed p-2 rounded-full"
        >
          {calculateSum()}
        </span>
      </button>
    </>
  ) : (
    <></>
  );
}
