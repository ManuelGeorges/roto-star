"use client";

import {
  Search,
  ArrowRight,
  LayoutGrid,
  Info,
  Shield,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function ProductsClient({ lang, dict }) {
  const isAr = lang === "ar";

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(
    dict?.filter?.all || ""
  );

  const categories = useMemo(
    () => [
      dict.filter.all,
      "BOPP",
      "PET + AL + PE or CPP",
      "PET + PE Milky or Trans.",
      "Twist Wrapping Material",
      "BOPP Pearlized",
      "BOPP + CPP",
    ],
    [dict]
  );

  const products = useMemo(
    () => [
      {
        title: "BOPP",
        slug: "bopp",
        desc: isAr
          ? "وضوح عالٍ، قدرة ممتازة على الطباعة ومقاومة الرطوبة للبطاطس والوجبات الخفيفة وأكثر."
          : "High clarity, excellent printability and moisture resistance for chips, snacks and more.",
        image:
          "/images/mockup/ChocoSyria/Serial Wafer Mockup  chocolate.webp",
      },
      {
        title: "PET + AL + PE or CPP",
        slug: "pet-al-pe-or-cpp",
        desc: isAr
          ? "حماية حاجزة متقدمة لإطالة عمر الصلاحية ونضارة المنتج."
          : "Advanced barrier protection for extended shelf life and product freshness.",
        image:
          "/images/mockup/Fakakes/Vacakis 100g mockup 2.webp",
      },
      {
        title: "PET + PE Milky or Trans.",
        slug: "pet-pe-milky-or-trans",
        desc: isAr
          ? "تغليف متعدد الاستخدامات بمتانة عالية وأداء ختم ممتاز."
          : "Versatile packaging with high durability and excellent seal performance.",
        image: "/images/mockup/Saida/Saida 3.webp",
      },
      {
        title: "Twist Wrapping Material",
        slug: "twist-wrapping-material",
        desc: isAr
          ? "أفلام تويست متميزة للحلويات والسكريات مع احتفاظ فائق بالالتواء."
          : "Premium twist films for candies and confectionery with superior twist retention.",
        image:
          "/images/mockup/ChocoSyria/Nay mockup nero.webp",
      },
      {
        title: "BOPP Pearlized",
        slug: "bopp-pearlized",
        desc: isAr
          ? "لمسة لؤلؤية أنيقة لمظهر متميز وجاذبية محسنة على الرف."
          : "Elegant pearlized finish for premium look and enhanced shelf appeal.",
        image:
          "/images/mockup/Mini Top/Mini top mockup.webp",
      },
      {
        title: "BOPP + CPP",
        slug: "bopp-cpp",
        desc: isAr
          ? "حلول قوية قابلة للختم بالحرارة مثالية لمجموعة واسعة من تطبيقات الأغذية."
          : "Strong, heat-sealable solutions ideal for a wide range of food applications.",
        image:
          "/images/mockup/Elegance/Elegance mockup.webp",
      },
    ],
    [isAr]
  );

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        !query ||
        product.title.toLowerCase().includes(query) ||
        product.desc.toLowerCase().includes(query);

      const matchesCategory =
        activeCategory === dict.filter.all ||
        product.title === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, activeCategory, dict]);

  return (
    <main
      style={{ background: "#fff" }}
      dir={isAr ? "rtl" : "ltr"}
    >
      <section
        className="hero products-hero"
        style={{
          background:
            'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/images/carousel/13 en.webp") center/cover',
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1
            className="hero-title-responsive animate-fade-up"
            style={{
              fontWeight: "800",
              marginBottom: "1rem",
            }}
          >
            {dict.hero.title}
          </h1>

          <nav
            aria-label={isAr ? "مسار التنقل" : "Breadcrumb"}
            className="animate-fade delay-1"
            style={{
              display: "flex",
              gap: "0.5rem",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "0.9rem",
              opacity: 0.8,
            }}
          >
            <Link
              href={`/${lang}`}
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              {dict.hero.home}
            </Link>

            <span>/</span>

            <span
              style={{
                color: "var(--primary)",
                fontWeight: "600",
              }}
            >
              {dict.hero.products}
            </span>
          </nav>
        </div>
      </section>

      <section
        style={{
          padding: "3rem 0",
          background: "#fcfcfc",
          borderBottom: "1px solid #eee",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <div
              className="animate-fade filter-container-scroll"
              role="tablist"
              aria-label={
                isAr
                  ? "تصنيفات المنتجات"
                  : "Product categories"
              }
              style={{
                display: "flex",
                gap: "0.7rem",
                flexWrap: "wrap",
              }}
            >
              {categories.map((category, index) => {
                const isActive =
                  activeCategory === category;

                return (
                  <button
                    key={`${category}-${index}`}
                    type="button"
                    onClick={() =>
                      setActiveCategory(category)
                    }
                    aria-pressed={isActive}
                    className="filter-btn"
                    style={{
                      padding: "0.7rem 1.4rem",
                      borderRadius: "6px",
                      border: isActive
                        ? "none"
                        : "1px solid #eee",
                      background: isActive
                        ? "var(--primary)"
                        : "#fff",
                      color: "#000",
                      fontWeight: "700",
                      fontSize: "0.85rem",
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                      boxShadow: isActive
                        ? "0 4px 12px rgba(255,189,0,0.2)"
                        : "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div
              className="animate-fade-up delay-1"
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  position: "relative",
                  flex: "1",
                  minWidth: "250px",
                }}
              >
                <Search
                  size={18}
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    [isAr ? "right" : "left"]: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#888",
                  }}
                />

                <input
                  type="search"
                  aria-label={dict.filter.search}
                  placeholder={dict.filter.search}
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(event.target.value)
                  }
                  style={{
                    padding: `0.75rem ${
                      isAr ? "2.8rem" : "1rem"
                    } 0.75rem ${
                      isAr ? "1rem" : "2.8rem"
                    }`,
                    borderRadius: "8px",
                    border: "1px solid #eee",
                    outline: "none",
                    width: "100%",
                    fontSize: "0.9rem",
                    background: "#fff",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "6rem 0",
        }}
      >
        <div className="container">
          {filteredProducts.length > 0 ? (
            <div className="grid-3">
              {filteredProducts.map((product, index) => (
                <Link
                  href={`/${lang}/products/detail?type=${encodeURIComponent(
                    product.slug
                  )}`}
                  key={product.slug}
                  aria-label={
                    isAr
                      ? `عرض تفاصيل ${product.title}`
                      : `View ${product.title} product details`
                  }
                  className={`animate-fade-up delay-${
                    (index % 3) + 1
                  }`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <article className="product-card-horizontal">
                    <div
                      className="product-img-wrapper"
                      style={{
                        width: "130px",
                        height: "150px",
                        background: "#f8f8f8",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        border: "1px solid #f0f0f0",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        width="130"
                        height="150"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition:
                            "transform 0.5s ease",
                        }}
                        className="product-img-photo"
                        loading="lazy"
                      />
                    </div>

                    <div
                      style={{
                        flex: 1,
                        textAlign: isAr ? "right" : "left",
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "1.15rem",
                          fontWeight: "800",
                          marginBottom: "0.8rem",
                          color: "#111",
                        }}
                      >
                        {product.title}
                      </h2>

                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "#666",
                          lineHeight: "1.6",
                          marginBottom: "1.8rem",
                        }}
                      >
                        {product.desc}
                      </p>

                      <div
                        className="arrow-icon-circle"
                        aria-hidden="true"
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          background: "var(--primary)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow:
                            "0 4px 10px rgba(255,189,0,0.3)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <ArrowRight
                          size={18}
                          color="#000"
                          strokeWidth={2.5}
                          style={{
                            transform: isAr
                              ? "rotate(180deg)"
                              : "none",
                          }}
                        />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div
              className="animate-fade-up"
              style={{
                textAlign: "center",
                padding: "5rem 1rem",
              }}
            >
              <Search
                size={48}
                className="text-primary"
                style={{ marginBottom: "1rem" }}
              />

              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "800",
                  marginBottom: "0.8rem",
                }}
              >
                {isAr
                  ? "لم يتم العثور على منتجات"
                  : "No products found"}
              </h2>

              <p style={{ color: "#666" }}>
                {isAr
                  ? "جرّب تغيير كلمة البحث أو اختيار تصنيف آخر."
                  : "Try changing your search or selecting another category."}
              </p>
            </div>
          )}

          <div className="custom-solution-banner animate-fade-up">
            <div className="banner-content">
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "#F9F9F9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #eee",
                  flexShrink: 0,
                }}
              >
                <HelpCircle
                  className="text-primary pulse-soft"
                  size={32}
                />
              </div>

              <div className="banner-text">
                <h2
                  style={{
                    fontWeight: "800",
                    fontSize: "1.4rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  {dict.custom.title}
                </h2>

                <p
                  style={{
                    color: "#666",
                    fontSize: "1rem",
                  }}
                >
                  {dict.custom.desc}
                </p>
              </div>
            </div>

            <Link
              href={`/${lang}/contact`}
              className="btn btn-primary"
              style={{
                padding: "1.2rem 3rem",
                borderRadius: "10px",
                gap: "12px",
                fontSize: "1rem",
              }}
            >
              {dict.custom.cta}

              <ArrowRight
                size={20}
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

      <section
        style={{
          background: "#111",
          color: "#fff",
          padding: "4rem 0",
        }}
      >
        <div className="container">
          <div className="grid-4">
            {dict.features.map((feature, index) => (
              <div
                key={`${feature}-${index}`}
                className={`animate-fade-up delay-${
                  (index % 3) + 1
                }`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.2rem",
                }}
              >
                <div
                  style={{
                    color: "var(--primary)",
                  }}
                >
                  {index === 0 && (
                    <LayoutGrid size={28} />
                  )}

                  {index === 1 && (
                    <Search size={28} />
                  )}

                  {index === 2 && (
                    <Info size={28} />
                  )}

                  {index === 3 && (
                    <Shield size={28} />
                  )}
                </div>

                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "#eee",
                  }}
                >
                  {feature}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}