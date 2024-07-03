"use client";
import { useEffect } from "react";

export default function Whatsapp() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://smartarget.online/loader.js?u=aa345026521a807932506ca3575ccb135716fe71";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <></>;
}
