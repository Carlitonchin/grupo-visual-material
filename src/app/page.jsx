import Whatsapp from "@/components/smartarget/whatsapp";
import Students from "@/app/page-components/home/students";
import Brand from "@/app/page-components/home/brand";
import HomeMainServer from "./api-components/home/HomeMainServer";
import PromoCardServer from "./api-components/home/PromoCardServer";
import PresentationVideoServer from "./api-components/home/PresentationVideoServer";
import StatsServer from "./api-components/home/StatsServer";
import CourseCarouselServer from "./api-components/home/CourseCarouselServer";
import TeachersServer from "./api-components/home/TeachersServer";
import HomeBlogServer from "./api-components/home/BlogHomeServer";

export default function Home() {
  return (
    <>
      <HomeMainServer />
      <PromoCardServer />
      <PresentationVideoServer />
      <StatsServer />
      <CourseCarouselServer />
      <TeachersServer />
      <HomeBlogServer />
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
