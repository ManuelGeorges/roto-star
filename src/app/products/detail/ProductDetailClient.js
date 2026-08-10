"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

const productData = {
  "bopp": {
    title: "BOPP",
    info: [
      "BOPP Transparent printed",
      "(available from 15u to 60u)",
      "Laminated with",
      "BOPP Metalized",
      "(available from 15u to 60u)"
    ],
    items: [
      { name: "Chocolate", image: "/images/mockup/ChocoSyria/Chocolate BE CLOSE MOCKUP1.webp" },
      { name: "Wafer", image: "/images/mockup/ChocoSyria/Serial Wafer Mockup  chocolate.webp" },
      { name: "Chips", image: "/images/mockup/Akreem/Mockup1.webp" },
      { name: "Snack", image: "/images/mockup/El Raya/Free Orange Snack Bar Mockup.webp" },
      { name: "Biscuit", image: "/images/mockup/Elegance/Biscoto Mockup.webp" },
      { name: "Ice Cream", image: "/images/mockup/Saida/Saida 2.webp" }
    ]
  },
  "pet-al-pe-or-cpp": {
    title: "PET + AL + PE or CPP",
    info: [
      "PET Transparent printed",
      "(available from 12u to 25u)",
      "laminated with",
      "ALUMINIUM",
      "(available from 7u to 12u)",
      "laminated with",
      "PE or CPP",
      "(available from 20u to 100u)"
    ],
    items: [
      { name: "Cocoa Powder", image: "/images/mockup/Fakakes/Vacakis 100g mockup.webp" },
      { name: "Coffee Mix", image: "/images/mockup/Fakakes/Vacakis coffee 10g Mockup3.webp" },
      { name: "Vacuum Coffee", image: "/images/mockup/Fakakes/Vacakis 100g mockup 2.webp" },
      { name: "Nuts", image: "/images/mockup/El Raya/Mora mockup 1.webp" },
      { name: "Crackers", image: "/images/mockup/El Raya/Mora mockup 2.webp" },
      { name: "Flavour Powder", image: "/images/mockup/Al Nuba/mockup1.webp" }
    ]
  },
  "pet-pe-milky-or-trans": {
    title: "PET + PE Milky or Trans.",
    info: [
      "PET Transparent printed",
      "(available from 12u to 25u)",
      "Laminated with",
      "PE Milky or Trans.",
      "(available from 30u to 150u)"
    ],
    items: [
      { name: "Dish Washing Liquid", image: "/images/mockup/Saida/Saida 3.webp" },
      { name: "Automatic Machine Liquid", image: "/images/mockup/Saida/Saida 4.webp" },
      { name: "Rice", image: "/images/mockup/Saida/Saida 5.webp" },
      { name: "Detergent", image: "/images/mockup/Saida/Saida 6.webp" },
      { name: "Shampoo", image: "/images/mockup/Saida/Saida 7.webp" },
      { name: "Sugar", image: "/images/mockup/Akreem/Mockup2.webp" },
      { name: "Salt", image: "/images/mockup/Akreem/Mockup3.webp" },
      { name: "Legumes", image: "/images/mockup/Akreem/Mockup4.webp" },
      { name: "Nuts", image: "/images/mockup/Akreem/Mockup5.webp" }
    ]
  },
  "twist-wrapping-material": {
    title: "Twist Wrapping Material",
    info: [
      "Transparent - Milky - Metalize"
    ],
    items: [
      { name: "Bonbon", image: "/images/mockup/Swareen/cndy mockup hert 3.webp" },
      { name: "Chocolate Truffle", image: "/images/mockup/Swareen/cndy mockup hert 4.webp" },
      { name: "Chocolate", image: "/images/mockup/Swareen/cndy mockup hert 5.webp" }
    ]
  },
  "bopp-pearlized": {
    title: "Bopp. Pearlized",
    info: [
      "Bopp. Pearlized",
      "(available from 30u to 70u)"
    ],
    items: [
      { name: "Ice Cream", image: "/images/mockup/Mini Top/Mini top mockup.webp" },
      { name: "Bottle Label", image: "/images/mockup/Mini Top/mini top mockup1.webp" },
      { name: "Milk Bottle", image: "/images/mockup/Mini Top/mini top mockup2.webp" }
    ]
  },
  "bopp-cpp": {
    title: "Bopp. + CPP",
    info: [
      "Bopp. Transparent printed",
      "(available from 30u to 70u)",
      "laminated with",
      "CPP Transparent",
      "(available from 20u to 50u)"
    ],
    items: [
      { name: "Legumes", image: "/images/mockup/Elegance/stars mockup1.webp" },
      { name: "Under Wear Bag", image: "/images/mockup/Elegance/stars mockup2.webp" },
      { name: "Rice", image: "/images/mockup/Elegance/stars mockup3.webp" },
      { name: "Pasta", image: "/images/mockup/Elegance/stars mockup4.webp" },
      { name: "Bonbon Bag", image: "/images/mockup/Elegance/stars mockup5.webp" },
      { name: "Mozarella", image: "/images/mockup/Elegance/stars mockup6.webp" }
    ]
  }
};

