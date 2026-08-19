import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  Sparkle,
  WarningCircle,
  CaretDown,
  Eye,
  EyeSlash,
  CircleNotch
} from '@phosphor-icons/react';
import {
  STAKEHOLDER_ROLES,
  STAKEHOLDER_LABELS,
  STAKEHOLDER_DASHBOARD_ROUTES,
  REGISTERABLE_ROLES,
  LOGIN_ROLES
} from '../../data/stakeholders';
import { useAuth } from '../../context/AuthContext';
import hubLogo from '../../assets/hublog.jpg';

export default function AuthCard({ initialTab = 'login', onTabChange = () => {} }) {
  const [tab, setTab] = useState(initialTab);
  const [role, setRole] = useState(STAKEHOLDER_ROLES.GRADUATE);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState('');

  const { login, signup, loading } = useAuth();
  const navigate = useNavigate();

  const handleTabSwitch = (newTab) => {
    setTab(newTab);
    setFormError('');
    onTabChange(newTab);
  };

  const availableRoles = tab === 'login' ? LOGIN_ROLES : REGISTERABLE_ROLES;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    try {
      let response;
      if (tab === 'register') {
        response = await signup({ fullName, email, password, role });
      } else {
        response = await login({ email, password });
      }

      const activeUserRole = response?.user?.role || role;
      const targetRoute = STAKEHOLDER_DASHBOARD_ROUTES[activeUserRole] || '/';
      navigate(targetRoute);
    } catch (err) {
      setFormError(err.message || 'Authentication failed. Please check your credentials.');
    }
  };

  return (
    <div className="auth-form-column">
      <div style={{ width: '100%', maxWidth: '480px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Logo & Brand Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem', width: '100%' }}>
          <img src={hubLogo} alt="Jongo Hub Logo" style={{ width: '88px', height: '88px', objectFit: 'contain' }} />
          <div>
            <span style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em', display: 'block', lineHeight: 1.1 }}>
              SKILL<span style={{ color: 'var(--pms-yellow-text, #ffbc17)' }}> BANK</span>
            </span>
            <span style={{ fontSize: '0.9rem', display: 'block', color: '#94A3B8', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.2rem' }}>
              Jongo Hub Reactor
            </span>
          </div>
        </div>

        {/* Elevated Dark Card */}
        <div className="auth-card">

          {/* Jongo Hub Brand Pill */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#27272A', color: 'var(--pms-yellow-text, #ffbc17)', border: '2.5px solid rgba(255, 189, 23, 0.41)', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-pill)', fontSize: '0.76rem', fontWeight: '800', letterSpacing: '0.06em' }}>
              <Sparkle size={14} weight="fill" /> JONGO HUB REACTOR
            </span>
          </div>

          {/* Quick Segmented Tabs */}
          <div className="auth-tabs-toggle">
            <button
              type="button"
              className={`auth-tab-btn ${tab === 'login' ? 'active' : ''}`}
              onClick={() => handleTabSwitch('login')}
            >
              Log In
            </button>
            <button
              type="button"
              className={`auth-tab-btn ${tab === 'register' ? 'active' : ''}`}
              onClick={() => handleTabSwitch('register')}
            >
              Sign Up
            </button>
          </div>

          {/* Title & Subtitle */}
          <h1 style={{ fontSize: '2rem', fontWeight: '900', color: '#ECEFF4', fontFamily: 'var(--font-heading)', marginBottom: '0.25rem', lineHeight: 1.15 }}>
            {tab === 'login' ? 'Welcome back' : 'Create your account'}
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
            {tab === 'login' ? 'Please enter your details to sign in' : 'Fill in your details below to get started'}
          </p>

          {/* Error Banner */}
          {formError && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              background: '#450A0A', border: '1px solid #991B1B', color: '#FCA5A5',
              padding: '0.75rem 1rem', borderRadius: '10px', fontSize: '0.88rem', marginBottom: '1rem'
            }}>
              <WarningCircle size={18} weight="fill" style={{ flexShrink: 0 }} />
              <span>{formError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>

            {/* Role Dropdown */}
            <div>
              <label style={{ fontSize: '0.9rem', color: '#D8DEE9', display: 'block', marginBottom: '0.4rem', fontWeight: '700', fontFamily: 'var(--font-body)' }}>
                {tab === 'login' ? 'Logging in as' : 'Signing up as'}
              </label>
              <div style={{ position: 'relative' }}>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="auth-input-field"
                  style={{
                    paddingRight: '2.5rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                  }}
                >
                  {availableRoles.map((r) => (
                    <option key={r} value={r} style={{ fontWeight: '600', color: '#ECEFF4', backgroundColor: '#18181B' }}>
                      {STAKEHOLDER_LABELS[r]}
                    </option>
                  ))}
                </select>
                <CaretDown size={18} weight="bold" style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#CBD5E1' }} />
              </div>
            </div>

            {/* Full Name for Registration */}
            {tab === 'register' && (
              <div>
                <label style={{ fontSize: '0.9rem', color: '#D8DEE9', display: 'block', marginBottom: '0.35rem', fontWeight: '600' }}>Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Alex Morgan"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="auth-input-field"
                />
              </div>
            )}

            {/* Email Field */}
            <div>
              <label style={{ fontSize: '0.9rem', color: '#D8DEE9', display: 'block', marginBottom: '0.35rem', fontWeight: '600' }}>Email address</label>
              <input
                type="email"
                placeholder="you@jongohub.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="auth-input-field"
              />
            </div>

            {/* Password Field */}
            <div>
              <label style={{ fontSize: '0.9rem', color: '#D8DEE9', display: 'block', marginBottom: '0.35rem', fontWeight: '600' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="auth-input-field"
                  style={{ paddingRight: '2.75rem' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#CBD5E1',
                    cursor: 'pointer',
                    padding: '0.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '6px'
                  }}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeSlash size={18} weight="bold" /> : <Eye size={18} weight="bold" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="auth-submit-btn"
            >
              {loading && <CircleNotch size={18} weight="bold" className="animate-spin" style={{ marginRight: '0.4rem' }} />}
              {loading ? 'Processing...' : (tab === 'login' ? 'Log in' : 'Sign up')}
            </button>
          </form>

          {/* Toggle Footer Link */}
          <p style={{ color: '#CBD5E1', fontSize: '0.92rem', marginTop: '1.25rem', textAlign: 'center' }}>
            {tab === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <span
              onClick={() => handleTabSwitch(tab === 'login' ? 'register' : 'login')}
              style={{ color: 'var(--pms-yellow-text, #ffbc17)', fontWeight: '700', cursor: 'pointer', textDecoration: 'underline' }}
            >
              {tab === 'login' ? 'Sign up' : 'Log in'}
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}

AuthCard.propTypes = {
  initialTab: PropTypes.oneOf(['login', 'register']),
  onTabChange: PropTypes.func
};
