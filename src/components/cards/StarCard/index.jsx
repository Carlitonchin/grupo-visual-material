"use client";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useState, useEffect } from "react";
import EmptyStar from "@/components/icons/emptystar";
import HalfStar from "@/components/icons/halfstar";
import FillStar from "@/components/icons/fillstar";
import HeaderText from "@/components/texts/header-text";
import { brlCurrencyFormatter } from "@/components/utils/conversion";

function component(
  img,
  text,
  stars,
  url,
  className,
  hover,
  setHover,
  category,
  price
) {
  return (
    <div
      title={text}
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
          <HeaderText
            variant="span"
            className="w-full font-bold text-white z-20 -mt-2 text-center whitespace-normal"
          >
            {category.text}
          </HeaderText>
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
            className="w-full font-bold -mt-2 text-center text-sm line-clamp-2 whitespace-normal uppercase"
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
                  <FillStar key={index} fill="#ffcf40" width="15" height="15" />
                ) : (
                  <></>
                )
              )}
            {Math.ceil(stars) > stars && (
              <HalfStar fill="#ffcf40" width="15" height="15" />
            )}
            {new Array(5 - Math.ceil(stars)).fill(0).map((index) => (
              <EmptyStar
                key={5 + index}
                stroke="#ffcf40"
                width="16"
                height="16"
              />
            ))}
          </div>
        </div>
        <span className="font-bold text-blue-950">
          {brlCurrencyFormatter.format(price)}
        </span>
        <Button
          color="back"
          as={Link}
          className={`w-full bg-back font-bold uppercase ${
            hover ? "text-main" : "text-white"
          }`}
          href={"/cursos" + url}
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
  price,
  index = 1,
  animation = false,
}) {
  const [hover, setHover] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);
  return (
    <div
      key={index}
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
            category,
            price
          )}
        </a>
      ) : (
        component(
          img,
          text,
          stars,
          url,
          className,
          hover,
          setHover,
          category,
          price
        )
      )}
    </div>
  );
}
