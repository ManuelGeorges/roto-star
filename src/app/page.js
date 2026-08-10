import HomeClient from "./HomeClient";

export const metadata = {
  title: "Roto Star | Leading Flexible Packaging & Rotogravure Printing",
  description: "Revolutionizing your brand's first impression with high-performance packaging. Specialized in rotogravure printing for tea, coffee, snacks, and nutrition products.",
  openGraph: {
    title: "Roto Star | Flexible Packaging Excellence",
    description: "High-performance packaging that merges cutting-edge protection with unmatched visual appeal. Precision-engineered for a global market.",
  },
};

export default function Home() {
  return <HomeClient />;
}
