import MKTypography from "@/components/MKTypography";
import { useEffect, useRef, useState } from "react";

export default function CoursesCards({ cards }) {
  const [firstShow, setFirstShow] = useState(false);
  const sectionRef = useRef(null);

  function handleScroll() {
    if (firstShow) return;
    if (window.scrollY < 80) return;

    if (!sectionRef?.current) return;
    setFirstShow(true);
    if (sectionRef.current?.classList?.contains("opacity-100")) return;
    sectionRef.current.classList.remove("opacity-0");
    sectionRef.current.classList.add("opacity-100");
    sectionRef.current.classList.remove("-mt-60");
    sectionRef.current.classList.add("-mt-20");
  }
  useEffect(() => {
    if (firstShow) return;

    document.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className="  w-full h-96 -mt-60 z-10 opacity-0 transition-all duration-1000 mb-10"
    >
      <div className="h-fit w-full z-10 flex justify-center gap-x-10">
        {cards.map((card) => {
          return (
            <a key={card.href} href={card.href}>
              <div className="h-96 w-96 relative overflow-hidden pointer-events-none rounded-md">
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
    </section>
  );
}
