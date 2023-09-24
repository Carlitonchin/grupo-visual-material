"use client";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useState, useEffect } from "react";

function component(
  img,
  text,
  stars,
  url,
  className,
  hover,
  setHover,
  category
) {
  return (
    <div
      className={
        className +
        " inline-block absolute cursor-pointer overflow-hidden  shadow-md hover:shadow-lg duration-300 rounded-md"
      }
      style={{
        outline: "1px solid rgb(192, 185, 185)",
        width: "calc(100% - 1rem)",
        left: "0.5rem",
        height: "100%",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="w-full h-[60%] xl:h-[55%] overflow-hidden relative">
        <div
          className={
            "absolute top-0 left-0 w-full h-full transition-all duration-500 " +
            (hover ? "scale-110" : "")
          }
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <span
          className="absolute z-20 top-0 left-0 rounded-br-md px-4"
          style={{ backgroundColor: category.color }}
        >
          <span className="w-full font-semibold text-white z-20 -mt-2 text-center whitespace-normal">
            {category.text}
          </span>
        </span>
        <div
          className={
            "absolute top-0 left-0 h-full w-full transition-all duration-500 bg-black " +
            (hover ? "opacity-30" : "opacity-0")
          }
        />
      </div>
      <div className="w-full h-[40%] xl:h-[45%] p-4 pt-4 py-2 flex flex-col items-center justify-between gap-y-4">
        <div className="flex flex-col gap-y-4 w-full">
          <span
            className="w-full font-bold -mt-2 text-center whitespace-normal"
            sx={{
              fontSize: "1.1rem",
            }}
          >
            {text}
          </span>
          <div className="w-full -mt-3 flex items-center justify-center gap-x-1">
            {new Array(Math.ceil(stars))
              .fill(0)
              .map((_, index) =>
                index + 1 <= stars ? (
                  <StarIcon
                    fill="#f97316"
                    key={index}
                    className="w-6 h-6 fill-orange-500"
                  />
                ) : (
                  <></>
                )
              )}
            {Math.ceil(stars) > stars && (
              <StarHalfIcon
                fill="#f97316"
                className="w-6 h-6 fill-orange-500"
              />
            )}
            {new Array(5 - Math.ceil(stars)).fill(0).map((index) => (
              <StarBorderIcon
                fill="#f97316"
                key={"--" + index}
                className="w-6 h-6 fill-orange-500"
              />
            ))}
          </div>
        </div>
        <Button
          as={Link}
          className={`w-full bg-black font-bold uppercase ${
            hover ? "text-orange-500" : "text-white"
          }`}
          href={"/cursos" + url}
          variant="shadow"
        >
          Saiba mais
        </Button>
      </div>
    </div>
  );
}

export default function StarCard({
  img,
  text,
  stars,
  url,
  className,
  category,
  index = 1,
  animation = false,
}) {
  const [hover, setHover] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);
  return (
    <div
      data-aos-delay={`${index * 100 + 200}`}
      my-data-aos={animation && index <= 3 ? "flip-left" : undefined}
      data-aos-duration="800"
      className="item-carousel-3 inline-block relative w-full"
    >
      {isClient ? (
        <a href={"/cursos" + url} draggable={false} className="w-fit h-fit">
          {component(
            img,
            text,
            stars,
            url,
            className,
            hover,
            setHover,
            category
          )}
        </a>
      ) : (
        component(img, text, stars, url, className, hover, setHover, category)
      )}
    </div>
  );
}
