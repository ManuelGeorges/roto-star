import ProcessClient from "./ProcessClient";
import { getDictionary } from "../../../get-dictionary";
const BASE_URL = "https://www.roto-star.com";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isAr = lang === "ar";

  const title = isAr
    ? "عملية التصنيع والطباعة | روتو ستار للتغليف المرن"
    : "Our Process | Precision Rotogravure Printing & Flexible Packaging";

  const description = isAr
    ? "اكتشف عملية روتو ستار في تصميم وتصنيع حلول التغليف المرن وطباعة الروتوجرافور، من الفكرة والتصميم إلى الطباعة والإنتاج عالي الجودة."
    : "Discover Roto Star's process for designing and manufacturing flexible packaging and rotogravure printing solutions, from concept and design to precision printing and production.";

  const url = `${BASE_URL}/${lang}/process`;

  return {
    metadataBase: new URL(BASE_URL),

    title,
    description,

    alternates: {
      canonical: url,
      languages: {
        en: `${BASE_URL}/en/process`,
        ar: `${BASE_URL}/ar/process`,
        "x-default": `${BASE_URL}/en/process`,
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

export default async function Process({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const isAr = lang === "ar";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/${lang}/process#webpage`,
        url: `${BASE_URL}/${lang}/process`,
        name: isAr
          ? "عملية التصنيع والطباعة | روتو ستار"
          : "Our Process | Roto Star",
        description: isAr
          ? "عملية روتو ستار في تصميم وتصنيع حلول التغليف المرن وطباعة الروتوجرافور."
          : "Roto Star's process for designing and manufacturing flexible packaging and rotogravure printing solutions.",
        inLanguage: isAr ? "ar-EG" : "en-US",
        isPartOf: {
          "@id": `${BASE_URL}/#website`,
        },
        about: {
          "@id": `${BASE_URL}/#organization`,
        },
      },
      {
        "@type": "HowTo",
        "@id": `${BASE_URL}/${lang}/process#howto`,
        name: isAr
          ? "عملية روتو ستار للتغليف المرن والطباعة"
          : "Roto Star Flexible Packaging & Rotogravure Printing Process",
        description: isAr
          ? "عملية متكاملة لتحويل أفكار التغليف إلى منتجات مطبوعة عالية الجودة."
          : "An integrated process for transforming packaging concepts into high-quality printed products.",
        totalTime: "P3D",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: isAr ? "الابتكار" : "Create",
            url: `${BASE_URL}/${lang}/process#step-1`,
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: isAr ? "التصميم" : "Design",
            url: `${BASE_URL}/${lang}/process#step-2`,
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: isAr ? "الطباعة" : "Print",
            url: `${BASE_URL}/${lang}/process#step-3`,
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Roto Star",
        url: BASE_URL,
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Roto Star",
        publisher: {
          "@id": `${BASE_URL}/#organization`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <ProcessClient
        lang={lang}
        dict={dict.process}
      />
    </>
  );
}
