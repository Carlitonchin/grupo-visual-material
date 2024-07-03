import { getAllBlogs, getSingleBlog } from "@/api/blog/blog";
import { GetMetadata } from "@/app/api-components/metadata";
import "@/app/blog.css";
import SingleBlog from "@/app/page-components/blog/single-blog";

export async function generateStaticParams() {
  const blogs = await getAllBlogs();

  return blogs.map((b) => {
    return {
      slug: b.url.trim().replaceAll("/", ""),
    };
  });
}

export async function generateMetadata({ params }: any) {
  let slug = params.slug;
  if (slug[0] != "/") slug = "/" + slug;

  const blog = await getSingleBlog(slug);

  const meta = GetMetadata(
    blog.img,
    blog.alt,
    blog.titulo,
    blog.descricao.split("\n")[0],
    "/blog" + slug
  );

  return meta;
}

export default async function SingleBlogPage({ params }: any) {
  let slug = params.slug;
  if (slug[0] != "/") slug = "/" + slug;
  const blog = await getSingleBlog(slug);

  return <SingleBlog blog={blog} />;
}
