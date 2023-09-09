import {
  getFaqs,
  getFaqsTexts,
  getFooterInfo,
  getLinksFooter,
} from "@/api/general/footer";
import Footer from "@/components/footer";

export default async function FooterServer() {
  const faqTexts = await getFaqsTexts();
  const faqs = await getFaqs();
  const footerData = await getFooterInfo();
  const linksFooter = await getLinksFooter();
  return (
    <Footer
      faqTexts={faqTexts}
      faqs={faqs}
      footerInfo={footerData}
      links={linksFooter}
    />
  );
}
