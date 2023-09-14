import { strapiGet } from "../constant";
import { remark } from "remark";
import html from "remark-html";

export const blogPageSize = 10;

export const getBlogs = async (page: number) => {
  const data: any[] = [];
  const resp = await strapiGet(
    "blogs",
    undefined,
    `&pagination[pageSize]=${blogPageSize}&pagination[page]=${page}`,
    "&sort=publishedAt:desc"
  );
  for (let i = 0; i < resp.length; i++) {
    data.push({ id: resp[i].id, ...resp[i].attributes });
    data[i].conteudo = (
      await remark().use(html).process(data[i].conteudo)
    ).toString();
  }

  return data;
};
