import CompanyClient from "./CompanyClient";

export const metadata = {
  title: "About Roto Star | 28+ Years of Packaging Excellence",
  description: "Learn about Roto Star's journey from Aleppo to Alexandria. We are a global leader in high-performance rotogravure printing and flexible packaging solutions.",
  openGraph: {
    title: "About Roto Star | Built on Trust, Driven by Innovation",
    description: "Discover our mission, vision, and 28-year history in the printing industry.",
  },
};

export default function Company() {
  return <CompanyClient />;
}
