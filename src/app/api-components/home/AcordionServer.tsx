import { getFaqs, getFaqsTexts } from "@/api/general/footer";
import MyAccordion from "@/components/footer/accordion";
import HeaderText from "@/components/texts/header-text";

export default async function AcordionServer() {
  const faqs = await getFaqs();
  const faqTexts = await getFaqsTexts();
  return (
    <section className="bg-gray-200 py-10 flex flex-col justify-center items-center">
      <div my-data-aos="fade-left" className="w-full">
        <HeaderText className="text-center w-full" variant="h2" font="Custom">
          {faqTexts.titulo}
        </HeaderText>
        <HeaderText
          className="text-center w-full mb-8 font-bold text-2xl mt-2"
          variant="h3"
          font="Custom"
        >
          {faqTexts.descricao}
        </HeaderText>
      </div>
      <MyAccordion faqs={faqs} />
    </section>
  );
}
