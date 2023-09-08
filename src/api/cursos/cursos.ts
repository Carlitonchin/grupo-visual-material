import { strapiGet } from "../constant";

interface categoria {
  id: number;
  text: string;
  color: string;
}

interface course {
  id: number;
  price: number;
  img: string;
  stars: number;
  text: string;
  url: string;
  category: categoria;
  about?: string;
  format?: string;
  duration?: string;
  objetive?: string;
  certification?: string;
  content?: string;
}

/*id: 1,
    price: 4.5,
    img: "/blog1.webp",
    stars: 3.4,
    text: "Alimentacao Social Asistida #2 con hambre",
    url: "/teste",
    category: { color: "#0000aa", text: "Marketing", id: 1 },*/

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

export const getCourses = async () => {
  const data: course[] = [];
  const resp = await strapiGet("cursos");
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
    });
  }

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
    about: item.sobre_o_curso,
    certification: item.certificacao,
    content: item.conteudo,
    duration: item.duracao,
    format: item.formato,
    objetive: item.objetivo,
  };

  return data;
};
