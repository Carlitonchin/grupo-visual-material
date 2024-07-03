"use client";
import { useReactPixel } from "@/app/hooks/reactPixel";
import HeaderText from "@/components/texts/header-text";
import { activateSoundTrack, viewVideoTrack } from "@/facebook-pixel/utils";
import { useEffect, useState } from "react";

const videoName = "home";
export default function PresentationVideo({ videoUrl, title, options }) {
  const [selectedOption, setSelectedOption] = useState(0);
  const [firstSound, setFirstSound] = useState(false);
  const [durationCaptured, setDurationCaptured] = useState(false);
  const { reactPixel } = useReactPixel();

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

  function handleVolume() {
    let video = document.getElementById("presentation-video");
    if (video && !video.muted && !firstSound) {
      setFirstSound(true);
      activateSoundTrack(reactPixel, videoName);
    }
  }

  function handleTime() {
    let video = document.getElementById("presentation-video");
    if (
      video?.duration &&
      video.currentTime / video.duration > 0.9 &&
      !durationCaptured
    ) {
      setDurationCaptured(true);
      viewVideoTrack(reactPixel, videoName);
    }
  }
  return (
    <section className=" w-full py-20 flex justify-center items-center h-fit ">
      <div className="flex flex-col items-center justify-between xl:flex-row xl:items-start w-full xl:max-w-[1500px] gap-y-4 gap-x-8">
        <video
          className="rounded-md"
          my-data-aos="fade-right"
          id="presentation-video"
          controls
          width="600"
          height="600"
          autoPlay
          muted
          onVolumeChange={handleVolume}
          onTimeUpdate={handleTime}
        >
          <source src={videoUrl}></source>
        </video>
        <div
          my-data-aos="fade-left"
          className="w-full max-w-2xl flex flex-col justify-center items-center gap-y-4 h-fit xl:pt-9 xl:items-start"
        >
          <HeaderText className="text-center w-full mb-4" variant="h2">
            {title}
          </HeaderText>

          <div className="w-full sm:w-3/4 md:w-full ">
            <div className="w-full flex flex-col  md:flex-row justify-center gap-y-2 ">
              {Object.keys(options).map((key, index) => (
                <div
                  className="w-full h-16 flex flex-col  relative "
                  key={index}
                >
                  <HeaderText
                    variant="span"
                    key={index}
                    className={`px-4 lg:px-8 h-16 font-bold flex items-center justify-center uppercase text-medium cursor-pointer text-center min-w-min hover:text-black transition-all duration-300 ${
                      index == selectedOption ? "text-black" : "text-slate-800"
                    }`}
                    onClick={(e) => handleChangeOptions(index)}
                  >
                    {key}
                  </HeaderText>

                  <span className="absolute bottom-0 left-0 h-1 w-full bg-gray-500" />
                  <span
                    className={
                      "absolute bottom-0 left-0 transition-all h-1 bg-black duration-300 " +
                      (index == selectedOption ? "w-full" : "w-0")
                    }
                  />
                </div>
              ))}
            </div>
            {Object.keys(options).map((key, index) => (
              <span
                key={index}
                id={"text-option-presentation-" + index}
                className={
                  "transition-opacity mt-2 text-base text-slate-800  text-center duration-700 w-full  " +
                  (index == selectedOption ? "block" : "hidden")
                }
                style={{
                  opacity: "0",
                }}
              >
                {options[key]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
