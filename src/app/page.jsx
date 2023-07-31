"use client";

import CoursesCards from "@/app/page-components/home/courses-cards";
import HomeMain from "@/app/page-components/home/home-main";

export default function Home() {
  return (
    <>
      <HomeMain
        slides={[
          {
            text1: "Grupo Visual",
            text2: "Conhecimento vai mais la de nossas mentes",
            buttonText: "Saiba mais",
            url: "/",
          },
          {
            text1: "Canal de youtube",
            text2: "Conhecimento vai mais la de nossas mentes",
            buttonText: "Saiba mais",
            url: "/",
          },
          {
            text1: "Siga a gente no insta",
            text2: "Conhecimento vai mais la de nossas mentes",
            buttonText: "Saiba mais",
            url: "/",
          },
          {
            text1: "Siga a gente no insta2",
            text2: "Conhecimento vai mais la de nossas mentes",
            buttonText: "Saiba mais",
            url: "/",
          },
        ]}
      />
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
