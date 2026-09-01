"use client";

import {
  Lightbulb,
  PenTool,
  Printer,
  Leaf,
  ArrowRight,
  CheckCircle2,
  FlaskConical,
  Palette,
  Zap,
  Layers,
  BarChart3,
  Layout,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { createElement } from "react";

export default function ProcessClient({ lang, dict }) {
  const isAr = lang === "ar";

  // حماية من أي مشكلة لو الـ dictionary ناقص
  if (!dict) {
    return null;
  }

  const steps = [
    {
      icon: Lightbulb,
      step: dict.flow?.steps?.[0],
    },
    {
      icon: PenTool,
      step: dict.flow?.steps?.[1],
    },
    {
      icon: Printer,
      step: dict.flow?.steps?.[2],
    },
  ];

  const featuresIcons = [Zap, Layers, BarChart3, Leaf];

  return (
    <main
      style={{ background: "#fff" }}
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* ================= HERO ================= */}
      <section
        className="bg-dark hero-section"
        aria-labelledby="process-page-title"
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "100px",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            right: isAr ? "auto" : 0,
            left: isAr ? 0 : "auto",
            width: "50%",
            height: "100%",
            background:
              "radial-gradient(circle at 70% 30%, rgba(255, 189, 0, 0.08) 0%, transparent 70%)",
            zIndex: 1,
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            className="grid-2 hero-grid"
            style={{
              alignItems: "center",
            }}
          >
            <div className="hero-text">
              <nav
                aria-label={isAr ? "مسار التنقل" : "Breadcrumb"}
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  fontSize: "0.85rem",
                  color: "var(--primary)",
                  marginBottom: "1.5rem",
                  fontWeight: "600",
                }}
              >
                <Link
                  href={`/${lang}`}
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  {dict.hero?.home}
                </Link>

                <span
                  aria-hidden="true"
                  style={{ color: "#444" }}
                >
                  /
                </span>

                <span style={{ color: "#fff" }}>
                  {dict.hero?.process}
                </span>
              </nav>

              <p
                className="text-primary animate-fade-up"
                style={{
                  fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)",
                  marginBottom: "1rem",
                  letterSpacing: "2px",
                  fontWeight: "800",
                }}
              >
                {dict.hero?.subtitle}
              </p>

              <h1
                id="process-page-title"
                className="animate-fade-up delay-1 hero-title"
                style={{
                  lineHeight: "1.1",
                  marginBottom: "2rem",
                  fontWeight: "800",
                }}
              >
                {isAr ? (
                  <>
                    من الفكرة إلى{" "}
                    <span className="text-primary">
                      التحفة الفنية
                    </span>
                    .
                  </>
                ) : (
                  <>
                    From Idea to{" "}
                    <span className="text-primary">
                      Masterpiece
                    </span>
                    .
                  </>
                )}
              </h1>

              <p
                className="animate-fade-up delay-2"
                style={{
                  maxWidth: "540px",
                  fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
                  color: "var(--gray-400)",
                  marginBottom: "3rem",
                  lineHeight: "1.7",
                }}
              >
                {dict.hero?.description}
              </p>

              <div
                className="animate-fade-up delay-3"
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href={`/${lang}/contact`}
                  className="btn btn-primary"
                >
                  {dict.hero?.cta}

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

            <div
              className="animate-fade delay-3 hero-image-outer"
              style={{
                position: "relative",
              }}
            >
              <div
                className="hero-image-wrap"
                style={{
                  borderRadius: "30px",
                  overflow: "hidden",
                  boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  animation: "float 8s ease-in-out infinite",
                  position: "relative",
                }}
              >
                <img
                  src="/images/carousel/22.webp"
                  alt={
                    isAr
                      ? "عملية طباعة الروتوجرافور في مصنع روتو ستار"
                      : "Roto Star rotogravure printing process"
                  }
                  width="1200"
                  height="800"
                  fetchPriority="high"
                  style={{
                    width: "100%",
                    height: "clamp(280px, 45vw, 550px)",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "40%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              <div
                className="experience-badge animate-fade-up delay-3"
                aria-label={
                  isAr
                    ? "أكثر من 28 عامًا من الدقة"
                    : "More than 28 years of precision"
                }
                style={{
                  position: "absolute",
                  background: "var(--primary)",
                  borderRadius: "20px",
                  color: "var(--black)",
                  textAlign: "center",
                  boxShadow:
                    "0 30px 60px rgba(255,189,0,0.3)",
                  zIndex: 10,
                  [isAr ? "left" : "right"]:
                    "clamp(-8px, -1vw, -20px)",
                  [isAr ? "right" : "left"]: "auto",
                }}
              >
                <div
                  className="experience-badge-num"
                  style={{
                    fontWeight: "900",
                    lineHeight: "1",
                  }}
                >
                  28+
                </div>

                <div
                  style={{
                    fontSize: "clamp(0.6rem, 1.2vw, 0.7rem)",
                    fontWeight: "800",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {isAr ? (
                    <>
                      سنوات من
                      <br />
                      الدقة
                    </>
                  ) : (
                    <>
                      Years of
                      <br />
                      Precision
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS FLOW ================= */}
      <section
        className="section"
        aria-labelledby="process-flow-title"
        style={{
          background: "#fff",
        }}
      >
        <div className="container">
          <header className="text-center animate-fade-up section-intro">
            <h2
              id="process-flow-title"
              className="section-title"
            >
              {dict.flow?.title}
            </h2>

            <p
              style={{
                color: "var(--gray-600)",
                maxWidth: "650px",
                margin: "0 auto",
                fontSize: "clamp(1rem, 1.6vw, 1.1rem)",
              }}
            >
              {dict.flow?.desc}
            </p>

            <div
              aria-hidden="true"
              style={{
                width: "80px",
                height: "4px",
                background: "var(--primary)",
                margin: "2.5rem auto",
              }}
            />
          </header>

          <div
            className="grid-3 steps-grid"
            style={{
              gap: "3rem",
            }}
          >
            {steps.map((item, i) => {
              const Icon = item.icon;

              if (!Icon || !item.step) {
                return null;
              }

              return (
                <article
                  key={i}
                  id={`step-${i + 1}`}
                  className={`animate-fade-up delay-${i + 1} process-card`}
                  style={{
                    border: "1px solid #f0f0f0",
                    background: "#fff",
                    transition:
                      "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    textAlign: "center",
                    position: "relative",
                    scrollMarginTop: "120px",
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="icon-wrapper"
                    style={{
                      borderRadius: "50%",
                      background: "var(--gray-100)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 2.5rem",
                      transition: "all 0.5s ease",
                    }}
                  >
                    {createElement(Icon, {
                      size: 42,
                      className: "text-primary",
                      strokeWidth: 1.5,
                    })}
                  </div>

                  <p
                    style={{
                      color: "var(--primary)",
                      fontWeight: "800",
                      fontSize: "0.8rem",
                      letterSpacing: "2px",
                      marginBottom: "0.8rem",
                    }}
                  >
                    {isAr
                      ? `الخطوة ${i + 1}`
                      : `STEP ${i + 1}`}
                  </p>

                  <h3
                    style={{
                      fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                      fontWeight: "800",
                      marginBottom: "1.2rem",
                    }}
                  >
                    {item.step.title}
                  </h3>

                  <p
                    style={{
                      color: "var(--gray-600)",
                      lineHeight: "1.8",
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.step.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= DESIGN ================= */}
      <section
        className="section bg-light"
        aria-labelledby="design-title"
        style={{
          borderTop: "1px solid #eee",
        }}
      >
        <div className="container">
          <header
            className="animate-fade-up"
            style={{
              marginBottom: "4rem",
            }}
          >
            <p
              className="text-primary"
              style={{
                fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)",
                marginBottom: "1rem",
                letterSpacing: "2px",
                fontWeight: "800",
              }}
            >
              {dict.design?.subtitle}
            </p>

            <h2
              id="design-title"
              className="section-title"
              style={{
                marginBottom: "1.5rem",
              }}
            >
              {dict.design?.title}
            </h2>

            <p
              style={{
                color: "var(--gray-600)",
                fontSize: "clamp(1rem, 1.6vw, 1.1rem)",
                maxWidth: "800px",
                lineHeight: "1.8",
              }}
            >
              {dict.design?.desc}
            </p>

            <div
              aria-hidden="true"
              style={{
                width: "60px",
                height: "4px",
                background: "var(--primary)",
                marginTop: "2.5rem",
              }}
            />
          </header>

          <div
            className="grid-3 services-grid"
            style={{
              marginTop: "4rem",
            }}
          >
            {/* PREPRESS */}
            <article className="animate-fade-up delay-1">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    color: "var(--primary)",
                  }}
                >
                  <Layout size={24} />
                </div>

                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "800",
                  }}
                >
                  {dict.design?.prepress?.title}
                </h3>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {(dict.design?.prepress?.items || []).map(
                  (item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        fontSize: "1rem",
                        color: "var(--gray-600)",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "var(--primary)",
                          flexShrink: 0,
                        }}
                      />

                      {item}
                    </li>
                  )
                )}
              </ul>
            </article>

            {/* COLOR */}
            <article className="animate-fade-up delay-2">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    color: "var(--primary)",
                  }}
                >
                  <Palette size={24} />
                </div>

                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "800",
                  }}
                >
                  {dict.design?.color?.title}
                </h3>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {(dict.design?.color?.items || []).map(
                  (item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        fontSize: "1rem",
                        color: "var(--gray-600)",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "var(--primary)",
                          flexShrink: 0,
                        }}
                      />

                      {item}
                    </li>
                  )
                )}
              </ul>
            </article>

            {/* PROJECT */}
            <article className="animate-fade-up delay-3">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    color: "var(--primary)",
                  }}
                >
                  <Settings size={24} />
                </div>

                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "800",
                  }}
                >
                  {dict.design?.project?.title}
                </h3>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {(dict.design?.project?.items || []).map(
                  (item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        fontSize: "1rem",
                        color: "var(--gray-600)",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "var(--primary)",
                          flexShrink: 0,
                        }}
                      />

                      {item}
                    </li>
                  )
                )}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ================= PRINTING ================= */}
      <section
        className="section bg-white"
        aria-labelledby="printing-title"
      >
        <div className="container">
          <div
            className="grid-2 print-grid"
            style={{
              alignItems: "center",
            }}
          >
            <div className="animate-fade-up">
              <p
                className="text-primary"
                style={{
                  fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)",
                  marginBottom: "1rem",
                  letterSpacing: "2px",
                  fontWeight: "800",
                }}
              >
                {dict.print?.subtitle}
              </p>

              <h2
                id="printing-title"
                className="section-title"
                style={{
                  marginBottom: "2rem",
                }}
              >
                {dict.print?.title}
              </h2>

              <div
                aria-hidden="true"
                style={{
                  width: "60px",
                  height: "4px",
                  background: "var(--primary)",
                  marginBottom: "2.5rem",
                }}
              />

              <p
                style={{
                  color: "var(--gray-600)",
                  fontSize: "clamp(1rem, 1.6vw, 1.1rem)",
                  lineHeight: "1.8",
                  marginBottom: "2rem",
                }}
              >
                {dict.print?.desc}
              </p>

              <div
                className="grid-2 features-grid"
                style={{
                  marginBottom: "3rem",
                }}
              >
                {(dict.print?.features || []).map(
                  (feature, i) => {
                    const Icon =
                      featuresIcons[i] || CheckCircle2;

                    return (
                      <article
                        key={i}
                        style={{
                          display: "flex",
                          gap: "1rem",
                        }}
                      >
                        <div
                          aria-hidden="true"
                          style={{
                            color: "var(--primary)",
                            flexShrink: 0,
                          }}
                        >
                          {createElement(Icon, {
                            size: 24,
                          })}
                        </div>

                        <div>
                          <h3
                            style={{
                              fontWeight: "700",
                              fontSize: "1rem",
                              marginBottom: "0.4rem",
                            }}
                          >
                            {feature.title}
                          </h3>

                          <p
                            style={{
                              color: "var(--gray-500)",
                              fontSize: "0.85rem",
                              lineHeight: "1.5",
                            }}
                          >
                            {feature.text}
                          </p>
                        </div>
                      </article>
                    );
                  }
                )}
              </div>
            </div>

            <div
              className={`animate-fade delay-2 ${
                isAr ? "order-first" : ""
              }`}
            >
              <div
                className="capabilities-gallery"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{
                    gridColumn: "span 2",
                    borderRadius: "24px",
                    overflow: "hidden",
                    height: "clamp(220px, 32vw, 300px)",
                    boxShadow:
                      "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src="/images/carousel/13 en.webp"
                    alt={
                      isAr
                        ? "مصنع روتو ستار للطباعة والتغليف"
                        : "Roto Star printing and packaging factory"
                    }
                    width="1200"
                    height="700"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div
                  style={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    height: "clamp(150px, 22vw, 200px)",
                    boxShadow:
                      "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src="/images/carousel/14 en.webp"
                    alt={
                      isAr
                        ? "تقنيات الطباعة المتقدمة في روتو ستار"
                        : "Advanced rotogravure printing technology"
                    }
                    width="800"
                    height="600"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div
                  style={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    height: "clamp(150px, 22vw, 200px)",
                    boxShadow:
                      "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src="/images/carousel/15 en.webp"
                    alt={
                      isAr
                        ? "فحص الجودة في مصنع روتو ستار"
                        : "Quality control inspection at Roto Star"
                    }
                    width="800"
                    height="600"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LAB ================= */}
      <section
        className="section bg-light"
        aria-labelledby="lab-title"
      >
        <div className="container">
          <div
            className="grid-2 lab-grid"
            style={{
              alignItems: "center",
            }}
          >
            <div className="hero-text animate-fade-up">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  color: "var(--primary)",
                  fontWeight: "800",
                  fontSize: "0.8rem",
                  letterSpacing: "2px",
                  marginBottom: "1.5rem",
                }}
              >
                <FlaskConical
                  size={18}
                  aria-hidden="true"
                />

                {dict.lab?.subtitle}
              </div>

              <h2
                id="lab-title"
                className="section-title"
                style={{
                  marginBottom: "2rem",
                }}
              >
                {dict.lab?.title}
              </h2>

              <p
                style={{
                  marginBottom: "2.5rem",
                  fontSize: "clamp(1rem, 1.6vw, 1.1rem)",
                  color: "var(--gray-600)",
                  lineHeight: "1.8",
                }}
              >
                {dict.lab?.desc}
              </p>

              <div
                className="lab-checklist"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                  marginBottom: "3.5rem",
                }}
              >
                {(dict.lab?.points || []).map(
                  (item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.8rem",
                        fontWeight: "700",
                        fontSize: "0.9rem",
                      }}
                    >
                      <CheckCircle2
                        size={18}
                        className="text-primary"
                        aria-hidden="true"
                        style={{
                          flexShrink: 0,
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
                  borderColor: "var(--black)",
                  color: "var(--black)",
                }}
              >
                {dict.lab?.explore}
              </Link>
            </div>

            <div
              className={`animate-fade delay-2 lab-image-outer ${
                isAr ? "order-first" : ""
              }`}
            >
              <div
                className="lab-image-wrap"
                style={{
                  borderRadius: "30px",
                  overflow: "hidden",
                  boxShadow:
                    "0 40px 80px rgba(0,0,0,0.1)",
                  position: "relative",
                }}
              >
                <img
                  src="/images/carousel/16 en.webp"
                  alt={
                    isAr
                      ? "مختبر البحث والتطوير للتغليف المرن في روتو ستار"
                      : "Roto Star flexible packaging research and development laboratory"
                  }
                  width="1200"
                  height="800"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "clamp(280px, 42vw, 500px)",
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
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .hero-section {
          padding-top: clamp(10rem, 18vw, 14rem);
          padding-bottom: clamp(4rem, 9vw, 8rem);
        }

        .hero-title {
          font-size: clamp(2.1rem, 5.5vw, 3.8rem);
        }

        .section-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
        }

        .process-card {
          padding: clamp(4rem, 8vw, 6rem)
            clamp(3rem, 7vw, 5rem);
          border-radius: 24px;
        }

        .process-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary) !important;
          box-shadow: 0 25px 60px
            rgba(0, 0, 0, 0.08);
        }

        .icon-wrapper {
          width: clamp(76px, 10vw, 100px);
          height: clamp(76px, 10vw, 100px);
        }

        .experience-badge {
          bottom: clamp(16px, 4vw, 40px);
          padding: clamp(1rem, 2.5vw, 2rem);
        }

        .experience-badge-num {
          font-size: clamp(1.7rem, 4vw, 2.5rem);
        }

        @media (max-width: 1024px) {
          .steps-grid,
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 900px) {
          .hero-section {
            padding-top: clamp(8rem, 20vw, 12rem);
          }

          .hero-grid,
          .print-grid,
          .lab-grid {
            grid-template-columns: 1fr !important;
            gap: clamp(2.5rem, 8vw, 4rem) !important;
          }

          .lab-image-outer {
            order: -1;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding-top: 9rem;
          }

          .steps-grid,
          .services-grid {
            grid-template-columns: 1fr !important;
          }

          .features-grid,
          .lab-checklist {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
