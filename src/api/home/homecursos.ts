import { strapiGet } from "../constant";
import { course } from "../cursos/cursos";

export const getDataSessionHomeCourses = async () => {
  const resp = await strapiGet("home-secao-curso");
  return resp.attributes;
};

export const getHomeCourses = async () => {
  const data: course[] = [];
  const resp = await strapiGet(
    "home-cursos",
    "?populate[curso][populate][0]=categoria"
  );

  for (let i = 0; i < resp.length; i++) {
    const courseId = resp[i].attributes.curso.data.id;
    const item = resp[i].attributes.curso.data.attributes;
    const categoriaId = item.categoria.data.id;
    const categoria = item.categoria.data.attributes;

    data.push({
      category: {
        color: categoria.color,
        id: categoriaId,
        text: categoria.nome,
      },
      id: courseId,
      img: item.img,
      price: item.preco,
      stars: item.estrelas,
      text: item.nome,
      url: item.url,
    });
  }

  return data;
};
