import { Metadata } from "next";

export const GetMetadata = (
  img?: string,
  alt?: string,
  title?: string,
  description?: string,
  url?: string
): Metadata => {
  return {
    title: title
      ? title + " | Grupo Visual"
      : "Grupo Visual | Formações Profissionais",
    description:
      description ||
      "O Grupo Visual é uma instituição de cursos profissionalizantes com uma vasta experiência na área de treinamentos e nos mais variados cursos.",

    metadataBase: new URL(process.env.URL_BASE || ""),
    openGraph: {
      title: title
        ? title + " | Grupo Visual"
        : "Grupo Visual | Formações Profissionais",
      description:
        description ||
        "O Grupo Visual é uma instituição de cursos profissionalizantes com uma vasta experiência na área de treinamentos e nos mais variados cursos.",
      url: process.env.URL_BASE + (url || ""),
      siteName: "Grupo Visual",
      images: [
        {
          url: img || "/favicon.ico",
          width: 800,
          height: 600,
          alt: alt || "Grupo Visual",
        },
        {
          url: img || "/favicon.ico",
          width: 1800,
          height: 1600,
          alt: alt || "Grupo Visual",
        },
      ],
      locale: "pt_BR",
      type: "website",
    },
  };
};
