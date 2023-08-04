"use client";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";
import MKButton from "@/components/MKButton";
import Link from "next/link";
import { useState } from "react";

export default function StarCard({ img, text, stars, url, className }) {
  const [hover, setHover] = useState(false);
  return (
    <a href={url} draggable={false}>
      <div
        className={
          className +
          " item-carousel-3 inline-block cursor-pointer overflow-hidden shadow-md hover:shadow-xl duration-300 rounded-md"
        }
        style={{ border: "0.2px solid rgba(242, 237, 237, 0.071);" }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="w-full h-[60%] xl:h-[65%] overflow-hidden relative">
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
          <div
            className={
              "absolute top-0 left-0 h-full w-full transition-all duration-500 bg-black " +
              (hover ? "opacity-30" : "opacity-0")
            }
          />
        </div>
        <div className="w-full h-[40%] xl:h-[35%] p-4 pt-4 py-2 flex flex-col items-center justify-between gap-y-4">
          <div className="flex flex-col gap-y-4 w-full">
            <MKTypography
              className="w-full -mt-2 text-center whitespace-normal"
              variant="text"
              color="black"
              fontWeight="bold"
            >
              {text}
            </MKTypography>
            <div className="w-full -mt-3 flex items-center justify-center gap-x-1">
              {new Array(Math.ceil(stars))
                .fill(0)
                .map((_, index) =>
                  index + 1 <= stars ? (
                    <StarIcon
                      key={index}
                      className="w-6 h-6"
                      style={{ color: colors.warning.main }}
                    />
                  ) : (
                    <></>
                  )
                )}
              {Math.ceil(stars) > stars && (
                <StarHalfIcon
                  className="w-6 h-6"
                  style={{ color: colors.warning.main }}
                />
              )}
              {new Array(5 - Math.ceil(stars)).fill(0).map((index) => (
                <StarBorderIcon
                  key={"--" + index}
                  className="w-6 h-6"
                  style={{ color: colors.warning.main }}
                />
              ))}
            </div>
          </div>
          <MKButton
            variant="gradient"
            color="dark"
            className={"w-full "}
            component={Link}
            style={{
              color: hover ? colors.warning.main : "white",
            }}
            href={url}
          >
            Saiba mais
          </MKButton>
        </div>
      </div>
    </a>
  );
}
