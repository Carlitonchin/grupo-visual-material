function getHeader(blog) {
  const autor = blog.autor.data.attributes;
  return `<h1>${blog.titulo}</h1>
    <img src="${blog.img}" alt="${blog.alt}" style="margin-bottom:0.5rem;"/>
    <div class=" flex gap-x-2 items-center" style="margin-bottom:2rem;">
              <img
              class="rounded-full w-16 h-16"
                alt="${autor.alt}"
                src="${autor.img}"
                width={70}
                height={70}
              />
              <div class="flex flex-col">
                <span class="font-bold">
                  ${autor.nome}
                </span>
                <span>
                 13 de setembro
                </span>
              </div>
            </div>`;
}

export default function SingleBlog({ blog }) {
  blog.conteudo = getHeader(blog) + blog.conteudo;
  return (
    <section>
      <div className="m-auto max-w-[900px] mt-20  md:mt-16 w-fit">
        <div
          className="markdown-body "
          dangerouslySetInnerHTML={{ __html: blog.conteudo }}
        ></div>
      </div>
    </section>
  );
}
