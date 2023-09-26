"use client";
import { useRef, useState } from "react";
import TextLink from "@/components/TextLink";
import HeaderText from "@/components/texts/header-text";

export default function CoursesCards({
  cards,
  buttonUrl,
  buttonText,
  buttonExtern,
}) {
  const [firstShow, setFirstShow] = useState(false);
  const sectionRef = useRef(null);

  function handleShow() {
    if (firstShow) return;

    if (!sectionRef?.current) return;
    setFirstShow(true);
    if (sectionRef.current?.classList?.contains("opacity-100")) return;
    sectionRef.current.classList.remove("opacity-0");
    sectionRef.current.classList.add("opacity-100");
  }
  /*useEffect(() => {
    if (firstShow) return;

    handleShow();
  }, []);*/
  return (
    <section
      ref={sectionRef}
      className="bg-gray-200 py-10 w-full h-fit flex flex-col justify-center items-center md:-mt-24 transition-all duration-1000"
    >
      <div className="h-fit w-full  flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-y-0 md:gap-x-5 lg:gap-x-10">
        {cards.map((card, index) => {
          return (
            <a
              key={card.href}
              href={card.href}
              style={{ zIndex: 20 }}
              target={card?.extern_link ? "_blank" : ""}
            >
              <div className=" w-[85vw] max-w-[30rem] max-h-[30rem] h-[85vw] md:h-96 md:w-96 md:max-w-[30vw] md:max-h-[30vw] relative overflow-hidden pointer-events-none rounded-md">
                <div
                  className="w-full h-full hover:scale-110 cursor-pointer pointer-events-auto transition-all duration-300"
                  style={{
                    backgroundImage: `url(${card.img})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-end bg-gray-800 bg-opacity-30">
                  <span className="w-full text-center font-bold mb-4 text-2xl text-white">
                    {card.text}
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <TextLink
        text={buttonText}
        url={buttonUrl}
        className={"mt-4"}
        extern={buttonExtern}
      />
    </section>
  );
}
