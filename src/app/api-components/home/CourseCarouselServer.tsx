import {
  getDataSessionHomeCourses,
  getHomeCourses,
} from "@/api/home/homecursos";
import CourseCarousel from "@/app/page-components/home/course-carousel";

export default async function CourseCarouselServer() {
  const carouselCourses = await getHomeCourses();
  const data = await getDataSessionHomeCourses();
  return (
    <CourseCarousel
      title={data.titulo}
      buttonText={data.link_texto}
      buttonUrl={data.link_url}
      buttonExtern={data.link_externo}
      courses={carouselCourses}
    />
  );
}
