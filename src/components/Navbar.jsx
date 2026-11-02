import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function Navbar({ activeScreen, setActiveScreen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent background scroll when mobile navigation drawer is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'reviews', label: 'Parents Reviews' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id) => {
    setActiveScreen(id);
    setMobileMenuOpen(false);
    
    // Smooth scroll to top of viewport or corresponding section
    const element = document.getElementById(id);
    if (element) {
      const isMobile = window.innerWidth <= 768;
      const offset = isMobile ? 65 : 80;
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
    <>
      <header
        className="app-navbar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 1000,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid #e2e8f0',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : '0 2px 12px rgba(0, 0, 0, 0.04)',
          paddingTop: scrolled ? 'calc(0.55rem + env(safe-area-inset-top, 0px))' : 'calc(0.75rem + env(safe-area-inset-top, 0px))',
          paddingBottom: scrolled ? '0.55rem' : '0.75rem',
          transition: 'padding 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo & Identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="nav-brand-btn"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textAlign: 'left',
              padding: 0
            }}
          >
            <div
              className="nav-brand-logo-box"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                overflow: 'hidden',
                flexShrink: 0
              }}
            >
              <img
                src="/unik.png"
                alt="Obedient School Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div>
              <div
                className="nav-brand-title"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
                  fontWeight: 800,
                  letterSpacing: '0.02em',
                  color: '#0a0a0a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  lineHeight: 1.15
                }}
              >
                <span>OBEDIENT</span>
                <span style={{ color: '#0284c7' }}>SCHOOL</span>
              </div>
              <div
                className="nav-brand-subtitle"
                style={{
                  fontSize: 'clamp(0.65rem, 1.4vw, 0.72rem)',
                  color: '#64748b',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginTop: '2px'
                }}
              >
                Parvathapur • Hyderabad
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '999px',
              padding: '0.35rem 0.6rem'
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    position: 'relative',
                    background: 'none',
                    border: 'none',
                    color: isActive ? '#ffffff' : '#334155',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    padding: '0.55rem 1.15rem',
                    borderRadius: '999px',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    zIndex: 1
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                        boxShadow: '0 4px 14px rgba(2, 132, 199, 0.35)',
                        borderRadius: '999px',
                        zIndex: -1
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Direct Call Quick Action */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
            <a
              href={`tel:${SCHOOL_INFO.contact.phones[0]}`}
              className="btn-primary desktop-cta"
              style={{
                padding: '0.6rem 1.25rem',
                fontSize: '0.85rem'
              }}
            >
              <Phone size={15} />
              <span>Call: {SCHOOL_INFO.contact.phones[0]}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
              style={{
                background: '#f8fafc',
                border: '1px solid #cbd5e1',
                color: '#0a0a0a',
                borderRadius: '10px',
                width: '42px',
                height: '42px',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(15, 23, 42, 0.45)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                zIndex: 998
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="mobile-drawer"
              style={{
                position: 'fixed',
                top: scrolled ? 'calc(58px + env(safe-area-inset-top, 0px))' : 'calc(68px + env(safe-area-inset-top, 0px))',
                left: '4%',
                right: '4%',
                zIndex: 999,
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                padding: '1.25rem',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.14)',
                maxHeight: 'calc(100dvh - 78px - env(safe-area-inset-top, 0px))',
                overflowY: 'auto'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {navItems.map((item) => {
                  const isActive = activeScreen === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      style={{
                        background: isActive ? '#f0f9ff' : 'transparent',
                        border: isActive ? '1px solid #bae6fd' : '1px solid transparent',
                        color: isActive ? '#0284c7' : '#0a0a0a',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        minHeight: '44px'
                      }}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight size={16} opacity={isActive ? 1 : 0.4} />
                    </button>
                  );
                })}

                <div
                  style={{
                    marginTop: '0.6rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid #e2e8f0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  <a
                    href={`tel:${SCHOOL_INFO.contact.phones[0]}`}
                    className="btn-primary"
                    style={{ width: '100%', fontSize: '0.875rem', padding: '0.75rem 1rem', minHeight: '44px' }}
                  >
                    <Phone size={15} />
                    <span>Call {SCHOOL_INFO.contact.phones[0]}</span>
                  </a>
                  <a
                    href={`tel:${SCHOOL_INFO.contact.phones[1]}`}
                    className="btn-secondary"
                    style={{ width: '100%', fontSize: '0.875rem', padding: '0.75rem 1rem', minHeight: '44px' }}
                  >
                    <Phone size={15} />
                    <span>Call {SCHOOL_INFO.contact.phones[1]}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .app-navbar {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          z-index: 1000 !important;
        }
        /* Intermediate Desktop & Small Laptops (1025px - 1180px) */
        @media (min-width: 1025px) and (max-width: 1180px) {
          .desktop-nav {
            padding: 0.25rem 0.45rem !important;
            gap: 0.25rem !important;
          }
          .desktop-nav button {
            padding: 0.45rem 0.75rem !important;
            font-size: 0.8125rem !important;
          }
          .desktop-cta {
            padding: 0.5rem 0.9rem !important;
            font-size: 0.8rem !important;
          }
        }

        /* Tablets & Below */
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
            min-width: 44px !important;
            min-height: 44px !important;
          }
        }

        /* Standard Mobile */
        @media (max-width: 480px) {
          .mobile-drawer {
            left: 4% !important;
            right: 4% !important;
            padding: 1rem 0.85rem !important;
            border-radius: 16px !important;
          }
          .nav-brand-logo-box {
            width: 38px !important;
            height: 38px !important;
            border-radius: 10px !important;
          }
          .mobile-toggle {
            width: 40px !important;
            height: 40px !important;
          }
        }

        /* Compact Mobile (<= 360px - e.g. iPhone SE, Fold outer) */
        @media (max-width: 360px) {
          .nav-brand-btn {
            gap: 0.5rem !important;
          }
          .nav-brand-subtitle {
            display: none !important;
          }
          .nav-brand-title {
            font-size: 0.925rem !important;
          }
          .mobile-drawer {
            left: 3.5% !important;
            right: 3.5% !important;
            padding: 0.75rem !important;
          }
          .mobile-toggle {
            width: 38px !important;
            height: 38px !important;
          }
        }

        /* Landscape Mobile Devices */
        @media (max-height: 520px) and (orientation: landscape) {
          .mobile-drawer {
            top: calc(54px + env(safe-area-inset-top, 0px)) !important;
            max-height: calc(100dvh - 64px - env(safe-area-inset-top, 0px)) !important;
            padding: 0.75rem 1rem !important;
          }
        }
      `}</style>
    </>
  );
}
