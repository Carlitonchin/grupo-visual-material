"use client";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { useEffect } from "react";

export default function HomeMain({ slides }) {
  function animateSliders() {
    if (!slides?.length) return;

    let container = document.getElementById("slider-container-home-main");
    if (!container) return;

    let max = (slides.length - 1) * 100;
    container.childNodes.forEach((child) => {
      let left = Number(child.style.left.split("%")[0]);
      let content = child.getElementsByClassName("home-container-text");

      if (left == 100) {
        child.style.zIndex = 1;
        child.style.transition = "left 0.8s ease-in-out";
        if (content?.length && content[0]?.style) {
          setTimeout(() => {
            content[0].style.opacity = "1";
          }, 300);
        }
      } else {
        child.style.zIndex = 0;
        child.style.transition = "none";
        if (content?.length && content[0]?.style) {
          setTimeout(() => {
            content[0].style.opacity = "0";
          }, 2000);
        }
      }

      left -= 100;
      if (left < 0) left = max;

      if (left < max) {
        child.style.left = `${left}%`;
      } else {
        setTimeout(() => {
          child.style.left = `${left}%`;
        }, 2000);
      }
    });
  }

  useEffect(() => {
    const timeout = setInterval(() => {
      animateSliders();
    }, 5000);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <main className="flex h-[75vh] flex-col items-center justify-between  color-white">
      <div
        id="slider-container-home-main"
        className="w-screen h-[75vh] flex overflow-hidden relative z-10"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-screen h-[75vh] absolute top-0`}
            style={{
              left: `${index * 100}%`,
            }}
          >
            <div
              style={{
                width: "100%",
                minHeight: "75vh",
                backgroundImage: `url("${slide.img}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="relative"
            >
              <div className="absolute w-full h-full bg-gray-800 bg-opacity-75 bg-blur flex items-center justify-center lg:justify-start">
                <div
                  style={{ opacity: index == 0 ? "1" : "0" }}
                  className={`home-container-text transition-opacity duration-1000 w-full max-w-4xl px-4 sm:px-10 text-center lg:text-left lg:px-40`}
                >
                  <h1 className="text-white">{slide.text1}</h1>
                  <p className="text-white">{slide.text2}</p>

                  <Button
                    as={Link}
                    href={slide.url}
                    target={slide?.extern_link ? "_blank" : undefined}
                    className="bg-white font-bold uppercase mt-4"
                    variant="shadow"
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
