import { strapiGet } from "../constant";

export const getFaqsTexts = async () => {
  const resp = await strapiGet("faq-secao");

  return resp.attributes;
};

export const getFaqs = async () => {
  const resp = await strapiGet("faqs");
  const data: any[] = [];
  for (let i = 0; i < resp.length; i++) data.push(resp[i].attributes);

  return data;
};

export const getFooterInfo = async () => {
  const resp = await strapiGet("footer");

  return resp.attributes;
};

export const getLinksFooter = async () => {
  const resp = await strapiGet("links-footer");

  const data: any[] = [];
  for (let i = 0; i < resp.length; i++) data.push(resp[i].attributes);

  return data;
};
