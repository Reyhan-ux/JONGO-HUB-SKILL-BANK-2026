import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from '@phosphor-icons/react';
import hubLogo from '../assets/hublog.jpg';
import menuIcon from '../assets/menu.png';

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Automatically close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
      <div className="navbar-container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
        >
          <img src={hubLogo} alt="Jongo Hub Logo" className="navbar-logo-img" style={{ width: '100px', height: '100px', borderRadius: '0', objectFit: 'contain', cursor: 'pointer', transition: 'all 0.2s ease' }} />
          <div>
            <span className="navbar-logo-title" style={{ fontSize: '1.85rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', display: 'block' }}>
              SKILL<span style={{ color: '#F5D000' }}> BANK</span>
            </span>
            <span className="navbar-logo-subtitle" style={{ fontSize: '0.85rem', display: 'block', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Jongo Hub Reactor
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="navbar-desktop-nav" style={{ gap: '1.5rem', alignItems: 'center', display: 'flex' }}>
          <Link to="/" style={{ color: location.pathname === '/' ? 'var(--pms-black)' : 'var(--text-muted)', textDecoration: 'none', fontWeight: location.pathname === '/' ? '800' : '600', fontSize: '0.95rem' }}>
            Home
          </Link>
          <Link to="/jobs" style={{ color: location.pathname === '/jobs' ? 'var(--pms-black)' : 'var(--text-muted)', textDecoration: 'none', fontWeight: location.pathname === '/jobs' ? '800' : '600', fontSize: '0.95rem' }}>
            Job Marketplace
          </Link>
          <Link to="/employer/search" style={{ color: location.pathname === '/employer/search' ? 'var(--pms-black)' : 'var(--text-muted)', textDecoration: 'none', fontWeight: location.pathname === '/employer/search' ? '800' : '600', fontSize: '0.95rem' }}>
            Graduate Directory
          </Link>
        </nav>

        {/* Stakeholder Portals Quick Switcher & CTAs */}
        <div className="navbar-desktop-ctas" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ display: 'flex', gap: '0.35rem', background: '#F3F4F6', padding: '0.25rem', borderRadius: 'var(--radius-pill)', border: '1px solid #E5E7EB' }}>
            <Link to="/dashboard" style={{ color: location.pathname.startsWith('/dashboard') || location.pathname === '/profile' ? 'var(--pms-black)' : 'var(--text-muted)', background: location.pathname.startsWith('/dashboard') ? 'var(--pms-yellow)' : 'transparent', textDecoration: 'none', padding: '0.35rem 0.65rem', fontSize: '0.78rem', borderRadius: 'var(--radius-pill)', fontWeight: '700', transition: 'all 0.2s ease' }}>
              Graduate
            </Link>
            <Link to="/mentor" style={{ color: location.pathname.startsWith('/mentor') ? 'var(--pms-black)' : 'var(--text-muted)', background: location.pathname.startsWith('/mentor') ? 'var(--pms-yellow)' : 'transparent', textDecoration: 'none', padding: '0.35rem 0.65rem', fontSize: '0.78rem', borderRadius: 'var(--radius-pill)', fontWeight: '700', transition: 'all 0.2s ease' }}>
              Mentor
            </Link>
            <Link to="/employer" style={{ color: location.pathname.startsWith('/employer') && location.pathname !== '/employer/search' ? 'var(--pms-black)' : 'var(--text-muted)', background: location.pathname.startsWith('/employer') && location.pathname !== '/employer/search' ? 'var(--pms-yellow)' : 'transparent', textDecoration: 'none', padding: '0.35rem 0.65rem', fontSize: '0.78rem', borderRadius: 'var(--radius-pill)', fontWeight: '700', transition: 'all 0.2s ease' }}>
              Employer
            </Link>
            <Link to="/admin" style={{ color: location.pathname.startsWith('/admin') ? 'var(--pms-black)' : 'var(--text-muted)', background: location.pathname.startsWith('/admin') ? 'var(--pms-yellow)' : 'transparent', textDecoration: 'none', padding: '0.35rem 0.65rem', fontSize: '0.78rem', borderRadius: 'var(--radius-pill)', fontWeight: '700', transition: 'all 0.2s ease' }}>
              Admin
            </Link>
          </div>

          <Link to="/auth" style={{ color: 'var(--pms-black)', textDecoration: 'none', padding: '0.45rem 0.95rem', fontSize: '0.85rem', borderRadius: 'var(--radius-pill)', background: 'var(--pms-yellow)', fontWeight: '800', boxShadow: '0 4px 14px var(--pms-yellow-glow)' }}>
            Sign In
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
          style={{
            background: 'rgba(0,0,0,0.04)',
            border: '1px solid #E5E7EB',
            borderRadius: '10px',
            padding: '0.4rem 0.5rem',
            cursor: 'pointer',
            color: 'var(--pms-black)',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
        >
          {mobileOpen ? (
            <X size={20} weight="bold" />
          ) : (
            <img src={menuIcon} alt="Menu" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
          )}
        </button>

      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileOpen && (
        <div
          style={{
            background: '#FFFFFF',
            borderTop: '1px solid #F3F4F6',
            padding: '0.75rem 1.15rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            <Link
              to="/"
              style={{
                color: location.pathname === '/' ? 'var(--pms-black)' : 'var(--text-muted)',
                textDecoration: 'none',
                fontWeight: location.pathname === '/' ? '800' : '600',
                fontSize: '0.92rem',
                padding: '0.3rem 0',
                borderBottom: '1px solid #F9FAFB'
              }}
            >
              Home
            </Link>
            <Link
              to="/jobs"
              style={{
                color: location.pathname === '/jobs' ? 'var(--pms-black)' : 'var(--text-muted)',
                textDecoration: 'none',
                fontWeight: location.pathname === '/jobs' ? '800' : '600',
                fontSize: '0.92rem',
                padding: '0.3rem 0',
                borderBottom: '1px solid #F9FAFB'
              }}
            >
              Job Marketplace
            </Link>
            <Link
              to="/employer/search"
              style={{
                color: location.pathname === '/employer/search' ? 'var(--pms-black)' : 'var(--text-muted)',
                textDecoration: 'none',
                fontWeight: location.pathname === '/employer/search' ? '800' : '600',
                fontSize: '0.92rem',
                padding: '0.3rem 0',
                borderBottom: '1px solid #F9FAFB'
              }}
            >
              Graduate Directory
            </Link>
          </nav>

          <div style={{ display: 'flex', gap: '0.65rem', marginTop: '0.4rem', justifyContent: 'flex-start' }}>
            <Link
              to="/auth"
              style={{
                color: 'var(--pms-black)',
                textDecoration: 'none',
                padding: '0.45rem 1rem',
                fontSize: '0.82rem',
                borderRadius: '999px',
                border: '1.2px solid var(--pms-yellow)',
                background: 'rgba(252, 190, 5, 0.29)',
                fontWeight: '700',
                width: 'fit-content',
                display: 'inline-block'
              }}
            >
              Login
            </Link>

            <Link
              to="/auth"
              style={{
                color: 'var(--pms-black)',
                textDecoration: 'none',
                padding: '0.45rem 1rem',
                fontSize: '0.82rem',
                borderRadius: '999px',
                background: '#F5D000',
                fontWeight: '700',
                boxShadow: '0 4px 14px rgba(252, 191, 5, 0.18)',
                width: 'fit-content',
                display: 'inline-block'
              }}
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
