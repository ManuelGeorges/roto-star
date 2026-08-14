import HomeClient from "../HomeClient";
import { getDictionary } from "../../get-dictionary";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return {
    title: isAr
      ? "روتو ستار | الشركة الرائدة في التغليف المرن وطباعة الروتوجرافور"
      : "Roto Star | Leading Flexible Packaging & Rotogravure Printing",
    description: isAr
      ? "إحداث ثورة في الانطباع الأول لعلامتك التجارية من خلال التغليف عالي الأداء. متخصصون في طباعة الروتوجرافور للشاي والقهوة والوجبات الخفيفة ومنتجات التغذية."
      : "Revolutionizing your brand's first impression with high-performance packaging. Specialized in rotogravure printing for tea, coffee, snacks, and nutrition products.",
    openGraph: {
      title: isAr ? "روتو ستار | التميز في التغليف المرن" : "Roto Star | Flexible Packaging Excellence",
      description: isAr
        ? "تغليف عالي الأداء يدمج الحماية المتطورة مع جاذبية بصرية لا تضاهى. مصمم بدقة لسوق عالمي."
        : "High-performance packaging that merges cutting-edge protection with unmatched visual appeal. Precision-engineered for a global market.",
    },
  };
}

export default async function Home({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <HomeClient lang={lang} dict={dict.home} />;
}
