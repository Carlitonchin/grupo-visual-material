import { getStats } from "@/api/home/stats";
import Stats from "@/app/page-components/home/stats";

export default async function StatsServer() {
  const stats = await getStats();
  return <Stats stats={stats} />;
}
