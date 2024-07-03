"use client";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useState, useEffect } from "react";

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
        <span
          className="w-full text-center whitespace-normal line-clamp-2 font-bold "
          style={{ fontSize: "1.1rem" }}
        >
          {blog.titulo}
        </span>

        <span
          className={
            "w-full mt-2 line-clamp-3 lg:line-clamp-4 text-base text-slate-800"
          }
        >
          {blog.texto}
        </span>

        <Button
          variant="shadow"
          className={
            "absolute bottom-0 left-0 m-4 mb-2 bg-black uppercase font-bold " +
            (hover ? "text-orange-500" : "text-white")
          }
          as={Link}
          target={blog.link_externo ? "_blank" : undefined}
          style={{
            width: "calc(100% - 2rem)",
          }}
          href={blog.url}
        >
          {blog.texto_botao}
        </Button>
      </div>
    </div>
  );
}

export default function BlogCard({ blog, animation = false, index = 1 }) {
  const [hover, setHover] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);
  return (
    <div
      data-aos-delay={`${index * 100 + 200}`}
      my-data-aos={animation ? "flip-left" : undefined}
      data-aos-duration="800"
      className="item-carousel-3 inline-block relative "
    >
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
