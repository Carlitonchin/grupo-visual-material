"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { PIXEL_ID } from "./utils";
import { useReactPixel } from "@/app/hooks/reactPixel";
import { useFacebookPixelClient } from "./utils";

export const FacebookPixel = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { setReactPixel, reactPixel } = useReactPixel();

  useEffect(() => {
    if (!useFacebookPixelClient()) return;

    if (reactPixel) {
      reactPixel.pageView();
      return;
    }

    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(`${PIXEL_ID}`);
        ReactPixel.pageView();
        setReactPixel(ReactPixel);
      });
  }, [pathname, searchParams]);

  return null;
};

export default FacebookPixel;
