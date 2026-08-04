import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, Award, MapPin, Mail, Phone, ExternalLink, Code, Globe, CheckCircle2, MessageCircle } from 'lucide-react';
import { mockTalents } from '../data/mockData';

export default function TalentProfilePublic() {
  const { id } = useParams();
  const talent = mockTalents.find(t => t.id === id) || mockTalents[0];

  return (
    <div style={{ maxWidth: '1080px', margin: '2rem auto', padding: '0 1.5rem' }}>
      
      {/* Profile Header Card */}
      <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <img src={talent.photo} alt={talent.fullName} style={{ width: '130px', height: '130px', borderRadius: '20px', objectFit: 'cover', border: '2px solid var(--emerald)' }} />
          
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              <h1 style={{ color: '#FFF', fontSize: '2rem' }}>{talent.fullName}</h1>
              {talent.verificationBadge && (
                <span className="badge-verified"><ShieldCheck size={14} /> Jongo Hub Verified</span>
              )}
            </div>

            <p style={{ color: 'var(--emerald-light)', fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>{talent.title}</p>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '1rem' }}>
              <MapPin size={16} /> {talent.location} • <span style={{ color: 'var(--amber)' }}>{talent.availability}</span>
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href={`https://wa.me/${talent.contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn-emerald" style={{ fontSize: '0.85rem' }}>
                <MessageCircle size={16} /> Contact via WhatsApp
              </a>
              <a href={talent.contact.github} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '0.85rem' }}>
                <Code size={16} /> GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Specs */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        
        {/* Left Column: Bio & Projects */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div className="glass-card" style={{ padding: '1.75rem' }}>
            <h3 style={{ color: '#FFF', marginBottom: '1rem', fontSize: '1.2rem' }}>About Developer</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{talent.bio}</p>
          </div>

          {/* Proof of Work / Capstones */}
          <div className="glass-card" style={{ padding: '1.75rem' }}>
            <h3 style={{ color: '#FFF', marginBottom: '1.25rem', fontSize: '1.2rem' }}>Verified Capstone & Projects</h3>
            {talent.projects.map((proj, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-glass)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h4 style={{ color: '#FFF', fontSize: '1.1rem' }}>{proj.title}</h4>
                  <a href={proj.githubUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--emerald-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem' }}>
                    Code Repo <ExternalLink size={14} />
                  </a>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>{proj.description}</p>
                <div style={{ fontSize: '0.8rem', color: 'var(--amber)', marginBottom: '0.75rem', fontWeight: '500' }}>Impact: {proj.impact}</div>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {proj.techStack.map(t => <span key={t} className="badge-skill">{t}</span>)}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Verified Skills & Credentials */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: '#FFF', marginBottom: '1rem', fontSize: '1.1rem' }}>Verified Hard Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {talent.verifiedSkills.map(skill => (
                <span key={skill} className="badge-verified" style={{ fontSize: '0.8rem' }}>
                  <CheckCircle2 size={12} /> {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: '#FFF', marginBottom: '1rem', fontSize: '1.1rem' }}>Digital Certificates</h3>
            {talent.certifications.map(cert => (
              <div key={cert.credentialCode} style={{ background: 'rgba(16,185,129,0.05)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-emerald)' }}>
                <div style={{ color: '#FFF', fontWeight: '600', fontSize: '0.9rem' }}>{cert.title}</div>
                <div style={{ color: 'var(--text-sub)', fontSize: '0.75rem', margin: '0.25rem 0' }}>Code: {cert.credentialCode}</div>
                <Link to={cert.verificationUrl} style={{ color: 'var(--emerald-light)', fontSize: '0.8rem', fontWeight: '600' }}>
                  Verify Official Stamp →
                </Link>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
