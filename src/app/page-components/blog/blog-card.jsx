import moment from "moment";
import "moment/locale/pt-br";

function getTime(date) {
  moment.locale("pt-br");
  const sameYear = new Date(date).getFullYear() == new Date().getFullYear();
  if (sameYear) return moment(date).format("DD [de] MMMM");

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

            <span
              className="px-4 py-2 uppercase font-bold text-base"
              style={{ color: category.color }}
            >
              {category.nome}
            </span>
          </div>

          <h4 className="line-clamp-2 mt-2 font-bold">{blog.titulo}</h4>

          <span
            style={{ fontSize: "1.1rem" }}
            className="line-clamp-5 mt-1 text-slate-800"
          >
            {blog.descricao}
          </span>

          <div className="mt-4 flex gap-x-2 items-center">
            <img
              className="rounded-full"
              alt={autor.alt}
              src={autor.img}
              width={70}
              height={70}
            />
            <div className="flex flex-col">
              <span className="font-bold text-base text-slate-800">
                {autor.nome}
              </span>
              <span className="text-slate-800 text-base">
                {getTime(blog.publishedAt)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
