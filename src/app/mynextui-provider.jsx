"use client";
import { NextUIProvider } from "@nextui-org/react";

export default function MyNextUIProvider({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
