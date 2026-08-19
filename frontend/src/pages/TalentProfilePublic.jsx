import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  MapPin,
  ExternalLink,
  MessageCircle,
  Cpu,
  ArrowLeft,
  Mail,
  CheckCircle2,
  Sparkles,
  QrCode
} from 'lucide-react';
import { mockGraduates } from '../data/mockData';

export default function TalentProfilePublic({ profileData = null }) {
  const { id } = useParams();
  const graduate = profileData || mockGraduates.find((g) => g.id === id) || mockGraduates[0];

  const skillMeters = [
    { skill: 'React & Frontend Architecture', pct: 95 },
    { skill: 'Node.js & Backend REST APIs', pct: 92 },
    { skill: 'PostgreSQL & Database Optimization', pct: 88 },
    { skill: 'Docker & Containerized Workflows', pct: 85 }
  ];

  return (
    <div style={{ background: '#F8F9FA', minHeight: '100vh', padding: '2rem 1.5rem 5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Back navigation */}
        <div style={{ marginBottom: '1.25rem' }}>
          <Link
            to="/employer/search"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#6B7280',
              textDecoration: 'none',
              fontSize: '0.88rem',
              fontWeight: '700',
              transition: 'color 0.2s ease'
            }}
          >
            <ArrowLeft size={16} /> Back to Graduate Showcase
          </Link>
        </div>

        {/* ── 1. Heroic Profile Header Card ── */}
        <div
          className="card-white"
          style={{
            borderRadius: '2rem',
            padding: '2rem 2.25rem',
            marginBottom: '2rem',
            borderTop: '6px solid var(--pms-yellow)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '1.75rem'
          }}
        >
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative' }}>
              <img
                src={graduate.photo}
                alt={graduate.fullName}
                style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '24px',
                  objectFit: 'cover',
                  border: '3px solid var(--pms-yellow)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
                }}
              />
              {graduate.verificationBadge && (
                <div
                  title="Official Reactor Verified Graduate"
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    right: '-4px',
                    background: '#111111',
                    color: 'var(--pms-yellow)',
                    borderRadius: '50%',
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #FFFFFF',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                  }}
                >
                  <ShieldCheck size={16} weight="bold" />
                </div>
              )}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                <h1 style={{ fontSize: '2.1rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)', margin: 0, lineHeight: 1.15 }}>
                  {graduate.fullName}
                </h1>
                {graduate.verificationBadge && (
                  <span className="badge-yellow" style={{ fontSize: '0.74rem', padding: '0.3rem 0.75rem' }}>
                    <CheckCircle2 size={13} /> REACTOR VERIFIED
                  </span>
                )}
              </div>

              <p style={{ color: '#D97706', fontSize: '1.1rem', fontWeight: '800', margin: '0.2rem 0' }}>
                {graduate.title}
              </p>

              <p style={{ color: '#6B7280', fontSize: '0.88rem', margin: '0.3rem 0 1rem', display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
                <MapPin size={14} /> {graduate.location} • Cohort {graduate.reactorCohort} • <strong style={{ color: 'var(--pms-black)' }}>{graduate.reactorTrack}</strong>
              </p>

              {/* Outreach Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={`https://wa.me/${graduate.contact?.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-yellow"
                  style={{ padding: '0.6rem 1.25rem', fontSize: '0.88rem' }}
                >
                  <MessageCircle size={16} /> Direct WhatsApp Outreach
                </a>

                {graduate.contact?.email && (
                  <a
                    href={`mailto:${graduate.contact?.email}`}
                    className="btn-outline-dark"
                    style={{ padding: '0.6rem 1.25rem', fontSize: '0.88rem' }}
                  >
                    <Mail size={16} /> Email Developer
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Top Badge */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end' }}>
            <div style={{ background: '#111111', color: 'var(--pms-yellow)', padding: '0.45rem 1rem', borderRadius: '999px', fontSize: '0.82rem', fontWeight: '800', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Sparkles size={14} />
              {graduate.matchScore}% Match Fit
            </div>
            <span style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: '600' }}>
              Jongo Hub Reactor Alumni
            </span>
          </div>
        </div>

        {/* ── 2. Two-Column Dashboard Showcase Grid ── */}
        <div className="grid-dashboard-2">

          {/* Left Column: Bio & Capstone Proof of Work */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Candidate Bio Card */}
            <div className="card-white" style={{ borderRadius: '1.5rem', padding: '1.75rem' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)', marginBottom: '0.85rem' }}>
                ENGINEERING PROFILE &amp; BIO
              </h2>
              <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                {graduate.bio}
              </p>
            </div>

            {/* Capstone Projects Card */}
            <div className="card-white" style={{ borderRadius: '1.5rem', padding: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)', margin: 0 }}>
                    CAPSTONE PROOF-OF-WORK
                  </h2>
                  <p style={{ color: '#6B7280', fontSize: '0.82rem', margin: '0.2rem 0 0' }}>
                    Mentor-audited repositories &amp; live production capstones
                  </p>
                </div>
                <span className="badge-yellow" style={{ fontSize: '0.72rem' }}>
                  AUDITED CODE
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {graduate.projects?.map((project, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '1.1rem 1.25rem',
                      background: '#F9FAFB',
                      borderRadius: '14px',
                      border: '1px solid #EAECF0',
                      borderLeft: '5px solid var(--pms-yellow)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.45rem' }}>
                      <h3 style={{ color: 'var(--pms-black)', fontSize: '1.05rem', fontWeight: '800', margin: 0 }}>
                        {project.title}
                      </h3>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            color: 'var(--pms-black)',
                            fontSize: '0.82rem',
                            fontWeight: '800',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                            background: '#FFFFFF',
                            border: '1px solid #E5E7EB',
                            padding: '0.25rem 0.65rem',
                            borderRadius: '8px'
                          }}
                        >
                          <ExternalLink size={13} /> View Code
                        </a>
                      )}
                    </div>

                    <p style={{ color: '#4B5563', fontSize: '0.88rem', marginBottom: '0.6rem', lineHeight: '1.55' }}>
                      {project.description}
                    </p>

                    {project.impact && (
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(245, 208, 0, 0.15)', color: 'var(--pms-black)', padding: '0.25rem 0.65rem', borderRadius: '6px', fontSize: '0.78rem', fontWeight: '800', marginBottom: '0.6rem' }}>
                        <Sparkles size={13} style={{ color: '#D97706' }} /> Impact: {project.impact}
                      </div>
                    )}

                    {project.techStack && (
                      <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginTop: '0.35rem' }}>
                        {project.techStack.map((t) => (
                          <span
                            key={t}
                            style={{
                              background: '#FFFFFF',
                              color: 'var(--pms-black)',
                              padding: '0.2rem 0.55rem',
                              borderRadius: '6px',
                              fontSize: '0.74rem',
                              fontWeight: '700',
                              border: '1px solid #E5E7EB'
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Skills, Compatibility Breakdown, Digital Credential */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Verified Tech Skills Card */}
            <div className="card-white" style={{ borderRadius: '1.5rem', padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
                VERIFIED TECHNICAL SKILLS
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {graduate.verifiedSkills?.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: '#111111',
                      color: 'var(--pms-yellow)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: '800',
                      letterSpacing: '0.02em'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Skill Mastery Module */}
            <div className="card-white" style={{ borderRadius: '1.5rem', padding: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.15rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)', margin: 0 }}>
                  CORE STACK PROFICIENCY
                </h3>
                <Cpu size={20} style={{ color: 'var(--pms-yellow)' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {skillMeters.map(({ skill, pct }) => (
                  <div key={skill}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem', fontWeight: '700', color: 'var(--pms-black)' }}>
                      <span>{skill}</span>
                      <span style={{ color: '#D97706', fontFamily: 'monospace', fontWeight: '800' }}>{pct}%</span>
                    </div>
                    <div style={{ height: '7px', background: '#EAECF0', borderRadius: '999px', overflow: 'hidden' }}>
                      <div style={{ width: `${pct}%`, height: '100%', background: 'linear-gradient(90deg, #FFC72C 0%, #D97706 100%)', borderRadius: '999px' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Digital Credential Cryptographic Badge */}
            {graduate.verificationBadge && (
              <div
                className="card-white"
                style={{
                  borderRadius: '1.5rem',
                  padding: '1.75rem',
                  borderTop: '6px solid var(--pms-yellow)',
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF5 100%)',
                  textAlign: 'center'
                }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#111111', color: 'var(--pms-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.85rem', boxShadow: '0 6px 16px rgba(0,0,0,0.1)' }}>
                  <Award size={30} />
                </div>
                <span className="badge-yellow" style={{ fontSize: '0.74rem', marginBottom: '0.65rem' }}>
                  JONGO HUB REACTOR VERIFIED
                </span>
                <h3 style={{ color: 'var(--pms-black)', fontSize: '1.1rem', fontWeight: '900', margin: '0 0 0.4rem' }}>
                  Digital Credential Issued
                </h3>
                <p style={{ color: '#6B7280', fontSize: '0.84rem', lineHeight: '1.55', margin: '0 0 1rem' }}>
                  Cryptographically verified capstone audit completed by a certified Jongo Hub senior mentor.
                </p>

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#F3F4F6', padding: '0.4rem 0.85rem', borderRadius: '8px', fontSize: '0.75rem', color: '#4B5563', fontFamily: 'monospace', fontWeight: '700' }}>
                  <QrCode size={14} /> SHA-256 Validated Hash
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

TalentProfilePublic.propTypes = {
  profileData: PropTypes.object
};
