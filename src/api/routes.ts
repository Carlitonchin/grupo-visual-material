export const routes = [
  {
    name: "Cursos",
    route: "/cursos",
  },
  {
    name: "Sobre",
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        collapse: [
          {
            name: "Quem Somos",
            route: "/pages/landing-pages/about-us",
          },
          {
            name: "Nosso Método",
            route: "/pages/landing-pages/contact-us",
          },
          {
            name: "Professores",
            route: "/pages/landing-pages/author",
          },
        ],
      },
    ],
  },
  {
    name: "Contato",
    route: "/contato",
  },
  {
    name: "Blog",
    route: "/blog",
  },
];
