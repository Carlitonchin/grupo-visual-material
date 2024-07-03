import { strapiGet } from "../constant";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";

export const blogPageSize = 10;

export const getBlogs = async (page) => {
  const data = [];
  const resp = await strapiGet(
    "blogs",
    undefined,
    `&pagination[pageSize]=${blogPageSize}&pagination[page]=${page}`,
    "&sort=publishedAt:desc"
  );
  for (let i = 0; i < resp.length; i++) {
    data.push({ id: resp[i].id, ...resp[i].attributes });
  }

  return data;
};

export const getAllBlogs = async () => {
  const data = [];
  const resp = await strapiGet("blogs");
  for (let i = 0; i < resp.length; i++) {
    data.push({ id: resp[i].id, ...resp[i].attributes });
  }

  return data;
};

export const getSingleBlog = async (url) => {
  const resp = await strapiGet(
    `blogs?populate=*&filters[url][$eq]=${url}`,
    "",
    "",
    ""
  );

  resp[0].attributes.conteudo = (
    await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true }) // Pass raw HTML strings through.
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(resp[0].attributes.conteudo)
  ).toString();

  return resp[0].attributes;
};
