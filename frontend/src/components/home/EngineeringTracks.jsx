import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import oversightGif from '../../assets/oversight.gif';
import { engineeringTracks as defaultTracks } from '../../data/homeData';
import { motion, useScroll, useTransform } from 'framer-motion';

const sectionFlowStyle = {
  position: 'relative',
  overflow: 'hidden',
  margin: '0 auto',
  padding: '3rem 2rem',
  boxSizing: 'border-box',
};

export default function EngineeringTracks({
  badgeText = 'ENGINEERING TRACKS',
  title = 'REACTOR GRADUATE TRACKS...',
  titleHighlight = 'Verified Skills, Real Capstones.',
  subtitle = 'Browse graduates by engineering track — each profile backed by mentor-audited capstone projects and digital credentials from the Jongo Hub Reactor program.',
  tracks = defaultTracks
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
          <pattern id="engGridPattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#64748B" strokeWidth="0.8" strokeDasharray="4 4" />
            <circle cx="0" cy="0" r="2" fill="#FFC72C" opacity="0.8" />
            <circle cx="48" cy="48" r="1.5" fill="#94A3B8" opacity="0.5" />
            <path d="M 22 24 L 26 24 M 24 22 L 24 26" stroke="#FFC72C" strokeWidth="0.8" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#engGridPattern)" />
      </svg>

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
          stroke="#FFC72C"
          strokeWidth="7"
          fill="none"
          vectorEffect="non-scaling-stroke"
          filter="url(#yellowGlowEng)"
          style={{ pathLength: scrollYProgress, opacity: lineOpacity }}
        />
      </svg>

      {/* Soft Ambient Radial Background Glows */}
      <div style={{ position: 'absolute', top: '3rem', left: '12%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.18) 0%, rgba(255, 199, 44, 0.04) 50%, rgba(255, 255, 255, 0) 100%)', filter: 'blur(50px)' }} />
      <div style={{ position: 'absolute', top: '14rem', right: '10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.16) 0%, rgba(255, 199, 44, 0.03) 50%, rgba(255, 255, 255, 0) 100%)', filter: 'blur(55px)' }} />
      <div style={{ position: 'absolute', bottom: '2rem', left: '44%', width: '340px', height: '340px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.14) 0%, rgba(255, 199, 44, 0.02) 50%, rgba(255, 255, 255, 0) 100%)', filter: 'blur(45px)' }} />

      <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '720px' }}>
            <span style={{ color: 'var(--pms-yellow-text)', fontWeight: '800', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.18em' }}>{badgeText}</span>
            <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: 'var(--pms-black)', marginTop: '0.75rem', lineHeight: '1.05' }}>
              {title} <br/> <span style={{ color: 'var(--pms-yellow-text)' }}>{titleHighlight}</span>
            </h2>

            <p style={{ color: '#5b6477', fontSize: '1.112rem', lineHeight: '1.8', marginTop: '1.25rem', maxWidth: '620px' }}>
              {subtitle}
            </p>
          </div>
          <div style={{ flex: '0 0 460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={oversightGif} alt="Oversight illustration" style={{ width: '100%', maxWidth: '600px', borderRadius: '2rem', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Diagonal Cascading Staircase (Top-Left to Bottom-Right) with Smooth Slow Slide-In */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', width: '100%' }}>
          {tracks.map((track, idx) => {
            const trackSkills = track.tags || track.skills || [];
            const trackDesc = track.description || track.desc || '';
            const isDark = track.theme === 'dark' || idx % 2 === 0;
            const leftOffsetPercent = Math.min(idx * 7.5, 30);

            return (
              <motion.div
                key={track.title || idx}
                initial={{ opacity: 0, x: 220 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15, margin: "0px 0px -40px 0px" }}
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.1
                }}
                whileHover={{ scale: 1.015 }}
                className="card-feature-flow diagonal-track-card"
                style={{
                  background: isDark ? '#111111' : '#FFC72C',
                  color: isDark ? '#FFFFFF' : '#111111',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(17, 24, 39, 0.14)',
                  boxShadow: isDark ? '0 12px 35px rgba(0,0,0,0.32)' : '0 12px 35px rgba(255, 199, 44, 0.20)',
                  borderRadius: '2.25rem',
                  padding: '2rem 2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  position: 'relative',
                  overflow: 'hidden',
                  maxWidth: '860px',
                  width: '100%',
                  marginLeft: `${leftOffsetPercent}%`,
                  boxSizing: 'border-box'
                }}
              >
                {/* 1. Upper Content Row: Left Details + Right Description & Skills */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
                  
                  {/* Left: Icon (with Border Radius) + Track Index & Category Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', minWidth: '150px' }}>
                    {track.icon && (
                      <img
                        src={track.icon}
                        alt={track.title}
                        style={{
                          width: '56px',
                          height: '56px',
                          objectFit: 'contain',
                          borderRadius: '16px',
                          display: 'block',
                          flexShrink: 0
                        }}
                      />
                    )}
                    <div>
                      <span style={{ fontSize: '2.1rem', fontWeight: '900', color: isDark ? 'var(--pms-yellow-text)' : '#111111', display: 'block', lineHeight: 1 }}>
                        {`0${idx + 1}`}
                      </span>
                      <span
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: '800',
                          background: isDark ? '#27272A' : '#111111',
                          color: isDark ? 'var(--pms-yellow-text)' : '#FFC72C',
                          padding: '0.35rem 0.85rem',
                          borderRadius: '999px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          marginTop: '0.35rem',
                          display: 'inline-block'
                        }}
                      >
                        {track.category}
                      </span>
                    </div>
                  </div>

                  {/* Right Details: Title + Body Text + Sub-Pills */}
                  <div style={{ flex: '1 1 360px', minWidth: '260px' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: isDark ? '#FFFFFF' : '#111111', marginBottom: '0.45rem', lineHeight: '1.2' }}>
                      {track.title}
                    </h3>
                    <p style={{ color: isDark ? '#D1D5DB' : '#374151', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem', maxWidth: '620px' }}>
                      {trackDesc}
                    </p>
                    {trackSkills.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                        {trackSkills.map((skill) => (
                          <span
                            key={skill}
                            style={{
                              background: isDark ? '#FFC72C' : '#111111',
                              color: isDark ? '#111111' : '#FFC72C',
                              padding: '0.35rem 0.85rem',
                              borderRadius: '999px',
                              fontSize: '0.82rem',
                              fontWeight: '800'
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* 2. Bottom: Perfectly Centered CTA Action Button (No Arrow) */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', paddingTop: '0.75rem', borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)' }}>
                  <Link
                    to={`/employer/search?track=${encodeURIComponent(track.title)}`}
                    style={{
                      background: isDark ? 'var(--pms-yellow)' : '#111111',
                      color: isDark ? 'var(--pms-black)' : '#FFC72C',
                      textDecoration: 'none',
                      fontWeight: '900',
                      fontSize: '0.9rem',
                      padding: '0.85rem 2.25rem',
                      borderRadius: '999px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      boxShadow: isDark ? '0 4px 14px rgba(255, 199, 44, 0.25)' : '0 4px 14px rgba(0, 0, 0, 0.20)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>{track.ctaText || 'View Graduates'}</span>
                  </Link>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

EngineeringTracks.propTypes = {
  badgeText: PropTypes.string,
  title: PropTypes.string,
  titleHighlight: PropTypes.string,
  subtitle: PropTypes.string,
  tracks: PropTypes.array
};
