import { strapiGet } from "../constant";

export interface categoria {
  id: number;
  text: string;
  color: string;
}

export interface course {
  id: number;
  price: number;
  img: string;
  stars: number;
  text: string;
  url: string;
  category: categoria;
  about?: string;
  video?: string;
  format?: string;
  duration?: string;
  objetive?: string;
  certification?: string;
  content?: string;
  classCount?: string;
  hours?: string;
}

export const getCategories = async () => {
  const data: categoria[] = [];
  const resp = await strapiGet("categorias");
  for (let i = 0; i < resp.length; i++) {
    const item = resp[i].attributes;
    data.push({
      color: item.color,
      id: resp[i].id,
      text: item.nome,
    });
  }

  return data;
};

export const extractCourses = (resp: any) => {
  const data: course[] = [];
  for (let i = 0; i < resp.length; i++) {
    const item = resp[i].attributes;
    const categoriaId = item.categoria.data.id;
    const categoria = item.categoria.data.attributes;

    data.push({
      id: resp[i].id,
      category: {
        color: categoria.color,
        id: categoriaId,
        text: categoria.nome,
      },
      img: item.img,
      price: item.preco,
      stars: item.estrelas,
      text: item.nome,
      url: item.url,
      hours: item.carga_horaria,
      classCount: item.no_aulas,
    });
  }

  return data;
};

export const getCourses = async () => {
  const resp = await strapiGet("cursos");
  const data = extractCourses(resp);

  return data;
};

export const getSingleCourse = async (url: string) => {
  const resp = await strapiGet(
    `cursos?populate=*&filters[url][$eq]=${url}`,
    "",
    ""
  );

  if (!resp?.length) throw new Error(`Curso ${url} no encontrado`);

  const item = resp[0].attributes;
  const categoriaId = item.categoria.data.id;
  const categoria = item.categoria.data.attributes;
  const data: course = {
    category: {
      color: categoria.color,
      id: categoriaId,
      text: categoria.nome,
    },
    id: resp[0].id,
    img: item.img,
    price: item.preco,
    stars: item.estrelas,
    text: item.nome,
    url: item.url,
    video: item.video,
    about: item.sobre_o_curso,
    certification: item.certificacao,
    content: item.conteudo,
    duration: item.duracao,
    format: item.formato,
    objetive: item.objetivo,
  hours: item.carga_horaria,
      classCount: item.no_aulas,
  };

  return data;
};
