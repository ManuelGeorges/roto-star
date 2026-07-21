"use client";
import { Layers, Grid, Palette, Shield, Maximize2, Printer, Check, Download, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProductDetail() {
  const specs = [
    {
      icon: <Layers size={20} className="text-primary" />,
      title: "Structure / Material",
      desc: "BOPP / CPP or BOPP / MET BOPP / CPP"
    },
    {
      icon: <Grid size={20} className="text-primary" />,
      title: "Applications",
      desc: "Potato Chips, Corn Snacks, Namkeen, Extruded Snacks"
    },
    {
      icon: <Palette size={20} className="text-primary" />,
      title: "Finish",
      desc: "Gloss / Matte, UV Reverse Printing"
    },
    {
      icon: <Shield size={20} className="text-primary" />,
      title: "Barrier Properties",
      desc: "Good Moisture Barrier, High Oxygen Barrier (with Metallized Layer)"
    },
    {
      icon: <Maximize2 size={20} className="text-primary" />,
      title: "Dimensions",
      desc: "Width: 100mm - 1200mm, Thickness: 20 - 60 microns"
    },
    {
      icon: <Printer size={20} className="text-primary" />,
      title: "Printing",
      desc: "Up to 10 Colors, High Definition Rotogravure"
    }
  ];

  const benefits = [
    "Excellent print clarity and shelf impact",
    "Protects product freshness and crunch",
    "Superior seal strength and durability",
    "Customizable for different pack sizes"
  ];

  return (
    <main style={{ background: '#fff', paddingTop: '8rem' }}>
      <div className="container">
        <div className="animate-fade" style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem', color: '#888', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> /
          <Link href="/products" style={{ color: 'inherit', textDecoration: 'none', marginLeft: '5px' }}>Products</Link> /
          <span style={{ marginLeft: '5px' }}>BOPP</span> /
          <span style={{ color: '#111', fontWeight: '600', marginLeft: '5px' }}>Zain Potato Chips Packaging</span>
        </div>

        <div className="product-detail-grid">
          <div className="animate-fade-up">
            <div className="product-main-image animate-fade">
               <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '900', color: '#ddd' }}>PRODUCT IMAGE</div>
                  <div style={{ fontSize: '0.9rem', color: '#aaa', marginTop: '1rem' }}>ZAIN POTATO CHIPS</div>
               </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`animate-fade-up delay-${(i % 3) + 1}`} style={{
                  aspectRatio: '1',
                  background: '#F9F9F9',
                  borderRadius: '8px',
                  border: i === 1 ? '2px solid var(--primary)' : '1px solid #eee',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ccc',
                  fontSize: '0.7rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>THUMB {i}</div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ marginBottom: '2.5rem' }} className="animate-fade-up delay-1">
              <span style={{
                background: 'var(--primary)',
                color: '#000',
                fontSize: '0.65rem',
                fontWeight: '800',
                padding: '0.3rem 0.8rem',
                borderRadius: '4px',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>BOPP</span>
              <h1 className="product-detail-title" style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#111' }}>Zain Potato Chips Packaging</h1>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: '1.05rem' }}>
                High-performance BOPP packaging for snack products, delivering excellent print quality, freshness protection, and shelf appeal.
              </p>
            </div>

            <div className="product-info-flex">
              <div style={{ flex: 1 }}>
                <div className="product-specs-grid">
                  {specs.map((spec, i) => (
                    <div key={i} className={`animate-fade-up delay-${(i % 3) + 1}`}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                        {spec.icon}
                        <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#111' }}>{spec.title}</h4>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: '#666', paddingLeft: '2.8rem', lineHeight: '1.4' }}>{spec.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="animate-fade-up delay-3">
                  <h4 style={{ fontSize: '0.9rem', fontWeight: '800', marginBottom: '1.2rem', color: '#111' }}>Key Benefits</h4>
                  <div className="product-benefits-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                    {benefits.map((benefit, i) => (
                      <div key={i} className="animate-fade delay-3" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <div style={{ color: 'var(--primary)' }}><Check size={16} strokeWidth={3} /></div>
                        <span style={{ fontSize: '0.8rem', color: '#444', fontWeight: '500' }}>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="product-sidebar-card animate-fade-up delay-2">
                <div style={{
                  background: '#000',
                  color: '#fff',
                  padding: '2rem',
                  borderRadius: '16px',
                  textAlign: 'center',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ background: '#222', padding: '0.8rem', borderRadius: '12px' }}>
                       <Check size={24} className="text-primary pulse-soft" />
                    </div>
                  </div>
                  <h4 style={{ fontWeight: '800', fontSize: '1.1rem', marginBottom: '1rem' }}>Request a Quote</h4>
                  <p style={{ fontSize: '0.8rem', color: '#aaa', lineHeight: '1.5', marginBottom: '2rem' }}>
                    Tell us about your packaging requirements and our team will get back to you with the best solutions.
                  </p>
                  <button className="btn btn-primary" style={{ width: '100%', borderRadius: '8px', padding: '1rem', gap: '8px' }}>
                    Get a Quote <ArrowRight size={16} />
                  </button>
                  <a href="#" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    color: '#fff',
                    fontSize: '0.8rem',
                    marginTop: '1.5rem',
                    textDecoration: 'none',
                    opacity: 0.8,
                    transition: 'opacity 0.3s ease'
                  }} className="hover-opacity-100">
                    <Download size={16} /> Download Datasheet
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
