"use client";
import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";
import BlogCard from "@/components/cards/BlogCard";
import TextLink from "@/components/TextLink";

export default function BlogHome() {
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
        Temos um Blog
      </MKTypography>
      <div className="w-full h-fit flex flex-wrap justify-center gap-y-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <TextLink className={"mt-4"} text={"Mais posts"} url={"/blog"} />
    </section>
  );
}
