"use client";
import { API_URL } from "@/api/constant";
import axios from "axios";
import { useEffect, useState } from "react";
import { useReactPixel } from "../hooks/reactPixel";
import { useCart } from "../hooks/cart";
import { purchase } from "@/facebook-pixel/utils";
import { useOrder } from "../hooks/order";
import { useFacebookPixelClient } from "@/facebook-pixel/utils";

var timeEnrollEllapsed = 30000;
var timeCartEllapsed = 30000;
export default function CheckOrders() {
  const [cartChecks, setCartChecks] = useState(0);
  const [enrollChecks, setEnrollChecks] = useState(0);

  const [cantCartErrors, setCantCartErrors] = useState(0);
  const [cantEnrollErrors, setCantEnrollErrors] = useState(0);
  const { reactPixel } = useReactPixel();
  const { CleanCart } = useCart();
  const { cleanOrderCart, cleanOrderEnroll, orderCart, orderEnroll } =
    useOrder();

  async function checkOrder(order: any) {
    const resp = await axios.get(API_URL + `buy-courses/${order.orderId}`);
    return resp.data;
  }

  async function checkCart(order: any) {
    if (cantCartErrors > 10 || cartChecks > 60 || !useFacebookPixelClient())
      return;

    try {
      const resp = await checkOrder(order);
      if (resp?.closed) {
        purchase(reactPixel, order.courses);
        CleanCart();
        cleanOrderCart();
        return;
      }

      setTimeout(() => {
        checkCart(order);
      }, timeCartEllapsed);

      setCartChecks(cartChecks + 1);
      timeCartEllapsed = cartChecks > 50 ? 60000 : 30000;
    } catch {
      setCantCartErrors(cantCartErrors + 1);
      setTimeout(() => {
        checkCart(order);
      }, timeCartEllapsed);

      setCartChecks(cartChecks + 1);
      timeCartEllapsed = cartChecks > 50 ? 60000 : 30000;
    }
  }

  async function checkEnroll(order: any) {
    if (cantEnrollErrors > 10 || enrollChecks > 60 || !useFacebookPixelClient())
      return;

    try {
      const resp = await checkOrder(order);
      if (resp?.closed) {
        purchase(reactPixel, order.courses);
        cleanOrderEnroll();
        return;
      }

      setTimeout(() => {
        checkEnroll(order);
      }, timeEnrollEllapsed);

      setEnrollChecks(enrollChecks + 1);
      timeEnrollEllapsed = enrollChecks > 50 ? 60000 : 30000;
    } catch {
      setCantEnrollErrors(cantEnrollErrors + 1);
      setTimeout(() => {
        checkEnroll(order);
      }, timeEnrollEllapsed);

      setEnrollChecks(cartChecks + 1);
      timeEnrollEllapsed = enrollChecks > 50 ? 60000 : 30000;
    }
  }

  useEffect(() => {
    if (!orderEnroll?.orderId) return;

    setCantEnrollErrors(0);
    setEnrollChecks(0);
    timeEnrollEllapsed = 30000;
    setTimeout(() => {
      checkEnroll(orderEnroll);
    }, 15000);
  }, [orderEnroll]);

  useEffect(() => {
    if (!orderCart?.orderId) return;

    setCantCartErrors(0);
    setCartChecks(0);
    timeCartEllapsed = 30000;

    setTimeout(() => {
      checkCart(orderCart);
    }, 15000);
  }, [orderCart]);

  return <></>;
}
