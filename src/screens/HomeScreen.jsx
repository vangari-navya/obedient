import React, { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HomeScreen() {
  const videoRef = useRef(null);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      const offset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="hero-section">
      {/* Sleek ambient backdrop glow for mobile theater presentation */}
      <div className="hero-ambient-glow" aria-hidden="true" />

      {/* Video wrapper: full-bleed cover on desktop, perfectly uncropped 16:9 centered on mobile */}
      <div className="hero-video-wrapper">
        <video
          ref={videoRef}
          src="/school_hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          className="hero-video"
        />
      </div>

      {/* Bottom gradient with Explore button */}
      <div className="hero-bottom-bar">
        <button
          onClick={scrollToAbout}
          aria-label="Scroll down to About Us"
          className="hero-explore-btn"
        >
          <span>Explore</span>
          <ChevronDown size={14} />
        </button>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          width: 100%;
          height: 100dvh;
          min-height: 100vh;
          overflow: hidden;
          margin: 0;
          padding: 0;
          background-color: #050811;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-ambient-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(2, 132, 199, 0.22) 0%, rgba(15, 23, 42, 0.65) 48%, #050811 88%);
          pointer-events: none;
          z-index: 1;
        }

        .hero-video-wrapper {
          position: relative;
          z-index: 2;
          width: min(100%, calc((100dvh - 140px) * 16 / 9));
          aspect-ratio: 16 / 9;
          max-height: calc(100dvh - 140px);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.7), 0 0 45px rgba(2, 132, 199, 0.16);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }

        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background-color: #000000;
        }

        .hero-bottom-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 140px;
          background: linear-gradient(to top, rgba(5, 8, 17, 0.85) 0%, rgba(5, 8, 17, 0.35) 60%, transparent 100%);
          pointer-events: none;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: calc(1.5rem + env(safe-area-inset-bottom, 0px));
          z-index: 10;
        }

        .hero-explore-btn {
          pointer-events: auto;
          background: rgba(255, 255, 255, 0.22);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: #ffffff;
          border-radius: 999px;
          padding: 0.55rem 1.25rem;
          min-height: 44px;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
          animation: bounceSlow 2.5s infinite;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .hero-explore-btn:hover {
          background: rgba(255, 255, 255, 0.35);
          transform: translateY(-2px);
        }

        @keyframes bounceSlow {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-6px);
          }
          60% {
            transform: translateY(-3px);
          }
        }

        @media (min-width: 769px) {
          .hero-video-wrapper {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            max-height: none;
            aspect-ratio: auto;
            box-shadow: none;
            border: none;
          }

          .hero-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .hero-bottom-bar {
            background: linear-gradient(to top, rgba(0, 0, 0, 0.45) 0%, transparent 100%);
          }
        }
      `}</style>
    </div>
  );
}