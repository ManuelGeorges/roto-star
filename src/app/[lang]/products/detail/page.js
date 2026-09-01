import ProductDetailClient from "./ProductDetailClient";
import { getDictionary } from "../../../../get-dictionary";
const productTitles = {
  bopp: {
    ar: "تغليف BOPP للوجبات الخفيفة والشيبس",
    en: "BOPP Packaging for Snacks and Chips",
  },
  "pet-al-pe-or-cpp": {
    ar: "تغليف رقائق الألومنيوم (PET+AL+PE) للقهوة",
    en: "Aluminum Foil Packaging (PET+AL+PE) for Coffee",
  },
  "pet-pe-milky-or-trans": {
    ar: "تغليف منظفات وسوائل (PET+PE)",
    en: "Detergent and Liquid Packaging (PET+PE)",
  },
  "twist-wrapping-material": {
    ar: "ورق تغليف حلويات ملتوي (تويست)",
    en: "Confectionery Twist Wrapping Material",
  },
  "bopp-pearlized": {
    ar: "تغليف لؤلؤي (BOPP Pearlized) للأيس كريم",
    en: "Pearlized BOPP Packaging for Ice Cream",
  },
  "bopp-cpp": {
    ar: "تغليف أرز وبقوليات (BOPP+CPP)",
    en: "Rice and Legumes Packaging (BOPP+CPP)",
  },
};

const productDescriptions = {
  bopp: {
    ar: "حلول تغليف BOPP عالية الوضوح وقابلة للطباعة ومقاومة للرطوبة، مناسبة للشيبس والوجبات الخفيفة والشوكولاتة والبسكويت.",
    en: "High-clarity, printable and moisture-resistant BOPP packaging solutions for chips, snacks, chocolate, biscuits and more.",
  },
  "pet-al-pe-or-cpp": {
    ar: "تغليف مرن متعدد الطبقات من PET والألومنيوم وPE أو CPP لتوفير حماية حاجزية متقدمة للمنتجات الغذائية والقهوة.",
    en: "High-barrier flexible packaging made from PET, aluminum and PE or CPP for coffee and food products.",
  },
  "pet-pe-milky-or-trans": {
    ar: "حلول تغليف PET وPE الحليمة أو الشفافة للمنظفات والسوائل والأرز والسكر والبقوليات وغيرها.",
    en: "Durable PET and milky or transparent PE packaging solutions for detergents, liquids, rice, sugar, legumes and more.",
  },
  "twist-wrapping-material": {
    ar: "مواد تغليف تويست مرنة ومتنوعة للحلويات والشوكولاتة مع خيارات شفافة وحليبية ومعدنية.",
    en: "Flexible twist wrapping materials for confectionery and chocolate, available in transparent, milky and metallized options.",
  },
  "bopp-pearlized": {
    ar: "أفلام BOPP لؤلؤية لمظهر مميز وجاذبية أعلى على الرف، مناسبة للأيس كريم والملصقات.",
    en: "Pearlized BOPP films offering a premium appearance and enhanced shelf appeal for ice cream and labels.",
  },
  "bopp-cpp": {
    ar: "حلول تغليف BOPP وCPP قابلة للختم الحراري لمجموعة متنوعة من المنتجات الغذائية والبقوليات والأرز والمعكرونة.",
    en: "Strong, heat-sealable BOPP and CPP packaging solutions for rice, legumes, pasta and a wide range of food products.",
  },
};

export async function generateStaticParams() {
  return [
    { lang: "ar" },
    { lang: "en" },
  ];
}

export async function generateMetadata({ params, searchParams }) {
  const { lang } = await params;
  const { type } = await searchParams;

  const isAr = lang === "ar";
  const productType = type || "bopp";

  const titleData = productTitles[productType] || productTitles.bopp;
  const descriptionData =
    productDescriptions[productType] || productDescriptions.bopp;

  const title = titleData[isAr ? "ar" : "en"];
  const description = descriptionData[isAr ? "ar" : "en"];

  const canonical = `https://roto-star.com/${lang}/products/detail?type=${encodeURIComponent(
    productType
  )}`;

  const englishUrl = `https://roto-star.com/en/products/detail?type=${encodeURIComponent(
    productType
  )}`;

  const arabicUrl = `https://roto-star.com/ar/products/detail?type=${encodeURIComponent(
    productType
  )}`;

  return {
    title: `${title} | Roto Star`,
    description,

    keywords: isAr
      ? [
          "روتو ستار",
          "تغليف مرن",
          "تغليف BOPP",
          "تغليف PET",
          "تغليف ألومنيوم",
          "تغليف غذائي",
          title,
        ]
      : [
          "Roto Star",
          "flexible packaging",
          "BOPP packaging",
          "PET packaging",
          "aluminum foil packaging",
          "food packaging",
          title,
        ],

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

    alternates: {
      canonical,
      languages: {
        "en-US": englishUrl,
        "ar-EG": arabicUrl,
        "x-default": englishUrl,
      },
    },

    openGraph: {
      title: `${title} | Roto Star`,
      description,
      url: canonical,
      siteName: "Roto Star",
      type: "website",
      locale: isAr ? "ar_EG" : "en_US",
      alternateLocale: isAr ? ["en_US"] : ["ar_EG"],
      images: [
        {
          url: "https://roto-star.com/images/carousel/13%20en.webp",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | Roto Star`,
      description,
      images: ["https://roto-star.com/images/carousel/13%20en.webp"],
    },
  };
}

export default async function ProductDetail({ params, searchParams }) {
  const { lang } = await params;
  const { type } = await searchParams;

  const dict = await getDictionary(lang);

  const productType = type || "bopp";
  const isAr = lang === "ar";

  const titleData = productTitles[productType] || productTitles.bopp;
  const descriptionData =
    productDescriptions[productType] || productDescriptions.bopp;

  const title = titleData[isAr ? "ar" : "en"];
  const description = descriptionData[isAr ? "ar" : "en"];

  const canonical = `https://roto-star.com/${lang}/products/detail?type=${encodeURIComponent(
    productType
  )}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    description,
    brand: {
      "@type": "Brand",
      name: "Roto Star",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Roto Star",
      url: "https://roto-star.com",
    },
    category: "Flexible Packaging",
    url: canonical,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isAr ? "الرئيسية" : "Home",
        item: `https://roto-star.com/${lang}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isAr ? "المنتجات" : "Products",
        item: `https://roto-star.com/${lang}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: canonical,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <ProductDetailClient
        lang={lang}
        dict={dict.products}
        type={productType}
      />
    </>
  );
}