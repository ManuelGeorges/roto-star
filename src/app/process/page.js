"use client";
import { Lightbulb, PenTool, Printer, ChevronRight, Clock, Cpu, Users, Leaf } from "lucide-react";
import Link from "next/link";

export default function Process() {
  return (
    <main style={{ background: '#fff' }}>
      <section className="bg-dark" style={{ paddingTop: '10rem', paddingBottom: '6rem', overflow: 'hidden' }}>
        <div className="container">
          <div className="responsive-grid">
            <div className="hero-text">
              <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: '600' }}>
                <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                <span style={{ color: '#444' }}>/</span>
                <span style={{ color: '#fff' }}>Our Process</span>
              </div>
              <h3 className="text-primary" style={{ fontSize: '0.9rem', marginBottom: '1rem', letterSpacing: '1px' }}>OUR PROCESS</h3>
              <h1>Ideas to Packaging. Built to Perform.</h1>
              <p style={{ maxWidth: '480px' }}>
                A seamless process that transforms ideas into high-performance packaging solutions through collaboration and precision.
              </p>
            </div>
            <div style={{ background: 'var(--dark-accent)', borderRadius: '24px', aspectRatio: '1.2/1', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 30px 60px rgba(0,0,0,0.3)' }}>
              <div style={{ color: '#333', fontWeight: '700', letterSpacing: '2px' }}>PROCESS VISUAL</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '5rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>One stop shop solution for our customers</h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--primary)', margin: '0 auto' }}></div>
          </div>

          <div className="grid-3">
            <div className="text-center" style={{ padding: '1rem' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', border: '1px solid var(--gray-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                <Lightbulb size={40} strokeWidth={1} />
              </div>
              <div style={{ color: 'var(--gray-300)', fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>01</div>
              <h3 style={{ marginBottom: '1rem' }}>Create</h3>
              <p>We create innovative concepts and prototypes tailored to your packaging needs.</p>
            </div>

            <div className="text-center" style={{ padding: '1rem' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', border: '1px solid var(--gray-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                <PenTool size={40} strokeWidth={1} />
              </div>
              <div style={{ color: 'var(--gray-300)', fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>02</div>
              <h3 style={{ marginBottom: '1rem' }}>Design</h3>
              <p>Our design experts craft functional, attractive, and brand-aligned packaging.</p>
            </div>

            <div className="text-center" style={{ padding: '1rem' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', border: '1px solid var(--gray-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                <Printer size={40} strokeWidth={1} />
              </div>
              <div style={{ color: 'var(--gray-300)', fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>03</div>
              <h3 style={{ marginBottom: '1rem' }}>Print</h3>
              <p>We deliver premium quality printing using advanced technology and strict quality control.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light" style={{ borderTop: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div className="responsive-grid" style={{ marginBottom: '6rem' }}>
            <div className="hero-text">
              <h3 style={{ marginBottom: '1.5rem' }}>Working Lab</h3>
              <p style={{ marginBottom: '2rem' }}>
                Our working lab is dedicated to create and prepare prototypes. All ideas are converted, our team can study, evaluate and perform it through a variety of available tools and materials.
              </p>
              <div className="flex-column" style={{ gap: '1rem', marginBottom: '2.5rem' }}>
                {['Basic Sketches', 'Interactive 3-D Digital Models', 'Physical Mockups'].map((item, i) => (
                  <div key={i} className="flex" style={{ alignItems: 'center', gap: '1rem', fontWeight: '600' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                    {item}
                  </div>
                ))}
              </div>
              <button className="btn btn-outline" style={{ borderColor: 'var(--gray-300)', color: 'var(--black)' }}>Explore Our Lab</button>
            </div>
            <div style={{ background: 'var(--gray-200)', borderRadius: '24px', aspectRatio: '1.2/1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa', fontWeight: '800' }}>LAB IMAGE</div>
          </div>

          <div className="responsive-grid" style={{ direction: 'rtl' }}>
            <div style={{ direction: 'ltr' }} className="hero-text">
              <h3 style={{ marginBottom: '1.5rem' }}>We Design</h3>
              <p style={{ marginBottom: '2rem' }}>
                Roto Star's customers can utilize professional graphic design services in addition to related services.
              </p>
              <div className="flex-column" style={{ gap: '1rem', marginBottom: '2.5rem' }}>
                {['Structural Design', 'Graphic Design', 'Material Recommendation', 'Brand consistency support'].map((item, i) => (
                  <div key={i} className="flex" style={{ alignItems: 'center', gap: '1rem', fontWeight: '600' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                    {item}
                  </div>
                ))}
              </div>
              <button className="btn btn-outline" style={{ borderColor: 'var(--gray-300)', color: 'var(--black)' }}>Design Services</button>
            </div>
            <div style={{ background: 'var(--gray-200)', borderRadius: '24px', aspectRatio: '1.2/1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa', fontWeight: '800' }}>DESIGN IMAGE</div>
          </div>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <div style={{ marginBottom: '4rem' }}>
            <h2 className="text-primary" style={{ marginBottom: '1.5rem' }}>Driven by Innovation.<br />Built on Experience.</h2>
            <p style={{ maxWidth: '600px' }}>We continuously invest in research, technology and talent to deliver packaging that protects, performs and elevates your brand.</p>
          </div>

          <div className="grid-4" style={{ paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {[
              { icon: Clock, val: "28+", label: "Years experience" },
              { icon: Cpu, val: "Advanced", label: "Rotogravure Tech" },
              { icon: Users, val: "500+", label: "Satisfied Clients" },
              { icon: Leaf, val: "High Quality", label: "Sustainable" }
            ].map((stat, i) => (
              <div key={i} className="flex" style={{ alignItems: 'center', gap: '1.5rem' }}>
                <stat.icon className="text-primary" size={32} />
                <div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800' }}>{stat.val}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
