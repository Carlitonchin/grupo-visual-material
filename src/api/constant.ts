import axios from "axios";

export const API_URL = "https://grupo-visual-api.vercel.app/api/";
//export const API_URL = "http://localhost:3001/api/";

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;
const headers = {
  "Content-Type": "Application/Json",
  Authorization: `Bearer ${STRAPI_TOKEN}`,
};

export const strapiGet = async (
  resource: string,
  populate = "?populate=*",
  limit = "&pagination[limit]=100",
  filters = ""
) => {
  const url = STRAPI_URL + resource + populate + limit + filters;

  const resp = await axios.get(url, {
    headers,
  });
  return resp.data.data;
};

export const strapiGetPagination = async (
  resource: string,
  pageSize: number
) => {
  const url = STRAPI_URL + resource + `?pagination[pageSize]=${pageSize}`;

  const resp = await axios.get(url, { headers });
  return resp.data.meta.pagination;
};
