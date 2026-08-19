import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ShieldCheck, Sparkles, Cpu } from 'lucide-react';
import programmingSvg from '../../assets/programming-not-css.svg?raw';
import { motion, useScroll, useTransform } from 'framer-motion';

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

export default function HeroSection({
  title = 'SHOWCASING JONGO HUB',
  titleHighlight = 'REACTOR GRADUATES',
  titleSuffix = 'TO THE WORLD.',
  subtitle = "Jongo Hub's internal platform for verified Reactor graduates — capstone-audited profiles, digital credentials, mentor oversight, and AI-powered employer matching.",
  primaryCtaText = 'Browse Graduates',
  primaryCtaLink = '/employer/search',
  secondaryCtaText = 'Graduate Portal',
  secondaryCtaLink = '/auth',
  initialTab = 'login',
  hotlineNumber = '+237 670 123 456',
  headquartersLocation = 'Buea, Cameroon'
}) {
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
    <section
      ref={sectionRef}
      style={{
        background: 'linear-gradient(135deg, #0A0A0A 0%, #121212 100%)',
        color: '#FFFFFF',
        padding: '2.5rem 1.5rem 3.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* ── 1. Cyber Matrix Geometric Grid Background ── */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.28, zIndex: 0 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="heroGridPattern" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="#334155" strokeWidth="0.75" strokeDasharray="3 3" />
            <circle cx="0" cy="0" r="2" fill="#FFC72C" opacity="0.9" />
            <circle cx="56" cy="56" r="1.5" fill="#64748B" opacity="0.5" />
            <path d="M 26 28 L 30 28 M 28 26 L 28 30" stroke="#FFC72C" strokeWidth="0.8" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGridPattern)" />
      </svg>

      {/* ── 2. Multi-Point Vibrant Radial Glow Spotlights ── */}
      <div style={{ position: 'absolute', top: '-10%', right: '15%', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.25) 0%, rgba(255, 199, 44, 0.06) 50%, rgba(0,0,0,0) 80%)', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '5%', left: '8%', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.20) 0%, rgba(255, 199, 44, 0.04) 50%, rgba(0,0,0,0) 80%)', filter: 'blur(45px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '35%', left: '42%', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.12) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />

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
          stroke="#FFC72C"
          strokeWidth="7"
          fill="none"
          vectorEffect="non-scaling-stroke"
          filter="url(#yellowGlowHero)"
          style={{ pathLength: scrollYProgress, opacity: lineOpacity }}
        />
      </svg>

      <div className="hero-split-grid" style={{ maxWidth: '1360px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '3rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>

        {/* Hero Left Content */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(245, 208, 0, 0.12)', border: '1px solid rgba(245, 208, 0, 0.35)', padding: '0.4rem 0.95rem', borderRadius: '999px', marginBottom: '1.25rem' }}>
            <Sparkles size={14} style={{ color: 'var(--pms-yellow)' }} />
            <span style={{ color: 'var(--pms-yellow)', fontSize: '0.82rem', fontWeight: '800', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              OFFICIAL JONGO HUB REACTOR SHOWCASE
            </span>
          </div>

          <h1 className="hero-title" style={{ ...heroHeadingStyle, fontSize: '3.6rem', fontWeight: '900', lineHeight: 1.05, marginBottom: '1rem', color: '#FFFFFF', fontFamily: 'var(--font-heading)', textTransform: 'uppercase' }}>
            {title} <br />
            <span style={{ color: 'var(--pms-yellow)' }}>{titleHighlight}</span> {titleSuffix}
          </h1>
          <p style={{ ...heroTextStyle, fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '1.75rem', maxWidth: '620px', lineHeight: '1.75' }}>
            {subtitle}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <Link to={primaryCtaLink} className="btn-yellow" style={{ padding: '1rem 2rem', fontSize: '1rem', animation: 'buttonFloat 6s ease-in-out infinite', willChange: 'transform' }}>
              {primaryCtaText}
            </Link>
            <Link
              to={secondaryCtaLink}
              state={{ initialTab }}
              className="btn-black"
              style={{
                padding: '1rem 2rem',
                fontSize: '1rem',
                border: '1px solid var(--pms-yellow)',
                background: 'rgba(0, 0, 0, 0.95)',
                position: 'relative',
                zIndex: 1,
                animation: 'buttonFloat 6s ease-in-out infinite',
                willChange: 'transform',
              }}
            >
              {secondaryCtaText}
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: '620px' }}>
            <div style={{ background: '#161616', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 6px 18px rgba(0,0,0,0.2)' }}>
              <Phone size={26} style={{ color: 'var(--pms-yellow)', minWidth: '26px' }} />
              <div>
                <span style={{ fontSize: '0.85rem', color: '#9CA3AF', display: 'block' }}>Hotline Inquiry</span>
                <strong style={{ fontSize: '1.05rem', color: '#FFF' }}>{hotlineNumber}</strong>
              </div>
            </div>
            <div style={{ background: '#161616', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 6px 18px rgba(0,0,0,0.2)' }}>
              <MapPin size={26} style={{ color: 'var(--pms-yellow)', minWidth: '26px' }} />
              <div>
                <span style={{ fontSize: '0.85rem', color: '#9CA3AF', display: 'block' }}>Headquarters</span>
                <strong style={{ fontSize: '1.05rem', color: '#FFF' }}>{headquartersLocation}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Right Animation & Floating Tech Badges */}
        <div className="hero-visual-panel" style={{ alignSelf: 'center', position: 'relative', minHeight: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          {/* Main Visual Illustration */}
          <div
            dangerouslySetInnerHTML={{ __html: programmingSvg }}
            style={{ width: '100%', maxWidth: '520px', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
          />

          {/* Floating High-Tech Micro Badges */}
          <div
            style={{
              position: 'absolute',
              top: '8%',
              right: '-2%',
              background: 'rgba(22, 22, 22, 0.92)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(245, 208, 0, 0.4)',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
              padding: '0.6rem 1rem',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              zIndex: 2,
              animation: 'buttonFloat 5s ease-in-out infinite'
            }}
          >
            <ShieldCheck size={20} style={{ color: 'var(--pms-yellow)' }} />
            <div>
              <span style={{ fontSize: '0.82rem', fontWeight: '800', color: '#FFFFFF', display: 'block' }}>Reactor Verified</span>
              <span style={{ fontSize: '0.68rem', color: '#9CA3AF' }}>Capstone Audited</span>
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '10%',
              left: '-2%',
              background: 'rgba(22, 22, 22, 0.92)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(245, 208, 0, 0.4)',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
              padding: '0.6rem 1rem',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              zIndex: 2,
              animation: 'buttonFloat 7s ease-in-out infinite'
            }}
          >
            <Cpu size={20} style={{ color: 'var(--pms-yellow)' }} />
            <div>
              <span style={{ fontSize: '0.82rem', fontWeight: '800', color: '#FFFFFF', display: 'block' }}>4-Vector Engine</span>
              <span style={{ fontSize: '0.68rem', color: 'var(--pms-yellow)' }}>98.4% Match Accuracy</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string,
  titleHighlight: PropTypes.string,
  titleSuffix: PropTypes.string,
  subtitle: PropTypes.string,
  primaryCtaText: PropTypes.string,
  primaryCtaLink: PropTypes.string,
  secondaryCtaText: PropTypes.string,
  secondaryCtaLink: PropTypes.string,
  initialTab: PropTypes.oneOf(['login', 'register']),
  hotlineNumber: PropTypes.string,
  headquartersLocation: PropTypes.string
};
