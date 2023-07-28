export const routes = [
  {
    name: "pages",
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        collapse: [
          {
            name: "about us",
            route: "/pages/landing-pages/about-us",
          },
          {
            name: "contact us",
            route: "/pages/landing-pages/contact-us",
          },
          {
            name: "author",
            route: "/pages/landing-pages/author",
          },
        ],
      },
    ],
  },
];
