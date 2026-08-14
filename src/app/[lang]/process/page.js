import ProcessClient from "../../process/ProcessClient";
import { getDictionary } from "../../../get-dictionary";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return {
    title: isAr ? "عمليتنا | طباعة روتوجرافور دقيقة" : "Our Process | Precision Rotogravure Printing",
    description: isAr
      ? "اكتشف كيف تحول روتو ستار الأفكار إلى تحف فنية للتغليف من خلال عمليتنا المكونة من 3 خطوات: ابتكار، تصميم، وطباعة."
      : "Discover how Roto Star transforms ideas into packaging masterpieces through our 3-step process: Create, Design, and Print.",
  };
}

export default async function Process({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <ProcessClient lang={lang} dict={dict.process} />;
}
