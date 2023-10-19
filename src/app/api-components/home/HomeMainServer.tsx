import { getHomeMains } from "@/api/home/main";
import HomeMain from "@/app/page-components/home/home-main";

export default async function HomeMainServer() {
  const slides = await getHomeMains();
  console.log(slides);
  return <HomeMain slides={slides} />;
}
