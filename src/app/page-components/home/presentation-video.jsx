"use client";
import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";
import { useEffect, useState } from "react";

export default function PresentationVideo({
  videoUrl,
  title,
  options,
  buttonText,
  buttonUrl,
}) {
  const [selectedOption, setSelectedOption] = useState(0);
  function handleChangeOptions(index) {
    let currentOption = document.getElementById(
      "text-option-presentation-" + selectedOption
    );

    let nextOption = document.getElementById(
      "text-option-presentation-" + index
    );

    if (!currentOption || !nextOption) return;

    currentOption.style.display = "none";
    nextOption.style.display = "block";

    setTimeout(() => {
      currentOption.style.opacity = "0";
      nextOption.style.opacity = "1";
    }, 50);

    setSelectedOption(index);
  }

  useEffect(() => {
    let currentOption = document.getElementById("text-option-presentation-0");
    if (!currentOption) return;

    currentOption.style.opacity = "1";
  }, []);
  return (
    <section className="p-4 py-8 w-full h-fit bg-gray-900">
      <div className="flex flex-col items-center justify-center xl:flex-row xl:items-start w-full gap-y-4 gap-x-8">
        <video
          id="presentation-video"
          controls
          width="600"
          height="600"
          autoPlay
          muted
        >
          <source src={videoUrl}></source>
        </video>
        <div className="w-full flex flex-col justify-center items-center gap-y-4 h-fit xl:pt-9 xl:items-start">
          <MKTypography
            variant="h2"
            color="white"
            className="text-center w-full"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["4xl"],
              },
            })}
          >
            {title}
          </MKTypography>

          <div className="w-full sm:w-3/4 md:w-2/3 xl:w-full ">
            <div className="w-full flex flex-col  md:flex-row justify-center gap-y-2 ">
              {Object.keys(options).map((key, index) => (
                <div className="w-full h-10 flex flex-col  relative ">
                  <MKTypography
                    key={index}
                    variant="button"
                    color="text"
                    fontWeight="bold"
                    className={`px-4 lg:px-8  cursor-pointer text-center min-w-min hover:text-white transition-all duration-300 ${
                      index == selectedOption ? "text-white" : ""
                    }`}
                    onClick={() => handleChangeOptions(index)}
                    textTransform="uppercase"
                    mt={1}
                  >
                    {key}
                  </MKTypography>
                  <span
                    className="absolute bottom-0 left-0 h-1 w-full"
                    style={{ backgroundColor: colors.text.main }}
                  />
                  <span
                    className={
                      "absolute bottom-0 left-0 transition-all h-1 bg-white duration-300 " +
                      (index == selectedOption ? "w-full" : "w-0")
                    }
                  />
                </div>
              ))}
            </div>
            {Object.keys(options).map((key, index) => (
              <MKTypography
                mt={1.5}
                variant="body2"
                id={"text-option-presentation-" + index}
                color="text"
                className={
                  "transition-opacity  text-center duration-700 w-full  " +
                  (index == selectedOption ? "block" : "hidden")
                }
                style={{
                  opacity: "0",
                }}
              >
                {options[key]}
              </MKTypography>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
