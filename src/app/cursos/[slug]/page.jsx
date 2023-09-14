import { getSingleCourse } from "@/api/cursos/cursos";
import SingleCourse from "@/app/page-components/cursos/single-course";
import { getCategories, getCourses } from "@/api/cursos/cursos";
import { GetMetadata } from "@/app/api-components/metadata";

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((c) => ({
    slug: c.url.trim().replaceAll("/", ""),
  }));
}

export async function generateMetadata({ params }) {
  let slug = params.slug;
  if (slug[0] != "/") slug = "/" + slug;
  const course = await getSingleCourse(slug);

  const meta = GetMetadata(
    course.img,
    course.alt || "Curso Grupo Visual",
    course.text,
    course.about.split("\n")[0],
    "/cursos" + course.url
  );

  return meta;
}

export default async function Course({ params }) {
  let slug = params.slug;
  if (slug[0] != "/") slug = "/" + slug;
  const course = await getSingleCourse(slug);
  return (
    <section className="bg-gray-200">
      <SingleCourse course={course} />
    </section>
  );
}
