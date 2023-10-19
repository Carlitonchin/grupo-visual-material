"use client";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { useEffect } from "react";
import HeaderText from "@/components/texts/header-text";

export default function HomeMain({ slides }) {
  function animateSliders() {
    if (!slides?.length) return;

    let container = document.getElementById("slider-container-home-main");
    if (!container) return;

    const width = window.innerWidth;

    let max = (slides.length - 1) * 100;
    container.childNodes.forEach((child) => {
      let left = Number(child.style.left.split("%")[0]);
      let content = child.getElementsByClassName("home-container-text");

      if (left == 100) {
        child.style.zIndex = 1;
        child.style.transition = `left ${
          width >= 1000 ? "1s" : "0.8s"
        } ease-in-out`;
        if (content?.length && content[0]?.style) {
          let h1 = content[0].getElementsByTagName("h1")[0];
          let h12 = content[0].getElementsByTagName("h1")[1];
          let p = content[0].getElementsByTagName("p")[0];
          let a = content[0].getElementsByTagName("a")[0];

          setTimeout(
            () => {
              content[0].style.opacity = "1";
              h1.classList.add("animate-fade-down");
              h12.classList.add("animate-fade-right");
              p.classList.add("animate-fade-right");
              a.classList.add("animate-fade-up");
            },
            width >= 1000 ? 800 : 700
          );

          setTimeout(() => {
            h1.classList.remove("animate-fade-down");
            h12.classList.remove("animate-fade-right");
            p.classList.remove("animate-fade-right");
            a.classList.remove("animate-fade-up");
          }, 2000);
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
    <main className="flex h-screen md:h-[75vh] flex-col items-center justify-between  color-white">
      <div
        id="slider-container-home-main"
        className="w-screen h-full flex overflow-hidden relative z-10"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-screen h-full absolute top-0`}
            style={{
              left: `${index * 100}%`,
            }}
          >
            <div
              style={{
                width: "100%",
                minHeight: "100%",
                backgroundImage: `url("${slide.img}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="relative"
            >
              <div className="absolute w-full h-full bg-gray-800 bg-opacity-0 bg-blur flex items-center justify-center lg:justify-start">
                <div
                  style={{ opacity: index == 0 ? "1" : "0" }}
                  className={`home-container-text flex flex-col items-center md:items-start transition-opacity duration-1000 w-full sm:max-w-4xl 3xl:max-w-6xl px-4 sm:px-10 text-center sm:text-left lg:px-40`}
                >
                  <HeaderText
                    font="Custom"
                    variant="h1"
                    className="text-white text-2xl sm:text-4xl 3xl:text-6xl"
                  >
                    {slide.text1}
                  </HeaderText>
                  <HeaderText
                    font="Custom"
                    variant="h1"
                    className="text-main text-3xl sm:text-5xl 3xl:text-7xl"
                  >
                    {slide.red_text}
                  </HeaderText>
                  <p className="text-white mt-2 text-large sm:text-2xl 3xl:text-4xl sm:mt-4 3xl:mt-8">
                    {slide.text2}
                  </p>

                  <Button
                    as={Link}
                    href={slide.url}
                    target={slide?.extern_link ? "_blank" : undefined}
                    className="bg-white font-bold uppercase mt-4 3xl:mt-8"
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
