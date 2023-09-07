import { getHomeMains } from "@/api/home/main";
import HomeMain from "@/app/page-components/home/home-main";

export default async function HomeMainServer() {
  const slides = await getHomeMains();
  return <HomeMain slides={slides} />;
}
