import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function CtaBanner({
  badgeText = 'JONGO HUB REACTOR GRADUATE SHOWCASE',
  title = 'THE OFFICIAL',
  titleHighlight = 'SKILL BANK PORTAL',
  subtitle = 'Browse verified Reactor graduate profiles, partner with employers, and manage capstone credentials — all in one internal platform.',
  primaryBtnText = 'Browse Graduates',
  primaryBtnLink = '/employer/search',
  secondaryBtnText = 'Sign In to Portal',
  secondaryBtnLink = '/auth',
  initialTab = 'login'
}) {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #0A0A0A 0%, #141414 100%)',
        color: '#FFFFFF',
        padding: '5.5rem 2rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}
    >
      {/* ── 1. Cyber Matrix Geometric Grid ── */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.25, zIndex: 0 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="ctaGridPattern" width="52" height="52" patternUnits="userSpaceOnUse">
            <path d="M 52 0 L 0 0 0 52" fill="none" stroke="#334155" strokeWidth="0.75" strokeDasharray="3 3" />
            <circle cx="0" cy="0" r="2" fill="#FFC72C" opacity="0.85" />
            <circle cx="52" cy="52" r="1.5" fill="#64748B" opacity="0.4" />
            <path d="M 24 26 L 28 26 M 26 24 L 26 28" stroke="#FFC72C" strokeWidth="0.8" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ctaGridPattern)" />
      </svg>

      {/* ── 2. Intense Multi-Point Radial Glow Spotlights ── */}
      <div style={{ position: 'absolute', top: '10%', left: '15%', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.28) 0%, rgba(255, 199, 44, 0.08) 50%, rgba(0,0,0,0) 80%)', filter: 'blur(55px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '15%', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.25) 0%, rgba(255, 199, 44, 0.06) 50%, rgba(0,0,0,0) 80%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.15) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(65px)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: '920px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(255, 199, 44, 0.12)', border: '1px solid rgba(255, 199, 44, 0.35)', padding: '0.4rem 1rem', borderRadius: '999px', marginBottom: '1.5rem' }}>
          <Sparkles size={14} style={{ color: 'var(--pms-yellow)' }} />
          <span style={{ color: 'var(--pms-yellow)', fontSize: '0.82rem', fontWeight: '800', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {badgeText}
          </span>
        </div>

        <h2 style={{ fontSize: '3.4rem', fontWeight: '900', color: '#FFFFFF', fontFamily: 'var(--font-heading)', margin: '0.5rem 0 1.25rem', textTransform: 'uppercase', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
          {title} <span style={{ color: 'var(--pms-yellow)' }}>{titleHighlight}</span>
        </h2>

        <p style={{ color: '#D1D5DB', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: '1.75', maxWidth: '760px', margin: '0 auto 2.5rem' }}>
          {subtitle}
        </p>

        <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to={primaryBtnLink}
            className="btn-yellow"
            style={{
              padding: '1.1rem 2.5rem',
              fontSize: '1.05rem',
              fontWeight: '800',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            {primaryBtnText} <ArrowRight size={18} />
          </Link>
          <Link
            to={secondaryBtnLink}
            state={{ initialTab }}
            className="btn-black"
            style={{
              padding: '1.1rem 2.5rem',
              fontSize: '1.05rem',
              fontWeight: '800',
              border: '1.5px solid var(--pms-yellow)',
              background: 'rgba(10, 10, 10, 0.95)'
            }}
          >
            {secondaryBtnText}
          </Link>
        </div>
      </div>
    </section>
  );
}

CtaBanner.propTypes = {
  badgeText: PropTypes.string,
  title: PropTypes.string,
  titleHighlight: PropTypes.string,
  subtitle: PropTypes.string,
  primaryBtnText: PropTypes.string,
  primaryBtnLink: PropTypes.string,
  secondaryBtnText: PropTypes.string,
  secondaryBtnLink: PropTypes.string,
  initialTab: PropTypes.oneOf(['login', 'register'])
};
