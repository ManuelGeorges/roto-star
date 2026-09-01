"use client";

import {
  Users,
  Globe,
  ShieldCheck,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Palette,
  Quote,
  Play,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";

const carouselImages = [
  {
    src: "/images/carousel/1 en.webp",
    alt: "Roto Star creative design",
  },
  {
    src: "/images/carousel/2 en.webp",
    alt: "Roto Star creative work",
  },
  {
    src: "/images/carousel/3 en.webp",
    alt: "Roto Star design project",
  },
  {
    src: "/images/carousel/4 en.webp",
    alt: "Roto Star creative project",
  },
  {
    src: "/images/carousel/5 en.webp",
    alt: "Roto Star design work",
  },
  {
    src: "/images/carousel/6 en.webp",
    alt: "Roto Star creative project",
  },
  {
    src: "/images/carousel/7 en.webp",
    alt: "Roto Star design work",
  },
  {
    src: "/images/carousel/8 en.webp",
    alt: "Roto Star creative work",
  },
  {
    src: "/images/carousel/9 en.webp",
    alt: "Roto Star creative design",
  },
  {
    src: "/images/carousel/10 en.webp",
    alt: "Roto Star design project",
  },
  {
    src: "/images/carousel/11 en.webp",
    alt: "Roto Star creative project",
  },
  {
    src: "/images/carousel/12 en.webp",
    alt: "Roto Star creative design studio",
  },
  {
    src: "/images/carousel/13 en.webp",
    alt: "Roto Star design work",
  },
  {
    src: "/images/carousel/14 en.webp",
    alt: "Roto Star creative project",
  },
  {
    src: "/images/carousel/15 en.webp",
    alt: "Roto Star design project",
  },
  {
    src: "/images/carousel/16 en.webp",
    alt: "Roto Star creative work",
  },
  {
    src: "/images/carousel/17 en.webp",
    alt: "Roto Star design work",
  },
  {
    src: "/images/carousel/18 en.webp",
    alt: "Roto Star creative project",
  },
  {
    src: "/images/carousel/19 en.webp",
    alt: "Roto Star design work",
  },
  {
    src: "/images/carousel/20 en.webp",
    alt: "Roto Star creative project",
  },
  {
    src: "/images/carousel/21.webp",
    alt: "Roto Star creative work",
  },
  {
    src: "/images/carousel/22.webp",
    alt: "Roto Star design project",
  },
  {
    src: "/images/carousel/23.webp",
    alt: "Roto Star creative design",
  },
  {
    src: "/images/carousel/24.webp",
    alt: "Roto Star design work",
  },
  {
    src: "/images/carousel/25.webp",
    alt: "Roto Star creative project",
  },
  {
    src: "/images/carousel/26.webp",
    alt: "Roto Star design work",
  },
  {
    src: "/images/carousel/27.webp",
    alt: "Roto Star creative project",
  },
  {
    src: "/images/carousel/28.webp",
    alt: "Roto Star creative work",
  },
  {
    src: "/images/carousel/29.webp",
    alt: "Roto Star design project",
  },
  {
    src: "/images/carousel/30.webp",
    alt: "Roto Star creative design",
  },
  {
    src: "/images/carousel/31.webp",
    alt: "Roto Star creative work",
  },
];

export default function HomeClient({ lang = "en", dict }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const isAr = lang === "ar";

  const nextSlide = useCallback(() => {
    setActiveSlide(
      (prev) => (prev + 1) % carouselImages.length
    );
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlide(
      (prev) =>
        (prev - 1 + carouselImages.length) %
        carouselImages.length
    );
  }, []);

  const handleManualNav = useCallback((index) => {
    setActiveSlide(index);
    setIsAutoPlaying(false);

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 15000);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayRef.current = setInterval(() => {
      setActiveSlide(
        (prev) => (prev + 1) % carouselImages.length
      );
    }, 2000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  useEffect(() => {
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }

      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  if (!dict) return null;

  const getSlideClass = (index) => {
    const total = carouselImages.length;

    if (index === activeSlide) return "active";

    if (
      index ===
      (activeSlide - 1 + total) % total
    ) {
      return "prev";
    }

    if (
      index ===
      (activeSlide + 1) % total
    ) {
      return "next";
    }

    if (
      index ===
      (activeSlide - 2 + total) % total
    ) {
      return "far-prev";
    }

    if (
      index ===
      (activeSlide + 2) % total
    ) {
      return "far-next";
    }

    return "hidden-slide";
  };

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-subtitle">
                <span className="subtitle-badge">
                  {dict.hero.subtitle}
                </span>

                <span className="subtitle-text">
                  {dict.hero.tagline}
                </span>
              </div>

              <h1>{dict.hero.title}</h1>

              <p className="hero-description">
                {dict.hero.description}
              </p>

              <div className="hero-btns">
                <Link
                  href={`/${lang}/products`}
                  className="btn btn-primary btn-glow"
                >
                  {dict.hero.explore}

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    style={{
                      transform: isAr
                        ? "rotate(180deg)"
                        : "none",
                    }}
                  />
                </Link>

                <Link
                  href={`/${lang}/contact`}
                  className="btn btn-outline"
                >
                  {dict.hero.contact}
                </Link>
              </div>
            </div>

            {/* HERO CAROUSEL */}
            <div className="hero-visual">
              <div className="gallery-carousel-wrapper">
                <div
                  className="carousel-glow-sphere"
                  aria-hidden="true"
                />

                <div
                  className="modern-gallery-carousel"
                  role="region"
                  aria-roledescription="carousel"
                  aria-label={
                    isAr
                      ? "معرض الصور"
                      : "Roto Star image gallery"
                  }
                  onMouseEnter={() =>
                    setIsAutoPlaying(false)
                  }
                  onMouseLeave={() =>
                    setIsAutoPlaying(true)
                  }
                >
                  <div
                    className="carousel-track"
                    aria-live="polite"
                  >
                    {carouselImages.map(
                      (image, index) => (
                        <div
                          key={image.src}
                          className={`gallery-slide ${getSlideClass(
                            index
                          )}`}
                          onClick={() =>
                            handleManualNav(index)
                          }
                          role="group"
                          aria-roledescription="slide"
                          aria-label={`${
                            index + 1
                          } / ${
                            carouselImages.length
                          }`}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            loading={
                              index === 0
                                ? "eager"
                                : "lazy"
                            }
                            decoding="async"
                            draggable="false"
                          />

                          <div
                            className="slide-overlay-minimal"
                            aria-hidden="true"
                          />
                        </div>
                      )
                    )}
                  </div>

                  <div className="gallery-controls">
                    <button
                      type="button"
                      onClick={prevSlide}
                      className="gallery-btn prev"
                      aria-label={
                        isAr
                          ? "الصورة السابقة"
                          : "Previous image"
                      }
                    >
                      <ChevronLeft
                        size={22}
                        aria-hidden="true"
                      />
                    </button>

                    <button
                      type="button"
                      onClick={nextSlide}
                      className="gallery-btn next"
                      aria-label={
                        isAr
                          ? "الصورة التالية"
                          : "Next image"
                      }
                    >
                      <ChevronRight
                        size={22}
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  <div
                    className="gallery-counter"
                    aria-label={
                      isAr
                        ? `الصورة ${
                            activeSlide + 1
                          } من ${
                            carouselImages.length
                          }`
                        : `Image ${
                            activeSlide + 1
                          } of ${
                            carouselImages.length
                          }`
                    }
                  >
                    <span className="current">
                      {String(
                        activeSlide + 1
                      ).padStart(2, "0")}
                    </span>

                    <span
                      className="divider"
                      aria-hidden="true"
                    />

                    <span className="total">
                      {String(
                        carouselImages.length
                      ).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hero-bg-pattern"
          aria-hidden="true"
        />
      </section>

      {/* ABOUT */}
      <section
        className="section"
        style={{
          background: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "100%",
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(255, 189, 0, 0.03) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            className="text-center animate-fade-up"
            style={{
              marginBottom: "4.5rem",
            }}
          >
            <h2
              className="section-title"
              style={{
                marginBottom: "1.2rem",
                color: "var(--black)",
              }}
            >
              {dict.about.title}
            </h2>

            <div
              aria-hidden="true"
              style={{
                width: "80px",
                height: "4px",
                background: "var(--primary)",
                margin: "0 auto",
              }}
            />
          </div>

          <div
            className="animate-fade-up delay-1"
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                position: "relative",
                padding: "0 2rem",
                marginBottom: "4rem",
                textAlign: "center",
              }}
            >
              <Quote
                size={80}
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "-30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "var(--primary)",
                  opacity: 0.1,
                  zIndex: -1,
                }}
              />

              <h3
                style={{
                  fontSize:
                    "clamp(1.4rem, 2.8vw, 2.4rem)",
                  fontWeight: "800",
                  color: "var(--black)",
                  lineHeight: "1.25",
                  letterSpacing: "-0.02em",
                  maxWidth: "900px",
                  margin: "0 auto",
                }}
              >
                "{dict.about.quote}"
              </h3>
            </div>

            <div
              className="grid-3"
              style={{
                gap: "2.5rem",
                textAlign: isAr
                  ? "right"
                  : "left",
              }}
            >
              <div
                className="animate-fade-up delay-2"
                style={{
                  padding: "2.5rem",
                  background:
                    "var(--gray-100)",
                  borderRadius: "24px",
                  border:
                    "1px solid #f0f0f0",
                  transition:
                    "transform 0.3s ease",
                }}
              >
                <div
                  style={{
                    color:
                      "var(--primary)",
                    fontWeight: "900",
                    fontSize: "1.2rem",
                    marginBottom: "1rem",
                  }}
                >
                  1996
                </div>

                <p
                  style={{
                    color:
                      "var(--gray-600)",
                    fontSize: "0.95rem",
                    lineHeight: "1.8",
                  }}
                >
                  {dict.about.years["1996"]}
                </p>
              </div>

              <div
                className="animate-fade-up delay-3"
                style={{
                  padding: "2.5rem",
                  background:
                    "var(--gray-100)",
                  borderRadius: "24px",
                  border:
                    "1px solid #f0f0f0",
                  transition:
                    "transform 0.3s ease",
                }}
              >
                <div
                  style={{
                    color:
                      "var(--primary)",
                    fontWeight: "900",
                    fontSize: "1.2rem",
                    marginBottom: "1rem",
                  }}
                >
                  2013
                </div>

                <p
                  style={{
                    color:
                      "var(--gray-600)",
                    fontSize: "0.95rem",
                    lineHeight: "1.8",
                  }}
                >
                  {dict.about.years["2013"]}
                </p>
              </div>

              <div
                className="animate-fade-up delay-4"
                style={{
                  padding: "2.5rem",
                  background:
                    "var(--gray-100)",
                  borderRadius: "24px",
                  border:
                    "1px solid #f0f0f0",
                  transition:
                    "transform 0.3s ease",
                }}
              >
                <div
                  style={{
                    color:
                      "var(--primary)",
                    fontWeight: "900",
                    fontSize: "1.2rem",
                    marginBottom: "1rem",
                  }}
                >
                  {isAr
                    ? "اليوم"
                    : "Today"}
                </div>

                <p
                  style={{
                    color:
                      "var(--gray-600)",
                    fontSize: "0.95rem",
                    lineHeight: "1.8",
                  }}
                >
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
            .grid-3 {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* VIDEO */}
      <section
        className="section bg-dark"
        style={{
          padding: "10rem 0",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(255, 189, 0, 0.08) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="animate-fade-up">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.8rem",
                padding: "0.6rem 1.5rem",
                background:
                  "rgba(255, 189, 0, 0.1)",
                borderRadius: "100px",
                color: "var(--primary)",
                fontWeight: "800",
                fontSize: "0.75rem",
                letterSpacing: "2px",
                marginBottom: "2rem",
                textTransform: "uppercase",
              }}
            >
              <Play
                size={14}
                fill="var(--primary)"
                aria-hidden="true"
              />

              {dict.video.subtitle}
            </div>

            <h2
              className="section-title"
              style={{
                color: "var(--white)",
                marginBottom: "2rem",
                fontSize:
                  "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: "1.1",
              }}
            >
              {dict.video.title}
            </h2>

            <p
              style={{
                color:
                  "var(--gray-400)",
                maxWidth: "800px",
                margin:
                  "0 auto 4rem",
                fontSize: "1.2rem",
                lineHeight: "1.8",
              }}
            >
              {dict.video.description}
            </p>

            <a
              href="https://drive.google.com/file/d/1xrZpCgO-1tIKaGtozMdJA9yTlIPl0Oxj/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-glow"
              aria-label={
                isAr
                  ? "مشاهدة فيديو Roto Star"
                  : "Watch Roto Star video"
              }
              style={{
                padding:
                  "1.2rem 3rem",
                fontSize: "1.1rem",
                borderRadius: "100px",
              }}
            >
              <Play
                size={20}
                fill="var(--black)"
                aria-hidden="true"
              />

              {dict.video.cta}
            </a>
          </div>
        </div>
      </section>

      {/* CREATIVE SECTION */}
      <section
        className="section bg-white"
        style={{
          padding: "8rem 0",
        }}
      >
        <div className="container">
          <div
            className="grid-2"
            style={{
              alignItems: "center",
              gap: "6rem",
            }}
          >
            <div
              className={`animate-fade delay-2 ${
                isAr
                  ? "order-last"
                  : ""
              }`}
            >
              <div
                style={{
                  borderRadius: "30px",
                  overflow: "hidden",
                  boxShadow:
                    "0 40px 80px rgba(0,0,0,0.1)",
                  position: "relative",
                  transform: isAr
                    ? "rotate(2deg)"
                    : "rotate(-2deg)",
                }}
              >
                <img
                  src="/images/carousel/12 en.webp"
                  alt="Roto Star creative design studio"
                  width="1200"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover",
                  }}
                />

                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    border:
                      "15px solid rgba(255,255,255,0.1)",
                    borderRadius: "30px",
                    pointerEvents:
                      "none",
                  }}
                />
              </div>
            </div>

            <div className="hero-text animate-fade-up">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  color:
                    "var(--primary)",
                  fontWeight: "800",
                  fontSize: "0.8rem",
                  letterSpacing: "2px",
                  marginBottom:
                    "1.5rem",
                }}
              >
                <Palette
                  size={18}
                  aria-hidden="true"
                />

                {dict.creative.subtitle}
              </div>

              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "800",
                  marginBottom:
                    "2rem",
                  lineHeight: "1.1",
                }}
              >
                {dict.creative.title}
              </h2>

              <p
                style={{
                  marginBottom:
                    "2.5rem",
                  fontSize: "1.1rem",
                  color:
                    "var(--gray-600)",
                  lineHeight: "1.8",
                }}
              >
                {dict.creative.description}
              </p>

              <div
                className="flex-column"
                style={{
                  gap: "1.2rem",
                  marginBottom:
                    "3.5rem",
                }}
              >
                {dict.creative.points.map(
                  (item, i) => (
                    <div
                      key={i}
                      className="flex"
                      style={{
                        alignItems:
                          "center",
                        gap: "1rem",
                        fontWeight:
                          "700",
                      }}
                    >
                      <div
                        aria-hidden="true"
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius:
                            "50%",
                          background:
                            "var(--primary)",
                        }}
                      />

                      {item}
                    </div>
                  )
                )}
              </div>

              <Link
                href={`/${lang}/products`}
                className="btn btn-outline"
                style={{
                  borderColor:
                    "var(--black)",
                  color:
                    "var(--black)",
                }}
              >
                {
                  dict.creative
                    .portfolio
                }
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div
        className="container stats-wrapper"
        style={{
          marginTop: "0",
        }}
      >
        <div className="stats-card-premium">
          <div className="grid-4">
            <div className="stat-item-modern">
              <div
                className="stat-icon-wrapper"
                aria-hidden="true"
              >
                <Clock size={24} />
              </div>

              <div className="stat-info">
                <span className="stat-value">
                  28+
                </span>

                <span className="stat-label">
                  {dict.stats.years}
                </span>
              </div>
            </div>

            <div className="stat-item-modern">
              <div
                className="stat-icon-wrapper"
                aria-hidden="true"
              >
                <Users size={24} />
              </div>

              <div className="stat-info">
                <span className="stat-value">
                  300+
                </span>

                <span className="stat-label">
                  {dict.stats.partners}
                </span>
              </div>
            </div>

            <div className="stat-item-modern">
              <div
                className="stat-icon-wrapper"
                aria-hidden="true"
              >
                <Globe size={24} />
              </div>

              <div className="stat-info">
                <span className="stat-value">
                  50+
                </span>

                <span className="stat-label">
                  {
                    dict.stats
                      .destinations
                  }
                </span>
              </div>
            </div>

            <div className="stat-item-modern">
              <div
                className="stat-icon-wrapper"
                aria-hidden="true"
              >
                <ShieldCheck
                  size={24}
                />
              </div>

              <div className="stat-info">
                <span className="stat-value">
                  ISO
                </span>

                <span className="stat-label">
                  {
                    dict.stats
                      .certified
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCTS PREVIEW */}
      <section
        className="section bg-light products-preview"
        style={{
          padding: "8rem 0",
        }}
      >
        <div className="container">
          <div
            className="section-header-alt text-center"
            style={{
              marginBottom:
                "4rem",
            }}
          >
            <div className="header-text animate-fade-up">
              <h3 className="text-primary section-subtitle-small">
                {
                  dict.showcase
                    .subtitle
                }
              </h3>

              <h2 className="section-title">
                {
                  dict.showcase
                    .title
                }
              </h2>

              <p
                className="section-desc"
                style={{
                  margin: "0 auto",
                }}
              >
                {
                  dict.showcase
                    .description
                }
              </p>
            </div>
          </div>

          <div
            className="text-center"
            style={{
              marginTop: "4rem",
            }}
          >
            <Link
              href={`/${lang}/products`}
              className="btn btn-primary animate-fade-up"
            >
              {
                dict.showcase
                  .catalog
              }

              <ArrowRight
                size={18}
                aria-hidden="true"
                style={{
                  transform: isAr
                    ? "rotate(180deg)"
                    : "none",
                }}
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
