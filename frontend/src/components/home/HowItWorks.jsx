import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import contentSvg from '../../assets/business-plan-not-css.svg?raw';
import FeatureFlowCard from './FeatureFlowCard';
import { howItWorksSteps as defaultSteps } from '../../data/homeData';
import { motion, useScroll, useTransform } from 'framer-motion';

const sectionFlowStyle = {
  position: 'relative',
  overflow: 'hidden',
  margin: '0 auto',
  padding: '3rem 2rem',
  boxSizing: 'border-box',
};

export default function HowItWorks({
  badgeText = 'How it works',
  title = 'HOW',
  titleHighlight = 'JONGO HUB SKILL BANK',
  titleSuffix = 'WORKS',
  subtitle = "Skill Bank connects four stakeholders — administrators, Reactor graduates, mentors, and partner employers — in one company system built to showcase verified graduate talent from Jongo Hub's Reactor program.",
  steps = defaultSteps
}) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 30%"]
  });

  const lineOpacity = useTransform(scrollYProgress, [0, 0.15], [0.3, 1]);

  return (
    <section ref={sectionRef} style={{ ...sectionFlowStyle, background: '#FFFFFF' }}>
      
      {/* ── 1. Refined Cyber Matrix Geometric Grid (Subtle Opacity) ── */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.15, zIndex: 0 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="howGridPattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#64748B" strokeWidth="0.8" strokeDasharray="4 4" />
            <circle cx="0" cy="0" r="2" fill="#FFC72C" opacity="0.8" />
            <circle cx="48" cy="48" r="1.5" fill="#94A3B8" opacity="0.5" />
            <path d="M 22 24 L 26 24 M 24 22 L 24 26" stroke="#FFC72C" strokeWidth="0.8" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#howGridPattern)" />
      </svg>

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
          stroke="#FFC72C"
          strokeWidth="7"
          fill="none"
          vectorEffect="non-scaling-stroke"
          filter="url(#yellowGlowHow)"
          style={{ pathLength: scrollYProgress, opacity: lineOpacity }}
        />
      </svg>

      {/* Soft Ambient Radial Background Glows */}
      <div style={{ position: 'absolute', top: '5%', left: '10%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.18) 0%, rgba(255, 199, 44, 0.04) 50%, rgba(255, 255, 255, 0) 100%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', right: '10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.16) 0%, rgba(255, 199, 44, 0.03) 50%, rgba(255, 255, 255, 0) 100%)', filter: 'blur(55px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '45%', left: '48%', width: '340px', height: '340px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.14) 0%, rgba(255, 199, 44, 0.02) 50%, rgba(255, 255, 255, 0) 100%)', filter: 'blur(45px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '720px', textAlign: 'left' }}>
            <span style={{ color: 'var(--pms-yellow-text)', fontWeight: '800', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.18em' }}>{badgeText}</span>
            <h2 style={{ fontSize: '3.1rem', fontWeight: '900', color: 'var(--pms-black)', margin: '0.5rem 0 1.5rem', lineHeight: '1.2' }}>
              {title} <span style={{ color: 'var(--pms-yellow-text)' }}> {titleHighlight}</span><span style={{ color: 'var(--pms-black)' }}> {titleSuffix}</span>
            </h2>
            <p style={{ color: '#5b6477', fontSize: '1.112rem', lineHeight: '1.8', marginTop: '1.25rem', maxWidth: '620px' }}>
              {subtitle}
            </p>
          </div>

          <div style={{ flex: '0 0 460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
              dangerouslySetInnerHTML={{ __html: contentSvg }}
              style={{ width: '100%', maxWidth: '420px', borderRadius: '2rem', overflow: 'hidden' }}
            />
          </div>
        </div>

        {/* 4 Persona Cards Grid using unified FeatureFlowCard */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {steps.map((step, idx) => {
            const stepNum = step.stepNumber !== undefined ? `0${step.stepNumber}` : (step.step || `0${idx + 1}`);
            const stepTag = step.category || step.tag || 'Stakeholder';
            const stepDesc = step.description || step.desc || '';
            const stepBenefit = step.benefit || 'Verified Reactor Capstones & Digital Credentials';

            return (
              <FeatureFlowCard
                key={step.title || idx}
                badgeNumber={stepNum}
                categoryTag={stepTag}
                title={step.title}
                description={stepDesc}
                footerLabel="KEY BENEFIT"
                footerValue={stepBenefit}
                theme={step.theme === 'yellow' ? 'yellow' : 'dark'}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

HowItWorks.propTypes = {
  badgeText: PropTypes.string,
  title: PropTypes.string,
  titleHighlight: PropTypes.string,
  titleSuffix: PropTypes.string,
  subtitle: PropTypes.string,
  steps: PropTypes.array
};
