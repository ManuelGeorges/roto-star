import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Printer, Mail } from "lucide-react";

const FacebookIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function Footer({ lang = "en", dict }) {
  if (!dict) return null;

  const isAr = lang === "ar";

  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-grid">
          <div className="animate-fade-up">
            <div className="logo" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
              <Image
                src="/logo.png"
                alt="Roto Star Logo"
                width={40}
                height={40}
                style={{ height: 'auto' }}
              />
              <div className="logo-text">
                <div className="brand-name">Roto Star</div>
                <div className="brand-tagline">{isAr ? "شركة طباعة" : "PRINTING COMPANY"}</div>
              </div>
            </div>
            <p className="footer-desc" style={{ marginBottom: '1.5rem' }}>
              {dict.description || "Delivering world-class flexible packaging solutions."}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1DEwYxzTCf/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Roto Star on Facebook"
                className="text-primary transition-all duration-300 ease-in-out hover:opacity-80 hover:-translate-y-1"
              >
                <FacebookIcon size={24} />
              </a>
              <a
                href="https://www.instagram.com/rotostar.socialmedia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Roto Star on Instagram"
                className="text-primary transition-all duration-300 ease-in-out hover:opacity-80 hover:-translate-y-1"
              >
                <InstagramIcon size={24} />
              </a>
              <div
                aria-label="Roto Star on LinkedIn"
                className="text-primary transition-all duration-300 ease-in-out hover:opacity-80 hover:-translate-y-1 cursor-default"
              >
                <LinkedinIcon size={24} />
              </div>
            </div>
          </div>

          <div className="animate-fade-up delay-1">
            <h4 className="footer-title">{dict.quickLinks || "Quick Links"}</h4>
            <ul className="footer-links">
              <li><Link href={`/${lang}`}>{dict.links?.home || "Home"}</Link></li>
              <li><Link href={`/${lang}/company`}>{dict.links?.company || "Company"}</Link></li>
              <li><Link href={`/${lang}/process`}>{dict.links?.process || "Process"}</Link></li>
              <li><Link href={`/${lang}/products`}>{dict.links?.products || "Products"}</Link></li>
              <li><Link href={`/${lang}/contact`}>{dict.links?.contact || "Contact"}</Link></li>
            </ul>
          </div>

          <div className="animate-fade-up delay-2">
            <h4 className="footer-title">{dict.contactUs || "Contact Us"}</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <MapPin size={20} className="text-primary" />
                <p>
                  {isAr ? "المنطقة الصناعية الثانية - بلوك 1،" : "Second Industrial Zone - Block 1,"}<br />
                  {isAr ? "قطعة 3، مدينة برج العرب" : "Piece 3, Borg El-Arab City"}
                </p>
              </div>
              <div className="contact-item">
                <Phone size={20} className="text-primary" />
                <div className="phone-list">
                  <p dir="ltr">+20 (3) 46 26 243</p>
                  <p dir="ltr">+20 (3) 46 26 344</p>
                </div>
              </div>
              <div className="contact-item">
                <Printer size={20} className="text-primary" />
                <p dir="ltr">+20 (3) 46 26 054</p>
              </div>
              <div className="contact-item">
                <Mail size={20} className="text-primary" />
                <p>info@roto-star.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{dict.rights || "© Roto Star. All rights reserved."}</p>
        </div>
      </div>
    </footer>
  );
}
