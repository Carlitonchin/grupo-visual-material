"use client";

import CoursesCards from "@/app/page-components/home/courses-cards";
import HomeMain from "@/app/page-components/home/home-main";

export default function Home() {
  return (
    <>
      <HomeMain />
      <CoursesCards
        cards={[
          {
            text: "Programacao",
            href: "/cursos/programacao",
            img: "/course1.webp",
          },
          {
            text: "Mecanica",
            href: "/cursos/mecanica",
            img: "/course2.webp",
          },
          {
            text: "Social Media",
            href: "/cursos/social-media",
            img: "/course3.webp",
          },
        ]}
      />
    </>
  );
}
