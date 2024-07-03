"use client";
import { fontNormal, fontHeader } from "./fonts";

export default function FontStyle() {
  return (
    <>
      <style jsx global>{`
        :root {
          --normal-font: ${fontNormal.style.fontFamily};
          --header-font: ${fontHeader.style.fontFamily};
        }
      `}</style>
    </>
  );
}
