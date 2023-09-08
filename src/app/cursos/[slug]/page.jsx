import { getSingleCourse } from "@/api/cursos/cursos";
import { courses } from "@/api/routes";
import SingleCourse from "@/app/page-components/cursos/single-course";

export async function generateStaticParams() {
  return courses.map((c) => ({
    slug: c.url.trim().replaceAll("/", ""),
    course: c,
  }));
}

async function getCourse(slug) {
  let promise = new Promise((resolve, reject) => {
    const course = courses.find(
      (c) => c.url.trim().replaceAll("/", "") == slug
    );
    if (!course) {
      reject("course not found");
      return;
    }

    resolve(course);
  });

  return promise;
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
