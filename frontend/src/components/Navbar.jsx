import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, LogIn, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  return (
    <header style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Brand Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ background: 'var(--pms-black)', width: '42px', height: '42px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pms-yellow)' }}>
            <ShieldCheck size={26} />
          </div>
          <div>
            <span style={{ fontSize: '1.35rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>SKILL<span style={{ color: '#D97706' }}>BANK</span></span>
            <span style={{ fontSize: '0.65rem', display: 'block', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Jongo Hub Reactor</span>
          </div>
        </Link>

        <nav style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
          <Link to="/" style={{ color: location.pathname === '/' ? 'var(--pms-black)' : 'var(--text-muted)', textDecoration: 'none', fontWeight: location.pathname === '/' ? '700' : '500', fontSize: '0.95rem' }}>
            Home
          </Link>
          <Link to="/jobs" style={{ color: location.pathname === '/jobs' ? 'var(--pms-black)' : 'var(--text-muted)', textDecoration: 'none', fontWeight: location.pathname === '/jobs' ? '700' : '500', fontSize: '0.95rem' }}>
            Job Marketplace
          </Link>
          <Link to="/employer/search" style={{ color: location.pathname === '/employer/search' ? 'var(--pms-black)' : 'var(--text-muted)', textDecoration: 'none', fontWeight: location.pathname === '/employer/search' ? '700' : '500', fontSize: '0.95rem' }}>
            Talent Directory
          </Link>
          <Link to="/verify/JHR-2026-8942" style={{ color: location.pathname.startsWith('/verify') ? 'var(--pms-black)' : 'var(--text-muted)', textDecoration: 'none', fontWeight: location.pathname.startsWith('/verify') ? '700' : '500', fontSize: '0.95rem' }}>
            Verify Credential
          </Link>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link to="/auth" style={{ color: 'var(--pms-black)', textDecoration: 'none', padding: '0.75rem 1rem', fontSize: '0.95rem', borderRadius: '999px', transition: 'background 0.2s, color 0.2s', background: 'var(--pms-yellow-light)' }}>
            Login
          </Link>

          <Link to="/employer" style={{ color: 'var(--pms-black)', textDecoration: 'none', padding: '0.75rem 1rem', fontSize: '0.95rem', borderRadius: '999px', border: '1px solid var(--pms-yellow)', background: 'rgba(252, 191, 5, 0.12)', fontWeight: '700' }}>
            Request demo
          </Link>

          <Link to="/auth" style={{ color: 'var(--pms-black)', textDecoration: 'none', padding: '0.75rem 1.35rem', fontSize: '0.95rem', borderRadius: '999px', background: 'var(--pms-yellow)', fontWeight: '700', boxShadow: '0 12px 30px rgba(252, 191, 5, 0.22)' }}>
            Get started
          </Link>
        </div>

      </div>
    </header>
  );
}
