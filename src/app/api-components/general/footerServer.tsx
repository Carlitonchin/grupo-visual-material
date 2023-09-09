import { getFaqs, getFaqsTexts } from "@/api/general/footer";
import Footer from "@/components/footer";

export default async function FooterServer() {
  const faqTexts = await getFaqsTexts();
  const faqs = await getFaqs();
  return <Footer faqTexts={faqTexts} faqs={faqs} />;
}
