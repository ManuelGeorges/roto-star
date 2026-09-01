import HomeClient from "../HomeClient";
import { getDictionary } from "../../get-dictionary";

const BASE_URL = "https://www.roto-star.com";

export async function generateMetadata({ params }) {
  const { lang } = await params;

  const isAr = lang === "ar";

  const title = isAr
    ? "روتو ستار | الشركة الرائدة في التغليف المرن وطباعة الروتوجرافور"
    : "Roto Star | Leading Flexible Packaging & Rotogravure Printing";

  const description = isAr
    ? "إحداث ثورة في الانطباع الأول لعلامتك التجارية من خلال التغليف عالي الأداء. متخصصون في طباعة الروتوجرافور للتغليف المرن للشاي والقهوة والوجبات الخفيفة ومنتجات التغذية."
    : "Revolutionizing your brand's first impression with high-performance flexible packaging. Specialized in rotogravure printing for tea, coffee, snacks, and nutrition products.";

  const url = `${BASE_URL}/${lang}`;

  return {
    metadataBase: new URL(BASE_URL),

    title,

    description,

    alternates: {
      canonical: url,

      languages: {
        en: `${BASE_URL}/en`,
        ar: `${BASE_URL}/ar`,
        "x-default": `${BASE_URL}/en`,
      },
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Roto Star",
      type: "website",
      locale: isAr ? "ar_EG" : "en_US",
      alternateLocale: isAr
        ? ["en_US"]
        : ["ar_EG"],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function Home({ params }) {
  const { lang } = await params;

  const dict = await getDictionary(lang);

  return (
    <HomeClient
      lang={lang}
      dict={dict.home}
    />
  );
}
