"use client";

import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";
import moment from "moment";
import "moment/locale/pt-br";

function getTime(date) {
  moment.locale("pt-br");
  const sameYear = new Date(date).getFullYear() == new Date().getFullYear();
  if (sameYear) return moment().format("DD [de] MMMM");

  return moment(date).format("LL");
}

export default function BlogCard({ blog }) {
  const category = blog.categoria.data.attributes;
  const autor = blog.autor.data.attributes;

  return (
    <a href={`/blog${blog.url}`}>
      <div className="flex flex-col lg:flex-row gap-x-4 gap-y-4 max-w-6xl m-auto hover:bg-black p-4 rounded-lg hover:bg-opacity-10 duration-200">
        <img
          className="w-full lg:w-[800px] aspect-video"
          style={{ minWidth: "300px" }}
          width={800}
          height={400}
          alt={blog.alt}
          src={blog.img}
        />
        <div className="w-full">
          <div className="relative w-fit h-fit">
            <span
              className="w-full h-full rounded-md absolute px-4 py-2 "
              style={{
                backgroundColor: category.color,
                color: category.color,
                opacity: 0.2,
              }}
            />

            <MKTypography
              variant="button"
              className="px-4 py-2 "
              sx={{ color: category.color }}
              fontWeight="bold"
              textTransform="uppercase"
            >
              {category.nome}
            </MKTypography>
          </div>

          <MKTypography
            variant="h4"
            color={colors.dark.main}
            mt={2}
            className="line-clamp-2"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["4xl"],
              },
            })}
          >
            {blog.titulo}
          </MKTypography>

          <MKTypography
            variant="button"
            color={"text"}
            sx={{ fontSize: "1.1rem" }}
            className="line-clamp-5"
            mt={2}
          >
            {blog.descricao}
          </MKTypography>

          <div className="mt-4 flex gap-x-2 items-center">
            <img
              className="rounded-full"
              alt={autor.alt}
              src={autor.img}
              width={70}
              height={70}
            />
            <div className="flex flex-col">
              <MKTypography variant="button" color="text" fontWeight="bold">
                {autor.nome}
              </MKTypography>
              <MKTypography variant="button" color="text">
                {getTime(blog.publishedAt)}
              </MKTypography>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
