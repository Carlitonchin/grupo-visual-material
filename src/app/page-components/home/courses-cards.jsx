import MKTypography from "@/components/MKTypography";
import { useEffect, useRef, useState } from "react";

export default function CoursesCards({ cards }) {
  const [firstShow, setFirstShow] = useState(false);
  const sectionRef = useRef(null);

  function handleScroll() {
    if (firstShow) return;
    if (window.scrollY < 60) return;

    if (!sectionRef?.current) return;
    setFirstShow(true);
    if (sectionRef.current?.classList?.contains("opacity-100")) return;
    sectionRef.current.classList.remove("opacity-0");
    sectionRef.current.classList.add("opacity-100");
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
      className="  w-full h-fit -mt-20 z-40 opacity-0 transition-all duration-300 mb-10"
    >
      <div className="h-fit w-full z-40 flex justify-center gap-x-10">
        {cards.map((card) => {
          return (
            <div className="h-96 w-96 overflow-hidden rounded-sm">
              <div
                className="w-full h-full relative hover:scale-110 cursor-pointer transition-all duration-300"
                style={{
                  backgroundImage: `url(${card.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-30">
                  <MKTypography>
                    <>hola</>
                  </MKTypography>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
