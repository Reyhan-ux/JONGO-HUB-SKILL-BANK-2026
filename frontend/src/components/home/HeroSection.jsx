import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Search } from 'lucide-react';
import programmingSvg from '../../assets/programming-not-css.svg?raw';
import { motion, useScroll, useTransform } from 'framer-motion';

const heroImageStyle = {
  width: '100%',
  height: 'auto',
  maxWidth: '900px',
  margin: '0 auto',
  display: 'block',
  animation: 'heroFloat 8s cubic-bezier(.25,.46,.45,.94) infinite, heroPulse 10s ease-in-out infinite',
  transformOrigin: 'center center',
  willChange: 'transform,opacity',
  transition: 'transform 600ms cubic-bezier(.22,.9,.32,1)',
};

const heroHeadingStyle = {
  opacity: 0,
  transform: 'translateY(20px)',
  animation: 'heroSlideIn 0.9s ease-out forwards',
};

const heroTextStyle = {
  opacity: 0,
  transform: 'translateY(12px)',
  animation: 'heroFadeIn 1s ease-out 0.15s forwards',
};

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end center"]
  });

  const lineOpacity = useTransform(scrollYProgress, [0, 0.15], [0.3, 1]);
  useEffect(() => {
    const timer = setTimeout(() => {
      const svg = document.querySelector('svg#freepik_stories-programming');
      if (svg) svg.classList.add('animated');
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section ref={sectionRef} style={{ background: 'var(--pms-black-deep)', color: '#FFFFFF', padding: '1.2rem 1.25rem 2rem', position: 'relative', overflow: 'hidden' }}>

      {/* Canvas Connecting Line */}
      <svg
        className="desktop-canvas-line"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
      >
        <defs>
          <filter id="yellowGlowHero" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <motion.path
          d="M 75 60 C 75 85, 50 75, 50 100"
          stroke="#F5D000"
          strokeWidth="7"
          fill="none"
          vectorEffect="non-scaling-stroke"
          filter="url(#yellowGlowHero)"
          style={{ pathLength: scrollYProgress, opacity: lineOpacity }}
        />
      </svg>

      <div className="hero-split-grid" style={{ maxWidth: '1360px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '2rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>

        {/* Hero Left Content */}
        <div>
          <h1 className="hero-title" style={{ ...heroHeadingStyle, fontSize: '3.6rem', fontWeight: '900', lineHeight: 1.05, marginBottom: '1rem', color: '#FFFFFF', fontFamily: 'var(--font-heading)', textTransform: 'uppercase' }}>
            SHOWCASING JONGO HUB <br />
            <span style={{ color: 'var(--pms-yellow)' }}>REACTOR GRADUATES</span> TO THE WORLD.
          </h1>
          <p style={{ ...heroTextStyle, fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '1.5rem', maxWidth: '620px', lineHeight: '1.75' }}>
            Jongo Hub's internal platform for verified Reactor graduates — capstone-audited profiles, digital credentials, mentor oversight, and AI-powered employer matching.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <Link to="/employer/search" className="btn-yellow" style={{ padding: '1rem 2rem', fontSize: '1rem', animation: 'buttonFloat 6s ease-in-out infinite', willChange: 'transform' }}>
              Browse Graduates
            </Link>
            <Link
              to="/auth"
              className="btn-black"
              style={{
                padding: '1rem 2rem',
                fontSize: '1rem',
                border: '1px solid var(--pms-yellow)',
                boxShadow: '0 0 0 1px rgba(252,191,5,0.2), 0 18px 60px rgba(252,191,5,0.12)',
                background: 'rgba(0, 0, 0, 0.95)',
                position: 'relative',
                zIndex: 1,
                animation: 'buttonFloat 6s ease-in-out infinite',
                willChange: 'transform',
              }}
            >
              Graduate Portal
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: '620px' }}>
            <div style={{ background: '#191919', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Phone size={26} style={{ color: 'var(--pms-yellow)', minWidth: '26px' }} />
              <div>
                <span style={{ fontSize: '0.9rem', color: '#9CA3AF', display: 'block' }}>Hotline Inquiry</span>
                <strong style={{ fontSize: '1.1rem', color: '#FFF' }}>+237 670 123 456</strong>
              </div>
            </div>
            <div style={{ background: '#191919', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <MapPin size={26} style={{ color: 'var(--pms-yellow)', minWidth: '26px' }} />
              <div>
                <span style={{ fontSize: '0.9rem', color: '#9CA3AF', display: 'block' }}>Headquarters</span>
                <strong style={{ fontSize: '1.1rem', color: '#FFF' }}>Buea, Cameroon</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Right Nitch Code Animation  */}
        <div className="hero-visual-panel" style={{ alignSelf: 'start', marginTop: '-2.4rem', position: 'relative', minHeight: '520px' }}>
          <div style={{ position: 'absolute', top: '10%', left: '18%', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.18)', filter: 'blur(36px)', zIndex: 0 }} />
          <div style={{ position: 'absolute', top: '12%', right: '18%', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.18)', filter: 'blur(36px)', zIndex: 0 }} />
          <div style={{ position: 'absolute', bottom: '-5%', left: '50%', transform: 'translateX(-50%)', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.18)', filter: 'blur(48px)', zIndex: 0 }} />
          <div
            dangerouslySetInnerHTML={{ __html: programmingSvg }}
            style={{ width: '100%', maxWidth: '520px', position: 'relative', zIndex: 1 }}
          />
        </div>
      </div>
    </section>
  );
}
