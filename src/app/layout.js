import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import { headers } from "next/headers";
import { getDictionary } from "../get-dictionary";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://roto-star.com"),
  title: {
    default: "Roto Star | Premium Flexible Packaging & Rotogravure Printing",
    template: "%s | Roto Star",
  },
  description: "Roto Star is a global leader in high-performance flexible packaging and rotogravure printing. Providing innovative solutions for food, beverages, and industrial products since 1996.",
  keywords: ["flexible packaging", "rotogravure printing", "packaging company Egypt", "food packaging", "custom printing", "BOPP packaging", "laminated films"],
  authors: [{ name: "Roto Star" }],
  creator: "Roto Star",
  publisher: "Roto Star",
  openGraph: {
    title: "Roto Star | Flexible Packaging Excellence",
    description: "Revolutionizing Your Brand's First Impression with high-performance packaging engineered for a global market.",
    url: "https://roto-star.com",
    siteName: "Roto Star",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Roto Star - Printing Excellence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roto Star | Flexible Packaging Excellence",
    description: "High-performance packaging merging protection with unmatched visual appeal.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "https://roto-star.com",
  },
};

export default async function RootLayout({ children }) {
  const headersList = await headers();
  const lang = headersList.get("x-lang") || "en";
  const isAr = lang === "ar";
  const dict = await getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Roto Star",
    "url": "https://roto-star.com",
    "logo": "https://roto-star.com/logo.png",
    "description": isAr ? "رائد في حلول التغليف المرن وطباعة الروتوجرافور." : "Leader in flexible packaging and rotogravure printing solutions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": isAr ? "المنطقة الصناعية الثانية - بلوك 1، قطعة 3" : "Second Industrial Zone - Block 1, Piece 3",
      "addressLocality": isAr ? "مدينة برج العرب" : "Borg El-Arab City",
      "addressRegion": isAr ? "الإسكندرية" : "Alexandria",
      "addressCountry": isAr ? "مصر" : "Egypt"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+20-3-4626243",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/share/1DEwYxzTCf/",
      "https://www.instagram.com/rotostar.socialmedia/"
    ]
  };

  return (
    <html lang={lang} dir={isAr ? "rtl" : "ltr"} className={`${poppins.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar lang={lang} dict={dict.navbar} />
        {children}
        <WhatsAppButton lang={lang} />
        <Footer lang={lang} dict={dict.footer} />
      </body>
    </html>
  );
}
