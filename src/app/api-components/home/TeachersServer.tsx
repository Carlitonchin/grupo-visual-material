import { getTeachers, getTeachersCardData } from "@/api/home/teachers";
import Teachers from "@/app/page-components/home/teachers";

export default async function TeachersServer() {
  const teachers = await getTeachers();
  const cardData = await getTeachersCardData();
  return <Teachers teachers={teachers} cardData={cardData} />;
}
