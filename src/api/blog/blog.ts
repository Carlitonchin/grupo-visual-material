import { strapiGet } from "../constant";

export const getBlogs = async () => {
  const data: any[] = [];
  const resp = await strapiGet(
    "blogs",
    undefined,
    undefined,
    "&sort=publishedAt:desc"
  );
  for (let i = 0; i < resp.length; i++)
    data.push({ id: resp[i].id, ...resp[i].attributes });

  return data;
};
