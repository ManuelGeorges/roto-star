"use client";
import { Lightbulb, PenTool, Printer, Clock, Cpu, Users, Leaf, ArrowRight, CheckCircle2, FlaskConical, Palette } from "lucide-react";
import Link from "next/link";

export default function Process() {
  return (
    <main style={{ background: '#fff' }}>
      {/* Hero Section */}
      <section className="bg-dark" style={{ paddingTop: '12rem', paddingBottom: '8rem', position: 'relative', overflow: 'hidden' }}>
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
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="hero-text">
              <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: '600' }} className="animate-fade">
                <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                <span style={{ color: '#444' }}>/</span>
                <span style={{ color: '#fff' }}>Our Process</span>
              </div>
              <h3 className="text-primary animate-fade-up" style={{ fontSize: '0.9rem', marginBottom: '1rem', letterSpacing: '2px', fontWeight: '800' }}>HOW WE WORK</h3>
              <h1 className="animate-fade-up delay-1" style={{ fontSize: '3.8rem', lineHeight: '1.1', marginBottom: '2rem', fontWeight: '800' }}>
                From Idea to <span className="text-primary">Masterpiece</span>.
              </h1>
              <p style={{ maxWidth: '540px', fontSize: '1.15rem', color: 'var(--gray-400)', marginBottom: '3rem', lineHeight: '1.7' }} className="animate-fade-up delay-2">
                We've refined a seamless process that transforms your packaging concepts into high-performance industrial solutions through precision engineering and creative excellence.
              </p>
              <div className="animate-fade-up delay-3" style={{ display: 'flex', gap: '1.5rem' }}>
                <button className="btn btn-primary">Start Your Journey <ArrowRight size={18} /></button>
              </div>
            </div>
            <div className="animate-fade delay-3" style={{ position: 'relative' }}>
               <div style={{
                 borderRadius: '30px',
                 overflow: 'hidden',
                 boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                 border: '1px solid rgba(255,255,255,0.1)',
                 animation: 'float 8s ease-in-out infinite',
                 position: 'relative'
               }}>
                 <img
                   src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                   alt="Roto Star Manufacturing Process"
                   style={{ width: '100%', height: '550px', objectFit: 'cover', display: 'block' }}
                 />
                 <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', pointerEvents: 'none' }}></div>
               </div>

               {/* Experience Badge */}
               <div style={{
                 position: 'absolute',
                 bottom: '40px',
                 right: '-20px',
                 background: 'var(--primary)',
                 padding: '2rem',
                 borderRadius: '20px',
                 color: 'var(--black)',
                 textAlign: 'center',
                 boxShadow: '0 30px 60px rgba(255,189,0,0.3)',
                 zIndex: 10
               }} className="animate-fade-up delay-3">
                 <div style={{ fontSize: '2.5rem', fontWeight: '900', lineHeight: '1' }}>28+</div>
                 <div style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>Years of<br/>Precision</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="text-center animate-fade-up" style={{ marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1.5rem' }}>A Simplified, Proven Flow</h2>
            <p style={{ color: 'var(--gray-600)', maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem' }}>
              We've optimized our workflow to ensure speed, quality, and complete transparency at every stage of production.
            </p>
            <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '2.5rem auto' }}></div>
          </div>

          <div className="grid-3">
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
                padding: '4rem 2.5rem',
                borderRadius: '24px',
                border: '1px solid #f0f0f0',
                background: '#fff',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                textAlign: 'center',
                position: 'relative'
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'var(--gray-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2.5rem',
                  transition: 'all 0.5s ease'
                }} className="icon-wrapper">
                  <item.icon size={42} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1.2rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: '1.8', fontSize: '0.95rem' }}>{item.desc}</p>

                <style jsx>{`
                  .process-card:hover {
                    transform: translateY(-15px);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.06);
                    border-color: var(--primary);
                  }
                  .process-card:hover .icon-wrapper {
                    background: var(--black);
                    transform: scale(1.1) rotate(10deg);
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Feature Sections */}
      <section className="section bg-light" style={{ borderTop: '1px solid #eee' }}>
        <div className="container">

          {/* Working Lab */}
          <div className="grid-2" style={{ alignItems: 'center', marginBottom: '10rem', gap: '6rem' }}>
            <div className="hero-text animate-fade-up">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--primary)', fontWeight: '800', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '1.5rem' }}>
                <FlaskConical size={18} /> PROTOTYPING CENTER
              </div>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.1' }}>The Working Lab</h2>
              <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem', color: 'var(--gray-600)', lineHeight: '1.8' }}>
                Where concepts become reality. Our specialized lab is dedicated to creating high-fidelity prototypes. We evaluate every material and structure to guarantee performance under real-world conditions.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3.5rem' }}>
                {['Basic Sketches', '3D Digital Models', 'Physical Mockups', 'Stress Testing'].map((item, i) => (
                  <div key={i} className="flex" style={{ alignItems: 'center', gap: '0.8rem', fontWeight: '700', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={18} className="text-primary" />
                    {item}
                  </div>
                ))}
              </div>

              <button className="btn btn-outline" style={{ borderColor: 'var(--black)', color: 'var(--black)' }}>Explore Our Capabilities</button>
            </div>
            <div className="animate-fade delay-2">
               <div style={{
                 borderRadius: '30px',
                 overflow: 'hidden',
                 boxShadow: '0 40px 80px rgba(0,0,0,0.1)',
                 position: 'relative',
                 transform: 'rotate(2deg)'
               }}>
                 <img
                   src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
                   alt="Innovation Lab"
                   style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                 />
                 <div style={{ position: 'absolute', inset: 0, border: '15px solid rgba(255,255,255,0.1)', borderRadius: '30px', pointerEvents: 'none' }}></div>
               </div>
            </div>
          </div>

          {/* Design Services */}
          <div className="grid-2" style={{ alignItems: 'center', gap: '6rem' }}>
            <div className="animate-fade delay-2" style={{ order: typeof window !== 'undefined' && window.innerWidth < 1024 ? 2 : 1 }}>
               <div style={{
                 borderRadius: '30px',
                 overflow: 'hidden',
                 boxShadow: '0 40px 80px rgba(0,0,0,0.1)',
                 position: 'relative',
                 transform: 'rotate(-2deg)'
               }}>
                 <img
                   src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
                   alt="Creative Design Studio"
                   style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                 />
                 <div style={{ position: 'absolute', inset: 0, border: '15px solid rgba(255,255,255,0.1)', borderRadius: '30px', pointerEvents: 'none' }}></div>
               </div>
            </div>
            <div className="hero-text animate-fade-up" style={{ order: typeof window !== 'undefined' && window.innerWidth < 1024 ? 1 : 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--primary)', fontWeight: '800', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '1.5rem' }}>
                <Palette size={18} /> CREATIVE SERVICES
              </div>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.1' }}>Precision Design</h2>
              <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem', color: 'var(--gray-600)', lineHeight: '1.8' }}>
                Our in-house design team specializes in technical packaging aesthetics. We don't just make it look good—we ensure it's manufacturable, sustainable, and optimized for rotogravure printing.
              </p>

              <div className="flex-column" style={{ gap: '1.2rem', marginBottom: '3.5rem' }}>
                {['Structural Integrity Planning', 'Graphic & Branding Alignment', 'Eco-Friendly Material Selection', 'Consistency Control'].map((item, i) => (
                  <div key={i} className="flex" style={{ alignItems: 'center', gap: '1rem', fontWeight: '700' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                    {item}
                  </div>
                ))}
              </div>

              <button className="btn btn-outline" style={{ borderColor: 'var(--black)', color: 'var(--black)' }}>View Our Portfolio</button>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Our Process - Stats */}
      <section className="section bg-dark" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '400px', height: '400px', background: 'var(--primary)', opacity: '0.03', borderRadius: '50%', filter: 'blur(100px)' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ marginBottom: '6rem', textAlign: 'center' }} className="animate-fade-up">
            <h2 className="text-primary" style={{ fontSize: '3.2rem', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.1' }}>Engineered for Success.<br/>Tested for Performance.</h2>
            <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--gray-400)', lineHeight: '1.7' }}>
              Every step of our process is backed by decades of industrial expertise and a commitment to constant technological evolution.
            </p>
          </div>

          <div className="grid-4" style={{ paddingTop: '5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {[
              { icon: Clock, val: "28+", label: "Years of Mastery" },
              { icon: Cpu, val: "Advanced", label: "Production Tech" },
              { icon: Users, val: "500+", label: "Global Partners" },
              { icon: Leaf, val: "Sustainable", label: "Industrial Future" }
            ].map((stat, i) => (
              <div key={i} className={`animate-fade-up delay-${(i % 3) + 1}`} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '20px',
                  background: 'rgba(255,189,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  transition: 'transform 0.4s ease'
                }} className="stat-box">
                  <stat.icon className="text-primary" size={32} />
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#fff', marginBottom: '0.5rem' }}>{stat.val}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .stat-box:hover { transform: scale(1.1) rotate(-5deg); background: var(--primary); }
          .stat-box:hover :global(svg) { color: var(--black); }
        `}</style>
      </section>
    </main>
  );
}
