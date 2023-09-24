"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AosAnimation({ children }) {
  useEffect(() => AOS.init({ once: true }), []);
  return <>{children}</>;
}
