import { strapiGet } from "../constant";

interface propsCards {
  category: string;
  img: string;
  alt: string;
  text: string;
  textButton: string;
  title: string;
  urlButton: string;
  externLink: boolean;
}

export const getWhoInfo = async () => {
  const resp = await strapiGet("quem-somos");
  return resp.attributes;
};

export const getWhoCards = async () => {
  const resp = await strapiGet("quem-somos-cards");
  const data: propsCards[] = [];
  for (let i = 0; i < resp.length; i++) {
    const item = resp[i].attributes;
    data.push({
      category: item.texto,
      externLink: item.link_externo,
      img: item.img,
      text: item.descricao,
      textButton: item.texto_botao,
      title: item.titulo,
      urlButton: item.url_botao,
      alt: item.alt,
    });
  }

  return data;
};
