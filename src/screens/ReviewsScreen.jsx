import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  CheckCircle2,
  MapPin,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { PARENT_REVIEWS, REVIEW_STATS } from '../data/reviewsData';

export default function ReviewsScreen() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstCard = container.querySelector('.review-card');
      const gap = parseFloat(getComputedStyle(container).gap) || 24;
      const cardWidth = firstCard ? firstCard.offsetWidth + gap : container.clientWidth * 0.85;
      container.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const filteredReviews = PARENT_REVIEWS;

  return (
    <div
      id="reviews"
      className="section-padding"
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100%',
        backgroundColor: '#ffffff'
      }}
    >
      {/* Background glow */}
      <div
        className="glow-orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'rgba(56, 189, 248, 0.04)',
          top: '20%',
          right: '-100px'
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: '450px',
          height: '450px',
          background: 'rgba(2, 132, 199, 0.03)',
          bottom: '10%',
          left: '-100px'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* ===================== HEADER ===================== */}
        <div style={{ textAlign: 'center', width: '100%', margin: '0 auto clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.75rem)', marginBottom: '0.75rem', letterSpacing: '-0.02em', color: '#0f172a', fontWeight: 800 }}>
            What Parents Say About <span className="text-gradient">Obedient School</span>
          </h2>
        </div>

        {/* ===================== TRUST METRICS STRIP ===================== */}
        <div
          className="metrics-strip-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3.5rem'
          }}
        >
          <div
            className="glass-panel metrics-card"
            style={{
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              textAlign: 'center',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '0.5rem' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} color="#0284c7" fill="#0284c7" />
              ))}
            </div>
            <div className="metric-number" style={{ fontSize: '2rem', fontWeight: 800, color: '#0a0a0a', lineHeight: 1 }}>
              {REVIEW_STATS.averageRating} / 5.0
            </div>
            <div className="metric-label" style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.35rem' }}>
              Average Parent Rating
            </div>
          </div>

          <div
            className="glass-panel metrics-card"
            style={{
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              textAlign: 'center',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
            }}
          >
            <div className="metric-number" style={{ fontSize: '2rem', fontWeight: 800, color: '#0284c7', lineHeight: 1, marginTop: '0.5rem' }}>
              {REVIEW_STATS.totalReviews}
            </div>
            <div className="metric-label" style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.35rem' }}>
              Active Testimonials
            </div>
          </div>

          <div
            className="glass-panel metrics-card"
            style={{
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              textAlign: 'center',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
            }}
          >
            <div className="metric-number" style={{ fontSize: '2rem', fontWeight: 800, color: '#0284c7', lineHeight: 1, marginTop: '0.5rem' }}>
              {REVIEW_STATS.recommendationRate}
            </div>
            <div className="metric-label" style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.35rem' }}>
              Recommendation Index
            </div>
          </div>

          <div
            className="glass-panel metrics-card"
            style={{
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              textAlign: 'center',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
            }}
          >
            <div className="metric-number" style={{ fontSize: '2rem', fontWeight: 800, color: '#0a0a0a', lineHeight: 1, marginTop: '0.5rem' }}>
              100%
            </div>
            <div className="metric-label" style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.35rem' }}>
              Verified Campus Parents
            </div>
          </div>
        </div>

        {/* ===================== CATEGORY FILTER PILLS ===================== */}


        {/* ===================== TESTIMONIALS CAROUSEL WRAPPER ===================== */}
        <div style={{ position: 'relative', width: '100%' }}>
          {/* Testimonials Cards Scroll Container (No horizontal scrollbar line) */}
          <div
            ref={scrollContainerRef}
            className="testimonials-container"
            style={{
              display: 'flex',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              gap: '1.75rem',
              padding: '0.75rem 0.25rem 1.5rem',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredReviews.map((rev) => (
                <motion.div
                  key={rev.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="glass-panel review-card"
                  data-review-id={rev.id}
                  style={{
                    flex: '0 0 600px',
                    minWidth: '600px',
                    maxWidth: '600px',
                    scrollSnapAlign: 'start',
                    flexShrink: 0,
                    borderRadius: 'var(--radius-xl)',
                    padding: '2.5rem 2.5rem',
                    background: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
                    position: 'relative'
                  }}
                >
                  <div>
                    {/* Top: Star rating */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <div style={{ display: 'flex', gap: '0.2rem' }}>
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} size={16} color="#0284c7" fill="#0284c7" />
                        ))}
                      </div>
                    </div>

                    {/* Quote Body */}
                    <p
                      style={{
                        fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                        color: '#0a0a0a',
                        lineHeight: 1.75,
                        fontStyle: 'normal',
                        marginBottom: 'clamp(1rem, 2.5vw, 1.75rem)',
                        position: 'relative'
                      }}
                    >
                      "{rev.quote}"
                    </p>
                  </div>

                  {/* Parent Profile & Verification (No horizontal divider line) */}
                  <div
                    style={{
                      paddingTop: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem'
                    }}
                  >
                    {/* Avatar / Initials */}
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                        border: '2px solid #bae6fd',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        flexShrink: 0
                      }}
                    >
                      {rev.author
                        .split(' ')
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join('')}
                    </div>

                    {/* Name, Designation & Location */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0a0a0a' }}>
                          {rev.author}
                        </span>
                        {rev.verified && (
                          <CheckCircle2 size={14} color="#0284c7" title="Verified Parent" style={{ flexShrink: 0 }} />
                        )}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#475569', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {rev.designation}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', color: '#64748b', marginTop: '0.15rem' }}>
                        <MapPin size={11} />
                        <span>{rev.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>


        </div>

      </div>

      <style>{`
        .testimonials-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
        }
        .testimonials-container::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }

        /* Laptops & Standard Desktops (1025px - 1280px) */
        @media (max-width: 1280px) {
          .review-card {
            flex: 0 0 520px !important;
            min-width: 520px !important;
            max-width: 520px !important;
            padding: 2rem 1.75rem !important;
          }
        }

        /* Tablets Landscape / Medium Screens (769px - 1024px) */
        @media (max-width: 1024px) {
          .review-card {
            flex: 0 0 440px !important;
            min-width: 440px !important;
            max-width: 440px !important;
            padding: 1.75rem 1.5rem !important;
          }
          .metrics-card {
            padding: 1.25rem 1rem !important;
          }
          .metric-number {
            font-size: 1.65rem !important;
          }
        }

        /* Tablets Portrait & Large Phones (481px - 768px) */
        @media (max-width: 768px) {
          .testimonials-container {
            gap: 1rem !important;
            padding: 0.5rem 0.15rem 1.25rem !important;
          }
          .metrics-strip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
            margin-bottom: 2rem !important;
          }
          .metrics-card {
            padding: 1rem 0.75rem !important;
          }
          .metric-number {
            font-size: 1.35rem !important;
          }
          .metric-label {
            font-size: 0.75rem !important;
          }
          .review-card {
            flex: 0 0 85% !important;
            min-width: 85% !important;
            max-width: 420px !important;
            padding: 1.5rem 1.25rem !important;
            scroll-snap-align: center !important;
          }
          .reviews-nav-controls {
            margin-top: 1.25rem !important;
            gap: 0.85rem !important;
          }
          .review-nav-btn {
            width: 44px !important;
            height: 44px !important;
          }
        }

        /* Standard Mobile (361px - 480px) */
        @media (max-width: 480px) {
          .review-card {
            flex: 0 0 88% !important;
            min-width: 88% !important;
            max-width: 88% !important;
            padding: 1.35rem 1rem !important;
          }
          .metrics-card {
            padding: 0.85rem 0.6rem !important;
          }
          .metric-number {
            font-size: 1.25rem !important;
          }
          .metric-label {
            font-size: 0.7rem !important;
          }
        }

        /* Compact Mobile (<= 360px - e.g. iPhone SE, Fold outer) */
        @media (max-width: 360px) {
          .metrics-strip-grid {
            grid-template-columns: 1fr !important;
            gap: 0.6rem !important;
          }
          .review-card {
            flex: 0 0 92% !important;
            min-width: 92% !important;
            max-width: 92% !important;
            padding: 1.15rem 0.85rem !important;
          }
        }
      `}</style>
    </div>
  );
}
