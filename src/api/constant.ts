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
  limit = "&pagination[limit]=100"
) => {
  const resp = await axios.get(STRAPI_URL + resource + populate + limit, {
    headers,
  });
  return resp.data.data;
};
