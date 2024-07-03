"use client";
import { useEffect } from "react";

export default function Whatsapp() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://smartarget.online/loader.js?u=603da0f4880eac03c4a04e4192a85450c044deef";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <></>;
}
