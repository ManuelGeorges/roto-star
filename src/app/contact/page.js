"use client";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <main style={{ background: '#fff' }}>
      {/* Hero Section */}
      <section className="hero" style={{ padding: '12rem 0 8rem' }}>
        <div className="container text-center">
          <h3 className="hero-subtitle animate-fade">CONTACT US</h3>
          <h1 className="animate-fade-up delay-1" style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '1.5rem', letterSpacing: '-2px' }}>
            Let's Start a <span className="text-primary">Conversation</span>
          </h1>
          <p className="hero-description animate-fade-up delay-2" style={{ margin: '0 auto', maxWidth: '600px' }}>
            Have a project in mind or need a custom packaging solution? Reach out to our experts and discover how Roto Star can elevate your brand.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section" style={{ marginTop: '-6rem', padding: '0 0 4rem', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="grid-2">
            <div className="capability-card text-center animate-fade-up delay-1" style={{ padding: '3.5rem 2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', border: 'none' }}>
              <div className="stat-icon-bg" style={{ margin: '0 auto 1.8rem', width: '64px', height: '64px', background: 'rgba(255,189,0,0.1)' }}>
                <MapPin size={28} className="text-primary" />
              </div>
              <h4 style={{ marginBottom: '1.2rem', fontSize: '1.2rem' }}>Our Location</h4>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
                Second Industrial Zone - Block 1, Piece 3,<br />
                Borg El-Arab City, Alexandria, Egypt
              </p>
            </div>

            <div className="capability-card text-center animate-fade-up delay-2" style={{ padding: '3.5rem 2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', border: 'none' }}>
              <div className="stat-icon-bg" style={{ margin: '0 auto 1.8rem', width: '64px', height: '64px', background: 'rgba(255,189,0,0.1)' }}>
                <Phone size={28} className="text-primary" />
              </div>
              <h4 style={{ marginBottom: '1.2rem', fontSize: '1.2rem' }}>Call Us</h4>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
                +20 (3) 46 26 243<br />
                +20 (3) 46 26 344
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info & Map Section */}
      <section className="section bg-light" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
            {/* Info */}
            <div className="animate-fade-up">
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontWeight: '800', marginBottom: '1.5rem', fontSize: '2.5rem', lineHeight: '1.2' }}>Global Reach, <br /><span className="text-primary">Local Support</span></h2>
                <p style={{ color: '#666', marginBottom: '2.5rem', lineHeight: '1.9', fontSize: '1.1rem' }}>
                  Operating from our state-of-the-art facility in Borg El-Arab, Alexandria, we provide high-performance rotogravure packaging solutions to clients across the Middle East and beyond.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div className="animate-fade-up delay-1" style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                    <div className="stat-icon-bg" style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', transition: 'all 0.3s ease' }}>
                       <Clock size={24} className="text-primary" />
                    </div>
                    <div>
                      <h5 style={{ fontWeight: '800', fontSize: '1.1rem', marginBottom: '0.2rem' }}>Business Hours</h5>
                      <p style={{ fontSize: '0.95rem', color: '#888' }}>Sunday - Thursday: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="animate-fade delay-2" style={{ width: '100%', height: '450px', background: '#111', borderRadius: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative', boxShadow: '0 40px 80px rgba(0,0,0,0.15)', transition: 'transform 0.5s ease' }}>
              {/* Decorative map element */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.2, background: 'radial-gradient(circle at 30% 40%, var(--primary) 0%, transparent 60%)', animation: 'rotate-slow 20s linear infinite' }}></div>
              <div style={{ textAlign: 'center', color: '#fff', position: 'relative', zIndex: 1 }}>
                <div className="pulse-soft" style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,189,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <MapPin size={36} className="text-primary" />
                </div>
                <h4 style={{ fontWeight: '700', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Find Us on Google Maps</h4>
                <p style={{ fontSize: '0.9rem', color: '#aaa', maxWidth: '240px', margin: '0 auto' }}>Borg El-Arab Industrial City, Alexandria, Egypt</p>
                <a href="https://maps.google.com" target="_blank" className="btn btn-primary" style={{ marginTop: '2rem', borderRadius: '8px' }}>Open Maps</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
