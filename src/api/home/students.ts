import { strapiGet } from "../constant";

interface propsStudents {
  url: string;
  text: string;
}

export const getStudentsCards = async () => {
  const resp = await strapiGet("home-cards-alunos");
  const data: propsStudents[] = [];
  for (let i = 0; i < resp.length; i++) {
    const item = resp[i].attributes;
    data.push({
      text: item.texto,
      url: item.img,
    });
  }

  return data;
};

export const getStudentTexts = async () => {
  const resp = await strapiGet("home-alunos");

  return resp.attributes;
};
