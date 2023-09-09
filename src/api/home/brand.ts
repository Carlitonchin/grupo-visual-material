import { strapiGet } from "../constant";

export const getHomeBrands = async () => {
  const resp = await strapiGet("home-brands");
  const data: any[] = [];
  for (let i = 0; i < resp.length; i++) data.push(resp[i].attributes);

  return data;
};

export const getHomeBrandTitle = async () => {
  const resp = await strapiGet("brand-titulo");
  return resp.attributes.titulo;
};
