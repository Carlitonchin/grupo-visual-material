import { strapiGet } from "../constant";

interface props {
  count: string;
  title: string;
  description: string;
}

export const getStats = async () => {
  const data: props[] = [];
  const resp = await strapiGet("home-numeros");
  for (let i = 0; i < resp.length; i++) {
    const item = resp[i].attributes;
    data.push({
      count: item.quantidade,
      description: item.texto2,
      title: item.texto1,
    });
  }

  return data;
};
