import React from 'react';
import { Link } from 'react-router-dom';

export default function CtaBanner() {
  return (
    <section style={{ background: 'var(--pms-black-deep)', color: '#FFFFFF', padding: '5rem 2rem', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <div style={{ position: 'absolute', top: '10%', left: '20%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.14)', filter: 'blur(70px)' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '20%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.12)', filter: 'blur(70px)' }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <span className="badge-yellow" style={{ fontSize: '0.85rem', marginBottom: '1.25rem', display: 'inline-flex' }}>JONGO HUB REACTOR GRADUATE SHOWCASE</span>
        <h2 style={{ fontSize: '3.2rem', fontWeight: '900', color: '#FFFFFF', fontFamily: 'var(--font-heading)', margin: '0.5rem 0 1.25rem', textTransform: 'uppercase', lineHeight: '1.1' }}>
          THE OFFICIAL <span style={{ color: 'var(--pms-yellow)' }}>SKILL BANK PORTAL</span>
        </h2>
        <p style={{ color: '#D1D5DB', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: '1.7' }}>
          Browse verified Reactor graduate profiles, partner with employers, and manage capstone credentials — all in one internal platform.
        </p>

        <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/employer/search" className="btn-yellow" style={{ padding: '1rem 2.25rem', fontSize: '1.1rem' }}>
            Browse Graduates
          </Link>
          <Link to="/auth" className="btn-black" style={{ padding: '1rem 2.25rem', fontSize: '1.1rem', border: '1px solid var(--pms-yellow)' }}>
            Sign In to Portal
          </Link>
        </div>
      </div>
    </section>
  );
}
