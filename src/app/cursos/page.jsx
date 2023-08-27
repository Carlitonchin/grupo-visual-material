import { courses } from "@/api/routes";
import CoursesLists from "../page-components/cursos/courses-list";

export default function Cursos() {
  return (
    <section className="bg-gray-200">
      <div className="mt-20  md:mt-16">
        <CoursesLists
          categories={[
            {
              id: 1,
              text: "Marketing",
              color: "#a00",
            },
            { id: 2, text: "Programacao", color: "#0a0" },
            { id: 3, text: "Empresa", color: "#00a" },
          ]}
          courses={courses}
        />
      </div>
    </section>
  );
}
