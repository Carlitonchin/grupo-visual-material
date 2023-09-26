import { Rubik, Lobster } from "next/font/google";

export const fontNormal = Rubik({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "500", "700"],
});

export const fontHeader = Lobster({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
