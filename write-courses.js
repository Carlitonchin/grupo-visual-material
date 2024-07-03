const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname, ".env.local") });
const fs = require("fs");
const axios = require("axios");

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;
const headers = {
  "Content-Type": "Application/Json",
  Authorization: `Bearer ${STRAPI_TOKEN}`,
};

const strapiGet = async (
  resource,
  populate = "?populate=*",
  limit = "&pagination[pageSize]=1000000",
  filters = "",
  errors = 0
) => {
  let resp;
  try {
    const url = STRAPI_URL + resource + populate + limit + filters;

    resp = await axios.get(url, {
      timeout: 60000,
      headers,
    });
  } catch {
    errors++;
    if (errors < 5)
      return await strapiGet(resource, populate, limit, filters, errors);
  }

  return resp.data.data;
};

const pathCourses = path.join(
  __dirname,
  "grupo-visual-api/src/app/api/data.ts"
);

const extractCourses = (resp) => {
  const data = [];
  for (let i = 0; i < resp.length; i++) {
    const item = resp[i].attributes;
    const categoriaId = item.categoria.data.id;
    const categoria = item.categoria.data.attributes;

    data.push({
      id: resp[i].id,
      category: {
        color: categoria.color,
        id: categoriaId,
        text: categoria.nome,
      },
      img: item.img,
      price: item.preco,
      stars: item.estrelas,
      text: item.nome,
      url: item.url,
      freeTax: item.parcelas_semjuros,
      taxes: item.percent_juros,
    });
  }

  return data;
};

const getCourses = async () => {
  const resp = await strapiGet("cursos");

  const data = extractCourses(resp);

  return data;
};

getCourses()
  .then((c) => {
    fs.writeFileSync(
      pathCourses,
      `export const courses = ${JSON.stringify(c)}`
    );
    console.log("cursos carregados");
  })
  .catch(() => console.error("Ocorreu um erro carregando os cursos"));
