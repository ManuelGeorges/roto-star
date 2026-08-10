"use client";
import { Users, Globe, ShieldCheck, Clock, ArrowRight, ChevronLeft, ChevronRight, Palette } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";

export default function HomeClient() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef();

  const carouselImages = [
    "/images/carousel/1 en.webp", "/images/carousel/2 en.webp", "/images/carousel/3 en.webp", "/images/carousel/4 en.webp",
    "/images/carousel/5 en.webp", "/images/carousel/6 en.webp", "/images/carousel/7 en.webp", "/images/carousel/8 en.webp",
    "/images/carousel/9 en.webp", "/images/carousel/10 en.webp", "/images/carousel/11 en.webp", "/images/carousel/12 en.webp",
    "/images/carousel/13 en.webp", "/images/carousel/14 en.webp", "/images/carousel/15 en.webp", "/images/carousel/16 en.webp",
    "/images/carousel/17 en.webp", "/images/carousel/18 en.webp", "/images/carousel/19 en.webp", "/images/carousel/20 en.webp",
    "/images/carousel/21.webp", "/images/carousel/22.webp", "/images/carousel/23.webp", "/images/carousel/24.webp",
    "/images/carousel/25.webp", "/images/carousel/26.webp", "/images/carousel/27.webp", "/images/carousel/28.webp",
    "/images/carousel/29.webp", "/images/carousel/30.webp", "/images/carousel/31.webp"
  ];

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % carouselImages.length);
  }, [carouselImages.length]);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleManualNav = (index) => {
    setActiveSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 2000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, nextSlide]);

  const getSlideClass = (index) => {
    const total = carouselImages.length;
    if (index === activeSlide) return "active";
    if (index === (activeSlide - 1 + total) % total) return "prev";
    if (index === (activeSlide + 1) % total) return "next";
    if (index === (activeSlide - 2 + total) % total) return "far-prev";
    if (index === (activeSlide + 2) % total) return "far-next";
    return "hidden-slide";
  };

  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-subtitle">
                <span className="subtitle-badge">ROTO STAR</span>
                <span className="subtitle-text">Flexible Packaging Excellence</span>
              </div>
              <h1>Revolutionizing Your Brand's First Impression.</h1>
              <p className="hero-description">
                Elevate your product with high-performance packaging that merges cutting-edge protection with unmatched visual appeal. Precision-engineered for a global market.
              </p>
              <div className="hero-btns">
                <Link href="/products" className="btn btn-primary btn-glow">
                  Explore Products <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="btn btn-outline">Consult Our Experts</Link>
              </div>
            </div>

            <div className="hero-visual">
              <div className="gallery-carousel-wrapper">
                <div className="carousel-glow-sphere"></div>
                <div
                  className="modern-gallery-carousel"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <div className="carousel-track">
                    {carouselImages.map((img, index) => (
                      <div
                        key={index}
                        className={`gallery-slide ${getSlideClass(index)}`}
                        style={{ backgroundImage: `url("${img}")` }}
                        onClick={() => handleManualNav(index)}
                      >
                        <div className="slide-overlay-minimal"></div>
                      </div>
                    ))}
                  </div>
                  <div className="gallery-controls">
                    <button onClick={prevSlide} className="gallery-btn prev" aria-label="Previous">
                      <ChevronLeft size={22} />
                    </button>
                    <button onClick={nextSlide} className="gallery-btn next" aria-label="Next">
                      <ChevronRight size={22} />
                    </button>
                  </div>
                  <div className="gallery-counter">
                    <span className="current">{String(activeSlide + 1).padStart(2, '0')}</span>
                    <span className="divider"></span>
                    <span className="total">{String(carouselImages.length).padStart(2, '0')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bg-pattern"></div>
      </section>

      <section className="section bg-white" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '6rem' }}>
            <div className="animate-fade delay-2">
               <div style={{
                 borderRadius: '30px',
                 overflow: 'hidden',
                 boxShadow: '0 40px 80px rgba(0,0,0,0.1)',
                 position: 'relative',
                 transform: 'rotate(-2deg)'
               }}>
                 <img
                   src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
                   alt="Creative Design Studio for Packaging"
                   style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                 />
                 <div style={{ position: 'absolute', inset: 0, border: '15px solid rgba(255,255,255,0.1)', borderRadius: '30px', pointerEvents: 'none' }}></div>
               </div>
            </div>
            <div className="hero-text animate-fade-up">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--primary)', fontWeight: '800', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '1.5rem' }}>
                <Palette size={18} /> CREATIVE SERVICES
              </div>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.1' }}>Precision Design</h2>
              <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem', color: 'var(--gray-600)', lineHeight: '1.8' }}>
                Our in-house design team specializes in technical packaging aesthetics. We don't just make it look good—we ensure it's manufacturable, sustainable, and optimized for rotogravure printing.
              </p>

              <div className="flex-column" style={{ gap: '1.2rem', marginBottom: '3.5rem' }}>
                {['Structural Integrity Planning', 'Graphic & Branding Alignment', 'Eco-Friendly Material Selection', 'Consistency Control'].map((item, i) => (
                  <div key={i} className="flex" style={{ alignItems: 'center', gap: '1rem', fontWeight: '700' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                    {item}
                  </div>
                ))}
              </div>

              <Link href="/products" className="btn btn-outline" style={{ borderColor: 'var(--black)', color: 'var(--black)' }}>
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container stats-wrapper" style={{ marginTop: '0' }}>
        <div className="stats-card-premium">
          <div className="grid-4">
            <div className="stat-item-modern">
              <div className="stat-icon-wrapper">
                <Clock size={24} />
              </div>
              <div className="stat-info">
                <span className="stat-value">28+</span>
                <span className="stat-label">Years of Mastery</span>
              </div>
            </div>
            <div className="stat-item-modern">
              <div className="stat-icon-wrapper">
                <Users size={24} />
              </div>
              <div className="stat-info">
                <span className="stat-value">300+</span>
                <span className="stat-label">Global Partners</span>
              </div>
            </div>
            <div className="stat-item-modern">
              <div className="stat-icon-wrapper">
                <Globe size={24} />
              </div>
              <div className="stat-info">
                <span className="stat-value">50+</span>
                <span className="stat-label">Export Destinations</span>
              </div>
            </div>
            <div className="stat-item-modern">
              <div className="stat-icon-wrapper">
                <ShieldCheck size={24} />
              </div>
              <div className="stat-info">
                <span className="stat-value">ISO</span>
                <span className="stat-label">Certified Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section bg-light products-preview" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="section-header-alt text-center" style={{ marginBottom: '4rem' }}>
            <div className="header-text animate-fade-up">
              <h3 className="text-primary section-subtitle-small">Innovation Showcase</h3>
              <h2 className="section-title">Superior Packaging for Every Sector</h2>
              <p className="section-desc" style={{ margin: '0 auto' }}>From specialized barrier films for delicate products to robust industrial solutions, we redefine how your product reaches the consumer.</p>
            </div>
          </div>
          <div className="grid-4 product-grid-alt">
            {[
              { id: 'TEA', name: 'TEA PACKAGING', img: '/images/carousel/22.webp' },
              { id: 'COFFEE', name: 'COFFEE BAGS', img: '/images/carousel/23.webp' },
              { id: 'PROTEIN', name: 'NUTRITION', img: '/images/carousel/25.webp' },
              { id: 'SNACKS', name: 'FOOD & SNACKS', img: '/images/carousel/21.webp' }
            ].map((item, index) => (
              <div key={item.id} className={`product-card-preview animate-fade-up delay-${(index % 3) + 1}`}>
                <div className="product-img-placeholder" style={{
                  backgroundImage: `url("${item.img}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div className="product-img-overlay"></div>
                  <div className="product-img-tag">{item.id}</div>
                </div>
                <div className="product-info-minimal">
                   {item.name}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '4rem' }}>
             <Link href="/products" className="btn btn-primary animate-fade-up">
              View Product Catalog <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
