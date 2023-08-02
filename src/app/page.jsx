import CoursesCards from "@/app/page-components/home/courses-cards";
import HomeMain from "@/app/page-components/home/home-main";
import PresentationVideo from "@/app/page-components/home/presentation-video";
import StarCard from "@/components/cards/StarCard";

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
        buttonText={"Saiba mais"}
        buttonUrl={"/"}
      />
      <PresentationVideo
        buttonText={"Saiba mais"}
        buttonUrl={"/"}
        options={{
          "Sobre nos":
            "Sobre nos | Somos uma empresa de educacao com mais de 20 anos de experiencia, formamos estudantes para eles crescerem no mercado laboral, temos um grupo de profesores experientes en varias areas de interesse como tecnologia, criminalistica, etc. Sobre nos | Somos uma empresa de educacao com mais de 20 anos de experiencia, formamos estudantes para eles crescerem no mercado laboral, temos um grupo de profesores experientes en varias areas de interesse como tecnologia, criminalistica, etc.",
          "Nosso metodo":
            "Nosso metodo | Somos uma empresa de educacao com mais de 20 anos de experiencia, formamos estudantes para eles crescerem no mercado laboral, temos um grupo de profesores experientes en varias areas de interesse como tecnologia, criminalistica, etc. Nosso metodo | Somos uma empresa de educacao com mais de 20 anos de experiencia, formamos estudantes para eles crescerem no mercado laboral, temos um grupo de profesores experientes en varias areas de interesse como tecnologia, criminalistica, etc.",
          "Nossa missao":
            "Nossa missao | Somos uma empresa de educacao com mais de 20 anos de experiencia, formamos estudantes para eles crescerem no mercado laboral, temos um grupo de profesores experientes en varias areas de interesse como tecnologia, criminalistica, etc. Nossa missao | Somos uma empresa de educacao com mais de 20 anos de experiencia, formamos estudantes para eles crescerem no mercado laboral, temos um grupo de profesores experientes en varias areas de interesse como tecnologia, criminalistica, etc.",
        }}
        videoUrl={"/video.mp4"}
        title={"Grupo Visual"}
      />
      <StarCard
        img={"/course1.webp"}
        stars={3.4}
        text={"Alimentacao"}
        url={"/"}
      />
    </>
  );
}
