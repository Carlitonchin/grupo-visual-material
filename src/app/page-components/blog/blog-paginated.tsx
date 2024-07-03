import { blogPageSize, getBlogs } from "@/api/blog/blog";
import BlogHeader from "./blog-header";
import BlogCard from "./blog-card";
import BlogPagination from "./blog-pagination";
import { strapiGetPagination } from "@/api/constant";

export default async function BlogPaginated({ page }: { page: number }) {
  const blogs = await getBlogs(page);
  const pagination = await strapiGetPagination("blogs", blogPageSize);
  return (
    <div>
      <BlogHeader />
      <section className="bg-gray-200 py-8 flex flex-col gap-y-10">
        {blogs.map((blog, index) => {
          return (
            <div
              key={blog.id}
              my-data-aos={index % 2 != 0 ? "fade-left" : "fade-right"}
            >
              <BlogCard blog={blog} />
            </div>
          );
        })}
        <BlogPagination page={page} pageCount={pagination.pageCount} />
      </section>
    </div>
  );
}
