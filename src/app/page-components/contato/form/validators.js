const obr = "Campo obrigatório";

export const requiredField = (name) => {
  if (!name || !name.trim()) return obr;

  return "";
};
