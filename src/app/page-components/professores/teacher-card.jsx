"use client";
import { useState } from "react";
import MKTypography from "@/components/MKTypography";
import MKButton from "@/components/MKButton";
import Link from "next/link";

export default function TeacherCard({ url, text, title, className }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={(className || "item-4 item-43 relative") + " z-20"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="absolute h-full rounded-sm shadow-sm z-20"
        style={{
          width: "calc(100% - 1rem)",
          left: "0.5rem",
          backgroundImage: `url('${url}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className={`z-20 w-full h-full ${
            hover ? "bg-black bg-opacity-70 bg-blur" : "gradient-card"
          } flex flex-col justify-end items-center p-4 " +
            `}
        >
          <MKTypography
            className={"z-20 text-center w-full  overflow-hidden"}
            variant="h4"
            color={"white"}
          >
            {title}
          </MKTypography>
          <MKTypography
            variant="body2"
            color="white"
            className={"text-center w-full  overflow-hidden"}
          >
            {text}
          </MKTypography>

          <MKButton
            className={hover ? "mt-4 scale-100" : "-mt-8 scale-0"}
            color="light"
            variant="gradient"
            component={Link}
            href={"#"}
          >
            Conheça o professor
          </MKButton>
        </div>
      </div>
    </div>
  );
}
