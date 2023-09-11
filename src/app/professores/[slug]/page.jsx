import { teachers } from "@/api/routes";
import { getTeachersInfo } from "@/api/teachers/teachers";
import SingleTeacher from "@/app/page-components/professores/single-teacher";

export async function generateStaticParams() {
  return (await getTeachersInfo()).map((c) => ({
    slug: c.slug.trim().replaceAll("/", ""),
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
  const teacher = await getTeachersInfo(params.slug);

  return (
    <section className="bg-gray-200">
      <SingleTeacher teacher={teacher[0]} />
    </section>
  );
}
