import { blogPageSize } from "@/api/blog/blog";
import { strapiGetPagination } from "@/api/constant";
import { GetMetadata } from "@/app/api-components/metadata";
import BlogPaginated from "@/app/page-components/blog/blog-paginated";

export async function generateStaticParams() {
  const pagination = await strapiGetPagination("blogs", blogPageSize);
  const resp: any[] = [];
  if (!pagination?.pageCount) throw new Error("unable get blog pages");

  for (let i = 1; i <= pagination.pageCount; i++) resp.push({ slug: i + "" });

  return resp;
}

export const metadata = GetMetadata(
  undefined,
  undefined,
  "Blog",
  undefined,
  "/blog"
);

export default function BlogPage({ params }: any) {
  return <BlogPaginated page={Number(params.slug)} />;
}
