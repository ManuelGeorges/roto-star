"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar({ lang, dict }) {
  const navToggleRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  const getLanguagePath = (targetLang) => {
    const segments = pathname.split("/");
    segments[1] = targetLang;
    return segments.join("/");
  };

  const isAr = lang === "ar";

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="container nav-container">
        <Link href={`/${lang}`} className="logo" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Roto Star Logo"
            width={40}
            height={40}
            style={{ objectFit: 'contain', height: 'auto' }}
            priority
          />
          <div className="logo-text">
            <div className="brand-name">Roto Star</div>
            <div className="brand-tagline">{isAr ? "شركة طباعة" : "PRINTING COMPANY"}</div>
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
            <li><Link href={`/${lang}`} onClick={closeMenu}>{dict.home}</Link></li>
            <li><Link href={`/${lang}/company`} onClick={closeMenu}>{dict.company}</Link></li>
            <li><Link href={`/${lang}/process`} onClick={closeMenu}>{dict.process}</Link></li>
            <li><Link href={`/${lang}/products`} onClick={closeMenu}>{dict.products}</Link></li>
          </ul>

          <div className="nav-actions">
            <Link
              href={getLanguagePath(isAr ? "en" : "ar")}
              className="lang-switch"
              onClick={closeMenu}
            >
              <Globe size={16} />
              <span>{isAr ? "English" : "العربية"}</span>
            </Link>
            <Link href={`/${lang}/contact`} className="btn btn-primary btn-sm" onClick={closeMenu}>
              {dict.contact}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
