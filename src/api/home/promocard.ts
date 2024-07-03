import { strapiGet } from "../constant";

interface promoCardsProps {
  text: string;
  href: string;
  img: string;
  extern_link: boolean;
}

export const getPromoCards = async () => {
  const data: promoCardsProps[] = [];
  const resp = await strapiGet("promocao-cards");
  for (let i = 0; i < resp.length; i++) {
    const item = resp[i].attributes;
    data.push({
      extern_link: item.link_externo,
      href: item.url,
      img: item.img,
      text: item.texto,
    });
  }

  return data;
};

export const getSaibaMaisPromoCards = async () => {
  const resp = await strapiGet("saiba-mais-promocao-card");
  return resp.attributes;
};
