"use client";
import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";
import BlogCard from "@/components/cards/BlogCard";
import TextLink from "@/components/TextLink";

export default function BlogHome({ blogs, texts }) {
  return (
    <section className="flex flex-col justify-center items-center">
      <MKTypography
        variant="h2"
        color={colors.dark.main}
        textGradient
        className="text-center w-full mb-8"
        sx={({ breakpoints, typography: { size } }) => ({
          [breakpoints.down("md")]: {
            fontSize: size["4xl"],
          },
        })}
      >
        {texts.titulo}
      </MKTypography>
      <div className="w-full h-fit flex flex-wrap justify-center gap-y-4">
        {blogs.map((blog, index) => {
          return <BlogCard blog={blog} key={index} />;
        })}
      </div>
      <TextLink
        className={"mt-4"}
        text={texts.link_texto}
        url={texts.link_url}
        extern={Boolean(texts?.link_externo)}
      />
    </section>
  );
}
