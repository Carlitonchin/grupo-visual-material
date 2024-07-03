import { getWhoCards, getWhoInfo } from "@/api/who/who";
import Who from "../page-components/quem-somos";
import { GetMetadata } from "../api-components/metadata";

export const metadata = GetMetadata(
  undefined,
  undefined,
  "Quem Somos",
  undefined,
  "/quem-somos"
);

export default async function OurMethod() {
  const info = await getWhoInfo();
  const cards = await getWhoCards();
  return (
    <Who
      title={info.titulo}
      description={info.resumo}
      ourMethod={info.nosso_metodo}
      video={info.video}
      cardTitle={info.card_titulo}
      cards={cards}
      background={info.fundo}
    />
  );
}
