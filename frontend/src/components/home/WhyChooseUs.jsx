import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

import marketingSvg from '../../assets/Marketing-cuate.svg';
import codeReviewSvg from '../../assets/Codereview-cuate.svg';
import certificationSvg from '../../assets/Certification-cuate.svg';
import worldConnectSvg from '../../assets/connected-world-rafiki.svg';
import innovationSvg from '../../assets/Innovation-rafiki.svg';
import clipboardGif from '../../assets/clipboard.gif';

import { whyChooseUsFeatures } from '../../data/homeData';

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

export default function WhyChooseUs() {
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
          d="M 50 0 C 50 20, 25 30, 25 50 C 25 70, 50 80, 50 100"
          stroke="#F5D000"
          strokeWidth="7"
          fill="none"
          vectorEffect="non-scaling-stroke"
          filter="url(#yellowGlowWhy)"
          style={{ pathLength: scrollYProgress, opacity: lineOpacity }}
        />
      </svg>
      <div style={{ position: 'absolute', top: '3rem', left: '14%', width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.16)', filter: 'blur(50px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '44%', right: '12%', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.14)', filter: 'blur(50px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '1rem', left: '42%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.12)', filter: 'blur(50px)', zIndex: 0 }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>

        {/* Left Carousel & Stat Badge */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', position: 'relative' }}>
          <div style={{ gridColumn: 'span 2', position: 'relative', width: '100%', minHeight: '660px', background: 'transparent', overflow: 'visible', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: '3rem' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 40, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 0.98 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ position: 'relative', width: '79%', background: '#0d0d0d', borderRadius: '2.75rem', boxShadow: '0 32px 90px rgba(0,0,0,0.22)', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', bottom: 'calc(2.5rem + 8%)', borderTop: '8px solid #fcbf05', minHeight: '420px', padding: '1.5rem' }}
              >
                <div style={{ position: 'absolute', top: '8%', left: '8%', width: '230px', height: '230px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.28)', filter: 'blur(60px)', zIndex: 0 }} />
                <div style={{ position: 'absolute', bottom: '10%', right: '12%', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.22)', filter: 'blur(64px)', zIndex: 0 }} />
                <motion.img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  initial={false}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                  style={{ position: 'relative', width: '100%', maxWidth: '100%', height: 'auto', maxHeight: '380px', margin: '0 auto', objectFit: 'contain', objectPosition: 'center center', display: 'block', zIndex: 1 }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stat Overlay Badge */}
          <div style={{ gridColumn: 'span 2', background: '#000000', padding: '1.5rem 2rem', paddingBottom: '2rem', borderRadius: '2.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', boxShadow: 'none', position: 'absolute', zIndex: 2, width: '79%', left: '10.5%', bottom: '-12%', animation: 'badgeFloat 6s ease-in-out infinite', willChange: 'transform' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '84px', height: '84px', borderRadius: '14px', background: 'transparent', padding: '0.6rem', flexShrink: 0 }}>
              <img src={clipboardGif} alt="clipboard animation" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '10px', display: 'block' }} />
            </div>
            <div>
              <h3 style={{ fontSize: '2.4rem', fontWeight: '900', color: 'var(--pms-yellow)', fontFamily: '"Oswald", sans-serif' }}>450+</h3>
              <p style={{ fontWeight: '700', color: 'var(--pms-yellow)', fontSize: '1rem', textTransform: 'uppercase', fontFamily: '"Oswald", sans-serif' }}>Verified Jongo Hub Reactor Graduates</p>
            </div>
          </div>
        </div>

        {/* Right Text & Feature Items */}
        <div style={{ paddingLeft: '1.5rem' }}>
          <span style={{ color: 'var(--pms-yellow-text)', fontWeight: '800', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.18em' }}>why choose us</span>
          <h2 style={{ fontSize: '3.1rem', fontWeight: '900', color: 'var(--pms-black)', margin: '0.5rem 0 1.5rem', lineHeight: '1.2' }}>
            WE ARE A<span style={{ color: 'var(--pms-yellow-text)' }}> TRUSTED TALENT BASED PLATFORM.</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', maxWidth: '520px' }}>
            {whyChooseUsFeatures.map((feat, idx) => {
              const isHighlight = feat.highlight;
              const cardBg = isHighlight
                ? 'linear-gradient(180deg, rgba(252,191,5,0.12), rgba(252,191,5,0.06))'
                : 'rgba(252, 191, 5, 0.14)';
              const borderLeft = isHighlight ? '6px solid #fcbf05' : '4px solid #fcbf05';
              const shadow = isHighlight
                ? '0 18px 40px rgba(252, 191, 5, 0.12)'
                : '0 14px 30px rgba(252, 191, 5, 0.1)';

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
                  style={{
                    background: cardBg,
                    padding: isHighlight ? '1.25rem' : '1rem',
                    borderRadius: isHighlight ? '1.25rem' : 'var(--radius-md)',
                    borderLeft: borderLeft,
                    boxShadow: shadow,
                    transition: 'transform 200ms ease, box-shadow 200ms ease'
                  }}
                >
                  <h4 style={{ color: 'var(--pms-black)', fontSize: '1.25rem', fontWeight: '900', textTransform: 'uppercase', margin: 0 }}>{feat.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.5rem' }}>{feat.description}</p>
                </motion.div>
              );
            })}
          </div>

          <Link to="/employer/search" className="btn-yellow" style={{ color: 'var(--pms-black)', fontWeight: 700 }}>
            Explore Graduate Directory
          </Link>
        </div>

      </div>
    </section>
  );
}
