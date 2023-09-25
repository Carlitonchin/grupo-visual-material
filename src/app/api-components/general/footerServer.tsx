import {
  getFaqs,
  getFaqsTexts,
  getFooterInfo,
  getLinksFooter,
} from "@/api/general/footer";
import Footer from "@/components/footer";

export default async function FooterServer() {
  const footerData = await getFooterInfo();
  const linksFooter = await getLinksFooter();
  return <Footer footerInfo={footerData} links={linksFooter} />;
}
