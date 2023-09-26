"use client";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import HeaderText from "../texts/header-text";

export default function TextLink({
  url,
  text,
  className,
  extern,
  animation = false,
}) {
  const [hover, setHover] = useState(false);
  return (
    <div my-data-aos={animation ? "zoom-in" : undefined}>
      <Button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={"text-lg font-semibold uppercase " + className}
        variant="light"
        target={extern ? "_blank" : undefined}
        as={Link}
        href={url}
      >
        <span>{text}</span>

        <ArrowForwardIcon
          className={`transition-all duration-100 ${hover ? "ml-1" : "ml-0"}`}
        />
      </Button>
    </div>
  );
}
