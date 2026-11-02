import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Lightbulb,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function AboutScreen() {
  const { founder, mission, vision, values } = SCHOOL_INFO;
  const apsecScrollRef = useRef(null);
  const [activeValueIndex, setActiveValueIndex] = useState(0);

  const handleApsecScroll = () => {
    if (apsecScrollRef.current) {
      const { scrollLeft, clientWidth } = apsecScrollRef.current;
      const cardWidth = clientWidth * 0.82;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveValueIndex(Math.min(Math.max(index, 0), values.length - 1));
    }
  };

  const scrollToValue = (index) => {
    if (apsecScrollRef.current) {
      const card = apsecScrollRef.current.children[index];
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        setActiveValueIndex(index);
      }
    }
  };

  return (
    <div
      id="about"
      className="section-padding"
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        backgroundImage: 'radial-gradient(#e2e8f0 1.2px, transparent 1.2px)',
        backgroundSize: '24px 24px'
      }}
    >
      {/* Background ambient orbs */}
      <div
        className="glow-orb"
        style={{
          width: '550px',
          height: '550px',
          background: 'rgba(56, 189, 248, 0.04)',
          top: '5%',
          left: '-150px'
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'rgba(56, 189, 248, 0.03)',
          top: '40%',
          right: '-150px'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* ===================== SECTION 1: HEADER & FOUNDER ===================== */}
        <div style={{ textAlign: 'center', width: '100%', margin: '0 auto clamp(1.5rem, 3.5vw, 2.5rem)' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.75rem)', letterSpacing: '-0.02em', color: '#0f172a', fontWeight: 800 }}>
            Meet the Founder & Chairman
          </h2>
        </div>

        {/* Chairman Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="chairman-card"
          style={{
            width: '100%',
            maxWidth: '100%',
            margin: '0 auto 4rem',
            borderRadius: '24px',
            background: 'radial-gradient(circle at 85% 25%, rgba(56, 189, 248, 0.08) 0%, rgba(245, 158, 11, 0.05) 45%, #ffffff 75%)',
            border: '1px solid #e2e8f0',
            boxShadow: '0 16px 45px rgba(15, 23, 42, 0.06)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Top accent gradient bar (Blue to Yellow) */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3.5px',
              background: 'linear-gradient(90deg, #0284c7 0%, #38bdf8 60%, #eab308 100%)'
            }}
          />

          <div className="chairman-flex">
            {/* Chairman Photo with sleek frame */}
            <div className="chairman-photo-wrapper">
              <div
                style={{
                  borderRadius: '22px',
                  padding: '5px',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 14px 32px rgba(15, 23, 42, 0.12), 0 0 0 1px #e2e8f0',
                  aspectRatio: '4 / 5'
                }}
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '18px',
                    display: 'block'
                  }}
                />
              </div>
            </div>

            {/* Chairman Bio & Info */}
            <div className="chairman-bio" style={{ flex: 1, minWidth: 0 }}>
              {/* Title: Govindula Shyam Sunder, MSc, BEd */}
              <h3
                style={{
                  fontSize: 'clamp(1.4rem, 2.5vw, 2.15rem)',
                  fontWeight: 900,
                  color: '#0f172a',
                  lineHeight: 1.25,
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.02em'
                }}
              >
                {founder.name}, {founder.qualifications}
              </h3>

              {/* Subtitle: Founder & Chairman, Obedient School */}
              <div
                style={{
                  fontSize: '1rem',
                  color: '#0284c7',
                  fontWeight: 600,
                  marginBottom: '0.85rem'
                }}
              >
                {founder.role}
              </div>

              {/* Pill Badge: 📖 26+ Years of Visionary Leadership */}
              <div className="chairman-badge-container" style={{ marginBottom: '1.25rem' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: 'clamp(0.75rem, 2vw, 0.825rem)',
                    fontWeight: 600,
                    color: '#0284c7',
                    background: '#eff6ff',
                    border: '1px solid #bae6fd',
                    padding: '0.4rem 0.95rem',
                    borderRadius: '999px',
                    maxWidth: '100%',
                    lineHeight: 1.4,
                    flexWrap: 'wrap'
                  }}
                >
                  <BookOpen size={15} color="#0284c7" style={{ flexShrink: 0 }} />
                  <span>{founder.experience}</span>
                </span>
              </div>

              {/* Bio text */}
              <p
                style={{
                  fontSize: 'clamp(0.875rem, 1.8vw, 0.975rem)',
                  color: '#334155',
                  lineHeight: 1.75,
                  margin: 0
                }}
              >
                {founder.bio}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ===================== SECTION 2: MISSION & VISION ===================== */}
        <div style={{ textAlign: 'center', width: '100%', margin: '0 auto clamp(2rem, 4vw, 3.5rem)' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.75rem)', letterSpacing: '-0.02em', color: '#0f172a', fontWeight: 800, marginBottom: '0.75rem' }}>
            Our Mission & Vision
          </h2>
        </div>

        <div
          className="mission-vision-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(1.25rem, 3vw, 2rem)',
            marginBottom: 'clamp(2.75rem, 5vw, 5rem)'
          }}
        >
          {/* Mission Card */}
          <motion.div
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="glass-panel mission-vision-card"
            style={{
              borderRadius: 'var(--radius-xl)',
              position: 'relative',
              overflow: 'hidden',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 8px 24px rgba(2, 132, 199, 0.25)',
                  flexShrink: 0
                }}
              >
                <Target size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                  MISSION
                </h3>
              </div>
            </div>

            {/* Exact Mission Statement */}
            <p
              style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                color: '#0a0a0a',
                lineHeight: 1.65,
                fontWeight: 500,
                marginBottom: '1.5rem',
                borderLeft: '3px solid #0284c7',
                paddingLeft: '0.85rem'
              }}
            >
              "{mission.statement}"
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {mission.focusAreas.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.5 }}>
                  <CheckCircle2 size={16} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="glass-panel mission-vision-card"
            style={{
              borderRadius: 'var(--radius-xl)',
              position: 'relative',
              overflow: 'hidden',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 8px 24px rgba(2, 132, 199, 0.25)',
                  flexShrink: 0
                }}
              >
                <Lightbulb size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                  VISION
                </h3>
              </div>
            </div>

            {/* Exact Vision Statement */}
            <p
              style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                color: '#0a0a0a',
                lineHeight: 1.65,
                fontWeight: 500,
                marginBottom: '1.5rem',
                borderLeft: '3px solid #0284c7',
                paddingLeft: '0.85rem'
              }}
            >
              "{vision.statement}"
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {vision.focusAreas.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.5 }}>
                  <CheckCircle2 size={16} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ===================== SECTION 3: CORE VALUES (APSEC) ===================== */}
        <div style={{ textAlign: 'center', width: '100%', margin: '0 auto clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.75rem)', letterSpacing: '-0.02em', color: '#0f172a', fontWeight: 800, marginBottom: '0.75rem' }}>
            OUR <span className="text-gradient">VALUES</span>
          </h2>
        </div>

        {/* 5 APSEC Value Cards (Grid on Desktop, Horizontal Swipe Carousel on Mobile) */}
        <div
          ref={apsecScrollRef}
          onScroll={handleApsecScroll}
          className="apsec-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: 'clamp(0.85rem, 2vw, 1.25rem)'
          }}
        >
          {values.map((val) => (
            <motion.div
              key={val.key}
              whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
              className="glass-panel apsec-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(1.25rem, 2.5vw, 1.75rem) clamp(1rem, 2vw, 1.25rem)',
                position: 'relative',
                overflow: 'hidden',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid #e2e8f0',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div>
                <h4 style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', fontWeight: 700, color: '#0f172a', marginBottom: '0.65rem', lineHeight: 1.3 }}>
                  {val.title}
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.55 }}>
                  {val.description}
                </p>
              </div>

              {/* Bottom Subtle accent bar */}
              <div
                style={{
                  height: '3px',
                  width: '36px',
                  borderRadius: '999px',
                  backgroundColor: '#0284c7',
                  marginTop: '1.25rem'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Horizontal Carousel Navigation Dots */}
        <div
          className="apsec-mobile-dots"
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.45rem',
            marginTop: '1.25rem'
          }}
        >
          {values.map((val, idx) => (
            <button
              key={val.key}
              onClick={() => scrollToValue(idx)}
              aria-label={`View ${val.title}`}
              style={{
                width: activeValueIndex === idx ? '24px' : '8px',
                height: '8px',
                borderRadius: '999px',
                border: 'none',
                backgroundColor: activeValueIndex === idx ? '#0284c7' : '#cbd5e1',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                padding: 0
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        .chairman-card {
          padding: clamp(1.75rem, 4vw, 4rem) clamp(1.25rem, 3.5vw, 3.5rem);
        }
        .chairman-flex {
          display: flex;
          align-items: center;
          gap: clamp(1.5rem, 3.5vw, 2.75rem);
          width: 100%;
        }
        .chairman-photo-wrapper {
          flex-shrink: 0;
          width: clamp(200px, 24vw, 280px);
          max-width: 100%;
        }
        .mission-vision-card {
          padding: clamp(1.35rem, 3vw, 2.5rem);
        }

        /* Tablets in portrait / intermediate width */
        @media (max-width: 900px) {
          .chairman-flex {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 1.5rem !important;
          }
          .chairman-photo-wrapper {
            width: clamp(160px, 35vw, 220px) !important;
            margin: 0 auto;
          }
          .chairman-bio {
            text-align: center !important;
          }
          .chairman-badge-container {
            display: flex;
            justify-content: center;
          }
        }

        /* Tablets & Mobile (<= 768px): Horizontal Carousel for OUR VALUES */
        @media (max-width: 768px) {
          .chairman-card {
            padding: 1.5rem 1.15rem !important;
            margin-bottom: 2.5rem !important;
            border-radius: 20px !important;
          }
          .mission-vision-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
            margin-bottom: 2.75rem !important;
          }
          .mission-vision-card {
            padding: 1.35rem 1.15rem !important;
          }
          .apsec-grid {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            gap: 1rem !important;
            padding: 0.5rem 0.25rem 0.85rem !important;
            scrollbar-width: none !important;
          }
          .apsec-grid::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
          .apsec-card {
            flex: 0 0 82% !important;
            min-width: 260px !important;
            max-width: 320px !important;
            scroll-snap-align: center !important;
            padding: 1.35rem 1.15rem !important;
          }
          .apsec-mobile-dots {
            display: flex !important;
          }
        }

        /* Large Phones / Phablets (<= 500px) */
        @media (max-width: 500px) {
          .apsec-card {
            flex: 0 0 84% !important;
            min-width: 250px !important;
            max-width: 310px !important;
            scroll-snap-align: center !important;
          }
          .chairman-card {
            padding: 1.35rem 1rem !important;
          }
          .chairman-photo-wrapper {
            width: clamp(140px, 45vw, 175px) !important;
          }
        }

        /* Compact Mobile (<= 360px - e.g. iPhone SE, Fold outer) */
        @media (max-width: 360px) {
          .chairman-card {
            padding: 1.15rem 0.75rem !important;
          }
          .mission-vision-card {
            padding: 1.15rem 0.75rem !important;
          }
          .apsec-card {
            flex: 0 0 88% !important;
            min-width: 240px !important;
            max-width: 290px !important;
            padding: 1.15rem 0.95rem !important;
          }
        }
      `}</style>
    </div>
  );
}

