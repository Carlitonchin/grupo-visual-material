import BlogHeader from "@/app/page-components/blog/blog-header";
import BlogCard from "@/app/page-components/blog/blog-card";
import BlogPagination from "@/app/page-components/blog/blog-pagination";
import { getBlogs } from "@/api/blog/blog";

export default async function BlogPage() {
  const blogs = await getBlogs();
  return (
    <div>
      <BlogHeader />
      <section className="bg-gray-200 py-8 flex flex-col gap-y-10">
        {blogs.map((blog, index) => {
          return <BlogCard key={blog.id} blog={blog} />;
        })}
        <BlogPagination />
      </section>
    </div>
  );
}
