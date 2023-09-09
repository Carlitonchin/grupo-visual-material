import MKTypography from "@/components/MKTypography";
import MKButton from "@/components/MKButton";
import Link from "next/link";
import { useState, useEffect } from "react";
import colors from "@/theme/base/colors";

function component(hover, setHover, blog) {
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="absolute w-full h-full cursor-pointer overflow-hidden  shadow-md hover:shadow-lg duration-300 rounded-md"
      style={{ width: "calc(100% - 1rem)", left: "0.5rem" }}
    >
      <div className="w-full h-2/5 overflow-hidden relative">
        <div
          className="w-full h-full duration-300 absolute"
          style={{
            backgroundImage: `url('${blog.img}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            scale: hover ? "1.05" : "1",
          }}
        />
        <div
          className={`w-full h-full bg-black absolute duration-300 ${
            hover ? "opacity-30" : "opacity-0"
          }`}
        />
      </div>
      <div className="w-full h-3/5 p-2 text-center">
        <MKTypography
          className="w-full text-center whitespace-normal line-clamp-2"
          variant="text"
          color="black"
          fontWeight="bold"
          sx={{ fontSize: "1.1rem" }}
        >
          {blog.titulo}
        </MKTypography>

        <MKTypography
          mt={1.5}
          variant="body2"
          color="text"
          className={"w-full mt-2 line-clamp-3 lg:line-clamp-4"}
        >
          {blog.texto}
        </MKTypography>

        <MKButton
          variant="gradient"
          color="dark"
          className={"absolute bottom-0 left-0 m-4 mb-2"}
          component={Link}
          target={blog.link_externo ? "_blank" : undefined}
          style={{
            color: hover ? colors.warning.main : "white",
            width: "calc(100% - 2rem)",
          }}
          href={blog.url}
        >
          {blog.texto_botao}
        </MKButton>
      </div>
    </div>
  );
}

export default function BlogCard({ blog }) {
  const [hover, setHover] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);
  return (
    <div className="item-carousel-3 inline-block relative ">
      {isClient ? (
        <a href={blog.url} target={blog?.link_externo ? "_blank" : undefined}>
          {component(hover, setHover, blog)}
        </a>
      ) : (
        component(hover, setHover, blog)
      )}
    </div>
  );
}
