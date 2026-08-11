import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, LogIn, UserPlus } from 'lucide-react';
import {
  STAKEHOLDER_ROLES,
  STAKEHOLDER_LABELS,
  STAKEHOLDER_DASHBOARD_ROUTES,
  REGISTERABLE_ROLES,
  LOGIN_ROLES,
} from '../data/stakeholders';

const ROLE_ICONS = {
  [STAKEHOLDER_ROLES.ADMIN]: '',
  [STAKEHOLDER_ROLES.GRADUATE]: '',
  [STAKEHOLDER_ROLES.MENTOR]: '',
  [STAKEHOLDER_ROLES.EMPLOYER]: '',
};

export default function Auth() {
  const [tab, setTab] = useState('login');
  const [role, setRole] = useState(STAKEHOLDER_ROLES.GRADUATE);
  const navigate = useNavigate();

  const availableRoles = tab === 'login' ? LOGIN_ROLES : REGISTERABLE_ROLES;

  const handleAuth = (e) => {
    e.preventDefault();
    navigate(STAKEHOLDER_DASHBOARD_ROUTES[role]);
  };

  return (
    <div style={{ background: '#F8F9FA', minHeight: '100vh', padding: '3rem 1rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <div style={{ maxWidth: '480px', width: '100%' }}>

        {/* Platform Identity Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '16px', background: 'var(--pms-black)', color: 'var(--pms-yellow)', marginBottom: '0.85rem' }}>
            <ShieldCheck size={30} />
          </div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)' }}>
            SKILL<span style={{ color: '#F5D000' }}> BANK</span>
          </h1>
          <p style={{ color: '#667085', fontSize: '0.85rem', marginTop: '0.2rem' }}>Jongo Hub Reactor — Internal Graduate Showcase Platform</p>
        </div>

        {/* Auth Card */}
        <div className="card-white" style={{ borderTop: '5px solid var(--pms-yellow)' }}>

          {/* Login / Register Toggle */}
          <div style={{ display: 'flex', background: '#F3F4F6', borderRadius: '10px', padding: '0.25rem', marginBottom: '1.5rem' }}>
            <button
              onClick={() => { setTab('login'); setRole(STAKEHOLDER_ROLES.GRADUATE); }}
              style={{
                flex: 1, padding: '0.6rem', border: 'none',
                background: tab === 'login' ? 'var(--pms-yellow)' : 'transparent',
                color: tab === 'login' ? 'var(--pms-black)' : '#667085',
                fontWeight: '700', borderRadius: '8px', cursor: 'pointer',
                fontSize: '0.9rem', fontFamily: 'var(--font-body)', transition: 'all 0.2s ease'
              }}
            >
              <LogIn size={14} style={{ display: 'inline', marginRight: '0.35rem', verticalAlign: 'middle' }} />
              Sign In
            </button>
            <button
              onClick={() => { setTab('register'); setRole(STAKEHOLDER_ROLES.GRADUATE); }}
              style={{
                flex: 1, padding: '0.6rem', border: 'none',
                background: tab === 'register' ? 'var(--pms-yellow)' : 'transparent',
                color: tab === 'register' ? 'var(--pms-black)' : '#667085',
                fontWeight: '700', borderRadius: '8px', cursor: 'pointer',
                fontSize: '0.9rem', fontFamily: 'var(--font-body)', transition: 'all 0.2s ease'
              }}
            >
              <UserPlus size={14} style={{ display: 'inline', marginRight: '0.35rem', verticalAlign: 'middle' }} />
              Request Access
            </button>
          </div>

          <h2 style={{ color: 'var(--pms-black)', fontSize: '1.45rem', fontWeight: '900', marginBottom: '0.35rem', fontFamily: 'var(--font-heading)' }}>
            {tab === 'login' ? 'WELCOME BACK' : 'JOIN SKILL BANK'}
          </h2>
          <p style={{ color: '#667085', fontSize: '0.83rem', marginBottom: '1.35rem' }}>
            {tab === 'login'
              ? 'Sign in to your stakeholder portal below'
              : 'Access is limited to Jongo Hub Reactor graduates, mentors, and partner employers'}
          </p>

          <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Role Selector */}
            <div>
              <label style={{ fontSize: '0.8rem', color: '#667085', display: 'block', marginBottom: '0.45rem', fontWeight: '700' }}>
                {tab === 'login' ? 'Signing in as' : 'Registering as'}
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                {availableRoles.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    style={{
                      padding: '0.7rem 0.5rem',
                      borderRadius: '10px',
                      border: role === r ? '2px solid var(--pms-yellow)' : '1px solid #EAECF0',
                      background: role === r ? 'rgba(245, 208, 0, 0.12)' : '#FFFFFF',
                      color: role === r ? 'var(--pms-black)' : '#667085',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {ROLE_ICONS[r]} {STAKEHOLDER_LABELS[r]}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: '#667085', display: 'block', marginBottom: '0.3rem', fontWeight: '700' }}>Email Address</label>
              <input
                type="email"
                placeholder="you@jongohub.org"
                required
                style={{
                  width: '100%', padding: '0.7rem 0.9rem', borderRadius: '10px',
                  background: '#F8F9FA', border: '1px solid #EAECF0',
                  color: 'var(--pms-black)', outline: 'none', fontSize: '0.88rem',
                  fontFamily: 'var(--font-body)', boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: '#667085', display: 'block', marginBottom: '0.3rem', fontWeight: '700' }}>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                required
                style={{
                  width: '100%', padding: '0.7rem 0.9rem', borderRadius: '10px',
                  background: '#F8F9FA', border: '1px solid #EAECF0',
                  color: 'var(--pms-black)', outline: 'none', fontSize: '0.88rem',
                  fontFamily: 'var(--font-body)', boxSizing: 'border-box'
                }}
              />
            </div>

            <button type="submit" className="btn-yellow" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem', marginTop: '0.35rem', fontSize: '0.95rem' }}>
              {tab === 'login' ? <LogIn size={16} /> : <UserPlus size={16} />}
              {tab === 'login' ? `Sign In as ${STAKEHOLDER_LABELS[role]}` : `Request ${STAKEHOLDER_LABELS[role]} Access`}
            </button>
          </form>

        </div>

        <p style={{ textAlign: 'center', color: '#667085', fontSize: '0.78rem', marginTop: '1.25rem' }}>
          Jongo Hub Skill Bank is an exclusive platform for Reactor programme alumni and vetted partner employers.
        </p>

      </div>
    </div>
  );
}
