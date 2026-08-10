import ProductsClient from "./ProductsClient";

export const metadata = {
  title: "Packaging Products | BOPP, PET, & Barrier Films",
  description: "Explore our wide range of flexible packaging solutions including BOPP, PET, AL, and twist wrapping materials. Custom engineered for food, snacks, and nutrition.",
  openGraph: {
    title: "High-Performance Packaging Products | Roto Star",
    description: "Quality barrier films and flexible packaging solutions for global industries.",
  },
};

export default function Products() {
  return <ProductsClient />;
}
