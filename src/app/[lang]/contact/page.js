import ContactClient from "./ContactClient";
import { getDictionary } from "../../../get-dictionary";
const BASE_URL = "https://www.roto-star.com";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isAr = lang === "ar";

  const title = isAr
    ? "اتصل بنا | روتو ستار للتغليف المرن وطباعة الروتوجرافور"
    : "Contact Roto Star | Flexible Packaging & Rotogravure Printing";

  const description = isAr
    ? "تواصل مع روتو ستار في برج العرب، الإسكندرية للحصول على حلول التغليف المرن وطباعة الروتوجرافور المخصصة. تواصل مع فريق الخبراء اليوم."
    : "Contact Roto Star in Borg El Arab, Alexandria for custom flexible packaging and rotogravure printing solutions. Get in touch with our expert team today.";

  const url = `${BASE_URL}/${lang}/contact`;

  return {
    metadataBase: new URL(BASE_URL),

    title,
    description,

    alternates: {
      canonical: url,
      languages: {
        en: `${BASE_URL}/en/contact`,
        ar: `${BASE_URL}/ar/contact`,
        "x-default": `${BASE_URL}/en/contact`,
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

export default async function Contact({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const isAr = lang === "ar";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#organization`,
    name: "Roto Star",
    url: BASE_URL,
    description: isAr
      ? "روتو ستار متخصصة في حلول التغليف المرن وطباعة الروتوجرافور عالية الأداء."
      : "Roto Star specializes in high-performance flexible packaging and rotogravure printing solutions.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Second Industrial Zone - Block 1, Piece 3",
      addressLocality: "Borg El Arab City",
      addressRegion: "Alexandria",
      addressCountry: "EG",
    },
    telephone: [
      "+20 3 46 26 243",
      "+20 3 46 26 344",
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

      <ContactClient
        lang={lang}
        dict={dict.contact}
      />
    </>
  );
}
