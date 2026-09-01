import CompanyClient from "./CompanyClient";
import { getDictionary } from "../../../get-dictionary";
const BASE_URL = "https://www.roto-star.com";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isAr = lang === "ar";

  const title = isAr
    ? "عن روتو ستار | أكثر من 30 عامًا من التميز في التغليف"
    : "About Roto Star | 30+ Years of Packaging Excellence";

  const description = isAr
    ? "تعرف على رحلة روتو ستار من حلب إلى الإسكندرية. شركة رائدة في حلول طباعة الروتوجرافور والتغليف المرن عالي الأداء."
    : "Learn about Roto Star's journey from Aleppo to Alexandria. A leading company in high-performance rotogravure printing and flexible packaging solutions.";

  const url = `${BASE_URL}/${lang}/company`;

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,

    alternates: {
      canonical: url,
      languages: {
        en: `${BASE_URL}/en/company`,
        ar: `${BASE_URL}/ar/company`,
        "x-default": `${BASE_URL}/en/company`,
      },
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Roto Star",
      type: "website",
      locale: isAr ? "ar_EG" : "en_US",
      alternateLocale: isAr ? ["en_US"] : ["ar_EG"],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
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

export default async function Company({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <CompanyClient
      lang={lang}
      dict={dict.company}
    />
  );
}
