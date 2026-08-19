import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

import marketingSvg from '../../assets/Marketing-cuate.svg';
import codeReviewSvg from '../../assets/Codereview-cuate.svg';
import certificationSvg from '../../assets/Certification-cuate.svg';
import worldConnectSvg from '../../assets/connected-world-rafiki.svg';
import innovationSvg from '../../assets/Innovation-rafiki.svg';
import clipboardGif from '../../assets/clipboard.gif';

import { whyChooseUsFeatures as defaultFeatures } from '../../data/homeData';

const swipeImages = [
  { src: marketingSvg, alt: 'Marketing and outreach illustration' },
  { src: codeReviewSvg, alt: 'Code review and capstone audit illustration' },
  { src: worldConnectSvg, alt: 'Connected world and global reach illustration' },
  { src: certificationSvg, alt: 'Digital certification illustration' },
  { src: innovationSvg, alt: 'Innovation and engineering illustration' },
];

const sectionFlowStyle = {
  position: 'relative',
  overflow: 'hidden',
  margin: '0 auto',
  padding: '2.5rem 2rem',
  boxSizing: 'border-box',
};

export default function WhyChooseUs({
  badgeText = 'WHY CHOOSE JONGO HUB',
  title = 'THE OFFICIAL SYSTEM FOR',
  titleHighlight = 'REACTOR TALENT',
  subtitle = 'Built specifically for Jongo Hub Reactor graduates, alumni, partner employers, and mentors. Practical utility without LMS bloat.',
  features = defaultFeatures
}) {
  const [activeSlide, setActiveSlide] = useState(0);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 30%"]
  });

  const lineOpacity = useTransform(scrollYProgress, [0, 0.15], [0.3, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % swipeImages.length);
    }, 5600);
    return () => clearInterval(interval);
  }, []);

  const currentImage = swipeImages[activeSlide];

  return (
    <section ref={sectionRef} style={{ ...sectionFlowStyle, maxWidth: '1360px', padding: '2.5rem 2rem', background: '#FFFFFF' }}>
      
      {/* Canvas Connecting Line */}
      <svg 
        className="desktop-canvas-line"
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
      >
        <defs>
          <filter id="yellowGlowWhy" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <motion.path
          d="M 50 0 C 50 30, 20 40, 20 50 C 20 60, 50 80, 50 100"
          stroke="#FFC72C"
          strokeWidth="7"
          fill="none"
          vectorEffect="non-scaling-stroke"
          filter="url(#yellowGlowWhy)"
          style={{ pathLength: scrollYProgress, opacity: lineOpacity }}
        />
      </svg>

      {/* ── 1. Refined Cyber Matrix Geometric Grid (Subtle Opacity) ── */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.15, zIndex: 0 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="whyGridPattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#64748B" strokeWidth="0.8" strokeDasharray="4 4" />
            <circle cx="0" cy="0" r="2" fill="#FFC72C" opacity="0.8" />
            <circle cx="48" cy="48" r="1.5" fill="#94A3B8" opacity="0.5" />
            <path d="M 22 24 L 26 24 M 24 22 L 24 26" stroke="#FFC72C" strokeWidth="0.8" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#whyGridPattern)" />
      </svg>

      {/* Soft Ambient Radial Background Glows */}
      <div style={{ position: 'absolute', top: '5%', left: '8%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.18) 0%, rgba(255, 199, 44, 0.04) 50%, rgba(255, 255, 255, 0) 100%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', right: '8%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.16) 0%, rgba(255, 199, 44, 0.03) 50%, rgba(255, 255, 255, 0) 100%)', filter: 'blur(55px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '340px', height: '340px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.14) 0%, rgba(255, 199, 44, 0.02) 50%, rgba(255, 255, 255, 0) 100%)', filter: 'blur(45px)', pointerEvents: 'none' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center', marginBottom: '3rem', position: 'relative', zIndex: 1 }}>

        <div>
          <span style={{ color: 'var(--pms-yellow-text)', fontWeight: '800', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.18em' }}>{badgeText}</span>
          <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--pms-black)', margin: '0.5rem 0 1.25rem', lineHeight: '1.1' }}>
            {title} <br/><span style={{ color: 'var(--pms-yellow-text)' }}>{titleHighlight}</span>
          </h2>
          <p style={{ color: '#5b6477', fontSize: '1.112rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            {subtitle}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {features.map((feature, idx) => (
              <div key={idx} className="card-white" style={{ borderLeft: idx % 2 === 0 ? '5px solid #FFC72C' : '5px solid #111111', borderRadius: '1.5rem', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <img
                    src={clipboardGif}
                    alt="Animated icon"
                    style={{ width: '46px', height: '46px', objectFit: 'contain' }}
                  />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '900', color: 'var(--pms-black)' }}>{feature.title}</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6' }}>{feature.description || feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Carousel Illustration Slider (Large & Prominent) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '520px' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '580px', height: '460px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    maxWidth: '560px',
                    maxHeight: '450px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))'
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.75rem' }}>
            {swipeImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                style={{
                  width: activeSlide === idx ? '32px' : '12px',
                  height: '12px',
                  borderRadius: '999px',
                  background: activeSlide === idx ? 'var(--pms-yellow)' : '#E5E7EB',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  padding: 0
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

WhyChooseUs.propTypes = {
  badgeText: PropTypes.string,
  title: PropTypes.string,
  titleHighlight: PropTypes.string,
  subtitle: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired
    })
  )
};
