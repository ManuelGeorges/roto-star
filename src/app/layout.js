"use client";

import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Menu, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const navToggleRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    if (navToggleRef.current) {
      navToggleRef.current.checked = false;
    }
  };

  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="antialiased">
        <nav className={scrolled ? "scrolled" : ""}>
          <div className="container nav-container">
            <Link href="/" className="logo" onClick={closeMenu}>
              <Image
                src="/logo.png"
                alt="Roto Star Logo"
                width={40}
                height={40}
                style={{ objectFit: 'contain' }}
              />
              <div className="logo-text">
                <div className="brand-name">Roto Star</div>
                <div className="brand-tagline">PRINTING COMPANY</div>
              </div>
            </Link>

            <input
              type="checkbox"
              id="nav-toggle"
              className="nav-toggle"
              ref={navToggleRef}
            />

            <label htmlFor="nav-toggle" className="nav-toggle-label">
              <Menu size={28} className="menu-icon" />
              <X size={28} className="close-icon" />
            </label>

            <div className="nav-menu">
              <ul className="nav-links">
                <li><Link href="/" onClick={closeMenu}>Home</Link></li>
                <li><Link href="/company" onClick={closeMenu}>Company</Link></li>
                <li><Link href="/process" onClick={closeMenu}>Our Process</Link></li>
                <li><Link href="/products" onClick={closeMenu}>Products</Link></li>
                <li><Link href="/contact" onClick={closeMenu}>Contact Us</Link></li>
              </ul>
              <div className="nav-actions">
                <Link href="/contact" className="btn btn-primary btn-sm" onClick={closeMenu}>Get a Quote</Link>
              </div>
            </div>
          </div>
        </nav>

        {children}

        <footer className="footer-main">
          <div className="container">
            <div className="footer-grid">
              <div className="animate-fade-up">
                <Link href="/" className="logo" style={{ marginBottom: '1.5rem' }}>
                  <Image
                    src="/logo.png"
                    alt="Roto Star Logo"
                    width={40}
                    height={40}
                  />
                  <div className="logo-text">
                    <div className="brand-name">Roto Star</div>
                    <div className="brand-tagline">PRINTING COMPANY</div>
                  </div>
                </Link>
                <p className="footer-desc">
                  Delivering world-class flexible packaging solutions with precision and passion since 2007.
                </p>
              </div>

              <div className="animate-fade-up delay-1">
                <h4 className="footer-title">Quick Links</h4>
                <ul className="footer-links">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/company">Company</Link></li>
                  <li><Link href="/process">Our Process</Link></li>
                  <li><Link href="/products">Products</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>

              <div className="animate-fade-up delay-2">
                <h4 className="footer-title">Contact Us</h4>
                <div className="footer-contact">
                  <div className="contact-item">
                    <MapPin size={20} className="text-primary" />
                    <p>
                      Second Industrial Zone - Block 1, Piece 3,<br />
                      Borg El-Arab City, Alexandria, Egypt
                    </p>
                  </div>
                  <div className="contact-item">
                    <Phone size={20} className="text-primary" />
                    <div className="phone-list">
                      <p>+20 (3) 46 26 243</p>
                      <p>+20 (3) 46 26 344</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p>Copyright © 2007 - 2026 Roto Star. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
