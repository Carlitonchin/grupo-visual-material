import BlogCard from "@/components/cards/BlogCard";
import TextLink from "@/components/TextLink";

export default function BlogHome({ blogs, texts }) {
  return (
    <section className="flex flex-col justify-center items-center">
      <div data-aos-delay="200" my-data-aos="fade-down">
        <h2 className="text-center w-full mb-8">{texts.titulo}</h2>
      </div>
      <div className="w-full h-fit flex flex-wrap justify-center gap-y-4">
        {blogs.map((blog, index) => {
          return (
            <BlogCard animation index={index + 1} blog={blog} key={index} />
          );
        })}
      </div>
      <TextLink
        className={"mt-4"}
        text={texts.link_texto}
        url={texts.link_url}
        extern={Boolean(texts?.link_externo)}
        animation
      />
    </section>
  );
}
