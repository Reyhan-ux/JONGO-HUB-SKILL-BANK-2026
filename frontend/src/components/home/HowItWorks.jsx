import React, { useRef } from 'react';
import contentSvg from '../../assets/business-plan-not-css.svg?raw';
import { howItWorksSteps } from '../../data/homeData';
import { motion, useScroll, useTransform } from 'framer-motion';

const sectionFlowStyle = {
  position: 'relative',
  overflow: 'hidden',
  margin: '0 auto',
  padding: '1.5rem 2rem',
  boxSizing: 'border-box',
};

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 30%"]
  });

  const lineOpacity = useTransform(scrollYProgress, [0, 0.15], [0.3, 1]);

  return (
    <section ref={sectionRef} style={{ ...sectionFlowStyle, background: 'linear-gradient(180deg, #FFFDF6 0%, #FFFFFF 100%)' }}>
      
      {/* Canvas Connecting Line */}
      <svg 
        className="desktop-canvas-line"
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
      >
        <defs>
          <filter id="yellowGlowHow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <motion.path
          d="M 50 0 C 50 30, 80 40, 80 50 C 80 60, 50 80, 50 100"
          stroke="#F5D000"
          strokeWidth="7"
          fill="none"
          vectorEffect="non-scaling-stroke"
          filter="url(#yellowGlowHow)"
          style={{ pathLength: scrollYProgress, opacity: lineOpacity }}
        />
      </svg>

      <div style={{ position: 'absolute', top: '0.5rem', left: '24%', width: '240px', height: '70px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.18)', filter: 'blur(50px)' }} />
      <div style={{ position: 'absolute', top: '15%', left: '48%', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.16)', filter: 'blur(50px)' }} />
      <div style={{ position: 'absolute', bottom: '8%', left: '24%', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.14)', filter: 'blur(50px)' }} />
      <div style={{ position: 'absolute', bottom: '1.5rem', right: '4rem', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(17, 17, 17, 0.06)', filter: 'blur(40px)' }} />

      <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '720px', textAlign: 'left' }}>
            <span style={{ color: 'var(--pms-yellow-text)', fontWeight: '800', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.18em' }}>How it works</span>
            <h2 style={{ fontSize: '3.1rem', fontWeight: '900', color: 'var(--pms-black)', margin: '0.5rem 0 1.5rem', lineHeight: '1.2' }}>
              HOW <span style={{ color: 'var(--pms-yellow-text)' }}> JONGO HUB SKILL BANK</span><span style={{ color: 'var(--pms-black)' }}> WORKS</span>
            </h2>
            <p style={{ color: '#5b6477', fontSize: '1.112rem', lineHeight: '1.8', marginTop: '1.25rem', maxWidth: '620px' }}>
              Skill Bank connects four stakeholders — administrators, Reactor graduates, mentors, and partner employers — in one company system built to showcase verified graduate talent from Jongo Hub's Reactor program.
            </p>
          </div>

          <div style={{ flex: '0 0 460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
              dangerouslySetInnerHTML={{ __html: contentSvg }}
              style={{ width: '100%', maxWidth: '420px', borderRadius: '2rem', overflow: 'hidden' }}
            />
          </div>
        </div>

        {/* Dynamic Card Mapping */}
        <div className="track-scrollbar" style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', padding: '1.5rem 0 2rem', alignItems: 'stretch', justifyContent: 'center', WebkitOverflowScrolling: 'touch', background: '#FFFFFF', borderRadius: '3rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          {howItWorksSteps.map((step) => {
            const isDark = step.theme === 'dark';

            const cardStyle = isDark ? {
              background: '#111111',
              color: 'var(--pms-yellow-text)',
              borderTop: '12px solid #F5D000',
              border: 'none',
              borderRadius: '2.5rem',
              boxShadow: '0 18px 36px rgba(0, 0, 0, 0.12)'
            } : {
              background: '#F5D000',
              color: '#111111',
              borderTop: '12px solid #111111',
              border: '1px solid rgba(17, 24, 39, 0.14)',
              borderRadius: '2.5rem',
              boxShadow: '0 28px 60px rgba(0, 0, 0, 0.08)'
            };

            const numBg = isDark ? '#F5D000' : '#111111';
            const numColor = isDark ? '#111111' : '#F5D000';
            const tagColor = isDark ? '#F5D000' : '#111111';
            const titleColor = isDark ? '#FFFFFF' : '#111111';
            const descColor = isDark ? '#E5E7EB' : '#1F2937';

            return (
              <div
                key={step.stepNumber}
                className="card-white floating-card"
                style={{
                  ...cardStyle,
                  flex: '0 0 270px',
                  minWidth: '270px',
                  borderRadius: '2rem',
                  padding: '1.65rem',
                  minHeight: '310px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: numBg, color: numColor, fontWeight: 900, fontSize: '1.76rem', fontFamily: 'Jost, sans-serif', fontStyle: 'italic' }}>
                    {step.stepNumber}
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: tagColor, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                    {step.category}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 900, color: titleColor, marginBottom: '0.85rem' }}>{step.title}</h3>
                <p style={{ color: descColor, fontSize: '0.96rem', lineHeight: '1.8', margin: 0 }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
