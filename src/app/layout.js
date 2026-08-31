import { Poppins } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";

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
  description: "Roto Star is a global leader in high-performance flexible packaging and rotogravure printing.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default async function RootLayout({ children }) {
  const headersList = await headers();
  const lang = headersList.get("x-lang") || "en";
  const isAr = lang === "ar";

  return (
    <html lang={lang} dir={isAr ? "rtl" : "ltr"} className={`${poppins.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
