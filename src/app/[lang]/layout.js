import Navbar from "../Navbar";
import Footer from "../Footer";
import WhatsAppButton from "../WhatsAppButton";
import { getDictionary } from "../../get-dictionary";

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar lang={lang} dict={dict.navbar} />
      {children}
      <WhatsAppButton lang={lang} />
      <Footer lang={lang} dict={dict.footer} />
    </>
  );
}
