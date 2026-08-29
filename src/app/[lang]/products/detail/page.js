import ProductDetailClient from "../../../products/detail/ProductDetailClient";
import { getDictionary } from "../../../../get-dictionary";

export async function generateMetadata({ params, searchParams }) {
  const { lang } = await params;
  const { type } = await searchParams;
  const isAr = lang === "ar";

  const productTitles = {
    "bopp": isAr ? "تغليف BOPP للوجبات الخفيفة والشيبس" : "BOPP Packaging for Snacks and Chips",
    "pet-al-pe-or-cpp": isAr ? "تغليف رقائق الألومنيوم (PET+AL+PE) للقهوة" : "Aluminum Foil Packaging (PET+AL+PE) for Coffee",
    "pet-pe-milky-or-trans": isAr ? "تغليف منظفات وسوائل (PET+PE)" : "Detergent and Liquid Packaging (PET+PE)",
    "twist-wrapping-material": isAr ? "ورق تغليف حلويات ملتوي (تويست)" : "Confectionery Twist Wrapping Material",
    "bopp-pearlized": isAr ? "تغليف لؤلؤي (BOPP Pearlized) للأيس كريم" : "Pearlized BOPP Packaging for Ice Cream",
    "bopp-cpp": isAr ? "تغليف أرز وبقوليات (BOPP+CPP)" : "Rice and Legumes Packaging (BOPP+CPP)"
  };

  const title = productTitles[type] || (isAr ? "تفاصيل المنتج" : "Product Details");

  return {
    title: `${title} | Roto Star`,
    description: isAr
      ? `اكتشف المواصفات الفنية لـ ${title}. حلول تغليف مرنة عالية الجودة من روتو ستار مصر.`
      : `Explore technical specifications for ${title}. High-quality flexible packaging solutions by Roto Star Egypt.`,
    alternates: {
      canonical: `https://roto-star.com/${lang}/products/detail?type=${type}`,
      languages: {
        'en-US': `https://roto-star.com/en/products/detail?type=${type}`,
        'ar-EG': `https://roto-star.com/ar/products/detail?type=${type}`,
      },
    },
  };
}

export default async function ProductDetail({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <ProductDetailClient lang={lang} dict={dict.products} />;
}
