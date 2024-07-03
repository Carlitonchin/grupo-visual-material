import { strapiGet } from "../constant";

export const getTeachers = async () => {
  const data: any[] = [];
  const resp = await strapiGet("home-professores");
  for (let i = 0; i < resp.length; i++) data.push(resp[i].attributes);

  return data;
};

export const getTeachersCardData = async () => {
  const resp = await strapiGet("home-card-professores");
  return resp.attributes;
};
