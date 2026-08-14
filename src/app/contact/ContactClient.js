"use client";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export default function ContactClient({ lang, dict }) {
  const isAr = lang === "ar";
  const mapAddress = "Second Industrial Zone - Block 1, Piece 3, Borg El-Arab City, Alexandria, Egypt";
  const mapQuery = encodeURIComponent(mapAddress);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const embedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <main style={{ background: '#fff' }}>
      <section className="hero" style={{ padding: '12rem 0 8rem' }}>
        <div className="container text-center">
          <h3 className="hero-subtitle animate-fade">{dict.hero.subtitle}</h3>
          <h1 className="animate-fade-up delay-1" style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '1.5rem', letterSpacing: '-2px' }}>
            {isAr ? (
              <>لنبدأ <span className="text-primary">محادثة</span></>
            ) : (
              <>Let's Start a <span className="text-primary">Conversation</span></>
            )}
          </h1>
          <p className="hero-description animate-fade-up delay-2" style={{ margin: '0 auto', maxWidth: '600px' }}>
            {dict.hero.description}
          </p>
        </div>
      </section>

      <section className="section" style={{ marginTop: '-6rem', padding: '0 0 4rem', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="grid-2">
            <div className="capability-card text-center animate-fade-up delay-1" style={{ padding: '3.5rem 2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', border: 'none' }}>
              <div className="stat-icon-bg" style={{ margin: '0 auto 1.8rem', width: '64px', height: '64px', background: 'rgba(255,189,0,0.1)' }}>
                <MapPin size={28} className="text-primary" />
              </div>
              <h4 style={{ marginBottom: '1.2rem', fontSize: '1.2rem' }}>{dict.cards.location}</h4>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
                {isAr ? (
                  <>المنطقة الصناعية الثانية - بلوك 1، قطعة 3،<br />مدينة برج العرب، الإسكندرية، مصر</>
                ) : (
                  <>Second Industrial Zone - Block 1, Piece 3,<br />Borg El-Arab City, Alexandria, Egypt</>
                )}
              </p>
            </div>

            <div className="capability-card text-center animate-fade-up delay-2" style={{ padding: '3.5rem 2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', border: 'none' }}>
              <div className="stat-icon-bg" style={{ margin: '0 auto 1.8rem', width: '64px', height: '64px', background: 'rgba(255,189,0,0.1)' }}>
                <Phone size={28} className="text-primary" />
              </div>
              <h4 style={{ marginBottom: '1.2rem', fontSize: '1.2rem' }}>{dict.cards.callUs}</h4>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }} dir="ltr">
                +20 (3) 46 26 243<br />
                +20 (3) 46 26 344
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
            <div className={`animate-fade-up ${isAr ? 'order-last' : ''}`}>
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontWeight: '800', marginBottom: '1.5rem', fontSize: '2.5rem', lineHeight: '1.2' }}>
                  {isAr ? (
                    <>انتشار عالمي، <br /><span className="text-primary">دعم محلي</span></>
                  ) : (
                    <>Global Reach, <br /><span className="text-primary">Local Support</span></>
                  )}
                </h2>
                <p style={{ color: '#666', marginBottom: '2.5rem', lineHeight: '1.9', fontSize: '1.1rem' }}>
                  {dict.support.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div className="animate-fade-up delay-1" style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                    <div className="stat-icon-bg" style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', transition: 'all 0.3s ease' }}>
                       <Clock size={24} className="text-primary" />
                    </div>
                    <div>
                      <h5 style={{ fontWeight: '800', fontSize: '1.1rem', marginBottom: '0.2rem' }}>{dict.support.hours}</h5>
                      <p style={{ fontSize: '0.95rem', color: '#888' }}>{dict.support.days}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade delay-2" style={{ width: '100%', height: '450px', background: '#000', borderRadius: '32px', overflow: 'hidden', position: 'relative', boxShadow: '0 40px 80px rgba(0,0,0,0.15)' }}>
              <iframe
                src={embedUrl}
                title="Roto Star Location Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div style={{
                position: 'absolute',
                bottom: '20px',
                [isAr ? 'left' : 'right']: '20px',
                zIndex: 10
              }}>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    borderRadius: '12px',
                    padding: '0.8rem 1.5rem',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 10px 25px rgba(255,189,0,0.3)',
                    border: 'none'
                  }}
                >
                  <ExternalLink size={16} /> {dict.support.map}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