export default function ProductDetailClient() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "bopp";
  const data = productData[type] || productData.bopp;

  return (
    <div className="container" style={{ paddingBottom: '8rem' }}>
      <div className="animate-fade" style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem', color: '#888', marginBottom: '3rem', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> /
        <Link href="/products" style={{ color: 'inherit', textDecoration: 'none', marginLeft: '5px' }}>Products</Link> /
        <span style={{ color: '#111', fontWeight: '600', marginLeft: '5px' }}>{data.title}</span>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '5rem' }} className="animate-fade-up">
        <h1 className="hero-title-responsive" style={{ fontWeight: '800', marginBottom: '1rem', color: '#111', textTransform: 'uppercase' }}>{data.title}</h1>
        <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '0 auto' }}></div>
      </div>

      <div className="product-layout-grid" style={{ marginBottom: '4rem' }}>
        <div className="animate-fade-up delay-1">
          <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '2rem', color: '#111' }}>Products Information</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {data.info.map((line, i) => (
              <p key={i} style={{
                fontSize: '0.95rem',
                color: line.includes("(") ? '#666' : '#111',
                fontWeight: line.includes("(") ? '400' : '600',
                lineHeight: '1.4'
              }}>
                {line}
              </p>
            ))}
          </div>

          <div style={{ marginTop: '4rem', padding: '2rem', background: '#fcfcfc', borderRadius: '12px', border: '1px solid #eee' }}>
             <h4 style={{ fontSize: '0.9rem', fontWeight: '800', marginBottom: '1rem' }}>Need specific specs?</h4>
             <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '1.5rem' }}>We provide customized thicknesses and structures.</p>
             <Link href="/contact" style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none' }}>
                Contact us <ArrowRight size={14} />
             </Link>
          </div>
        </div>

        <div className="animate-fade-up delay-2">
          <div className="product-items-container" style={{ borderLeft: '1px solid #eee', borderTop: '1px solid #eee' }}>
            {data.items.map((item, i) => (
              <div key={i} style={{
                borderRight: '1px solid #eee',
                borderBottom: '1px solid #eee',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                aspectRatio: '1',
                transition: 'all 0.3s ease',
                background: '#fff'
              }} className="product-item-box">
                <div style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  marginBottom: '1.5rem',
                  overflow: 'hidden'
                }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', transition: 'transform 0.5s ease' }}
                    className="hover-zoom"
                  />
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#111' }}>{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section style={{ marginTop: '8rem' }}>
        <div className="custom-solution-banner animate-fade-up">
            <div className="banner-content">
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#F9F9F9', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #eee', flexShrink: 0 }}>
                <HelpCircle className="text-primary pulse-soft" size={32} />
              </div>
              <div className="banner-text">
                <h4 style={{ fontWeight: '800', fontSize: '1.4rem', marginBottom: '0.4rem' }}>Request a Custom Structure?</h4>
                <p style={{ color: '#666', fontSize: '1rem' }}>We can engineer multi-layer laminates tailored to your specific barrier needs.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem', borderRadius: '10px', gap: '12px', fontSize: '1rem' }}>
                Request a Quote <ArrowRight size={20} />
              </Link>
            </div>
        </div>
      </section>

      <style jsx>{`
        .product-item-box:hover { background: #fafafa; }
        .product-item-box:hover .hover-zoom { transform: scale(1.08); }
      `}</style>
    </div>
  );
}
