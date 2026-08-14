import ProductDetailClient from "../../../products/detail/ProductDetailClient";
import { getDictionary } from "../../../../get-dictionary";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return {
    title: isAr ? "تفاصيل المنتج | روتو ستار" : "Product Details | Roto Star",
    description: isAr
      ? "المواصفات الفنية وتطبيقات حلول التغليف المرنة لدينا."
      : "Technical specifications and applications of our flexible packaging solutions.",
  };
}

export default async function ProductDetail({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <ProductDetailClient lang={lang} dict={dict.products} />;
}
