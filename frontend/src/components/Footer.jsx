import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: '#0D0D0D', color: '#9CA3AF', padding: '4rem 2rem 2rem', borderTop: '1px solid #1E1E1E' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        <div>
          <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', fontWeight: '900', marginBottom: '1rem' }}>SKILL<span style={{ color: 'var(--pms-yellow)' }}>BANK</span></h3>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>Jongo Hub's internal platform for showcasing verified Reactor graduates to partner employers. Proof of work over academic grades.</p>
        </div>

        <div>
          <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: '800', marginBottom: '1rem' }}>PLATFORM LINKS</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', padding: 0 }}>
            <li><Link to="/employer/search" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Graduate Directory</Link></li>
            <li><Link to="/jobs" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Job Marketplace</Link></li>
            <li><Link to="/verify/JHR-2026-8942" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Certificate Verification</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: '800', marginBottom: '1rem' }}>LEGAL & AUDIT</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', padding: 0 }}>
            <li><a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Terms of Service</a></li>
            <li><a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Privacy Policy</a></li>
            <li><a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Jongo Hub Academic Board</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: '800', marginBottom: '1rem' }}>HEADQUARTERS</h4>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>Jongo Hub Tech Accelerator, Silicon Mountain, Buea, Cameroon</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid #1E1E1E', fontSize: '0.8rem' }}>
        Jongo Hub Reactor Skill Bank © 2026 • Pantone 107 C Theme
      </div>
    </footer>
  );
}
