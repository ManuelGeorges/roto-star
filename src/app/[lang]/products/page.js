import ProductsClient from "../../products/ProductsClient";
import { getDictionary } from "../../../get-dictionary";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return {
    title: isAr ? "منتجات التغليف المرن | BOPP، PET، وبارير فيلمز" : "Flexible Packaging Products | BOPP, PET, & Barrier Films",
    description: isAr
      ? "تصفح مجموعة منتجات روتو ستار من حلول التغليف المرنة: BOPP، PET، رقائق الألومنيوم، وأفلام التغليف الملتوية. جودة عالمية للصناعات الغذائية."
      : "Explore Roto Star's range of flexible packaging solutions: BOPP, PET, Aluminum foil, and twist wrapping films. World-class quality for food industries.",
    alternates: {
      canonical: `https://roto-star.com/${lang}/products`,
      languages: {
        'en-US': 'https://roto-star.com/en/products',
        'ar-EG': 'https://roto-star.com/ar/products',
      },
    },
    openGraph: {
      title: isAr ? "حلول التغليف المبتكرة من روتو ستار" : "Innovative Packaging Solutions by Roto Star",
      description: isAr ? "أفضل مواد التغليف لمنتجاتك مع طباعة روتوجرافور عالية الدقة." : "Best packaging materials for your products with high-precision rotogravure printing.",
      images: ["/images/carousel/13 en.webp"],
    }
  };
}

export default async function Products({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const isAr = lang === "ar";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "BOPP",
        "description": isAr ? "وضوح عالٍ ومقاومة للرطوبة" : "High clarity and moisture resistance"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "PET + AL + PE",
        "description": isAr ? "حماية حاجزة متقدمة" : "Advanced barrier protection"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductsClient lang={lang} dict={dict.products} />
    </>
  );
}
