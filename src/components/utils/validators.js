import { cpf as cpfValidator } from "cpf-cnpj-validator";
const obr = "Campo obrigatório";

export const requiredField = (name) => {
  if (!name || !name.trim()) return obr;

  return "";
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    ? ""
    : "Email inválido";
};

export const validatePhone = (phone) => {
  return String(phone).match(/\([0-9]{2}\)\ [0-9]{4,5}\-[0-9]{4}/)
    ? ""
    : "Telefone inválido";
};

export const validateCPF = (cpf) => {
  var cpfFormatted = String(cpf).replaceAll(".", "").replaceAll("-", "");
  if (cpfFormatted.length != 11) return "CPF inválido";

  if (cpfValidator.isValid(cpfFormatted)) return "";

  return "CPF inválido";
};
