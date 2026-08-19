import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X, User, SignOut, ArrowRight } from '@phosphor-icons/react';
import hubLogo from '../assets/hublog.jpg';
import menuIcon from '../assets/menu.png';
import { useAuth } from '../context/AuthContext';

const defaultNavLinks = [
  { label: 'Home', path: '/' },
  { label: 'Job Marketplace', path: '/jobs' },
  { label: 'Graduate Directory', path: '/employer/search' }
];

export default function Navbar({
  brandTitle = 'SKILL',
  brandTitleHighlight = 'BANK',
  brandSubtitle = 'Jongo Hub Reactor',
  navLinks = defaultNavLinks,
  loginText = 'Log In',
  loginLink = '/auth',
  getStartedText = 'Get Started',
  getStartedLink = '/auth'
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <header style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
      <div className="navbar-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '1.25rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}
        >
          <img
            src={hubLogo}
            alt="Jongo Hub Logo"
            className="navbar-logo-img"
            style={{ width: '95px', height: '95px', borderRadius: 0, objectFit: 'contain', cursor: 'pointer', transition: 'all 0.2s ease' }}
          />
          <div>
            <span className="navbar-logo-title" style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', display: 'block', lineHeight: 1.05 }}>
              {brandTitle}<span style={{ color: 'var(--pms-yellow)' }}> {brandTitleHighlight}</span>
            </span>
            <span className="navbar-logo-subtitle" style={{ fontSize: '0.85rem', display: 'block', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.15rem' }}>
              {brandSubtitle}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="navbar-desktop-nav" style={{ gap: '2.5rem', alignItems: 'center', display: 'flex' }}>
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  color: isActive ? 'var(--pms-black)' : '#4B5563',
                  textDecoration: 'none',
                  fontWeight: isActive ? '800' : '600',
                  fontSize: '1.05rem',
                  transition: 'color 0.2s ease'
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action CTAs (Get Started pill & Solid Gray Login button) */}
        <div className="navbar-desktop-ctas" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                background: '#F3F4F6', border: '1px solid #E5E7EB',
                padding: '0.55rem 1.15rem', borderRadius: '999px',
                fontSize: '0.92rem', fontWeight: '700'
              }}>
                <User size={18} />
                <span>{user.fullName || user.email}</span>
                <span style={{
                  background: 'var(--pms-yellow)', color: 'var(--pms-black)',
                  padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.78rem',
                  textTransform: 'uppercase', fontWeight: '800'
                }}>
                  {user.role}
                </span>
              </div>
              <button
                onClick={handleLogout}
                title="Sign Out"
                style={{
                  background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#991B1B',
                  borderRadius: '999px', padding: '0.55rem 1.15rem',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem',
                  fontSize: '0.88rem', fontWeight: '700'
                }}
              >
                <SignOut size={16} />
                <span>Exit</span>
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {/* Solid Grey Login Pill */}
              <Link
                to={loginLink}
                state={{ initialTab: 'login' }}
                style={{
                  color: '#1F2937',
                  textDecoration: 'none',
                  padding: '0.75rem 1.65rem',
                  fontSize: '0.95rem',
                  borderRadius: '999px',
                  background: '#E5E7EB',
                  border: '1px solid #D1D5DB',
                  fontWeight: '800',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {loginText}
              </Link>

              {/* Primary Yellow "Get Started" Pill CTA */}
              <Link
                to={getStartedLink}
                state={{ initialTab: 'register' }}
                style={{
                  color: 'var(--pms-black)',
                  textDecoration: 'none',
                  padding: '0.75rem 1.75rem',
                  fontSize: '0.95rem',
                  borderRadius: '999px',
                  background: 'var(--pms-yellow)',
                  fontWeight: '900',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  boxShadow: '0 4px 14px rgba(255, 199, 44, 0.25)',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>{getStartedText}</span>
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
          style={{
            background: 'rgba(0,0,0,0.04)',
            border: '1px solid #E5E7EB',
            borderRadius: '12px',
            padding: '0.55rem 0.65rem',
            cursor: 'pointer',
            color: 'var(--pms-black)',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
        >
          {mobileOpen ? (
            <X size={24} weight="bold" />
          ) : (
            <img src={menuIcon} alt="Menu" style={{ width: '26px', height: '26px', objectFit: 'contain' }} />
          )}
        </button>

      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileOpen && (
        <div
          style={{
            background: '#FFFFFF',
            borderTop: '1px solid #F3F4F6',
            padding: '1rem 1.25rem 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  color: location.pathname === item.path ? 'var(--pms-black)' : '#4B5563',
                  textDecoration: 'none',
                  fontWeight: location.pathname === item.path ? '800' : '600',
                  fontSize: '0.95rem',
                  padding: '0.35rem 0',
                  borderBottom: '1px solid #F9FAFB'
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            {user ? (
              <button
                onClick={handleLogout}
                style={{
                  color: '#991B1B', textDecoration: 'none', padding: '0.5rem 1rem',
                  fontSize: '0.85rem', borderRadius: '999px', background: '#FEF2F2',
                  border: '1px solid #FCA5A5', fontWeight: '700', cursor: 'pointer'
                }}
              >
                Sign Out ({user.role})
              </button>
            ) : (
              <>
                <Link
                  to={loginLink}
                  state={{ initialTab: 'login' }}
                  style={{
                    color: '#1F2937',
                    textDecoration: 'none',
                    padding: '0.5rem 1rem',
                    fontSize: '0.85rem',
                    borderRadius: '999px',
                    background: '#E5E7EB',
                    border: '1px solid #D1D5DB',
                    fontWeight: '700'
                  }}
                >
                  {loginText}
                </Link>

                <Link
                  to={getStartedLink}
                  state={{ initialTab: 'register' }}
                  style={{
                    color: 'var(--pms-black)',
                    textDecoration: 'none',
                    padding: '0.5rem 1.15rem',
                    fontSize: '0.85rem',
                    borderRadius: '999px',
                    background: 'var(--pms-yellow)',
                    fontWeight: '800'
                  }}
                >
                  {getStartedText}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

Navbar.propTypes = {
  brandTitle: PropTypes.string,
  brandTitleHighlight: PropTypes.string,
  brandSubtitle: PropTypes.string,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ),
  loginText: PropTypes.string,
  loginLink: PropTypes.string,
  getStartedText: PropTypes.string,
  getStartedLink: PropTypes.string
};
