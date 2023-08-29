import CoursesCards from "@/app/page-components/home/courses-cards";
import HomeMain from "@/app/page-components/home/home-main";
import PresentationVideo from "@/app/page-components/home/presentation-video";
import Stats from "@/app/page-components/home/stats";
import CourseCarousel from "@/app/page-components/home/course-carousel";
import Teachers from "@/app/page-components/home/teachers";
import BlogHome from "@/app/page-components/home/blog";
import Whatsapp from "@/components/smartarget/whatsapp";
import Students from "@/app/page-components/home/students";
import Brand from "@/app/page-components/home/brand";
import { courses } from "@/api/routes";

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
      <Stats
        stats={[
          {
            count: "4.000",
            title: "Alunos",
            description: "formados em todo Brasil",
          },
          {
            count: "30",
            title: "Cursos",
            description: "profissionalizantes",
          },
          {
            count: "20",
            title: "Professores",
            description: "atuantes na sua área",
          },
        ]}
      />

      <CourseCarousel
        title="Nossos Cursos"
        buttonText={"Todos os cursos"}
        buttonUrl={"/"}
        courses={courses}
      />

      <Teachers />
      <BlogHome />
      <Students
        students={[
          {
            url: "student1.webp",
            text: "Em Grupo Visual me formei como adbogada e gracas a eles hoje trabalho no ramo que gostou. Eles me ajudaram a criar a mentalidade de estudo e hoje aprendou algo novo todos os dias.",
          },
          {
            url: "student1.webp",
            text: "Em Grupo Visual me formei como adbogada e gracas a eles hoje trabalho no ramo que gostou. Eles me ajudaram a criar a mentalidade de estudo e hoje aprendou algo novo todos os dias.",
          },
          {
            url: "student1.webp",
            text: "Em Grupo Visual me formei como adbogada e gracas a eles hoje trabalho no ramo que gostou. Eles me ajudaram a criar a mentalidade de estudo e hoje aprendou algo novo todos os dias.",
          },
          {
            url: "student1.webp",
            text: "Em Grupo Visual me formei como adbogada e gracas a eles hoje trabalho no ramo que gostou. Eles me ajudaram a criar a mentalidade de estudo e hoje aprendou algo novo todos os dias.",
          },
          {
            url: "student2.webp",
            text: "Em Grupo Visual me formei como adbogada e gracas a eles hoje trabalho no ramo que gostou. Eles me ajudaram a criar a mentalidade de estudo e hoje aprendou algo novo todos os dias.",
          },
          {
            url: "student2.webp",
            text: "Em Grupo Visual me formei como adbogada e gracas a eles hoje trabalho no ramo que gostou. Eles me ajudaram a criar a mentalidade de estudo e hoje aprendou algo novo todos os dias.",
          },
          {
            url: "student2.webp",
            text: "Em Grupo Visual me formei como adbogada e gracas a eles hoje trabalho no ramo que gostou. Eles me ajudaram a criar a mentalidade de estudo e hoje aprendou algo novo todos os dias.",
          },
          {
            url: "student2.webp",
            text: "Em Grupo Visual me formei como adbogada e gracas a eles hoje trabalho no ramo que gostou. Eles me ajudaram a criar a mentalidade de estudo e hoje aprendou algo novo todos os dias.",
          },
        ]}
      />
      <Brand />
      <Whatsapp />
    </>
  );
}
