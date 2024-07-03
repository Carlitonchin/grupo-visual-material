//"use client";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function TeacherCard({ url, text, title, slug, className }) {
  //const [hover, setHover] = useState(false);
  return (
<div
      className={(className || "item-4 item-43 relative") + " z-20"}
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
          className={`z-20 w-full h-full gradient-card"
          flex flex-col justify-end items-center p-4 " +
            `}
        >
          {/*<h4
            className={
              "z-20 text-center w-full text-white font-bold overflow-hidden"
            }
          >
            {title}
          </h4>
          <span
            className={
              "text-center w-full text-white text-base overflow-hidden"
            }
          >
            {text}
          </span>*/}

          {/*<Button
            className={"text-black bg-white font-bold uppercase -mt-8 scale-0"
            }
            variant="shadow"
            as={Link}
            href={"/professores" + slug}
          >
            Conheça o professor
          </Button>*/}
        </div>
      </div>
</div>
  );
}
