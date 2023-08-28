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
  const course = await getCourse(params.slug);
  return (
    <section className="bg-gray-200">
      <SingleCourse course={course} />
    </section>
  );
}
