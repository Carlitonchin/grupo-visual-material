import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MKButton from "@/components/MKButton";
import Link from "next/link";
import { useState } from "react";

export default function TextLink({ url, text, className, extern }) {
  const [hover, setHover] = useState(false);
  return (
    <MKButton
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={"text-lg " + className}
      color="dark"
      variant="text"
      target={extern ? "_blank" : undefined}
      component={Link}
      href={url}
    >
      <span>{text}</span>
      <ArrowForwardIcon
        className={`transition-all duration-100 ${hover ? "ml-1" : "ml-0"}`}
      />
    </MKButton>
  );
}
