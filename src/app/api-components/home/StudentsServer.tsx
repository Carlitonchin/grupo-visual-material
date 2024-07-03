import { getStudentTexts, getStudentsCards } from "@/api/home/students";
import Students from "@/app/page-components/home/students";

export default async function StudentsServer() {
  const cards = await getStudentsCards();
  const texts = await getStudentTexts();
  return <Students students={cards} texts={texts} />;
}
