"use client";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";
import MKButton from "@/components/MKButton";
import Link from "next/link";
import { useState } from "react";

export default function StarCard({ img, text, stars, url }) {
  const [hover, setHover] = useState(false);
  return (
    <a href={url}>
      <div
        className={
          "ml-4 mb-4 cursor-pointer overflow-hidden w-[28vw] h-[29vw] min-w-[300px] min-h-[311px] max-w-[30rem] max-h-[31rem] shadow-md hover:shadow-xl duration-300 rounded-md"
        }
        style={{ border: "0.2px solid rgba(242, 237, 237, 0.071);" }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="w-full h-[65%] overflow-hidden relative">
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
        <div className="w-full h-[35%] p-4 py-1 flex flex-col items-center justify-center gap-y-4">
          <MKTypography variant="h4" color="black" fontWeight="bold">
            {text}
          </MKTypography>
          <div className="w-full -mt-3 flex items-center justify-center gap-x-1">
            {new Array(Math.ceil(stars))
              .fill(0)
              .map((_, index) =>
                index + 1 <= stars ? (
                  <StarIcon
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
            {new Array(5 - Math.ceil(stars)).fill(0).map(() => (
              <StarBorderIcon
                className="w-6 h-6"
                style={{ color: colors.warning.main }}
              />
            ))}
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
