import ContactClient from "../../contact/ContactClient";
import { getDictionary } from "../../../get-dictionary";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return {
    title: isAr ? "اتصل بنا | روتو ستار للتغليف المرن" : "Contact Us | Roto Star Flexible Packaging",
    description: isAr
      ? "تواصل مع خبرائنا في روتو ستار للحصول على حلول تغليف مخصصة. نحن هنا لمساعدتك في الارتقاء بعلامتك التجارية."
      : "Reach out to Roto Star's experts for custom packaging solutions. We're here to help you elevate your brand.",
  };
}

export default async function Contact({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <ContactClient lang={lang} dict={dict.contact} />;
}
