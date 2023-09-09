import { getHomeBrandTitle, getHomeBrands } from "@/api/home/brand";
import Brand from "@/app/page-components/home/brand";

export default async function BrandServer() {
  const brands = await getHomeBrands();
  const title = await getHomeBrandTitle();
  return <Brand brands={brands} title={title} />;
}
