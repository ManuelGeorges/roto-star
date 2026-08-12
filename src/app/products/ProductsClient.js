"use client";
import { Search, ArrowRight, LayoutGrid, Info, Shield, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ProductsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const categories = [
    "All Categories", "BOPP", "PET + AL + PE or CPP", "PET + PE Milky or Trans.", "Twist Wrapping Material", "BOPP Pearlized", "BOPP + CPP"
  ];

  const products = [
    {
      title: "BOPP",
      slug: "bopp",
      desc: "High clarity, excellent printability and moisture resistance for chips, snacks and more.",
      image: "/images/mockup/ChocoSyria/Serial Wafer Mockup  chocolate.webp"
    },
    {
      title: "PET + AL + PE or CPP",
      slug: "pet-al-pe-or-cpp",
      desc: "Advanced barrier protection for extended shelf life and product freshness.",
      image: "/images/mockup/Fakakes/Vacakis 100g mockup 2.webp"
    },
    {
      title: "PET + PE Milky or Trans.",
      slug: "pet-pe-milky-or-trans",
      desc: "Versatile packaging with high durability and excellent seal performance.",
      image: "/images/mockup/Saida/Saida 3.webp"
    },
    {
      title: "Twist Wrapping Material",
      slug: "twist-wrapping-material",
      desc: "Premium twist films for candies and confectionery with superior twist retention.",
      image: "/images/mockup/ChocoSyria/Nay mockup nero.webp"
    },
    {
      title: "BOPP Pearlized",
      slug: "bopp-pearlized",
      desc: "Elegant pearlized finish for premium look and enhanced shelf appeal.",
      image: "/images/mockup/Mini Top/Mini top mockup.webp"
    },
    {
      title: "BOPP + CPP",
      slug: "bopp-cpp",
      desc: "Strong, heat-sealable solutions ideal for wide range of food applications.",
      image: "/images/mockup/Elegance/Elegance mockup.webp"
    }
  ];

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All Categories" || p.title === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main style={{ background: '#fff' }}>
      <section className="hero products-hero" style={{
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/images/carousel/13 en.webp") center/cover',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 className="hero-title-responsive animate-fade-up" style={{ fontWeight: '800', marginBottom: '1rem' }}>Our Products</h1>
          <div className="animate-fade delay-1" style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', fontSize: '0.9rem', opacity: 0.8 }}>
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--primary)', fontWeight: '600' }}>Products</span>
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 0', background: '#fcfcfc', borderBottom: '1px solid #eee' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div className="animate-fade filter-container-scroll">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(cat)}
                  className="filter-btn"
                  style={{
                    padding: '0.7rem 1.4rem',
                    borderRadius: '6px',
                    border: activeCategory === cat ? 'none' : '1px solid #eee',
                    background: activeCategory === cat ? 'var(--primary)' : '#fff',
                    color: '#000',
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    boxShadow: activeCategory === cat ? '0 4px 12px rgba(255,189,0,0.2)' : 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="animate-fade-up delay-1" style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', width: '100%', justifyContent: 'space-between' }}>
              <div style={{ position: 'relative', flex: '1', minWidth: '250px' }}>
                <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ padding: '0.75rem 1rem 0.75rem 2.8rem', borderRadius: '8px', border: '1px solid #eee', outline: 'none', width: '100%', fontSize: '0.9rem' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="grid-3">
            {filteredProducts.map((product, i) => (
              <Link href={`/products/detail?type=${product.slug}`} key={i} className={`animate-fade-up delay-${(i % 3) + 1}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="product-card-horizontal">
                  <div className="product-img-wrapper" style={{
                    width: '130px',
                    height: '150px',
                    background: '#f8f8f8',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid #f0f0f0',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      className="product-img-photo"
                      loading="lazy"
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '0.8rem', color: '#111' }}>{product.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.6', marginBottom: '1.8rem' }}>{product.desc}</p>
                    <div className="arrow-icon-circle" style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 10px rgba(255,189,0,0.3)',
                      transition: 'all 0.3s ease'
                    }}>
                      <ArrowRight size={18} color="#000" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="custom-solution-banner animate-fade-up">
            <div className="banner-content">
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#F9F9F9', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #eee', flexShrink: 0 }}>
                <HelpCircle className="text-primary pulse-soft" size={32} />
              </div>
              <div className="banner-text">
                <h4 style={{ fontWeight: '800', fontSize: '1.4rem', marginBottom: '0.4rem' }}>Looking for a custom solution?</h4>
                <p style={{ color: '#666', fontSize: '1rem' }}>Our team can help you choose the right material for your product.</p>
              </div>
            </div>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem', borderRadius: '10px', gap: '12px', fontSize: '1rem' }}>
              Request a Quote <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#111', color: '#fff', padding: '4rem 0' }}>
        <div className="container">
          <div className="grid-4">
            <div className="animate-fade-up delay-1" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{ color: 'var(--primary)' }}><LayoutGrid size={28} /></div>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#eee' }}>Comprehensive Product Range</div>
            </div>
            <div className="animate-fade-up delay-2" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{ color: 'var(--primary)' }}><Search size={28} /></div>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#eee' }}>Easy Search & Filtering</div>
            </div>
            <div className="animate-fade-up delay-3" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{ color: 'var(--primary)' }}><Info size={28} /></div>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#eee' }}>Premium Visual Presentation</div>
            </div>
            <div className="animate-fade-up delay-1" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{ color: 'var(--primary)' }}><Shield size={28} /></div>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#eee' }}>Material Clarity & Performance</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
