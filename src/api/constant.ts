import axios from "axios";

//export const API_URL = "https://grupo-visual-api.vercel.app/api/";
//export const API_URL = "http://localhost:3001/api/";
export const API_URL =
  "https://4n3kbea67a.execute-api.sa-east-1.amazonaws.com/prod/";
/*export const API_URL =
  "https://wisg21tz2f.execute-api.sa-east-1.amazonaws.com/dev/";*/

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;
const headers = {
  "Content-Type": "Application/Json",
  Authorization: `Bearer ${STRAPI_TOKEN}`,
};

export const strapiGet = async (
  resource: string,
  populate = "?populate=*",
  limit = "&pagination[pageSize]=1000000",
  filters = "",
  errors = 0
): Promise<any> => {
  let resp: any;
  try {
    const url = STRAPI_URL + resource + populate + limit + filters;
    resp = await axios.get(url, {
      timeout: 60000,
      headers,
    });
  } catch (e) {
    errors++;
    if (errors < 5)
      return await strapiGet(resource, populate, limit, filters, errors);
  }

  return resp.data.data;
};

export const strapiGetPagination = async (
  resource: string,
  pageSize: number
) => {
  const url = STRAPI_URL + resource + `?pagination[pageSize]=${pageSize}`;

  const resp = await axios.get(url, { headers, timeout: 60000 });
  return resp.data.meta.pagination;
};
