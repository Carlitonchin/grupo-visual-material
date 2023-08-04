"use client";
import StarCard from "@/components/cards/StarCard";
import colors from "@/theme/base/colors";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useRef, useEffect, useState } from "react";

var prevPageX = 0;
var prevScrollLeft = 0;
var widthItem = 0;
var positionDiff = 0;

export default function CourseCarousel({ courses }) {
  const carouselRef = useRef(null);
  const [isDragStart, setIsDragStart] = useState(false);
  const [arrowLeftVisible, setArrowLeftVisible] = useState(false);
  const [arrowRightVisible, setArrowRightVisible] = useState(true);

  function dragging(e) {
    if (!isDragStart) return;
    e.preventDefault();
    let div = carouselRef.current;

    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    div.scrollLeft = prevScrollLeft - positionDiff;
    handleArrows(prevScrollLeft - positionDiff);
  }

  function dragStart(e) {
    setIsDragStart(true);
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carouselRef?.current?.scrollLeft;
  }

  function autoSlide() {
    /*positionDiff = Math.abs(positionDiff);
    let valDiff = widthItem - positionDiff;

    let scrollLeft = carouselRef.current.scrollLeft;
    

    carouselRef.current.scrollLeft = newScrollLeft;
    handleArrows(newScrollLeft);*/
  }

  function dragStop() {
    setIsDragStart(false);
    autoSlide();
  }

  function handleArrows(newScrollLeft) {
    let maxScroll =
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    setArrowLeftVisible(newScrollLeft > 0);
    setArrowRightVisible(newScrollLeft < maxScroll);
  }

  useEffect(() => {
    window.addEventListener("mouseup", dragStop);
    window.addEventListener("touchend", dragStop);

    return () => {
      window.removeEventListener("mouseup", dragStop);
      window.removeEventListener("touchend", dragStop);
    };
  }, []);

  useEffect(() => {
    let itemCarousel = document.querySelector(".item-carousel-3");
    widthItem = itemCarousel?.clientWidth || 100;
    widthItem += 16;
  });

  function clickLeft() {
    let newScrollLeft = carouselRef.current.scrollLeft - widthItem;
    if (newScrollLeft < widthItem / 10) newScrollLeft = 0;
    newScrollLeft = Math.max(newScrollLeft, 0);
    carouselRef.current.scrollLeft = newScrollLeft;

    setTimeout(() => handleArrows(newScrollLeft), 300);
  }

  function clickRight() {
    let maxScroll =
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    let newScrollLeft = Math.min(
      (carouselRef.current.scrollLeft += widthItem),
      maxScroll
    );

    if (maxScroll - newScrollLeft < widthItem / 10) newScrollLeft = maxScroll;

    carouselRef.current.scrollLeft = newScrollLeft;
    setTimeout(() => handleArrows(newScrollLeft), 300);
  }

  useEffect(
    () => console.log({ arrowLeftVisible, arrowRightVisible }),
    [arrowLeftVisible, arrowRightVisible]
  );
  return (
    <section className="bg-gray-200">
      <div className="relative flex items-center w-full gap-x-4 justify-center">
        <ArrowCircleLeftIcon
          onClick={clickLeft}
          className={
            "w-10 h-10 rounded-full bg-white border-2 border-black cursor-pointer absolute z-10 duration-500 hover:scale-105 " +
            (arrowLeftVisible ? "block" : "hidden")
          }
          style={{
            right: "calc(100% - 1.25rem)",
            //background: colors.warning.main,
          }}
        />
        <div
          ref={carouselRef}
          onMouseDown={dragStart}
          onTouchStart={dragStart}
          onMouseMove={dragging}
          onTouchMove={dragging}
          onMouseLeave={dragStop}
          onTouchEnd={dragStop}
          className={
            (isDragStart ? "cursor-grab auto-scroll" : "") +
            " smooth-scroll whitespace-nowrap overflow-hidden w-full z-0 scroll-beha space-x-4"
          }
        >
          {courses.map((c, index) => (
            <>
              <StarCard
                img={c.img}
                text={c.text}
                stars={c.stars}
                url={c.url}
                className={`${isDragStart ? "pointer-events-none" : ""}`}
              />
            </>
          ))}
        </div>
        <ArrowCircleRightIcon
          className={
            "w-10 h-10 rounded-full bg-white border-2 border-black cursor-pointer absolute z-10 duration-500 hover:scale-105 " +
            (arrowRightVisible ? "block" : "hidden")
          }
          style={{ left: "calc(100% - 1.75rem" }}
          onClick={clickRight}
        />
      </div>
    </section>
  );
}
