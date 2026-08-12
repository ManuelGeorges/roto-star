"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Navbar() {
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
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="container nav-container">
        <Link href="/" className="logo" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Roto Star Logo - Flexible Packaging Leader"
            width={40}
            height={40}
            style={{ objectFit: 'contain', height: 'auto' }}
            priority
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
          </ul>
          <div className="nav-actions">
            <Link href="/contact" className="btn btn-primary btn-sm" onClick={closeMenu}>Contact us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
