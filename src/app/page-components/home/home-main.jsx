"use client";
import MKButton from "@/components/MKButton";
import MKTypography from "@/components/MKTypography";
import Link from "next/link";
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
                  <MKTypography
                    variant="h1"
                    color="white"
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["4xl"],
                      },
                    })}
                  >
                    {slide.text1}
                  </MKTypography>
                  <MKTypography variant="body1" color="white" mt={1}>
                    {slide.text2}
                  </MKTypography>

                  <MKButton
                    className="mt-4"
                    color="light"
                    variant="gradient"
                    component={Link}
                    href={slide.url}
                    target={slide?.extern_link ? "_blank" : undefined}
                  >
                    {slide.buttonText}
                  </MKButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
