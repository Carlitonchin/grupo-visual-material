import {
  getTeacherPageTexts,
  getTeachersCarousel,
  getTeachersInfo,
} from "@/api/teachers/teachers";
import ProfessoresPage from "../page-components/professores";
import { getCategories } from "@/api/cursos/cursos";
import { GetMetadata } from "@/app/api-components/metadata";

export const metadata = GetMetadata(
  undefined,
  undefined,
  "Professores",
  undefined,
  "/professores"
);

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
