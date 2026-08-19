import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function FeatureFlowCard({
  badgeNumber = '01',
  categoryTag = 'Stakeholder',
  title = 'Card Title',
  description = 'Card description text...',
  skills = [],
  footerLabel = 'KEY BENEFIT',
  footerValue = 'Verified Reactor Capstones & Digital Credentials',
  ctaText = '',
  ctaLink = '',
  icon = null,
  theme = 'dark'
}) {
  const isDark = theme === 'dark';

  return (
    <div
      className="card-feature-flow"
      style={{
        background: isDark ? '#111111' : '#FFC72C',
        color: isDark ? '#FFFFFF' : '#111111',
        border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(17, 24, 39, 0.14)',
        boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.45)' : '0 12px 32px rgba(255, 199, 44, 0.22)',
        borderRadius: '3rem',
        padding: '2.5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '460px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          {icon ? (
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: isDark ? '#FFC72C' : '#111111', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src={icon} alt={title} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
            </div>
          ) : (
            <span style={{ fontSize: '2.8rem', fontWeight: '900', color: isDark ? 'var(--pms-yellow-text)' : '#111111', opacity: 0.9 }}>
              {badgeNumber}
            </span>
          )}

          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: '800',
              background: isDark ? '#27272A' : '#111111',
              color: isDark ? 'var(--pms-yellow-text)' : '#FFC72C',
              padding: '0.35rem 0.85rem',
              borderRadius: '999px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em'
            }}
          >
            {categoryTag}
          </span>
        </div>

        <h3 style={{ fontSize: '1.55rem', fontWeight: '900', color: isDark ? '#FFFFFF' : '#111111', marginBottom: '1rem', lineHeight: '1.2' }}>
          {title}
        </h3>

        <p style={{ color: isDark ? '#D1D5DB' : '#374151', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          {description}
        </p>

        {skills && skills.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
            {skills.map((skill) => (
              <span
                key={skill}
                style={{
                  background: isDark ? '#FFC72C' : '#111111',
                  color: isDark ? '#111111' : '#FFC72C',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: '800'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      <div style={{ borderTop: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)', paddingTop: '1rem' }}>
        {ctaLink ? (
          <Link
            to={ctaLink}
            style={{
              color: isDark ? 'var(--pms-yellow-text)' : '#111111',
              textDecoration: 'none',
              fontWeight: '900',
              fontSize: '0.92rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            {ctaText || 'View Graduates →'}
          </Link>
        ) : (
          <>
            <span style={{ fontSize: '0.82rem', fontWeight: '800', color: isDark ? 'var(--pms-yellow-text)' : '#111111' }}>
              {footerLabel}:
            </span>
            <p style={{ fontSize: '0.88rem', fontWeight: '600', color: isDark ? '#ECEFF4' : '#1F2937', marginTop: '0.25rem' }}>
              {footerValue}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

FeatureFlowCard.propTypes = {
  badgeNumber: PropTypes.string,
  categoryTag: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string),
  footerLabel: PropTypes.string,
  footerValue: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  icon: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'yellow'])
};
