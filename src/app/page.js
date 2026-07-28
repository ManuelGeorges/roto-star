"use client";
import { Users, Globe, ShieldCheck, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef();

  // Full list of all available images
  const carouselImages = [
    "/images/carousel/1 en.png", "/images/carousel/2 en.png", "/images/carousel/3 en.png", "/images/carousel/4 en.png",
    "/images/carousel/5 en.png", "/images/carousel/6 en.png", "/images/carousel/7 en.png", "/images/carousel/8 en.png",
    "/images/carousel/9 en.png", "/images/carousel/10 en.png", "/images/carousel/11 en.png", "/images/carousel/12 en.png",
    "/images/carousel/13 en.png", "/images/carousel/14 en.png", "/images/carousel/15 en.png", "/images/carousel/16 en.png",
    "/images/carousel/17 en.png", "/images/carousel/18 en.png", "/images/carousel/19 en.png", "/images/carousel/20 en.png",
    "/images/carousel/21.png", "/images/carousel/22.png", "/images/carousel/23.png", "/images/carousel/24.png",
    "/images/carousel/25.png", "/images/carousel/26.png", "/images/carousel/27.png", "/images/carousel/28.png",
    "/images/carousel/29.png", "/images/carousel/30.png", "/images/carousel/31.png"
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
      autoPlayRef.current = setInterval(nextSlide, 3500);
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
      {/* Hero Section */}
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

      {/* Stats Section */}
      <div className="container stats-wrapper">
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

      {/* Trusted Brands Section */}
      <section className="section text-center brands-section">
        <div className="container">
          <h5 className="brands-title animate-fade">Global Industry Leaders Trust Us</h5>
          <div className="brands-flex">
            {brands.map((brand, i) => (
              <div key={i} className={`brand-logo-container animate-fade delay-${(i % 3) + 1}`}>
                <img src={brand.logo} alt={brand.name} className="brand-logo-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products Preview Section */}
      <section className="section bg-light products-preview">
        <div className="container">
          <div className="section-header-alt">
            <div className="header-text animate-fade-up">
              <h3 className="text-primary section-subtitle-small">Innovation Showcase</h3>
              <h2 className="section-title">Superior Packaging for Every Sector</h2>
              <p className="section-desc">From specialized barrier films for delicate products to robust industrial solutions, we redefine how your product reaches the consumer.</p>
            </div>
            <Link href="/products" className="btn btn-primary animate-fade-up delay-1">
              View Product Catalog <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid-4 product-grid-alt">
            {[
              { id: 'TEA', name: 'TEA PACKAGING', img: '/images/carousel/7 en.png' },
              { id: 'COFFEE', name: 'COFFEE BAGS', img: '/images/carousel/1 en.png' },
              { id: 'PROTEIN', name: 'NUTRITION', img: '/images/carousel/15 en.png' },
              { id: 'SNACKS', name: 'FOOD & SNACKS', img: '/images/carousel/4 en.png' }
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
        </div>
      </section>
    </main>
  );
}

const brands = [
  { name: "Nature's Basket", logo: "https://play-lh.googleusercontent.com/5Qofy71YDtFyeHHPRgLqL1IAe6fp9v_K-Nlgib9IDHMG0cUD1Yh_LeQhh5sYrkCKXWVciqZVo0LI-m2ckrZc" },
  { name: "Earth Organics", logo: "https://cdn.simpleicons.org/starbucks/666" },
  { name: "Green Harvest", logo: "https://s3.amazonaws.com/media-prod.butternut.ai/website_images/6916e65b2540643f72acb022/abaf0121-cd1d-457f-84f7-34d7af5e94bb.webp" },
  { name: "Pure & Natural", logo: "https://cdn.simpleicons.org/unilever/666" },
  { name: "Daily Fuel", logo: "https://www.drinkfuel24.com/cdn/shop/files/Lemon_Lime.jpg?v=1773061568&width=500" }
];
