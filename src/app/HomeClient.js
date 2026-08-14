"use client";
import { Users, Globe, ShieldCheck, Clock, ArrowRight, ChevronLeft, ChevronRight, Palette, Quote } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";

export default function HomeClient({ lang = "en", dict }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef();

  if (!dict) return null; // Prevent crash if dict is not provided

  const isAr = lang === "ar";

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
                <span className="subtitle-badge">{dict.hero.subtitle}</span>
                <span className="subtitle-text">{dict.hero.tagline}</span>
              </div>
              <h1>{dict.hero.title}</h1>
              <p className="hero-description">
                {dict.hero.description}
              </p>
              <div className="hero-btns">
                <Link href={`/${lang}/products`} className="btn btn-primary btn-glow">
                  {dict.hero.explore} <ArrowRight size={18} style={{ transform: isAr ? 'rotate(180deg)' : 'none' }} />
                </Link>
                <Link href={`/${lang}/contact`} className="btn btn-outline">{dict.hero.contact}</Link>
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

      {/* About Roto Star Section */}
      <section className="section" style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 189, 0, 0.03) 0%, transparent 70%)',
          zIndex: 0
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center animate-fade-up" style={{ marginBottom: '4.5rem' }}>
            <h2 className="section-title" style={{ marginBottom: '1.2rem', color: 'var(--black)' }}>{dict.about.title}</h2>
            <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '0 auto' }}></div>
          </div>

          <div className="animate-fade-up delay-1" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{
              position: 'relative',
              padding: '0 2rem',
              marginBottom: '4rem',
              textAlign: 'center'
            }}>
              <Quote
                size={80}
                style={{
                  position: 'absolute',
                  top: '-30px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'var(--primary)',
                  opacity: 0.1,
                  zIndex: -1
                }}
              />
              <h3 style={{
                fontSize: 'clamp(1.4rem, 2.8vw, 2.4rem)',
                fontWeight: '800',
                color: 'var(--black)',
                lineHeight: '1.25',
                letterSpacing: '-0.02em',
                maxWidth: '900px',
                margin: '0 auto'
              }}>
                "{dict.about.quote}"
              </h3>
            </div>

            <div className="grid-3" style={{
              gap: '2.5rem',
              textAlign: isAr ? 'right' : 'left'
            }}>
              <div className="animate-fade-up delay-2" style={{
                padding: '2.5rem',
                background: 'var(--gray-100)',
                borderRadius: '24px',
                border: '1px solid #f0f0f0',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{ color: 'var(--primary)', fontWeight: '900', fontSize: '1.2rem', marginBottom: '1rem' }}>1996</div>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  {dict.about.years["1996"]}
                </p>
              </div>

              <div className="animate-fade-up delay-3" style={{
                padding: '2.5rem',
                background: 'var(--gray-100)',
                borderRadius: '24px',
                border: '1px solid #f0f0f0',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{ color: 'var(--primary)', fontWeight: '900', fontSize: '1.2rem', marginBottom: '1rem' }}>2013</div>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  {dict.about.years["2013"]}
                </p>
              </div>

              <div className="animate-fade-up delay-4" style={{
                padding: '2.5rem',
                background: 'var(--gray-100)',
                borderRadius: '24px',
                border: '1px solid #f0f0f0',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{ color: 'var(--primary)', fontWeight: '900', fontSize: '1.2rem', marginBottom: '1rem' }}>{isAr ? "اليوم" : "Today"}</div>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  {dict.about.years["today"]}
                </p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .grid-3 div:hover {
            transform: translateY(-5px);
            border-color: var(--primary);
          }
          @media (max-width: 900px) {
            .grid-3 { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <section className="section bg-white" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '6rem' }}>
            <div className={`animate-fade delay-2 ${isAr ? 'order-last' : ''}`}>
               <div style={{
                 borderRadius: '30px',
                 overflow: 'hidden',
                 boxShadow: '0 40px 80px rgba(0,0,0,0.1)',
                 position: 'relative',
                 transform: isAr ? 'rotate(2deg)' : 'rotate(-2deg)'
               }}>
                 <img
                   src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
                   alt="Creative Design Studio"
                   style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                 />
                 <div style={{ position: 'absolute', inset: 0, border: '15px solid rgba(255,255,255,0.1)', borderRadius: '30px', pointerEvents: 'none' }}></div>
               </div>
            </div>
            <div className="hero-text animate-fade-up">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--primary)', fontWeight: '800', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '1.5rem' }}>
                <Palette size={18} /> {dict.creative.subtitle}
              </div>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.1' }}>{dict.creative.title}</h2>
              <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem', color: 'var(--gray-600)', lineHeight: '1.8' }}>
                {dict.creative.description}
              </p>

              <div className="flex-column" style={{ gap: '1.2rem', marginBottom: '3.5rem' }}>
                {dict.creative.points.map((item, i) => (
                  <div key={i} className="flex" style={{ alignItems: 'center', gap: '1rem', fontWeight: '700' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                    {item}
                  </div>
                ))}
              </div>

              <Link href={`/${lang}/products`} className="btn btn-outline" style={{ borderColor: 'var(--black)', color: 'var(--black)' }}>
                {dict.creative.portfolio}
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
                <span className="stat-label">{dict.stats.years}</span>
              </div>
            </div>
            <div className="stat-item-modern">
              <div className="stat-icon-wrapper">
                <Users size={24} />
              </div>
              <div className="stat-info">
                <span className="stat-value">300+</span>
                <span className="stat-label">{dict.stats.partners}</span>
              </div>
            </div>
            <div className="stat-item-modern">
              <div className="stat-icon-wrapper">
                <Globe size={24} />
              </div>
              <div className="stat-info">
                <span className="stat-value">50+</span>
                <span className="stat-label">{dict.stats.destinations}</span>
              </div>
            </div>
            <div className="stat-item-modern">
              <div className="stat-icon-wrapper">
                <ShieldCheck size={24} />
              </div>
              <div className="stat-info">
                <span className="stat-value">ISO</span>
                <span className="stat-label">{dict.stats.certified}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section bg-light products-preview" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="section-header-alt text-center" style={{ marginBottom: '4rem' }}>
            <div className="header-text animate-fade-up">
              <h3 className="text-primary section-subtitle-small">{dict.showcase.subtitle}</h3>
              <h2 className="section-title">{dict.showcase.title}</h2>
              <p className="section-desc" style={{ margin: '0 auto' }}>{dict.showcase.description}</p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '4rem' }}>
             <Link href={`/${lang}/products`} className="btn btn-primary animate-fade-up">
              {dict.showcase.catalog} <ArrowRight size={18} style={{ transform: isAr ? 'rotate(180deg)' : 'none' }} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
