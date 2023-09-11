import {
  getTeacherPageTexts,
  getTeachersCarousel,
  getTeachersInfo,
} from "@/api/teachers/teachers";
import ProfessoresPage from "../page-components/professores";
import { getCategories } from "@/api/cursos/cursos";

export default async function Professores() {
  const texts = await getTeacherPageTexts();
  const categories = await getCategories();
  const carousel = await getTeachersCarousel();
  const teachers = await getTeachersInfo();
  return (
    <ProfessoresPage
      carousel={carousel}
      title={texts.titulo}
      text={texts.texto}
      categories={categories}
      teachers={teachers}
    />
  );
}
