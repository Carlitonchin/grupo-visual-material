import { getHomeBlogSectionData, getHomeBlogs } from "@/api/home/homeBlog";
import BlogHome from "@/app/page-components/home/blog";

export default async function HomeBlogServer() {
  const blogs = await getHomeBlogs();
  const data = await getHomeBlogSectionData();
  return <BlogHome blogs={blogs} texts={data} />;
}
