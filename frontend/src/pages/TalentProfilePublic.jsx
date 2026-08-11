import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, Award, MapPin, ExternalLink, MessageCircle, Cpu } from 'lucide-react';
import { mockGraduates } from '../data/mockData';

export default function TalentProfilePublic() {
  const { id } = useParams();
  const graduate = mockGraduates.find(g => g.id === id) || mockGraduates[0];

  const skillMeters = [
    { skill: 'React & Frontend Architecture', pct: 95 },
    { skill: 'Node.js Microservices', pct: 92 },
    { skill: 'PostgreSQL & Schema Optimization', pct: 88 },
    { skill: 'Docker & Cloud Deployment', pct: 85 }
  ];

  return (
    <div style={{ background: '#F8F9FA', minHeight: '100vh', padding: '1.75rem 1.5rem 4rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Compact Profile Header Card */}
        <div className="card-white" style={{ marginBottom: '1.5rem', borderTop: '5px solid var(--pms-yellow)', display: 'flex', gap: '1.25rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <img
            src={graduate.photo}
            alt={graduate.fullName}
            style={{ width: '96px', height: '96px', borderRadius: '18px', objectFit: 'cover', border: '3px solid var(--pms-yellow)', flexShrink: 0 }}
          />

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
              <h1 style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)' }}>
                {graduate.fullName}
              </h1>
              {graduate.verificationBadge && (
                <span className="badge-yellow" style={{ fontSize: '0.72rem' }}>
                  <ShieldCheck size={12} /> JONGO HUB VERIFIED
                </span>
              )}
            </div>

            <p style={{ color: '#D97706', fontSize: '1rem', fontWeight: '700', marginBottom: '0.25rem' }}>{graduate.title}</p>
            <p style={{ color: '#667085', fontSize: '0.85rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <MapPin size={13} /> {graduate.location} · Cohort {graduate.reactorCohort} · {graduate.reactorTrack}
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <a href={`https://wa.me/${graduate.contact?.whatsapp}`} target="_blank" rel="noreferrer" className="btn-yellow" style={{ fontSize: '0.82rem', padding: '0.45rem 0.85rem' }}>
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a href={`mailto:${graduate.contact?.email}`} className="btn-outline-dark" style={{ fontSize: '0.82rem', padding: '0.45rem 0.85rem' }}>
                Email
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-end' }}>
            <span className="badge-black" style={{ fontSize: '0.72rem' }}>
              <Award size={12} /> {graduate.reactorTrack}
            </span>
            <span style={{ fontSize: '0.78rem', color: '#667085', fontWeight: '600' }}>
              Reactor Cohort {graduate.reactorCohort}
            </span>
          </div>
        </div>

        {/* 2-Column Profile Grid */}
        <div className="grid-dashboard-2">

          {/* Left: Bio, Capstone Projects */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Bio */}
            <div className="card-white">
              <h2 style={{ fontSize: '1.1rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)', marginBottom: '0.75rem' }}>ABOUT</h2>
              <p style={{ color: '#667085', fontSize: '0.88rem', lineHeight: '1.65' }}>{graduate.bio}</p>
            </div>

            {/* Capstone Projects */}
            <div className="card-white">
              <h2 style={{ fontSize: '1.1rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
                CAPSTONE PROOF-OF-WORK
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {graduate.projects?.map((project, i) => (
                  <div key={i} style={{ padding: '0.85rem 1rem', background: '#F8F9FA', borderRadius: '12px', border: '1px solid #EAECF0', borderLeft: '4px solid var(--pms-yellow)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <h3 style={{ color: 'var(--pms-black)', fontSize: '0.95rem', fontWeight: '800' }}>{project.title}</h3>
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--pms-black)', fontSize: '0.78rem', fontWeight: '700', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                          <ExternalLink size={12} /> GitHub
                        </a>
                      )}
                    </div>
                    <p style={{ color: '#667085', fontSize: '0.82rem', marginBottom: '0.4rem', lineHeight: '1.45' }}>{project.description}</p>
                    {project.impact && (
                      <p style={{ color: '#D97706', fontSize: '0.78rem', fontWeight: '700' }}>Impact: {project.impact}</p>
                    )}
                    {project.techStack && (
                      <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                        {project.techStack.map(t => (
                          <span key={t} style={{ background: 'rgba(245, 208, 0, 0.15)', color: 'var(--pms-black)', padding: '0.15rem 0.45rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: '700' }}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Skills, Verified Credentials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Skill Proficiency Module */}
            <div className="card-white">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)' }}>SKILL PROFICIENCY</h3>
                <Cpu size={18} style={{ color: 'var(--pms-yellow)' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {skillMeters.map(({ skill, pct }) => (
                  <div key={skill}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.25rem', fontWeight: '700', color: 'var(--pms-black)' }}>
                      <span>{skill}</span>
                      <span style={{ color: '#D97706', fontFamily: 'monospace' }}>{pct}%</span>
                    </div>
                    <div style={{ height: '6px', background: '#EAECF0', borderRadius: '999px', overflow: 'hidden' }}>
                      <div style={{ width: `${pct}%`, height: '100%', background: 'var(--pms-yellow)', borderRadius: '999px' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Tech Skills */}
            <div className="card-white">
              <h3 style={{ fontSize: '1.05rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)', marginBottom: '0.85rem' }}>
                VERIFIED TECHNICAL SKILLS
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {graduate.verifiedSkills?.map(skill => (
                  <span key={skill} style={{ background: '#F3F4F6', color: 'var(--pms-black)', padding: '0.25rem 0.6rem', borderRadius: '6px', fontSize: '0.78rem', fontWeight: '700', border: '1px solid #EAECF0' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Verified Credential Badge */}
            {graduate.verificationBadge && (
              <div className="card-white" style={{ borderTop: '4px solid var(--pms-yellow)', textAlign: 'center' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'var(--pms-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem' }}>
                  <ShieldCheck size={28} style={{ color: 'var(--pms-yellow)' }} />
                </div>
                <span className="badge-yellow" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>JONGO HUB REACTOR VERIFIED</span>
                <h3 style={{ color: 'var(--pms-black)', fontSize: '1rem', fontWeight: '800', marginBottom: '0.25rem' }}>Digital Credential Issued</h3>
                <p style={{ color: '#667085', fontSize: '0.8rem', lineHeight: '1.5' }}>
                  Cryptographically verified capstone audit completed by a certified Jongo Hub mentor.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
