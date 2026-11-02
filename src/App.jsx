import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ReviewsScreen from './screens/ReviewsScreen';
import ContactScreen from './screens/ContactScreen';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll spy to dynamically sync activeScreen with current scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const sections = ['home', 'about', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveScreen(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100dvh', width: '100%', maxWidth: '100%', overflowX: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', backgroundColor: '#ffffff', color: '#0a0a0a' }}>
      {/* Fixed Modern Navbar */}
      <Navbar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />

      {/* Main Content: Exactly 4 Screens */}
      <main style={{ flex: 1, width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
        <HomeScreen setActiveScreen={setActiveScreen} />
        <AboutScreen />
        <ReviewsScreen />
        <ContactScreen />
      </main>

      {/* Footer */}
      <Footer setActiveScreen={setActiveScreen} />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="floating-back-to-top"
          style={{
            zIndex: 40,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #38bdf8, #0284c7)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(56, 189, 248, 0.45)',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
