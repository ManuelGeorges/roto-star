import ProductsClient from "./ProductsClient";
import { getDictionary } from "../../../get-dictionary";
const siteUrl = "https://roto-star.com";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isAr = lang === "ar";

  const title = isAr
    ? "منتجات روتو ستار | حلول التغليف المرن والطباعة"
    : "Roto Star Products | Flexible Packaging Solutions";

  const description = isAr
    ? "اكتشف حلول التغليف المرن من روتو ستار، بما في ذلك BOPP وPET ومواد التغليف متعددة الطبقات وحلول التغليف المخصصة."
    : "Explore Roto Star flexible packaging solutions including BOPP, PET, multilayer packaging materials, and customized packaging solutions.";

  const canonical = `${siteUrl}/${lang}/products`;

  return {
    title,
    description,

    alternates: {
      canonical,
      languages: {
        en: `${siteUrl}/en/products`,
        ar: `${siteUrl}/ar/products`,
      },
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },

    openGraph: {
      type: "website",
      url: canonical,
      siteName: "Roto Star",
      title,
      description,
      locale: isAr ? "ar_EG" : "en_US",
      images: [
        {
          url: `${siteUrl}/images/carousel/13%20en.webp`,
          width: 1200,
          height: 630,
          alt: isAr
            ? "منتجات وحلول التغليف من روتو ستار"
            : "Roto Star flexible packaging products",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        `${siteUrl}/images/carousel/13%20en.webp`,
      ],
    },
  };
}

export default async function ProductsPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <ProductsClient
      lang={lang}
      dict={dict.products}
    />
  );
}