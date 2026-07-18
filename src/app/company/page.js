"use client";
import { Clock, Users, Globe, ShieldCheck, Printer, Box, Layers, CheckCircle } from "lucide-react";

export default function Company() {
  const timeline = [
    {
      year: "1996",
      title: "Founded in Aleppo",
      desc: "Roto Star was established in 1976 in the economic capital of Syria, Aleppo, under the name Aleppo Printing, specializing in flexographic and rotogravure printing technologies."
    },
    {
      year: "2013",
      title: "Manufacturing Transferred to Egypt",
      desc: "In 2013, the manufacturing activity was transferred to Egypt (Borg El Arab, Alexandria) to expand operations and better serve regional and global markets."
    },
    {
      year: "Today",
      title: "Excellence in Rotogravure Packaging",
      desc: "Today, Roto Star operates from Borg El Arab, Alexandria with a modern facility, delivering high-performance rotogravure packaging solutions to clients worldwide."
    }
  ];

  const capabilities = [
    {
      icon: <Printer size={32} className="text-primary" />,
      title: "High-Performance Rotogravure Printing",
      desc: "Advanced rotogravure technology for flexible packaging that stands out."
    },
    {
      icon: <Box size={32} className="text-primary" />,
      title: "Complete Packaging Solutions",
      desc: "From design to production, we deliver end-to-end packaging solutions."
    },
    {
      icon: <Layers size={32} className="text-primary" />,
      title: "Advanced Materials & Structures",
      desc: "Expertise in multi-layer films and sustainable packaging options."
    },
    {
      icon: <CheckCircle size={32} className="text-primary" />,
      title: "Quality You Can Rely On",
      desc: "Strict quality control at every step to ensure consistent excellence."
    }
  ];

  return (
    <main style={{ background: '#fff' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div>
            <h3 className="hero-subtitle">ABOUT ROTO STAR</h3>
            <h1>
              Built on Trust.<br />
              Driven by Innovation.
            </h1>
            <p className="hero-description">
              From Aleppo to Alexandria, our journey is rooted in quality, innovation, and a passion for packaging excellence.
            </p>
          </div>
          <div className="hero-visual">
            <div className="visual-placeholder">
               <div style={{ color: '#444', fontWeight: 'bold' }}>FACTORY IMAGE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '5rem' }}>
            <h2 className="section-title" style={{ margin: '0 auto' }}>Our Journey</h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--primary)', margin: '1.5rem auto' }}></div>
          </div>

          <div className="timeline-wrapper">
            <div className="timeline-line"></div>
            <div className="grid-3">
              {timeline.map((item, index) => (
                <div key={index} className="text-center timeline-item">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-dot"></div>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: '#111', padding: '4rem 0' }}>
        <div className="container">
          <div className="grid-4">
            <div className="stat-bar-item">
              <Clock className="text-primary" size={32} />
              <div>
                <div className="stat-num">28+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
            </div>
            <div className="stat-bar-item">
              <Users className="text-primary" size={32} />
              <div>
                <div className="stat-num">500+</div>
                <div className="stat-label">Satisfied Clients</div>
              </div>
            </div>
            <div className="stat-bar-item">
              <Globe className="text-primary" size={32} />
              <div>
                <div className="stat-num">25+</div>
                <div className="stat-label">Markets Served</div>
              </div>
            </div>
            <div className="stat-bar-item">
              <ShieldCheck className="text-primary" size={32} />
              <div>
                <div className="stat-num">100%</div>
                <div className="stat-label">Quality Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '5rem' }}>
            <h2 className="section-title" style={{ margin: '0 auto' }}>Our Capabilities</h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--primary)', margin: '1.5rem auto' }}></div>
          </div>

          <div className="grid-4">
            {capabilities.map((cap, i) => (
              <div key={i} className="capability-card">
                <div style={{ marginBottom: '1.5rem' }}>{cap.icon}</div>
                <h4>{cap.title}</h4>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="quote-box">
            <div className="quote-content">
              <div className="quote-mark">”</div>
              <p>
                We help businesses express their ideas effectively through our complete printing solutions.
                <span className="quote-author">— The Roto Star Team</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
