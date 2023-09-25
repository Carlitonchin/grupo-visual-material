import { getFaqs, getFaqsTexts } from "@/api/general/footer";
import MyAccordion from "@/components/footer/accordion";

export default async function AcordionServer() {
  const faqs = await getFaqs();
  const faqTexts = await getFaqsTexts();
  return (
    <section className="bg-gray-200 py-10 flex flex-col justify-center items-center">
      <h2 className="text-center w-full ">{faqTexts.titulo}</h2>
      <h4 className="text-center w-full mb-8 font-bold mt-2">
        {faqTexts.descricao}
      </h4>
      <MyAccordion faqs={faqs} />
    </section>
  );
}
