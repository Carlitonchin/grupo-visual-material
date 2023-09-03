import { teachers } from "@/api/routes";
import SingleTeacher from "@/app/page-components/professores/single-teacher";

export async function generateStaticParams() {
  return teachers.map((c) => ({
    slug: c.slug.trim().replaceAll("/", ""),
    course: c,
  }));
}

async function getTeacher(slug) {
  let promise = new Promise((resolve, reject) => {
    const course = teachers.find(
      (c) => c.slug.trim().replaceAll("/", "") == slug
    );
    if (!course) {
      reject("teacher not found");
      return;
    }

    resolve(course);
  });

  return promise;
}

export default async function Teacher({ params }) {
  const teacher = await getTeacher(params.slug);
  return (
    <section className="bg-gray-200">
      <SingleTeacher teacher={teacher} />
    </section>
  );
}
