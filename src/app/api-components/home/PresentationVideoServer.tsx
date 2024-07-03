import {
  getPresentationOptions,
  getSingleDataPresention,
} from "@/api/home/presentation";
import PresentationVideo from "@/app/page-components/home/presentation-video";

export default async function PresentationVideoServer() {
  const data = await getSingleDataPresention();
  const options = await getPresentationOptions();
  return (
    <PresentationVideo
      options={options}
      videoUrl={data.video}
      title={data.titulo}
    />
  );
}
