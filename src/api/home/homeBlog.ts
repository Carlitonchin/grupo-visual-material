import { strapiGet } from "../constant";

export const getHomeBlogs = async () => {
  const resp = await strapiGet("home-blog-cards");
  const data: any[] = [];

  for (let i = 0; i < resp.length; i++) data.push(resp[i].attributes);

  return data;
};

export const getHomeBlogSectionData = async () => {
  const resp = await strapiGet("home-blog");
  return resp.attributes;
};
