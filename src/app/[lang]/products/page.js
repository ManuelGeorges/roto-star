import ProductsClient from "../../products/ProductsClient";
import { getDictionary } from "../../../get-dictionary";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return {
    title: isAr ? "منتجات التغليف | BOPP و PET وأفلام الحاجز" : "Packaging Products | BOPP, PET, & Barrier Films",
    description: isAr
      ? "استكشف مجموعتنا الواسعة من حلول التغليف المرنة بما في ذلك BOPP و PET و AL ومواد تغليف التويست. مصممة خصيصًا للأغذية والوجبات الخفيفة والتغذية."
      : "Explore our wide range of flexible packaging solutions including BOPP, PET, AL, and twist wrapping materials. Custom engineered for food, snacks, and nutrition.",
  };
}

export default async function Products({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <ProductsClient lang={lang} dict={dict.products} />;
}
