import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { useState } from "react";

export default function TextLink({ url, text, className, extern }) {
  const [hover, setHover] = useState(false);
  return (
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
  );
}
