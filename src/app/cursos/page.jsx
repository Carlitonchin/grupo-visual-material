import CoursesLists from "../page-components/cursos/courses-list";
import { getCategories, getCourses } from "@/api/cursos/cursos";
import { GetMetadata } from "../api-components/metadata";

export const metadata = GetMetadata(
  undefined,
  undefined,
  "Cursos",
  undefined,
  "/cursos"
);

export default async function Cursos() {
  const categories = await getCategories();
  const courses = await getCourses();
  return (
    <>
      <section className="bg-gray-200">
        <div className="mt-20  md:mt-16">
          <CoursesLists categories={categories} courses={courses} />
        </div>
      </section>
    </>
  );
}
