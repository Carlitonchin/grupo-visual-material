"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AosAnimation({ children }) {
  useEffect(() => {
    const elements = document.querySelectorAll("*[data-aos-delay]");
    const myAos = document.querySelectorAll("*[my-data-aos]");

    for (const element of elements) {
      const width = window.innerWidth;

      if (width < 1000) {
        element.setAttribute("data-aos-delay", 0);
      }
    }

    for (const aos of myAos) {
      aos.setAttribute("data-aos", aos.getAttribute("my-data-aos"));
    }
    AOS.init({ once: true });
  }, []);
  return <>{children}</>;
}
