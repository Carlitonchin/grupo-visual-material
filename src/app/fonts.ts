import { Montserrat } from "next/font/google";

export const fontNormal = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const fontHeader = fontNormal;
