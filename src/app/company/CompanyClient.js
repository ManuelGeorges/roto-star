"use client";
import { Clock, Users, Globe, ShieldCheck, Printer, Box, Layers, CheckCircle, Target, Eye, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CompanyClient() {
  const timeline = [
    {
      year: "1996",
      title: "Founded in Aleppo",
      desc: "Roto Star was established in 1996 in the economic capital of Syria, Aleppo, under the name Aleppo Printing, specializing in flexographic and rotogravure printing technologies."
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
      desc: "Advanced rotogravure technology for flexible packaging that stands out with up to 10 colors.",
      image: "/images/carousel/10 en.webp"
    },
    {
      icon: <Box size={32} className="text-primary" />,
      title: "Complete Packaging Solutions",
      desc: "From structural design to final production, we deliver end-to-end packaging solutions.",
      image: "/images/carousel/28.webp"
    },
    {
      icon: <Layers size={32} className="text-primary" />,
      title: "Advanced Materials & Structures",
      desc: "Expertise in multi-layer films, high-barrier laminations, and sustainable options.",
      image: "/images/carousel/30.webp"
    },
    {
      icon: <CheckCircle size={32} className="text-primary" />,
      title: "Quality You Can Rely On",
      desc: "Strict quality control at every step to ensure consistent excellence and safety.",
      image: "/images/carousel/11 en.webp"
    }
  ];

  return (
    <main style={{ background: '#fff' }}>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h3 className="hero-subtitle">ABOUT ROTO STAR</h3>
            <h1>Built on Trust.<br />Driven by Innovation.</h1>
            <p className="hero-description">
              From Aleppo to Alexandria, our journey is rooted in quality, innovation, and a passion for packaging excellence that spans over two decades.
            </p>
            <div className="hero-btns">
               <Link href="/contact" className="btn btn-primary">Work With Us</Link>
            </div>
          </div>
          <div className="hero-visual animate-fade">
             <div style={{
               position: 'relative',
               width: '100%',
               height: '500px',
               borderRadius: '30px',
               overflow: 'hidden',
               boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
               animation: 'float 6s ease-in-out infinite'
             }}>
                <img
                  src="/images/carousel/20 en.webp"
                  alt="Roto Star Modern Factory in Egypt"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '30px',
                  left: '30px',
                  background: 'rgba(255,189,0,0.9)',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  color: '#000',
                  backdropFilter: 'blur(10px)'
                }}>
                   <div style={{ fontWeight: '800', fontSize: '1.5rem' }}>28+ Years</div>
                   <div style={{ fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase' }}>Of Printing Excellence</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#0A0A0A', padding: '4rem 0', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="grid-4">
            <div className="stat-bar-item animate-fade-up delay-1">
              <Clock className="text-primary" size={32} />
              <div>
                <div className="stat-num" style={{color:'white'}}>28+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
            <div className="stat-bar-item animate-fade-up delay-2">
              <Users className="text-primary" size={32} />
              <div>
                <div className="stat-num" style={{color:'white'}}>500+</div>
                <div className="stat-label">Clients Globally</div>
              </div>
            </div>
            <div className="stat-bar-item animate-fade-up delay-3">
              <Globe className="text-primary" size={32} />
              <div>
                <div className="stat-num" style={{color:'white'}}>25+</div>
                <div className="stat-label">Markets Served</div>
              </div>
            </div>
            <div className="stat-bar-item animate-fade-up delay-1">
              <ShieldCheck className="text-primary" size={32} />
              <div>
                <div className="stat-num" style={{color:'white'}}>100%</div>
                <div className="stat-label">Quality Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem' }}>
            <div className="capability-card animate-fade-up" style={{ padding: '3rem' }}>
               <div style={{ background: 'rgba(255,189,0,0.1)', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <Target size={32} className="text-primary" />
               </div>
               <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.5rem' }}>Our Mission</h3>
               <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.05rem' }}>
                 To provide innovative and high-quality flexible packaging solutions that help our clients' products stand out while ensuring maximum protection and sustainability.
               </p>
            </div>
            <div className="capability-card animate-fade-up delay-1" style={{ padding: '3rem' }}>
               <div style={{ background: 'rgba(255,189,0,0.1)', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <Eye size={32} className="text-primary" />
               </div>
               <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.5rem' }}>Our Vision</h3>
               <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.05rem' }}>
                 To be the leading global partner in the rotogravure packaging industry, recognized for our excellence in quality, innovation, and commitment to environmental responsibility.
               </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2 align-center" style={{ alignItems: 'center', gap: '5rem' }}>
             <div className="animate-fade-up">
                <h2 className="section-title">Rooted in Quality</h2>
                <div style={{ width: '60px', height: '3px', background: 'var(--primary)', margin: '1.5rem 0' }}></div>
                <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                  At Roto Star, we believe that packaging is more than just a container—it's the first touchpoint between your brand and your customer. Our commitment to excellence began in Aleppo and continues today in Alexandria, serving brands that demand the best.
                </p>
                <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '2rem' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle size={20} className="text-primary" />
                      <span style={{ fontWeight: '600' }}>Precision Printing</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle size={20} className="text-primary" />
                      <span style={{ fontWeight: '600' }}>Bespoke Structures</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle size={20} className="text-primary" />
                      <span style={{ fontWeight: '600' }}>Global Standards</span>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle size={20} className="text-primary" />
                      <span style={{ fontWeight: '600' }}>Fast Turnaround</span>
                   </div>
                </div>
                <Link href="/products" className="btn btn-primary">
                  Explore Our Solutions <ArrowRight size={18} />
                </Link>
             </div>
             <div className="animate-fade-up delay-2" style={{ position: 'relative' }}>
                <div style={{ borderRadius: '25px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}>
                  <img
                    src="/images/carousel/20 en.webp"
                    alt="Roto Star Flexible Packaging Production"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '-30px',
                  right: '-30px',
                  background: 'var(--primary)',
                  padding: '2.5rem',
                  borderRadius: '20px',
                  boxShadow: '0 15px 40px rgba(255, 189, 0, 0.4)',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                   <Award size={48} color="#000" />
                   <div style={{ fontWeight: '900', color: '#000', textAlign: 'center' }}>CERTIFIED<br/>QUALITY</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="section bg-light" style={{ overflow: 'hidden' }}>
        <div className="container">
          <div className="text-center animate-fade-up" style={{ marginBottom: '5rem' }}>
            <h2 className="section-title" style={{ margin: '0 auto' }}>Our Journey</h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--primary)', margin: '1.5rem auto' }}></div>
          </div>
          <div className="timeline-wrapper">
            <div className="timeline-line"></div>
            <div className="grid-3">
              {timeline.map((item, index) => (
                <div key={index} className={`text-center timeline-item animate-fade-up delay-${index + 1}`}>
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

      <section className="section">
        <div className="container">
          <div className="text-center animate-fade-up" style={{ marginBottom: '5rem' }}>
            <h2 className="section-title" style={{ margin: '0 auto' }}>Our Capabilities</h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--primary)', margin: '1.5rem auto' }}></div>
            <p style={{ maxWidth: '700px', margin: '1.5rem auto 0', color: '#666' }}>
              We leverage cutting-edge technology and decades of expertise to deliver packaging that performs under pressure and stands out on the shelf.
            </p>
          </div>
          <div className="grid-2" style={{ gap: '2rem' }}>
            {capabilities.map((cap, i) => (
              <div key={i} className={`capability-card animate-fade-up delay-${(i % 2) + 1}`} style={{ padding: 0, display: 'flex', overflow: 'hidden', minHeight: '300px' }}>
                <div style={{ width: '40%', position: 'relative', overflow: 'hidden' }}>
                   <img src={cap.image} alt={cap.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                   <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)' }}></div>
                </div>
                <div style={{ width: '60%', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ marginBottom: '1rem' }}>{cap.icon}</div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '800' }}>{cap.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.6' }}>{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="animate-fade-up" style={{ marginTop: '8rem' }}>
            <div style={{
              background: 'var(--dark)',
              borderRadius: '30px',
              padding: '5rem 3rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 40px 100px rgba(0,0,0,0.2)'
            }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ color: 'var(--primary)', fontSize: '5rem', fontFamily: 'serif', lineHeight: 1, marginBottom: '1rem' }}>“</div>
                <h2 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: '800', maxWidth: '900px', margin: '0 auto 2.5rem', lineHeight: '1.3' }}>
                  We help businesses express their ideas effectively through our <span style={{ color: 'var(--primary)' }}>complete packaging solutions</span>.
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                  <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                  <span style={{ color: 'var(--primary)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                    The Roto Star Team
                  </span>
                  <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
