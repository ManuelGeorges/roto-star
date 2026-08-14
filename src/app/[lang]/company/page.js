import CompanyClient from "../../company/CompanyClient";
import { getDictionary } from "../../../get-dictionary";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return {
    title: isAr ? "عن روتو ستار | أكثر من 28 عامًا من التميز في التغليف" : "About Roto Star | 28+ Years of Packaging Excellence",
    description: isAr
      ? "تعرف على رحلة روتو ستار من حلب إلى الإسكندرية. نحن شركة عالمية رائدة في حلول طباعة الروتوجرافور والتغليف المرن عالي الأداء."
      : "Learn about Roto Star's journey from Aleppo to Alexandria. We are a global leader in high-performance rotogravure printing and flexible packaging solutions.",
    openGraph: {
      title: isAr ? "عن روتو ستار | بنيت على الثقة، مدفوعة بالابتكار" : "About Roto Star | Built on Trust, Driven by Innovation",
      description: isAr
        ? "اكتشف مهمتنا ورؤيتنا وتاريخنا الممتد لـ 28 عامًا في صناعة الطباعة."
        : "Discover our mission, vision, and 28-year history in the printing industry.",
    },
  };
}

export default async function Company({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <CompanyClient lang={lang} dict={dict.company} />;
}
