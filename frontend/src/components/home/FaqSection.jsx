import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import QuestionSvgRaw from '../../assets/questions.svg?raw';
import { faqs } from '../../data/homeData';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 30%"]
  });

  const lineOpacity = useTransform(scrollYProgress, [0, 0.15], [0.3, 1]);

  return (
    <section ref={sectionRef} style={{ position: 'relative', overflow: 'hidden', margin: '0 auto', padding: '2.5rem 2rem', boxSizing: 'border-box', background: '#FFFFFF' }}>
      
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
          stroke="#F5D000"
          strokeWidth="7"
          fill="none"
          vectorEffect="non-scaling-stroke"
          filter="url(#yellowGlowFaq)"
          style={{ pathLength: scrollYProgress, opacity: lineOpacity }}
        />
      </svg>

      <div style={{ position: 'absolute', top: '2rem', left: '10%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.12)', filter: 'blur(45px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '2rem', right: '5%', width: '450px', height: '450px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.15)', filter: 'blur(65px)', zIndex: 0 }} />
      
      <div style={{ maxWidth: '1360px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            className="animated"
            dangerouslySetInnerHTML={{ __html: QuestionSvgRaw }}
            style={{ width: '100%', maxWidth: '420px' }}
          />
        </div>

        <div>
          <span style={{ color: 'var(--pms-yellow-text)', fontWeight: '800', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.18em' }}>FREQUENTLY ASKED QUESTIONS</span>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: 'var(--pms-black)', margin: '0.5rem 0 2rem', lineHeight: '1.05' }}>
            GOT QUESTIONS? <span style={{ color: 'var(--pms-yellow-text)' }}>WE'VE GOT ANSWERS.</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card-white"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                style={{ cursor: 'pointer', padding: '1.25rem 1.5rem', borderRadius: '1rem', borderLeft: openFaq === index ? '5px solid #F5D000' : '1px solid #E5E7EB', transition: 'all 0.2s ease' }}
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
