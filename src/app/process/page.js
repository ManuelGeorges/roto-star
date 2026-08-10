import ProcessClient from "./ProcessClient";

export const metadata = {
  title: "Our Process | Precision Rotogravure Printing",
  description: "Discover how Roto Star transforms ideas into packaging masterpieces through our 3-step process: Create, Design, and Print. Advanced rotogravure technology for superior results.",
  openGraph: {
    title: "Our Process | From Idea to Packaging Masterpiece",
    description: "High-fidelity design, professional prepress services, and advanced rotogravure printing capabilities.",
  },
};

export default function Process() {
  return <ProcessClient />;
}
