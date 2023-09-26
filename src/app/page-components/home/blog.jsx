import BlogCard from "@/components/cards/BlogCard";
import TextLink from "@/components/TextLink";
import HeaderText from "@/components/texts/header-text";

export default function BlogHome({ blogs, texts }) {
  return (
    <section className="flex flex-col justify-center items-center">
      <div data-aos-delay="200" my-data-aos="fade-down">
        <HeaderText className="text-center w-full mb-8" variant="h2">
          {texts.titulo}
        </HeaderText>
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
