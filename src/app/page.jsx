import CoursesCards from "@/app/page-components/home/courses-cards";
import HomeMain from "@/app/page-components/home/home-main";

export default function Home() {
  return (
    <>
      <HomeMain
        slides={[
          {
            text1: "Cursos Onlines",
            text2: "Cursos profesionais, certificados, soporte 24h e mais.",
            buttonText: "Saiba mais",
            url: "/",
            img: "/bg1.jpg",
          },
          {
            text1: "Canal de youtube",
            text2: "Podcast todas as semanas, conteudo de qualidade para você",
            buttonText: "Saiba mais",
            url: "/",
            img: "/bg2.jpg",
          },
          {
            text1: "Praticas profesionais",
            text2: "Contato com empresas para praticar todo o aprendido",
            buttonText: "Saiba mais",
            url: "/",
            img: "/bg3.jpg",
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
