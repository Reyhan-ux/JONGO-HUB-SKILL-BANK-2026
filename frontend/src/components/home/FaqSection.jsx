import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown } from 'lucide-react';
import QuestionSvgRaw from '../../assets/questions.svg?raw';
import { faqs as defaultFaqs } from '../../data/homeData';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FaqSection({
  badgeText = 'FREQUENTLY ASKED QUESTIONS',
  title = 'GOT QUESTIONS?',
  titleHighlight = "WE'VE GOT ANSWERS.",
  items = defaultFaqs
}) {
  const [openFaq, setOpenFaq] = useState(0);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 30%"]
  });

  const lineOpacity = useTransform(scrollYProgress, [0, 0.15], [0.3, 1]);

  return (
    <section ref={sectionRef} style={{ position: 'relative', overflow: 'hidden', margin: '0 auto', padding: '3rem 2rem', boxSizing: 'border-box', background: '#FFFFFF' }}>
      
      {/* ── 1. Refined Cyber Matrix Geometric Grid (Subtle Opacity) ── */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.15, zIndex: 0 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="faqGridPattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#64748B" strokeWidth="0.8" strokeDasharray="4 4" />
            <circle cx="0" cy="0" r="2" fill="#FFC72C" opacity="0.8" />
            <circle cx="48" cy="48" r="1.5" fill="#94A3B8" opacity="0.5" />
            <path d="M 22 24 L 26 24 M 24 22 L 24 26" stroke="#FFC72C" strokeWidth="0.8" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#faqGridPattern)" />
      </svg>

      {/* Canvas Connecting Line */}
      <svg 
        className="desktop-canvas-line"
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
      >
        <defs>
          <filter id="yellowGlowFaq" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <motion.path
          d="M 50 0 C 50 20, 25 40, 25 50 C 25 70, 50 80, 50 100"
          stroke="#FFC72C"
          strokeWidth="7"
          fill="none"
          vectorEffect="non-scaling-stroke"
          filter="url(#yellowGlowFaq)"
          style={{ pathLength: scrollYProgress, opacity: lineOpacity }}
        />
      </svg>

      {/* Soft Ambient Radial Background Glows */}
      <div style={{ position: 'absolute', top: '5%', left: '8%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.18) 0%, rgba(255, 199, 44, 0.04) 50%, rgba(255, 255, 255, 0) 100%)', filter: 'blur(50px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '5%', right: '5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.16) 0%, rgba(255, 199, 44, 0.03) 50%, rgba(255, 255, 255, 0) 100%)', filter: 'blur(55px)', zIndex: 0 }} />
      
      <div style={{ maxWidth: '1360px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            className="animated"
            dangerouslySetInnerHTML={{ __html: QuestionSvgRaw }}
            style={{ width: '100%', maxWidth: '420px' }}
          />
        </div>

        <div>
          <span style={{ color: 'var(--pms-yellow-text)', fontWeight: '800', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.18em' }}>{badgeText}</span>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: 'var(--pms-black)', margin: '0.5rem 0 2rem', lineHeight: '1.05' }}>
            {title} <span style={{ color: 'var(--pms-yellow-text)' }}>{titleHighlight}</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {items.map((faq, index) => (
              <div
                key={index}
                className="card-white"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                style={{ cursor: 'pointer', padding: '1.25rem 1.5rem', borderRadius: '1rem', borderLeft: openFaq === index ? '5px solid #FFC72C' : '1px solid #E5E7EB', transition: 'all 0.2s ease' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--pms-black)', fontFamily: 'var(--font-body)' }}>{faq.q}</span>
                  <ChevronDown size={20} style={{ transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease', color: 'var(--pms-black)' }} />
                </div>
                {openFaq === index && (
                  <p style={{ marginTop: '0.75rem', color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

FaqSection.propTypes = {
  badgeText: PropTypes.string,
  title: PropTypes.string,
  titleHighlight: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      q: PropTypes.string.isRequired,
      a: PropTypes.string.isRequired
    })
  )
};
