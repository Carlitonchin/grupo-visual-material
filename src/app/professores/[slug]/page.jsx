import { getTeachersInfo } from "@/api/teachers/teachers";
import SingleTeacher from "@/app/page-components/professores/single-teacher";
import { GetMetadata } from "../../api-components/metadata";

export async function generateStaticParams() {
  return (await getTeachersInfo()).map((c) => ({
    slug: c.slug.trim().replaceAll("/", ""),
  }));
}

export async function generateMetadata({ params }) {
  let slug = params.slug;
  if (slug[0] != "/") slug = "/" + slug;
  const teacher = (await getTeachersInfo(slug))[0];

  const meta = GetMetadata(
    teacher.url,
    teacher.title,
    teacher.title,
    teacher.text,
    "professores" + teacher.slug
  );

  return meta;
}

export default async function Teacher({ params }) {
  const teacher = await getTeachersInfo(params.slug);

  return (
    <section className="bg-gray-200">
      <SingleTeacher teacher={teacher[0]} />
    </section>
  );
}
