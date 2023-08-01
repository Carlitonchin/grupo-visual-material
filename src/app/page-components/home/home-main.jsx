"use client";
import MKBox from "@/components/MKBox";
import MKButton from "@/components/MKButton";
import MKTypography from "@/components/MKTypography";
import { Container, Grid } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";

export default function HomeMain({ slides }) {
  function animateSliders() {
    let container = document.getElementById("slider-container-home-main");
    if (!container) return;

    let max = (slides.length - 1) * 100;
    container.childNodes.forEach((child) => {
      let left = Number(child.style.left.split("%")[0]);

      if (left == -100) {
        child.style.zIndex = 0;
        child.style.transition = "left 0.8s ease-in-out";
      } else {
        child.style.zIndex = "-1";

        child.style.transition = left != 0 ? "none" : "left 0.8s ease-in-out";
      }

      left += 100;
      if (left >= max) left = "-100";

      child.style.left = `${left}%`;
    });
  }

  useEffect(() => {
    let timeOutHandler = setInterval(() => {
      animateSliders();
    }, 5000);

    return () => clearInterval(timeOutHandler);
  }, []);

  return (
    <main className="flex h-fit flex-col items-center justify-between  color-white">
      <div
        id="slider-container-home-main"
        className="w-screen min-h-screen flex overflow-hidden relative"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-screen min-h-screen absolute top-0`}
            style={{
              left: index < slides.length - 1 ? `${index * 100}%` : "-100%",
            }}
          >
            <div
              style={{
                width: "100%",
                minHeight: "100vh",
                backgroundImage: `url("/bg-back.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
              className="relative"
            >
              <div
                style={{
                  backdropFilter: "blur(3px)",
                }}
                className="absolute w-full h-full bg-gray-800 bg-opacity-75 bg-blur flex items-center justify-center lg:justify-start"
              >
                <div className=" w-full max-w-4xl px-4 sm:px-10 text-center lg:text-left lg:px-40">
                  <MKTypography
                    variant="h1"
                    color="white"
                    mt={-6}
                    mb={1}
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
