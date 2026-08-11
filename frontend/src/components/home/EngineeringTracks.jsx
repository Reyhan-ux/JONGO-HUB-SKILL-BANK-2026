import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import oversightGif from '../../assets/oversight.gif';
import { engineeringTracks } from '../../data/homeData';
import { motion, useScroll, useTransform } from 'framer-motion';

const sectionFlowStyle = {
  position: 'relative',
  overflow: 'hidden',
  margin: '0 auto',
  padding: '2.5rem 2rem',
  boxSizing: 'border-box',
};

export default function EngineeringTracks() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 30%"]
  });

  const lineOpacity = useTransform(scrollYProgress, [0, 0.15], [0.3, 1]);

  return (
    <section ref={sectionRef} style={{ ...sectionFlowStyle, background: '#FFFFFF' }}>
      
      {/* Canvas Connecting Line */}
      <svg 
        className="desktop-canvas-line"
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
      >
        <defs>
          <filter id="yellowGlowEng" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <motion.path
          d="M 50 0 C 50 30, 75 40, 75 50 C 75 70, 50 80, 50 100"
          stroke="#F5D000"
          strokeWidth="7"
          fill="none"
          vectorEffect="non-scaling-stroke"
          filter="url(#yellowGlowEng)"
          style={{ pathLength: scrollYProgress, opacity: lineOpacity }}
        />
      </svg>

      <div style={{ position: 'absolute', top: '3rem', left: '18%', width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.16)', filter: 'blur(50px)' }} />
      <div style={{ position: 'absolute', top: '14rem', right: '16%', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.14)', filter: 'blur(50px)' }} />
      <div style={{ position: 'absolute', bottom: '2rem', left: '44%', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.12)', filter: 'blur(50px)' }} />

      <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '720px' }}>
            <span style={{ color: 'var(--pms-yellow-text)', fontWeight: '800', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.18em' }}>ENGINEERING TRACKS</span>
            <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: 'var(--pms-black)', marginTop: '0.75rem', lineHeight: '1.05' }}>
              REACTOR GRADUATE TRACKS... <br/> <span style={{ color: 'var(--pms-yellow-text)' }}>Verified Skills, Real Capstones.</span>
            </h2>

            <p style={{ color: '#5b6477', fontSize: '1.112rem', lineHeight: '1.8', marginTop: '1.25rem', maxWidth: '620px' }}>
              Browse graduates by engineering track — each profile backed by mentor-audited capstone projects and digital credentials from the Jongo Hub Reactor program.
            </p>
          </div>
          <div style={{ flex: '0 0 460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={oversightGif} alt="Oversight illustration" style={{ width: '100%', maxWidth: '600px', borderRadius: '2rem', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Dynamic Track Cards Carousel */}
        <div className="track-scrollbar" style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', padding: '1.5rem 0 2rem', alignItems: 'stretch', justifyContent: 'center', WebkitOverflowScrolling: 'touch', background: '#FFFFFF', borderRadius: '3rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          {engineeringTracks.map((track) => {
            const isDark = track.theme === 'dark';

            const cardStyle = isDark ? {
              background: '#111111',
              borderTop: '12px solid #F5D000',
              border: 'none',
              borderRadius: '3.5rem',
              color: 'var(--pms-yellow-text)'
            } : {
              background: '#F5D000',
              borderTop: '12px solid #111111',
              border: '1px solid rgba(17, 24, 39, 0.14)',
              borderRadius: '3.5rem',
              color: '#111111'
            };

            const iconBg = isDark ? '#F5D000' : '#111111';
            const catColor = isDark ? '#F5D000' : '#111111';
            const titleColor = isDark ? '#FFFFFF' : '#111111';
            const descColor = isDark ? '#E5E7EB' : '#1F2937';
            const tagBg = isDark ? '#F5D000' : '#111111';
            const tagTextColor = isDark ? '#111111' : '#F5D000';
            const ctaColor = isDark ? '#F5D000' : '#111111';

            return (
              <div
                key={track.id}
                className="card-white floating-card"
                style={{
                  ...cardStyle,
                  flex: '0 0 289px',
                  minWidth: '289px',
                  padding: '1.75rem',
                  minHeight: '350px',
                  boxShadow: isDark ? '0 18px 36px rgba(0, 0, 0, 0.12)' : '0 28px 60px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '18px', background: iconBg, overflow: 'hidden' }}>
                    <img src={track.icon} alt={track.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: catColor, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {track.category}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.55rem', fontWeight: 900, color: titleColor, marginBottom: '0.8rem' }}>{track.title}</h3>
                  <p style={{ color: descColor, fontSize: '0.96rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    {track.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {track.tags.map((tag) => (
                      <span key={tag} style={{ background: tagBg, color: tagTextColor, padding: '0.4rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to="/employer/search" style={{ color: ctaColor, fontWeight: 700, textDecoration: 'none', display: 'flex', justifyContent: 'center', fontSize: '0.95rem' }}>
                  {track.ctaText}
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
