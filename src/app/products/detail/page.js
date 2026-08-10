import ProductDetailClient from "./ProductDetailClient";
import { Suspense } from "react";

export const metadata = {
  title: "Product Details | High-Performance Packaging Structures",
  description: "Detailed technical specifications for our flexible packaging materials, including BOPP, PET, Aluminium laminates, and more. Custom structures for specialized industrial needs.",
};

export default function ProductDetail() {
  return (
    <main style={{ background: '#fff', paddingTop: '8rem' }}>
      <Suspense fallback={<div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>Loading product details...</div>}>
        <ProductDetailClient />
      </Suspense>
    </main>
  );
}
