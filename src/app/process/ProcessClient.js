"use client";
import { Lightbulb, PenTool, Printer, Clock, Cpu, Users, Leaf, ArrowRight, CheckCircle2, FlaskConical, Palette, Zap, Layers, BarChart3, Layout, Settings } from "lucide-react";
import Link from "next/link";

export default function ProcessClient() {
  return (
    <main style={{ background: '#fff' }}>
      <section className="bg-dark hero-section" style={{ position: 'relative', overflow: 'hidden' ,paddingTop:'100px'}}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'radial-gradient(circle at 70% 30%, rgba(255, 189, 0, 0.08) 0%, transparent 70%)',
          zIndex: 1
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid-2 hero-grid" style={{ alignItems: 'center' }}>
            <div className="hero-text">
              <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: '600' }}>
                <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                <span style={{ color: '#444' }}>/</span>
                <span style={{ color: '#fff' }}>Our Process</span>
              </div>
              <h3 className="text-primary animate-fade-up" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)', marginBottom: '1rem', letterSpacing: '2px', fontWeight: '800' }}>HOW WE WORK</h3>
              <h1 className="animate-fade-up delay-1 hero-title" style={{ lineHeight: '1.1', marginBottom: '2rem', fontWeight: '800' }}>
                From Idea to <span className="text-primary">Masterpiece</span>.
              </h1>
              <p style={{ maxWidth: '540px', fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', color: 'var(--gray-400)', marginBottom: '3rem', lineHeight: '1.7' }} className="animate-fade-up delay-2">
                We've refined a seamless process that transforms your packaging concepts into high-performance industrial solutions through precision engineering and creative excellence.
              </p>
              <div className="animate-fade-up delay-3" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">Start Your Journey <ArrowRight size={18} /></Link>
              </div>
            </div>
            <div className="animate-fade delay-3 hero-image-outer" style={{ position: 'relative' }}>
               <div className="hero-image-wrap" style={{
                 borderRadius: '30px',
                 overflow: 'hidden',
                 boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                 border: '1px solid rgba(255,255,255,0.1)',
                 animation: 'float 8s ease-in-out infinite',
                 position: 'relative'
               }}>
                 <img
                   src="/images/carousel/22.webp"
                   alt="Roto Star Rotogravure Printing Process"
                   style={{ width: '100%', height: 'clamp(280px, 45vw, 550px)', objectFit: 'cover', display: 'block' }}
                 />
                 <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', pointerEvents: 'none' }}></div>
               </div>
               <div className="experience-badge animate-fade-up delay-3" style={{
                 position: 'absolute',
                 background: 'var(--primary)',
                 borderRadius: '20px',
                 color: 'var(--black)',
                 textAlign: 'center',
                 boxShadow: '0 30px 60px rgba(255,189,0,0.3)',
                 zIndex: 10
               }}>
                 <div className="experience-badge-num" style={{ fontWeight: '900', lineHeight: '1' }}>28+</div>
                 <div style={{ fontSize: 'clamp(0.6rem, 1.2vw, 0.7rem)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>Years of<br/>Precision</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="text-center animate-fade-up section-intro">
            <h2 className="section-title">A Simplified, Proven Flow</h2>
            <p style={{ color: 'var(--gray-600)', maxWidth: '650px', margin: '0 auto', fontSize: 'clamp(1rem, 1.6vw, 1.1rem)' }}>
              We've optimized our workflow to ensure speed, quality, and complete transparency at every stage of production.
            </p>
            <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '2.5rem auto' }}></div>
          </div>

          <div className="grid-3 steps-grid" style={{ gap: '3rem' }}>
            {[
              {
                icon: Lightbulb,
                title: "01. Create",
                desc: "We begin with a deep dive into your product requirements, brainstorming materials and structures that maximize protection and shelf appeal.",
                color: "#FFF9E6"
              },
              {
                icon: PenTool,
                title: "02. Design",
                desc: "Our creative studio develops high-fidelity 3D models and graphic designs, ensuring your brand story is told with clarity and impact.",
                color: "#F4F4F4"
              },
              {
                icon: Printer,
                title: "03. Print",
                desc: "Using advanced rotogravure technology, we bring the designs to life with unmatched color precision and consistent industrial quality.",
                color: "#FFF9E6"
              }
            ].map((item, i) => (
              <div key={i} className={`animate-fade-up delay-${i+1} process-card`} style={{
                border: '1px solid #f0f0f0',
                background: '#fff',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                textAlign: 'center',
                position: 'relative'
              }}>
                <div className="icon-wrapper" style={{
                  borderRadius: '50%',
                  background: 'var(--gray-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2.5rem',
                  transition: 'all 0.5s ease'
                }}>
                  <item.icon size={42} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: 'clamp(1.3rem, 2vw, 1.6rem)', fontWeight: '800', marginBottom: '1.2rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: '1.8', fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light" style={{ borderTop: '1px solid #eee' }}>
        <div className="container">
          <div className="animate-fade-up" style={{ marginBottom: '4rem' }}>
            <h3 className="text-primary" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)', marginBottom: '1rem', letterSpacing: '2px', fontWeight: '800' }}>WE DESIGN</h3>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Professional Graphic Design Services</h2>
            <p style={{ color: 'var(--gray-600)', fontSize: 'clamp(1rem, 1.6vw, 1.1rem)', maxWidth: '800px', lineHeight: '1.8' }}>
              Roto Star's customers can utilize professional graphic design services, ensuring your packaging is ready for high-performance production.
            </p>
            <div style={{ width: '60px', height: '4px', background: 'var(--primary)', marginTop: '2.5rem' }}></div>
          </div>

          <div className="grid-3 services-grid" style={{ marginTop: '4rem' }}>
            <div className="animate-fade-up delay-1">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ color: 'var(--primary)' }}><Layout size={24} /></div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '800' }}>Prepress Services</h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Photography', 'Barcode creation', 'Digital file output', 'Electronic file transfer', 'Design consulting'].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', color: 'var(--gray-600)' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-up delay-2">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ color: 'var(--primary)' }}><Palette size={24} /></div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '800' }}>Color Management</h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Print quality analysis', 'Image management'].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', color: 'var(--gray-600)' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-up delay-3">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ color: 'var(--primary)' }}><Settings size={24} /></div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '800' }}>Project Management</h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Online approval system', 'Collaborative tools', 'Secure hosting environment'].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', color: 'var(--gray-600)' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid-2 print-grid" style={{ alignItems: 'center' }}>
            <div className="animate-fade-up">
              <h3 className="text-primary" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)', marginBottom: '1rem', letterSpacing: '2px', fontWeight: '800' }}>WE PRINT</h3>
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>Advanced Rotogravure <br/>Printing Capabilities</h2>
              <div style={{ width: '60px', height: '4px', background: 'var(--primary)', marginBottom: '2.5rem' }}></div>
              <p style={{ color: 'var(--gray-600)', fontSize: 'clamp(1rem, 1.6vw, 1.1rem)', lineHeight: '1.8', marginBottom: '2rem' }}>
                At Roto Star, we specialize in Rotogravure—globally recognized as the gold standard for high-performance industrial printing.
              </p>
              <div className="grid-2 features-grid" style={{ marginBottom: '3rem' }}>
                {[
                  { icon: Zap, title: "Precision Control", text: "Highest accuracy in color and micro-detail reproduction." },
                  { icon: Layers, title: "Versatile Layers", text: "Expertise in complex multi-layer substrates." },
                  { icon: BarChart3, title: "Volume Efficiency", text: "Optimal cost-performance for large-scale runs." },
                  { icon: Leaf, title: "Low Waste", text: "Advanced technology ensuring near-zero industrial waste." }
                ].map((feature, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ color: 'var(--primary)', flexShrink: 0 }}><feature.icon size={24} /></div>
                    <div>
                      <h4 style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '0.4rem' }}>{feature.title}</h4>
                      <p style={{ color: 'var(--gray-500)', fontSize: '0.85rem', lineHeight: '1.5' }}>{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade delay-2">
              <div className="capabilities-gallery" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ gridColumn: 'span 2', borderRadius: '24px', overflow: 'hidden', height: 'clamp(220px, 32vw, 300px)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                  <img src="/images/carousel/13 en.webp" alt="Roto Star Printing Factory" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ borderRadius: '24px', overflow: 'hidden', height: 'clamp(150px, 22vw, 200px)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                  <img src="/images/carousel/14 en.webp" alt="Advanced Printing Technology" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ borderRadius: '24px', overflow: 'hidden', height: 'clamp(150px, 22vw, 200px)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                  <img src="/images/carousel/15 en.webp" alt="Quality Control Inspection" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="grid-2 lab-grid" style={{ alignItems: 'center' }}>
            <div className="hero-text animate-fade-up">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--primary)', fontWeight: '800', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '1.5rem' }}>
                <FlaskConical size={18} /> PROTOTYPING CENTER
              </div>
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>The Working Lab</h2>
              <p style={{ marginBottom: '2.5rem', fontSize: 'clamp(1rem, 1.6vw, 1.1rem)', color: 'var(--gray-600)', lineHeight: '1.8' }}>
                Where concepts become reality. Our specialized lab is dedicated to creating high-fidelity prototypes.
              </p>
              <div className="lab-checklist" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3.5rem' }}>
                {['Basic Sketches', '3D Digital Models', 'Physical Mockups'].map((item, i) => (
                  <div key={i} className="flex" style={{ alignItems: 'center', gap: '0.8rem', fontWeight: '700', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={18} className="text-primary" style={{ flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/products" className="btn btn-outline" style={{ borderColor: 'var(--black)', color: 'var(--black)' }}>
                Explore Our Capabilities
              </Link>
            </div>
            <div className="animate-fade delay-2 lab-image-outer">
               <div className="lab-image-wrap" style={{
                 borderRadius: '30px',
                 overflow: 'hidden',
                 boxShadow: '0 40px 80px rgba(0,0,0,0.1)',
                 position: 'relative'
               }}>
                 <img
                   src="/images/carousel/16 en.webp"
                   alt="Flexible Packaging R&D Lab"
                   style={{ width: '100%', height: 'clamp(280px, 42vw, 500px)', objectFit: 'cover' }}
                 />
                 <div style={{ position: 'absolute', inset: 0, border: '15px solid rgba(255,255,255,0.1)', borderRadius: '30px', pointerEvents: 'none' }}></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-section { padding-top: clamp(10rem, 18vw, 14rem); padding-bottom: clamp(4rem, 9vw, 8rem); }
        .hero-title { font-size: clamp(2.1rem, 5.5vw, 3.8rem); }
        .section-title { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; }
        .process-card { padding: clamp(4rem, 8vw, 6rem) clamp(3rem, 7vw, 5rem); border-radius: 24px; }
        .icon-wrapper { width: clamp(76px, 10vw, 100px); height: clamp(76px, 10vw, 100px); }
        .experience-badge { bottom: clamp(16px, 4vw, 40px); right: clamp(-8px, -1vw, -20px); padding: clamp(1rem, 2.5vw, 2rem); }
        .experience-badge-num { font-size: clamp(1.7rem, 4vw, 2.5rem); }

        @media (max-width: 1024px) {
          .steps-grid, .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .hero-section { padding-top: clamp(8rem, 20vw, 12rem); }
          .hero-grid, .print-grid, .lab-grid { grid-template-columns: 1fr !important; gap: clamp(2.5rem, 8vw, 4rem) !important; }
          .lab-image-outer { order: -1; }
        }
        @media (max-width: 640px) {
          .hero-section { padding-top: 9rem; }
          .steps-grid, .services-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </main>
  );
}
