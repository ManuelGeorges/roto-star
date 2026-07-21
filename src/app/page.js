"use client";
import { Users, Globe, ShieldCheck, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tag: "Premium Quality",
      title: "Coffee Packaging",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1200",
      desc: "Advanced aroma protection for premium coffee beans."
    },
    {
      id: 2,
      tag: "High Barrier",
      title: "Snack Solutions",
      image: "https://www.rixona.com/_next/image?url=https%3A%2F%2Faviko-eu.s3.eu-west-2.amazonaws.com%2Frixona%2F2024-07%2Fsnacks_0.jpg&w=1920&q=100",
      desc: "Keeping snacks crisp and fresh for longer shelf life."
    },
    {
      id: 3,
      tag: "Technology",
      title: "Rotogravure Printing",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8i3Zxhr9V_bRSSMH0BRg0muuU3LgCEFV2k9bts5f2RWF0oOakicbeUoI&s=10",
      desc: "Precision printing with up to 10 high-definition colors."
    },
    {
      id: 4,
      tag: "Eco-Friendly",
      title: "Sustainable Films",
      image: "https://ppcflex.com/wp-content/uploads/2025/11/sustainability.jpg",
      desc: "Next-generation recyclable packaging materials."
    },
    {
      id: 5,
      tag: "Industrial",
      title: "Custom Structures",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
      desc: "Tailored material laminations for specialized needs."
    }
  ];

  const brands = [
    { name: "Nature's Basket", logo: "https://play-lh.googleusercontent.com/5Qofy71YDtFyeHHPRgLqL1IAe6fp9v_K-Nlgib9IDHMG0cUD1Yh_LeQhh5sYrkCKXWVciqZVo0LI-m2ckrZc" },
    { name: "Earth Organics", logo: "https://cdn.simpleicons.org/starbucks/666" },
    { name: "Green Harvest", logo: "https://s3.amazonaws.com/media-prod.butternut.ai/website_images/6916e65b2540643f72acb022/abaf0121-cd1d-457f-84f7-34d7af5e94bb.webp" },
    { name: "Pure & Natural", logo: "https://cdn.simpleicons.org/unilever/666" },
    { name: "Daily Fuel", logo: "https://www.drinkfuel24.com/cdn/shop/files/Lemon_Lime.jpg?v=1773061568&width=500" }
  ];

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const getSlideClass = (index) => {
    if (index === activeSlide) return "active";
    if (index === (activeSlide - 1 + slides.length) % slides.length) return "prev";
    if (index === (activeSlide + 1) % slides.length) return "next";
    return "";
  };

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
                High-performance flexible packaging solutions designed to protect, perform, and stand out in a competitive market.
              </p>
              <div className="hero-btns">
                <Link href="/products" className="btn btn-primary">
                  Discover Our Solutions <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="btn btn-outline">Request a Quote</Link>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-carousel">
                <div className="carousel-track">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`carousel-slide ${getSlideClass(index)}`}
                      style={{ backgroundImage: `url(${slide.image})` }}
                    >
                      <div className="slide-image-overlay"></div>
                      <div className="slide-info">
                        <span className="slide-tag">{slide.tag}</span>
                        <h3 className="slide-title">{slide.title}</h3>
                        <p className="slide-desc">{slide.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="carousel-nav">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={`nav-dot ${index === activeSlide ? 'active' : ''}`}
                      onClick={() => setActiveSlide(index)}
                    ></div>
                  ))}
                </div>

                <div className="carousel-arrows">
                   <button onClick={prevSlide} className="carousel-arrow-btn">
                      <ChevronLeft size={20} />
                   </button>
                   <button onClick={nextSlide} className="carousel-arrow-btn">
                      <ChevronRight size={20} />
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Card / Credibility Signals */}
      <div className="container stats-wrapper">
        <div className="stats-card animate-fade-up">
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
          <h5 className="brands-title animate-fade">Trusted by leading brands worldwide</h5>
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
              <h3 className="text-primary section-subtitle-small">Our Products</h3>
              <h2 className="section-title">Packaging solutions for every need</h2>
              <p className="section-desc">From food and beverages to nuts, coffee, and beyond—our flexible packaging keeps your product fresh, protected, and shelf-ready.</p>
            </div>
            <Link href="/products" className="btn btn-primary animate-fade-up delay-1">
              Explore All Products <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid-4 product-grid-alt">
            {[
              { id: 'TEA', name: 'TEA PACKAGING', img: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=800' },
              { id: 'COFFEE', name: 'COFFEE BAGS', img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800' },
              { id: 'PROTEIN', name: 'PROTEIN POWDER', img: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800' },
              { id: 'FRUITS', name: 'DRIED FRUITS', img: 'https://images.unsplash.com/photo-1596003906949-67221c37965c?q=80&w=800' }
            ].map((item, index) => (
              <div key={item.id} className={`product-card-preview animate-fade-up delay-${(index % 3) + 1}`}>
                <div className="product-img-placeholder" style={{
                  backgroundImage: `url(${item.img})`,
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
