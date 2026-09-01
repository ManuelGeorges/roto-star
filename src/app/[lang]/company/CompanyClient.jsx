"use client";

import {
  Clock,
  Users,
  Globe,
  ShieldCheck,
  Printer,
  Box,
  Layers,
  CheckCircle,
  Target,
  Eye,
  Award,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function CompanyClient({ lang, dict }) {
  const isAr = lang === "ar";

  const timeline = [
    {
      year: "1996",
      title: isAr ? "تأسست في حلب" : "Founded in Aleppo",
      desc: isAr
        ? "تأسست روتو ستار في عام 1996 في العاصمة الاقتصادية لسوريا، حلب، تحت اسم حلب للطباعة، متخصصة في تقنيات طباعة الفليكسو والروتوجرافور."
        : "Roto Star was established in 1996 in the economic capital of Syria, Aleppo, under the name Aleppo Printing, specializing in flexographic and rotogravure printing technologies.",
    },
    {
      year: "2013",
      title: isAr
        ? "انتقال التصنيع إلى مصر"
        : "Manufacturing Transferred to Egypt",
      desc: isAr
        ? "في عام 2013، تم نقل نشاط التصنيع إلى مصر، وتحديدًا برج العرب في الإسكندرية، لتوسيع العمليات وخدمة الأسواق الإقليمية والعالمية بشكل أفضل."
        : "In 2013, the manufacturing activity was transferred to Egypt, specifically Borg El Arab in Alexandria, to expand operations and better serve regional and global markets.",
    },
    {
      year: isAr ? "اليوم" : "Today",
      title: isAr
        ? "التميز في تغليف الروتوجرافور"
        : "Excellence in Rotogravure Packaging",
      desc: isAr
        ? "تعمل روتو ستار اليوم من برج العرب بالإسكندرية بمنشأة حديثة، وتقدم حلول تغليف روتوجرافور عالية الأداء للعملاء في جميع أنحاء العالم."
        : "Today, Roto Star operates from Borg El Arab, Alexandria, with a modern facility delivering high-performance rotogravure packaging solutions to clients worldwide.",
    },
  ];

  const capabilities = [
    {
      icon: <Printer size={32} className="text-primary" aria-hidden="true" />,
      title: isAr
        ? "طباعة روتوجرافور عالية الأداء"
        : "High-Performance Rotogravure Printing",
      desc: isAr
        ? "تقنية روتوجرافور متقدمة للتغليف المرن تبرز بما يصل إلى 10 ألوان."
        : "Advanced rotogravure technology for flexible packaging with printing capabilities of up to 10 colors.",
      image: "/images/carousel/10 en.webp",
      alt: isAr
        ? "طباعة روتوجرافور للتغليف المرن في روتو ستار"
        : "Rotogravure printing for flexible packaging at Roto Star",
    },
    {
      icon: <Box size={32} className="text-primary" aria-hidden="true" />,
      title: isAr
        ? "حلول تغليف كاملة"
        : "Complete Packaging Solutions",
      desc: isAr
        ? "من التصميم الهيكلي إلى الإنتاج النهائي، نقدم حلول تغليف شاملة."
        : "From structural design to final production, we deliver end-to-end flexible packaging solutions.",
      image: "/images/carousel/28.webp",
      alt: isAr
        ? "حلول التغليف المرن في روتو ستار"
        : "Flexible packaging solutions at Roto Star",
    },
    {
      icon: <Layers size={32} className="text-primary" aria-hidden="true" />,
      title: isAr
        ? "مواد وهياكل متقدمة"
        : "Advanced Materials & Structures",
      desc: isAr
        ? "خبرة في الأفلام متعددة الطبقات، والتصفيح عالي الحاجز، والخيارات المستدامة."
        : "Expertise in multi-layer films, high-barrier laminations, and sustainable packaging options.",
      image: "/images/carousel/30.webp",
      alt: isAr
        ? "مواد وهياكل متقدمة للتغليف المرن"
        : "Advanced materials and structures for flexible packaging",
    },
    {
      icon: (
        <CheckCircle
          size={32}
          className="text-primary"
          aria-hidden="true"
        />
      ),
      title: isAr
        ? "جودة يمكنك الاعتماد عليها"
        : "Quality You Can Rely On",
      desc: isAr
        ? "رقابة صارمة على الجودة في كل خطوة لضمان التميز المستمر والسلامة."
        : "Strict quality control at every step to ensure consistent excellence and product safety.",
      image: "/images/carousel/11 en.webp",
      alt: isAr
        ? "مراقبة الجودة في روتو ستار"
        : "Quality control at Roto Star",
    },
  ];

  return (
    <main style={{ background: "#fff" }}>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <p className="hero-subtitle">
              {dict.hero.subtitle}
            </p>

            <h1>{dict.hero.title}</h1>

            <p className="hero-description">
              {dict.hero.description}
            </p>

            <div className="hero-btns">
              <Link
                href={`/${lang}/contact`}
                className="btn btn-primary"
              >
                {dict.hero.workWithUs}
              </Link>
            </div>
          </div>

          <div className="hero-visual animate-fade">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "500px",
                borderRadius: "30px",
                overflow: "hidden",
                boxShadow:
                  "0 30px 60px rgba(0,0,0,0.3)",
                animation:
                  "float 6s ease-in-out infinite",
              }}
            >
              <img
                src="/images/carousel/20 en.webp"
                alt={
                  isAr
                    ? "منشأة روتو ستار الحديثة في برج العرب بالإسكندرية"
                    : "Roto Star modern manufacturing facility in Borg El Arab, Alexandria"
                }
                width={1200}
                height={800}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  [isAr ? "right" : "left"]: "30px",
                  background:
                    "rgba(255,189,0,0.9)",
                  padding: "1.5rem",
                  borderRadius: "15px",
                  color: "#000",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    fontWeight: "800",
                    fontSize: "1.5rem",
                  }}
                >
                  30+ {isAr ? "عامًا" : "Years"}
                </div>

                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textTransform:
                      "uppercase",
                  }}
                >
                  {isAr
                    ? "من التميز في الطباعة"
                    : "Of Printing Excellence"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#0A0A0A",
          padding: "4rem 0",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div className="container">
          <div className="grid-4">
            <div className="stat-bar-item animate-fade-up delay-1">
              <Clock
                className="text-primary"
                size={32}
                aria-hidden="true"
              />

              <div>
                <div
                  className="stat-num"
                  style={{ color: "white" }}
                >
                  30+
                </div>

                <div className="stat-label">
                  {dict.stats.years}
                </div>
              </div>
            </div>

            <div className="stat-bar-item animate-fade-up delay-2">
              <Users
                className="text-primary"
                size={32}
                aria-hidden="true"
              />

              <div>
                <div
                  className="stat-num"
                  style={{ color: "white" }}
                >
                  500+
                </div>

                <div className="stat-label">
                  {dict.stats.clients}
                </div>
              </div>
            </div>

            <div className="stat-bar-item animate-fade-up delay-3">
              <Globe
                className="text-primary"
                size={32}
                aria-hidden="true"
              />

              <div>
                <div
                  className="stat-num"
                  style={{ color: "white" }}
                >
                  25+
                </div>

                <div className="stat-label">
                  {dict.stats.markets}
                </div>
              </div>
            </div>

            <div className="stat-bar-item animate-fade-up delay-1">
              <ShieldCheck
                className="text-primary"
                size={32}
                aria-hidden="true"
              />

              <div>
                <div
                  className="stat-num"
                  style={{ color: "white" }}
                >
                  100%
                </div>

                <div className="stat-label">
                  {dict.stats.quality}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div
            className="grid-2"
            style={{ gap: "3rem" }}
          >
            <div
              className="capability-card animate-fade-up"
              style={{ padding: "3rem" }}
            >
              <div
                aria-hidden="true"
                style={{
                  background:
                    "rgba(255,189,0,0.1)",
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent:
                    "center",
                  marginBottom: "2rem",
                }}
              >
                <Target
                  size={32}
                  className="text-primary"
                />
              </div>

              <h2
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "800",
                  marginBottom: "1.5rem",
                }}
              >
                {dict.mission.title}
              </h2>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.8",
                  fontSize: "1.05rem",
                }}
              >
                {dict.mission.desc}
              </p>
            </div>

            <div
              className="capability-card animate-fade-up delay-1"
              style={{ padding: "3rem" }}
            >
              <div
                aria-hidden="true"
                style={{
                  background:
                    "rgba(255,189,0,0.1)",
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent:
                    "center",
                  marginBottom: "2rem",
                }}
              >
                <Eye
                  size={32}
                  className="text-primary"
                />
              </div>

              <h2
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "800",
                  marginBottom: "1.5rem",
                }}
              >
                {dict.vision.title}
              </h2>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.8",
                  fontSize: "1.05rem",
                }}
              >
                {dict.vision.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="grid-2 align-center"
            style={{
              alignItems: "center",
              gap: "5rem",
            }}
          >
            <div className="animate-fade-up">
              <h2 className="section-title">
                {dict.rooted.title}
              </h2>

              <div
                aria-hidden="true"
                style={{
                  width: "60px",
                  height: "3px",
                  background:
                    "var(--primary)",
                  margin: "1.5rem 0",
                }}
              />

              <p
                style={{
                  marginBottom: "2rem",
                  fontSize: "1.1rem",
                  color: "#666",
                  lineHeight: "1.8",
                }}
              >
                {dict.rooted.desc}
              </p>

              <div
                className="grid-2"
                style={{
                  gap: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                {dict.rooted.points.map(
                  (point, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems:
                          "center",
                        gap: "12px",
                      }}
                    >
                      <CheckCircle
                        size={20}
                        className="text-primary"
                        aria-hidden="true"
                      />

                      <span
                        style={{
                          fontWeight: "600",
                        }}
                      >
                        {point}
                      </span>
                    </div>
                  )
                )}
              </div>

              <Link
                href={`/${lang}/products`}
                className="btn btn-primary"
              >
                {dict.rooted.explore}

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

            <div
              className={`animate-fade-up delay-2 ${
                isAr ? "order-first" : ""
              }`}
              style={{
                position: "relative",
              }}
            >
              <div
                style={{
                  borderRadius: "25px",
                  overflow: "hidden",
                  boxShadow:
                    "0 30px 60px rgba(0,0,0,0.15)",
                }}
              >
                <img
                  src="/images/carousel/20 en.webp"
                  alt={
                    isAr
                      ? "منشأة إنتاج روتو ستار للتغليف المرن"
                      : "Roto Star flexible packaging production facility"
                  }
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  [isAr ? "left" : "right"]:
                    "-30px",
                  background:
                    "var(--primary)",
                  padding: "2.5rem",
                  borderRadius: "20px",
                  boxShadow:
                    "0 15px 40px rgba(255, 189, 0, 0.4)",
                  zIndex: 2,
                  display: "flex",
                  flexDirection:
                    "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Award
                  size={48}
                  color="#000"
                  aria-hidden="true"
                />

                <div
                  style={{
                    fontWeight: "900",
                    color: "#000",
                    textAlign:
                      "center",
                  }}
                >
                  {isAr
                    ? "جودة"
                    : "CERTIFIED"}
                  <br />
                  {isAr
                    ? "معتمدة"
                    : "QUALITY"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section bg-light"
        style={{ overflow: "hidden" }}
      >
        <div className="container">
          <div
            className="text-center animate-fade-up"
            style={{
              marginBottom: "5rem",
            }}
          >
            <h2
              className="section-title"
              style={{ margin: "0 auto" }}
            >
              {dict.journey.title}
            </h2>

            <div
              aria-hidden="true"
              style={{
                width: "60px",
                height: "3px",
                background:
                  "var(--primary)",
                margin:
                  "1.5rem auto",
              }}
            />
          </div>

          <div className="timeline-wrapper">
            <div
              className="timeline-line"
              aria-hidden="true"
            />

            <div className="grid-3">
              {timeline.map(
                (item, index) => (
                  <div
                    key={item.year}
                    className={`text-center timeline-item animate-fade-up delay-${
                      index + 1
                    }`}
                  >
                    <div className="timeline-year">
                      {item.year}
                    </div>

                    <div
                      className="timeline-dot"
                      aria-hidden="true"
                    />

                    <h3 className="timeline-title">
                      {item.title}
                    </h3>

                    <p className="timeline-desc">
                      {item.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="text-center animate-fade-up"
            style={{
              marginBottom: "5rem",
            }}
          >
            <h2
              className="section-title"
              style={{ margin: "0 auto" }}
            >
              {dict.capabilities.title}
            </h2>

            <div
              aria-hidden="true"
              style={{
                width: "60px",
                height: "3px",
                background:
                  "var(--primary)",
                margin:
                  "1.5rem auto",
              }}
            />

            <p
              style={{
                maxWidth: "700px",
                margin:
                  "1.5rem auto 0",
                color: "#666",
              }}
            >
              {dict.capabilities.desc}
            </p>
          </div>

          <div
            className="grid-2"
            style={{ gap: "2rem" }}
          >
            {capabilities.map(
              (cap, i) => (
                <article
                  key={cap.title}
                  className={`capability-card animate-fade-up delay-${
                    (i % 2) + 1
                  }`}
                  style={{
                    padding: 0,
                    display: "flex",
                    overflow: "hidden",
                    minHeight: "300px",
                  }}
                >
                  <div
                    style={{
                      width: "40%",
                      position:
                        "relative",
                      overflow:
                        "hidden",
                    }}
                  >
                    <img
                      src={cap.image}
                      alt={cap.alt}
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit:
                          "cover",
                      }}
                    />

                    <div
                      aria-hidden="true"
                      style={{
                        position:
                          "absolute",
                        inset: 0,
                        background:
                          "rgba(0,0,0,0.1)",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      width: "60%",
                      padding: "2.5rem",
                      display: "flex",
                      flexDirection:
                        "column",
                      justifyContent:
                        "center",
                      textAlign: isAr
                        ? "right"
                        : "left",
                    }}
                  >
                    <div
                      style={{
                        marginBottom:
                          "1rem",
                      }}
                    >
                      {cap.icon}
                    </div>

                    <h3
                      style={{
                        fontSize:
                          "1.25rem",
                        marginBottom:
                          "1rem",
                        fontWeight:
                          "800",
                      }}
                    >
                      {cap.title}
                    </h3>

                    <p
                      style={{
                        fontSize:
                          "0.9rem",
                        color: "#666",
                        lineHeight:
                          "1.6",
                      }}
                    >
                      {cap.desc}
                    </p>
                  </div>
                </article>
              )
            )}
          </div>

          <div
            className="animate-fade-up"
            style={{
              marginTop: "8rem",
            }}
          >
            <div
              style={{
                background:
                  "var(--dark)",
                borderRadius: "30px",
                padding:
                  "5rem 3rem",
                textAlign:
                  "center",
                position:
                  "relative",
                overflow:
                  "hidden",
                boxShadow:
                  "0 40px 100px rgba(0,0,0,0.2)",
              }}
            >
              <div
                style={{
                  position:
                    "relative",
                  zIndex: 2,
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    color:
                      "var(--primary)",
                    fontSize:
                      "5rem",
                    fontFamily:
                      "serif",
                    lineHeight: 1,
                    marginBottom:
                      "1rem",
                  }}
                >
                  “
                </div>

                <h2
                  style={{
                    color: "#fff",
                    fontSize:
                      "2.5rem",
                    fontWeight:
                      "800",
                    maxWidth:
                      "900px",
                    margin:
                      "0 auto 2.5rem",
                    lineHeight:
                      "1.3",
                  }}
                >
                  {isAr
                    ? "نساعد الشركات على التعبير عن أفكارها بفعالية من خلال "
                    : "We help businesses express their ideas effectively through our "}

                  <span
                    style={{
                      color:
                        "var(--primary)",
                    }}
                  >
                    {isAr
                      ? "حلول التغليف الكاملة"
                      : "complete packaging solutions"}
                  </span>
                  .
                </h2>

                <div
                  style={{
                    display:
                      "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "center",
                    gap: "15px",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      width: "40px",
                      height: "2px",
                      background:
                        "var(--primary)",
                    }}
                  />

                  <span
                    style={{
                      color:
                        "var(--primary)",
                      fontWeight:
                        "700",
                      letterSpacing:
                        "2px",
                      textTransform:
                        "uppercase",
                      fontSize:
                        "0.9rem",
                    }}
                  >
                    {isAr
                      ? "فريق روتو ستار"
                      : "The Roto Star Team"}
                  </span>

                  <div
                    aria-hidden="true"
                    style={{
                      width: "40px",
                      height: "2px",
                      background:
                        "var(--primary)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
