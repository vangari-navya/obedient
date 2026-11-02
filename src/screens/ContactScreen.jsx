import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Building2
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function ContactScreen() {
  const { contact } = SCHOOL_INFO;
  const [copiedPhone, setCopiedPhone] = useState(null);

  const handleCopy = (phone) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2500);
  };

  return (
    <div
      id="contact"
      className="section-padding"
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100%',
        backgroundColor: '#ffffff'
      }}
    >
      {/* Background Glow */}
      <div
        className="glow-orb"
        style={{
          width: '550px',
          height: '550px',
          background: 'rgba(56, 189, 248, 0.04)',
          top: '15%',
          left: '-120px'
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'rgba(2, 132, 199, 0.03)',
          bottom: '20%',
          right: '-100px'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* ===================== HEADER ===================== */}
        <div style={{ textAlign: 'center', width: '100%', margin: '0 auto clamp(1.75rem, 3.5vw, 2.75rem)' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.75rem)', marginBottom: '0.75rem', letterSpacing: '-0.02em', color: '#0f172a', fontWeight: 800 }}>
            Connect With <span className="text-gradient">Obedient School</span>
          </h2>
        </div>

        {/* ===================== 3 MAIN CONTACT INFORMATION CARDS ===================== */}
        <div
          className="contact-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3.5rem',
            alignItems: 'stretch'
          }}
        >
          {/* Card 1: Official Helplines & Direct Call Buttons */}
          <motion.div
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="contact-card"
            style={{
              borderRadius: '24px',
              padding: '2.5rem 2.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
              height: '100%'
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', color: '#0284c7', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                Instant Tele-Support
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
                Admissions & Helplines
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Connect directly with our admissions coordinator and administration team for curriculum details and fee structures.
              </p>
            </div>

            {/* Verified Phone Numbers with Direct Call & Copy */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {contact.phones.map((phone, idx) => (
                <div
                  key={phone}
                  className="contact-phone-row"
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #f1f5f9',
                    borderRadius: '16px',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    flexWrap: 'wrap'
                  }}
                >
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.04em' }}>
                      {idx === 0 ? 'Primary Admissions Line' : 'Campus Office Helpline'}
                    </div>
                    <div style={{ fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)', fontWeight: 700, color: '#0f172a', letterSpacing: '0.02em', marginTop: '0.15rem' }}>
                      +91 {phone}
                    </div>
                  </div>

                  <div className="contact-phone-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexShrink: 0 }}>
                    <button
                      onClick={() => handleCopy(phone)}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        border: '1px solid #e2e8f0',
                        background: copiedPhone === phone ? '#f0f9ff' : '#ffffff',
                        color: copiedPhone === phone ? '#0284c7' : '#64748b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                      title="Copy Phone Number"
                      aria-label="Copy Phone Number"
                    >
                      {copiedPhone === phone ? <Check size={16} /> : <Copy size={16} />}
                    </button>

                    <a
                      href={`tel:${phone}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.5rem 0.85rem',
                        borderRadius: '10px',
                        backgroundColor: '#0284c7',
                        color: '#ffffff',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        boxShadow: '0 2px 8px rgba(2, 132, 199, 0.2)',
                        transition: 'all 0.15s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0369a1')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0284c7')}
                    >
                      <Phone size={13} />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Campus Address & Navigation */}
          <motion.div
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="contact-card"
            style={{
              borderRadius: '24px',
              padding: '2.5rem 2.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
              height: '100%'
            }}
          >
            <div>


              <div style={{ fontSize: '0.75rem', color: '#0284c7', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                Campus Location
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
                Parvathapur Campus
              </h3>

              {/* Exact Address formatted cleanly */}
              <div
                style={{
                  background: '#f8fafc',
                  border: '1px solid #f1f5f9',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  display: 'flex',
                  gap: '0.85rem',
                  alignItems: 'flex-start'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: '#e0f2fe',
                    color: '#0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Building2 size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.5 }}>
                    {contact.address}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.35rem' }}>
                    {contact.city}
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Get Directions Button */}
            <div style={{ marginTop: '1.5rem' }}>
              <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.85rem', lineHeight: 1.55 }}>
                Plan your visit and navigate directly to our campus with Google Maps.
              </p>
              <a
                href={contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '100%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: 'clamp(0.75rem, 2vw, 0.85rem) clamp(0.75rem, 2.5vw, 1.25rem)',
                  borderRadius: '12px',
                  backgroundColor: '#0284c7',
                  color: '#ffffff',
                  fontSize: 'clamp(0.825rem, 2vw, 0.9rem)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(2, 132, 199, 0.25)',
                  transition: 'all 0.2s ease',
                  flexWrap: 'wrap',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0369a1';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0284c7';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Navigation size={16} style={{ flexShrink: 0 }} />
                <span>Get Directions on Google Maps</span>
                <ExternalLink size={14} style={{ flexShrink: 0 }} />
              </a>
            </div>
          </motion.div>

          {/* Card 3: Visiting Hours & Institutional Highlights */}
          <motion.div
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="contact-card"
            style={{
              borderRadius: '24px',
              padding: '2.5rem 2.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
              height: '100%'
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', color: '#0284c7', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                Timings & Access
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
                Visiting Hours
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {contact.visitingHours.map((vh, i) => (
                  <div
                    key={i}
                    style={{
                      background: '#f8fafc',
                      border: '1px solid #f1f5f9',
                      borderRadius: '16px',
                      padding: '1rem 1.15rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '0.75rem',
                      flexWrap: 'wrap'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>
                        {vh.days}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.15rem' }}>
                        {vh.status}
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        padding: '0.3rem 0.75rem',
                        borderRadius: '8px',
                        whiteSpace: 'nowrap',
                        backgroundColor: vh.time === 'Closed' ? '#fef2f2' : '#f0f9ff',
                        color: vh.time === 'Closed' ? '#dc2626' : '#0284c7',
                        border: vh.time === 'Closed' ? '1px solid #fee2e2' : '1px solid #bae6fd'
                      }}
                    >
                      {vh.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===================== INTERACTIVE GOOGLE MAPS SECTION ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
            position: 'relative'
          }}
        >
          {/* Embedded Google Maps Frame */}
          <div className="contact-map-frame" style={{ position: 'relative', width: '100%', height: '440px', backgroundColor: '#f1f5f9' }}>
            <iframe
              title="Obedient School Location Map"
              src={contact.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.02) saturate(1.05)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact-card {
          padding: clamp(1.75rem, 3.5vw, 2.5rem) clamp(1.25rem, 3vw, 2.25rem);
        }

        /* Tablets Landscape / Medium (769px - 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .contact-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
          .contact-cards-grid > :nth-child(3) {
            grid-column: span 2;
          }
        }

        /* Tablets Portrait & Large Mobile (481px - 768px) */
        @media (max-width: 768px) {
          .contact-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
            margin-bottom: 2.25rem !important;
          }
          .contact-card {
            width: 100% !important;
            padding: 1.5rem 1.25rem !important;
            border-radius: 20px !important;
          }
          .contact-map-frame {
            height: 320px !important;
          }
        }

        /* Standard Mobile (361px - 480px) */
        @media (max-width: 480px) {
          .contact-card {
            padding: 1.25rem 1rem !important;
          }
          .contact-phone-row {
            padding: 0.85rem !important;
            gap: 0.65rem !important;
          }
          .contact-phone-actions {
            width: 100% !important;
            display: flex !important;
            gap: 0.5rem !important;
            margin-top: 0.35rem !important;
          }
          .contact-phone-actions a {
            flex: 1 !important;
            justify-content: center !important;
            padding: 0.6rem 0.85rem !important;
            min-height: 40px !important;
          }
          .contact-phone-actions button {
            width: 40px !important;
            height: 40px !important;
          }
          .contact-map-frame {
            height: 270px !important;
          }
        }

        /* Compact Mobile (<= 360px - e.g. iPhone SE, Fold outer) */
        @media (max-width: 360px) {
          .contact-card {
            padding: 1.1rem 0.75rem !important;
          }
          .contact-phone-row {
            padding: 0.65rem 0.65rem !important;
          }
          .contact-map-frame {
            height: 230px !important;
          }
        }
      `}</style>
    </div>
  );
}
