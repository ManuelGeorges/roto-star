"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Download, HelpCircle } from "lucide-react";
import { Suspense } from "react";

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
      { name: "Chocolate", image: "https://images.pexels.com/photos/6167333/pexels-photo-6167333.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Wafer", image: "https://images.pexels.com/photos/2062883/pexels-photo-2062883.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Chips", image: "https://images.pexels.com/photos/479628/pexels-photo-479628.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Snack", image: "https://images.pexels.com/photos/10114270/pexels-photo-10114270.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Biscuit", image: "https://images.pexels.com/photos/1626668/pexels-photo-1626668.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Ice Cream", image: "https://images.pexels.com/photos/1294943/pexels-photo-1294943.jpeg?auto=compress&cs=tinysrgb&w=500" }
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
      { name: "Cocoa Powder", image: "https://images.pexels.com/photos/8477743/pexels-photo-8477743.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Coffee Mix", image: "https://images.pexels.com/photos/942800/pexels-photo-942800.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Vacuum Coffee", image: "https://images.pexels.com/photos/669162/pexels-photo-669162.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Nuts", image: "https://images.pexels.com/photos/9615877/pexels-photo-9615877.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Crackers", image: "https://images.pexels.com/photos/892649/pexels-photo-892649.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Flavour Powder", image: "https://images.pexels.com/photos/5078584/pexels-photo-5078584.jpeg?auto=compress&cs=tinysrgb&w=500" }
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
      { name: "Dish Washing Liquid", image: "https://images.pexels.com/photos/7263030/pexels-photo-7263030.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Automatic Machine Liquid", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=500" },
      { name: "Rice", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=500" },
      { name: "Detergent", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500" },
      { name: "Shampoo", image: "https://images.pexels.com/photos/8478987/pexels-photo-8478987.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Sugar", image: "https://images.pexels.com/photos/7966490/pexels-photo-7966490.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Salt", image: "https://images.pexels.com/photos/27098310/pexels-photo-27098310.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Legumes", image: "https://images.pexels.com/photos/3297805/pexels-photo-3297805.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Nuts", image: "https://images.pexels.com/photos/9615877/pexels-photo-9615877.jpeg?auto=compress&cs=tinysrgb&w=500" }
    ]
  },
  "twist-wrapping-material": {
    title: "Twist Wrapping Material",
    info: [
      "Transparent - Milky - Metalize"
    ],
    items: [
      { name: "Bonbon", image: "https://images.pexels.com/photos/5469042/pexels-photo-5469042.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Chocolate Truffle", image: "https://images.pexels.com/photos/3465380/pexels-photo-3465380.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Chocolate", image: "https://images.pexels.com/photos/6167333/pexels-photo-6167333.jpeg?auto=compress&cs=tinysrgb&w=500" }
    ]
  },
  "bopp-pearlized": {
    title: "Bopp. Pearlized",
    info: [
      "Bopp. Pearlized",
      "(available from 30u to 70u)"
    ],
    items: [
      { name: "Ice Cream", image: "https://images.pexels.com/photos/1294943/pexels-photo-1294943.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Bottle Label", image: "https://images.pexels.com/photos/8217497/pexels-photo-8217497.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Milk Bottle", image: "https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=500" }
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
      { name: "Legumes", image: "https://images.pexels.com/photos/3297805/pexels-photo-3297805.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Under Wear Bag", image: "https://images.pexels.com/photos/4440576/pexels-photo-4440576.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Rice", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=500" },
      { name: "Pasta", image: "https://images.pexels.com/photos/2998955/pexels-photo-2998955.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Bonbon Bag", image: "https://images.pexels.com/photos/5469042/pexels-photo-5469042.jpeg?auto=compress&cs=tinysrgb&w=500" },
      { name: "Mozarella", image: "https://images.pexels.com/photos/6605183/pexels-photo-6605183.jpeg?auto=compress&cs=tinysrgb&w=500" }
    ]
  }
};

function ProductDetailContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "bopp";
  const data = productData[type] || productData.bopp;

  return (
    <div className="container" style={{ paddingBottom: '8rem' }}>
      {/* Breadcrumbs */}
      <div className="animate-fade" style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem', color: '#888', marginBottom: '3rem', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> /
        <Link href="/products" style={{ color: 'inherit', textDecoration: 'none', marginLeft: '5px' }}>Products</Link> /
        <span style={{ color: '#111', fontWeight: '600', marginLeft: '5px' }}>{data.title}</span>
      </div>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '5rem' }} className="animate-fade-up">
        <h1 className="hero-title-responsive" style={{ fontWeight: '800', marginBottom: '1rem', color: '#111', textTransform: 'uppercase' }}>{data.title}</h1>
        <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '0 auto' }}></div>
      </div>

      <div className="product-layout-grid" style={{ marginBottom: '4rem' }}>
        {/* Left Column: Info */}
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

        {/* Right Column: Grid */}
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
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      transition: 'transform 0.5s ease'
                    }}
                    className="hover-zoom"
                  />
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#111' }}>{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
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
        .product-item-box:hover {
          background: #fafafa;
        }
        .product-item-box:hover .hover-zoom {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
}

export default function ProductDetail() {
  return (
    <main style={{ background: '#fff', paddingTop: '8rem' }}>
      <Suspense fallback={<div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>Loading product details...</div>}>
        <ProductDetailContent />
      </Suspense>
    </main>
  );
}
