import { strapiGet } from "../constant";

interface props {
  text1: string;
  red_text: string;
  text2: string;
  buttonText: string;
  url: string;
  img: string;
  extern_link: boolean;
}

export const getHomeMains = async () => {
  const resp = await strapiGet("home-mains");
  const data: props[] = [];
  for (let i = 0; i < resp.length; i++) {
    const item = resp[i].attributes;
    data.push({
      buttonText: item.texto_botao,
      extern_link: item.link_externo || false,
      img: item.url_img,
      text1: item.texto1,
      text2: item.texto2,
      url: item.url_botao,
      red_text: item.texto_vermelho,
    });
  }

  return data;
};
