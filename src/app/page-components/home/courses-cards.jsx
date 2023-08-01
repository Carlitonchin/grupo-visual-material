"use client";
import MKTypography from "@/components/MKTypography";
import MKButton from "@/components/MKButton";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function CoursesCards({ cards, buttonUrl, buttonText }) {
  const [firstShow, setFirstShow] = useState(false);
  const sectionRef = useRef(null);

  function handleShow() {
    if (firstShow) return;

    if (!sectionRef?.current) return;
    setFirstShow(true);
    if (sectionRef.current?.classList?.contains("opacity-100")) return;
    sectionRef.current.classList.remove("opacity-0");
    sectionRef.current.classList.add("opacity-100");
    sectionRef.current.classList.remove("md:-mt-60");
    sectionRef.current.classList.add("md:-mt-20");
  }
  useEffect(() => {
    if (firstShow) return;

    handleShow();
  }, []);
  return (
    <section
      ref={sectionRef}
      className=" w-full h-fit flex flex-col justify-center items-center py-8 md:-mt-60 z-10 opacity-0 transition-all duration-1000"
    >
      <div className="h-fit w-full z-10 flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-y-0 md:gap-x-5 lg:gap-x-10">
        {cards.map((card) => {
          return (
            <a key={card.href} href={card.href}>
              <div className="w-[85vw] max-w-[30rem] max-h-[30rem] h-[85vw] md:h-96 md:w-96 md:max-w-[30vw] md:max-h-[30vw] relative overflow-hidden pointer-events-none rounded-md">
                <div
                  className="w-full h-full hover:scale-110 cursor-pointer pointer-events-auto transition-all duration-300"
                  style={{
                    backgroundImage: `url(${card.img})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-end bg-gray-800 bg-opacity-30">
                  <MKTypography
                    color="white"
                    className="w-full text-center font-bold mb-4 text-3xl"
                  >
                    {card.text}
                  </MKTypography>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <MKButton
        className="mt-4 w-52 max-w-full"
        color="dark"
        variant="gradient"
        component={Link}
        href={buttonUrl}
      >
        {buttonText}
      </MKButton>
    </section>
  );
}
