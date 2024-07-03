"use client";
import StarCard from "@/components/cards/StarCard";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRef, useEffect, useState } from "react";
import TextLink from "@/components/TextLink";
import HeaderText from "@/components/texts/header-text";

var prevPageX = 0;
var prevScrollLeft = 0;
var widthItem = 0;
var positionDiff = 0;

export default function CourseCarousel({
  courses,
  title,
  buttonUrl,
  buttonText,
  buttonExtern,
}) {
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

  return (
    <section className="flex flex-col justify-center items-center">
      <div data-aos-delay="200" my-data-aos="fade-down">
        <HeaderText className="text-center w-full" variant="h2">
          {title}
        </HeaderText>
      </div>
      <div className="relative flex items-center w-full justify-center mt-8">
        <NavigateBeforeIcon
          sx={{
            width: "2.5rem",
            height: "2.5rem",
            display: arrowLeftVisible ? "block" : "none",
            left: "-0.45rem",
          }}
          onClick={clickLeft}
          className={
            "rounded-full bg-gray-300 bg-opacity-90 cursor-pointer absolute z-10 duration-500 hover:scale-105 "
          }
        />
        <div
          ref={carouselRef}
          className={
            (isDragStart ? "cursor-grab auto-scroll" : "") +
            " smooth-scroll whitespace-nowrap overflow-hidden w-full z-0  "
          }
        >
          {courses.map((c, index) => (
            <>
              <StarCard
                my-data-aos="flip-left"
                img={c.img}
                text={c.text}
                stars={c.stars}
                url={c.url}
                category={c.category}
                price={c.price}
                index={index + 1}
                animation
              />
            </>
          ))}
        </div>
        <div my-data-aos="fade-left">
          <NavigateNextIcon
            sx={{
              width: "2.5rem",
              height: "2.5rem",
              display: arrowRightVisible ? "block" : "none",
              right: "-0.45rem",
            }}
            className={
              "rounded-full  bg-gray-300 bg-opacity-90 cursor-pointer absolute z-10 duration-500 hover:scale-105 "
            }
            onClick={clickRight}
          />
        </div>
      </div>
      <TextLink
        animation
        className={"mt-4"}
        url={buttonUrl}
        text={buttonText}
        extern={buttonExtern ? true : false}
      />
    </section>
  );
}
