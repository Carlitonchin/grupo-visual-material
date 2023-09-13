import { strapiGet } from "../constant";

export const getContactInfo = async () => {
  const resp = await strapiGet("contato-pagina");
  return resp.attributes;
};
