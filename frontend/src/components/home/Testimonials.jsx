import React, { useRef } from 'react';
import { Star } from 'lucide-react';
import feedbackSvg from '../../assets/feedback.svg?raw';
import { motion, useScroll, useTransform } from 'framer-motion';

const sectionFlowStyle = {
  position: 'relative',
  overflow: 'hidden',
  margin: '0 auto',
  padding: '2.5rem 2rem',
  boxSizing: 'border-box',
};

export default function Testimonials() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 30%"]
  });

  const lineOpacity = useTransform(scrollYProgress, [0, 0.15], [0.3, 1]);

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
          <filter id="yellowGlowTest" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <motion.path
          d="M 50 0 C 50 20, 75 40, 75 50 C 75 70, 50 80, 50 100"
          stroke="#F5D000"
          strokeWidth="7"
          fill="none"
          vectorEffect="non-scaling-stroke"
          filter="url(#yellowGlowTest)"
          style={{ pathLength: scrollYProgress, opacity: lineOpacity }}
        />
      </svg>

      <div style={{ position: 'absolute', top: '10%', right: '15%', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.16)', filter: 'blur(50px)' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '15%', width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.14)', filter: 'blur(50px)' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>

        <div>
          <span style={{ color: 'var(--pms-yellow-text)', fontWeight: '800', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.18em' }}>TESTIMONIALS & REVIEWS</span>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: 'var(--pms-black)', margin: '0.5rem 0 1.5rem', lineHeight: '1.05' }}>
            WHAT OUR <span style={{ color: 'var(--pms-yellow-text)' }}>PARTNERS & GRADUATES SAY</span>
          </h2>
          <p style={{ color: '#5b6477', fontSize: '1.112rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Hear from tech leads, partner employers, mentors, and Reactor alumni who use Skill Bank to showcase and hire verified graduates.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="card-white" style={{ borderLeft: '6px solid #F5D000', borderRadius: '1.5rem', padding: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.25rem', color: 'var(--pms-yellow-text)', marginBottom: '0.5rem' }}>
                <Star size={16} fill="#F5D000" /><Star size={16} fill="#F5D000" /><Star size={16} fill="#F5D000" /><Star size={16} fill="#F5D000" /><Star size={16} fill="#F5D000" />
              </div>
              <p style={{ color: 'var(--pms-black)', fontWeight: '600', fontSize: '1rem', fontStyle: 'italic', marginBottom: '0.75rem' }}>
                "Skill Bank helped us hire two full-stack React developers in less than 48 hours. The cryptographic credentials gave us total confidence before we even started interviews."
              </p>
              <strong style={{ display: 'block', color: 'var(--pms-black)', fontSize: '0.9rem' }}>— Dr. Charles Nkwain, VP of Engineering at AfriTech</strong>
            </div>

            <div className="card-white" style={{ borderLeft: '6px solid #111111', borderRadius: '1.5rem', padding: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.25rem', color: 'var(--pms-yellow-text)', marginBottom: '0.5rem' }}>
                <Star size={16} fill="#F5D000" /><Star size={16} fill="#F5D000" /><Star size={16} fill="#F5D000" /><Star size={16} fill="#F5D000" /><Star size={16} fill="#F5D000" />
              </div>
              <p style={{ color: 'var(--pms-black)', fontWeight: '600', fontSize: '1rem', fontStyle: 'italic', marginBottom: '0.75rem' }}>
                "Graduating from Jongo Hub Reactor gave me a verified profile backed by real capstone audits. Employers reached out to me directly on WhatsApp!"
              </p>
              <strong style={{ display: 'block', color: 'var(--pms-black)', fontSize: '0.9rem' }}>— Amina Osei, Full Stack Engineer &amp; Graduate</strong>
            </div>
          </div>
        </div>

        {/* Feedback Illustration */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div
            className="animated"
            dangerouslySetInnerHTML={{ __html: feedbackSvg }}
            style={{ width: '100%', maxWidth: '480px' }}
          />
        </div>

      </div>
    </section>
  );
}
