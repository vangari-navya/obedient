import React from 'react';
import { Phone, MapPin, Navigation, Clock, Heart } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ setActiveScreen }) {
  const handleNav = (id) => {
    setActiveScreen(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="site-footer"
      style={{
        backgroundColor: '#f8fafc',
        borderTop: '1px solid #e2e8f0',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem'
      }}
    >
      {/* Background ambient accents */}
      <div
        className="glow-orb"
        style={{
          width: '400px',
          height: '400px',
          background: 'rgba(56, 189, 248, 0.04)',
          bottom: '-100px',
          left: '-100px'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.95fr 1.15fr 1.25fr',
            gap: 'clamp(2rem, 3.5vw, 4rem)',
            marginBottom: 'clamp(2rem, 4vw, 3.5rem)'
          }}
        >


          {/* Quick 4-Screen Links */}
          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#0f172a',
                marginBottom: '1.25rem',
                borderLeft: '3px solid #0284c7',
                paddingLeft: '0.75rem'
              }}
            >
              School Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { id: 'home', label: 'Home Screen' },
                { id: 'about', label: 'About Us & Chairman' },
                { id: 'reviews', label: 'Parents Reviews' },
                { id: 'contact', label: 'Contact Us & Campus' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#334155',
                      fontSize: '0.925rem',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      padding: 0,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0284c7')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
                  >
                    <span>→</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#0f172a',
                marginBottom: '1.25rem',
                borderLeft: '3px solid #0284c7',
                paddingLeft: '0.75rem'
              }}
            >
              Official Contact Info
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={20} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '0.925rem', color: '#334155' }}>
                  <div>{SCHOOL_INFO.contact.address}</div>
                  <div style={{ color: '#64748b', fontSize: '0.85rem' }}>{SCHOOL_INFO.contact.city}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Phone size={20} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {SCHOOL_INFO.contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      style={{
                        color: '#0284c7',
                        textDecoration: 'none',
                        fontSize: '0.925rem',
                        fontWeight: 600
                      }}
                    >
                      +91 {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Clock size={20} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '0.875rem', color: '#334155' }}>
                  <div>Mon – Sat: 8:30 AM – 5:00 PM</div>
                  <div style={{ color: '#64748b' }}>Admissions Desk Open</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#0f172a',
                marginBottom: '1.25rem',
                borderLeft: '3px solid #0284c7',
                paddingLeft: '0.75rem'
              }}
            >
              Campus Visit
            </h4>
            <p style={{ color: '#334155', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
              Conveniently accessible near the Uppal-Peerzadiguda growth corridor. Get real-time directions on Google Maps.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={SCHOOL_INFO.contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)',
                  padding: '0.75rem 1.25rem',
                  textAlign: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}
              >
                <Navigation size={16} style={{ flexShrink: 0 }} />
                <span>Get Directions (Maps)</span>
              </a>
              <a
                href={`tel:${SCHOOL_INFO.contact.phones[0]}`}
                className="btn-gold"
                style={{
                  fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)',
                  padding: '0.75rem 1.25rem',
                  textAlign: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}
              >
                <Phone size={16} style={{ flexShrink: 0 }} />
                <span>Call Admissions: {SCHOOL_INFO.contact.phones[0]}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="footer-bottom-bar"
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#64748b',
            paddingRight: '64px'
          }}
        >
          <div>
            © {CURRENT_YEAR} Obedient School. All rights reserved. Founded & Chaired by Govindula Shyam Sunder.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Dedicated to shaping visionary minds with</span>
            <Heart size={14} color="#0284c7" fill="#0284c7" />
            <span>integrity</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2.25rem !important;
          }
          .footer-grid > :nth-child(3) {
            grid-column: span 2;
          }
        }
        @media (max-width: 768px) {
          .site-footer {
            padding-top: 3rem !important;
            padding-bottom: calc(2rem + env(safe-area-inset-bottom, 0px)) !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            margin-bottom: 2rem !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            text-align: center !important;
            gap: 0.75rem !important;
            font-size: 0.78rem !important;
            padding-right: 0 !important;
          }
        }
        @media (max-width: 480px) {
          .site-footer {
            padding-top: 2.5rem !important;
          }
        }
        @media (max-width: 360px) {
          .site-footer {
            padding-top: 2rem !important;
          }
          .footer-bottom-bar {
            font-size: 0.72rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
