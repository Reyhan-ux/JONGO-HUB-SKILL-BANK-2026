import React, { useRef } from 'react';
import PropTypes from 'prop-types';
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

const defaultTestimonialsList = [
  {
    quote: '"Skill Bank helped us hire two full-stack React developers in less than 48 hours. The cryptographic credentials gave us total confidence before we even started interviews."',
    author: 'Dr. Charles Nkwain, VP of Engineering at AfriTech',
    borderColor: '#FFC72C'
  },
  {
    quote: '"Graduating from Jongo Hub Reactor gave me a verified profile backed by real capstone audits. Employers reached out to me directly on WhatsApp!"',
    author: 'Amina Osei, Full Stack Engineer & Graduate',
    borderColor: '#111111'
  }
];

export default function Testimonials({
  badgeText = 'TESTIMONIALS & REVIEWS',
  title = 'WHAT OUR',
  titleHighlight = 'PARTNERS & GRADUATES SAY',
  subtitle = 'Hear from tech leads, partner employers, mentors, and Reactor alumni who use Skill Bank to showcase and hire verified graduates.',
  testimonials = defaultTestimonialsList
}) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 30%"]
  });

  const lineOpacity = useTransform(scrollYProgress, [0, 0.15], [0.3, 1]);

  return (
    <section ref={sectionRef} style={{ ...sectionFlowStyle, maxWidth: '1360px', padding: '3rem 2rem', background: '#FFFFFF' }}>
      
      {/* ── 1. Refined Cyber Matrix Geometric Grid (Subtle Opacity) ── */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.15, zIndex: 0 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="testGridPattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#64748B" strokeWidth="0.8" strokeDasharray="4 4" />
            <circle cx="0" cy="0" r="2" fill="#FFC72C" opacity="0.8" />
            <circle cx="48" cy="48" r="1.5" fill="#94A3B8" opacity="0.5" />
            <path d="M 22 24 L 26 24 M 24 22 L 24 26" stroke="#FFC72C" strokeWidth="0.8" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#testGridPattern)" />
      </svg>

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
          stroke="#FFC72C"
          strokeWidth="7"
          fill="none"
          vectorEffect="non-scaling-stroke"
          filter="url(#yellowGlowTest)"
          style={{ pathLength: scrollYProgress, opacity: lineOpacity }}
        />
      </svg>

      {/* Soft Ambient Radial Background Glows */}
      <div style={{ position: 'absolute', top: '5%', right: '10%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.18) 0%, rgba(255, 199, 44, 0.04) 50%, rgba(255, 255, 255, 0) 100%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', left: '10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.16) 0%, rgba(255, 199, 44, 0.03) 50%, rgba(255, 255, 255, 0) 100%)', filter: 'blur(55px)', pointerEvents: 'none' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>

        <div>
          <span style={{ color: 'var(--pms-yellow-text)', fontWeight: '800', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.18em' }}>{badgeText}</span>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: 'var(--pms-black)', margin: '0.5rem 0 1.5rem', lineHeight: '1.05' }}>
            {title} <span style={{ color: 'var(--pms-yellow-text)' }}>{titleHighlight}</span>
          </h2>
          <p style={{ color: '#5b6477', fontSize: '1.112rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            {subtitle}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {testimonials.map((t, index) => (
              <div key={index} className="card-white" style={{ borderLeft: `6px solid ${t.borderColor || '#FFC72C'}`, borderRadius: '1.5rem', padding: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.25rem', color: 'var(--pms-yellow-text)', marginBottom: '0.5rem' }}>
                  <Star size={16} fill="#FFC72C" /><Star size={16} fill="#FFC72C" /><Star size={16} fill="#FFC72C" /><Star size={16} fill="#FFC72C" /><Star size={16} fill="#FFC72C" />
                </div>
                <p style={{ color: 'var(--pms-black)', fontWeight: '600', fontSize: '1rem', fontStyle: 'italic', marginBottom: '0.75rem' }}>
                  {t.quote}
                </p>
                <strong style={{ display: 'block', color: 'var(--pms-black)', fontSize: '0.9rem' }}>— {t.author}</strong>
              </div>
            ))}
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

Testimonials.propTypes = {
  badgeText: PropTypes.string,
  title: PropTypes.string,
  titleHighlight: PropTypes.string,
  subtitle: PropTypes.string,
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      borderColor: PropTypes.string
    })
  )
};
