import React from 'react';
import {
  ShieldCheck,
  Lightning,
  QrCode,
  TrendUp,
  Star,
  GraduationCap,
  UsersThree,
  Code,
  LockKey
} from '@phosphor-icons/react';
import mobileLoginSvg from '../../assets/mobile-login-animate.svg';
import signUpAnimateSvg from '../../assets/sign-up-animate.svg';

import PropTypes from 'prop-types';

export default function AuthVisualCanvas({ tab = 'login' }) {
  return (
    <div className="auth-illustration-column">
      {/* Background Geometric Matrix Grid */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.38, zIndex: 0 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="authGridPattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#475569" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="0" cy="0" r="2.5" fill="#ffbc17" opacity="0.85" />
            <circle cx="48" cy="48" r="2" fill="#64748B" opacity="0.6" />
            <path d="M 22 24 L 26 24 M 24 22 L 24 26" stroke="#ffbc17" strokeWidth="1" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#authGridPattern)" />
      </svg>

      {/* Ambient Focal Spotlight */}
      <div
        style={{
          position: 'absolute',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 188, 23, 0.28) 0%, rgba(255, 188, 23, 0.08) 50%, rgba(0,0,0,0) 80%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Main Center Illustration & Floating Micro-Cards */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: '720px' }}>
        <img
          src={tab === 'login' ? mobileLoginSvg : signUpAnimateSvg}
          alt={tab === 'login' ? 'Login illustration' : 'Sign up illustration'}
          style={{
            width: '100%',
            maxHeight: '82vh',
            objectFit: 'contain',
            filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.14))',
            position: 'relative',
            zIndex: 2
          }}
        />

        {/* 1. Reactor Verified Profile */}
        <div className="auth-floating-card anim-float-a" style={{ top: '6%', left: '2%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#27272A', border: '1px solid rgba(255, 188, 23, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={22} weight="fill" style={{ color: 'var(--pms-yellow-text, #ffbc17)' }} />
            </div>
            <div>
              <div style={{ fontSize: '0.86rem', fontWeight: '800', color: '#ECEFF4', lineHeight: 1.2 }}>
                Reactor Verified
              </div>
              <div style={{ fontSize: '0.72rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.15rem' }}>
                <GraduationCap size={13} weight="bold" style={{ color: '#ffbc17' }} />
                SHA-256 Validated Hash
              </div>
            </div>
          </div>
        </div>

        {/* 2. AI Match Fit Engine */}
        <div className="auth-floating-card anim-float-b" style={{ bottom: '8%', right: '2%', minWidth: '220px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Lightning size={18} weight="fill" style={{ color: 'var(--pms-yellow-text, #ffbc17)' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#ECEFF4' }}>AI Match Fit</span>
            </div>
            <span style={{ fontSize: '0.84rem', fontWeight: '800', color: 'var(--pms-yellow-text, #ffbc17)' }}>98.4%</span>
          </div>
          <div style={{ width: '100%', height: '6px', background: '#27272A', borderRadius: '999px', overflow: 'hidden' }}>
            <div style={{ width: '98%', height: '100%', background: 'linear-gradient(90deg, #ffbc17 0%, #F59E0B 100%)', borderRadius: '999px' }} />
          </div>
          <div style={{ fontSize: '0.68rem', color: '#94A3B8', marginTop: '0.35rem' }}>
            Tech Stack & Domain Compatible
          </div>
        </div>

        {/* 3. Digital Credential QR Card */}
        <div className="auth-floating-card anim-float-d" style={{ top: '42%', left: '-2%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255, 188, 23, 0.12)', border: '1px solid rgba(255, 188, 23, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <QrCode size={18} weight="bold" style={{ color: 'var(--pms-yellow-text, #ffbc17)' }} />
            </div>
            <div>
              <span style={{ fontSize: '0.78rem', fontWeight: '800', color: '#ECEFF4', display: 'block' }}>Digital Credential</span>
              <span style={{ fontSize: '0.68rem', color: '#94A3B8' }}>Instant Public QR Verification</span>
            </div>
          </div>
        </div>

        {/* 4. Cohort Performance Badge */}
        <div className="auth-floating-card anim-float-e" style={{ top: '26%', right: '2%', padding: '0.45rem 0.8rem', borderRadius: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '7px', background: '#27272A', border: '1px solid rgba(255, 188, 23, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <TrendUp size={14} weight="bold" style={{ color: 'var(--pms-yellow-text, #ffbc17)' }} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: '800', color: '#ECEFF4' }}>Top 5% Cohort</span>
                <Star size={10} weight="fill" style={{ color: '#ffbc17' }} />
              </div>
              <span style={{ fontSize: '0.62rem', color: '#94A3B8', display: 'block', lineHeight: 1 }}>Quantifiable Impact</span>
            </div>
          </div>
        </div>

        {/* 5. Alumni Network Pill */}
        <div className="auth-floating-pill anim-float-b" style={{ bottom: '4%', left: '26%' }}>
          <UsersThree size={16} weight="bold" style={{ color: 'var(--pms-yellow-text, #ffbc17)' }} />
          <span>850+ Jongo Tech Alumni</span>
        </div>

        {/* 6. Verified Tech Stack Pill */}
        <div className="auth-floating-pill anim-float-a" style={{ bottom: '18%', left: '3%' }}>
          <Code size={15} weight="bold" style={{ color: 'var(--pms-yellow-text, #ffbc17)' }} />
          <span>React • Python • AI • FastAPI</span>
        </div>

        {/* 7. Security Audited Pill */}
        <div className="auth-floating-pill anim-float-c" style={{ top: '3%', right: '28%' }}>
          <LockKey size={14} weight="bold" style={{ color: 'var(--pms-yellow-text, #ffbc17)' }} />
          <span>Role-Based RBAC</span>
        </div>
      </div>
    </div>
  );
}

AuthVisualCanvas.propTypes = {
  tab: PropTypes.oneOf(['login', 'register'])
};
