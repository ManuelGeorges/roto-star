"use client";
import { Users, Globe, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-subtitle">Flexible Packaging. Precision in Every Detail.</div>
              <h1>Premium packaging that elevates your brand.</h1>
              <p className="hero-description">
                High-performance flexible packaging solutions designed to protect, perform, and stand out.
              </p>
              <div className="hero-btns">
                <Link href="/products" className="btn btn-primary">
                  Discover Our Solutions <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="btn btn-outline">Request a Quote</Link>
              </div>
            </div>

            <div className="hero-visual">
              {/* Overlapping Product Display from the image */}
              <div className="product-display-grid">
                <div className="product-mockup coffee-bag">
                  <div className="mockup-label">PREMIUM COFFEE</div>
                </div>
                <div className="product-mockup olive-oil">
                  <div className="mockup-label">OLIVE OIL</div>
                </div>
                <div className="product-mockup nuts-bag">
                  <div className="mockup-label">NUTS ROASTED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Card / Credibility Signals */}
      <div className="container stats-wrapper">
        <div className="stats-card">
          <div className="grid-4">
            <div className="stat-item">
              <div className="stat-icon-bg">
                <Clock size={22} className="text-primary" />
              </div>
              <div className="stat-content">
                <h4>28+</h4>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-bg">
                <Users size={22} className="text-primary" />
              </div>
              <div className="stat-content">
                <h4>300+</h4>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-bg">
                <Globe size={22} className="text-primary" />
              </div>
              <div className="stat-content">
                <h4>50+</h4>
                <p>Countries Served</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-bg">
                <ShieldCheck size={22} className="text-primary" />
              </div>
              <div className="stat-content">
                <h4>100%</h4>
                <p>Commitment to Quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Brands Section */}
      <section className="section text-center brands-section">
        <div className="container">
          <h5 className="brands-title">Trusted by leading brands worldwide</h5>
          <div className="brands-flex">
            <div className="brand-logo">NATURE'S BASKET</div>
            <div className="brand-logo">earth ORGANICS</div>
            <div className="brand-logo">GREEN HARVEST</div>
            <div className="brand-logo">PURE & natural</div>
            <div className="brand-logo">DAILY FUEL</div>
          </div>
        </div>
      </section>

      {/* Our Products Preview Section */}
      <section className="section bg-light products-preview">
        <div className="container">
          <div className="section-header-alt">
            <div className="header-text">
              <h3 className="text-primary section-subtitle-small">Our Products</h3>
              <h2 className="section-title">Packaging solutions for every need</h2>
              <p className="section-desc">From food and beverages to nuts, coffee, and beyond—our flexible packaging keeps your product fresh, protected, and shelf-ready.</p>
            </div>
            <Link href="/products" className="btn btn-primary">
              Explore All Products <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid-4 product-grid-alt">
            {[
              { id: 'TEA', name: 'TEA PACKAGING' },
              { id: 'COFFEE', name: 'COFFEE BAGS' },
              { id: 'PROTEIN', name: 'PROTEIN POWDER' },
              { id: 'FRUITS', name: 'DRIED FRUITS' }
            ].map((item) => (
              <div key={item.id} className="product-card-preview">
                <div className="product-img-placeholder">
                  <div className="product-img-tag">{item.id}</div>
                </div>
                <div className="product-info-minimal">
                   {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
