import { strapiGet } from "../constant";
import { categoria, course, extractCourses } from "../cursos/cursos";

/*export const teachers = [
  {
    id: 1,
    slug: "/jose1",
    url: "/student1.webp",
    title: "Maria Javier",
    text: "Master en ciencias. Professora da PUCPR",
  },*/
interface propsTeacher {
  id: number;
  slug: string;
  url: string;
  title: string;
  text: string;
  resume: string;
  category: categoria;
  courses: course[];
}

export const getTeacherPageTexts = async () => {
  const resp = await strapiGet("professores-pagina");

  return resp.attributes;
};

export const getTeachersCarousel = async () => {
  const data: any[] = [];
  const resp = await strapiGet("professores-carousels");
  for (let i = 0; i < resp.length; i++) data.push(resp[i].attributes);

  return data;
};

export const getTeachersInfo = async (url?: string) => {
  let filter = "";
  if (url) {
    if (url[0] != "/") url = "/" + url;

    filter = `&filters[url][$eq]=${url}`;
  }

  const resp = await strapiGet(
    "professores",
    "?populate[cursos][populate]=*&populate[categoria][populate]=*" + filter
  );

  const data: propsTeacher[] = [];
  for (let i = 0; i < resp.length; i++) {
    const item = resp[i].attributes;
    const categoryId = item.categoria.data.id;
    const category = item.categoria.data.attributes;
    let courses = item.cursos.data;
    if (!courses) courses = [];

    data.push({
      category: {
        color: category.color,
        text: category.nome,
        id: categoryId,
      },
      courses: extractCourses(courses),
      id: resp[i].id,
      resume: item.resumo,
      slug: item.url,
      text: item.descricao,
      title: item.nome,
      url: item.img,
    });
  }

  return data;
};
