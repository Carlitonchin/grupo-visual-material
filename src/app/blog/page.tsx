import BlogPaginated from "../page-components/blog/blog-paginated";
import { GetMetadata } from "@/app/api-components/metadata";

export const metadata = GetMetadata(
  undefined,
  undefined,
  "Blog",
  undefined,
  "/blog"
);

export default async function BlogPage() {
  return <BlogPaginated page={1} />;
}
