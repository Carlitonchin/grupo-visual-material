import { strapiGet } from "../constant";

export const getSingleDataPresention = async () => {
  const resp = await strapiGet("home-presentacao");
  return resp.attributes;
};

export const getPresentationOptions = async () => {
  const options: any = {};
  const resp = await strapiGet("home-presentacao-secoes");
  for (let i = 0; i < resp.length; i++) {
    const item = resp[i].attributes;
    options[item.nome] = item.texto;
  }
  return options;
};
