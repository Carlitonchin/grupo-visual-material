import { getFaqs, getFaqsTexts } from "@/api/general/footer";
import MyAccordion from "@/components/footer/accordion";
import HeaderText from "@/components/texts/header-text";

export default async function AcordionServer() {
  const faqs = await getFaqs();
  const faqTexts = await getFaqsTexts();
  return (
    <section className="bg-gray-200 py-10 flex flex-col justify-center items-center">
      <HeaderText className="text-center w-full" variant="h2" font="Custom">
        {faqTexts.titulo}
      </HeaderText>
      <HeaderText
        className="text-center w-full mb-8 font-bold mt-2"
        variant="h4"
        font="Custom"
      >
        {faqTexts.descricao}
      </HeaderText>

      <MyAccordion faqs={faqs} />
    </section>
  );
}
