import { getPromoCards, getSaibaMaisPromoCards } from "@/api/home/promocard";
import CoursesCards from "@/app/page-components/home/courses-cards";

export default async function PromoCardServer() {
  const cards = await getPromoCards();
  const button = await getSaibaMaisPromoCards();

  return (
    <CoursesCards
      cards={cards}
      buttonText={button.texto}
      buttonUrl={button.url}
      buttonExtern={button.link_externo}
    />
  );
}
