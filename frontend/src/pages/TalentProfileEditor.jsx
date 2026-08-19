import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Save, Plus, Trash2, ShieldCheck, ArrowLeft } from 'lucide-react';
import { mockGraduates } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

export default function TalentProfileEditor() {
  const [activeTab, setActiveTab] = useState('bio');
  const { user } = useAuth();
  const [graduate, setGraduate] = useState(() => ({
    ...mockGraduates[0],
    fullName: user?.fullName || mockGraduates[0].fullName,
    email: user?.email || mockGraduates[0].email
  }));

  return (
    <div style={{ background: '#F8F9FA', minHeight: '100vh', padding: '1.75rem 1.5rem 4rem' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>

        {/* Compact Header Card */}
        <div className="card-white" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderLeft: '5px solid var(--pms-yellow)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
              <Link to="/dashboard" style={{ color: '#667085', fontSize: '0.8rem', fontWeight: '700', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                <ArrowLeft size={14} /> Dashboard
              </Link>
              <span style={{ color: '#D1D5DB' }}>›</span>
              <span className="badge-yellow" style={{ fontSize: '0.72rem' }}>PROFILE EDITOR</span>
            </div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)' }}>PROFILE EDITOR</h1>
            <p style={{ color: '#667085', fontSize: '0.88rem', marginTop: '0.15rem' }}>Manage your bio, capstone portfolio, and verified digital certificates</p>
          </div>
          <button className="btn-yellow" style={{ fontSize: '0.85rem', padding: '0.55rem 1.25rem' }}>
            <Save size={15} /> Save Changes
          </button>
        </div>

        {/* Tab Bar */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: '#FFFFFF', borderRadius: '12px', padding: '0.25rem', border: '1px solid #EAECF0', width: 'fit-content', flexWrap: 'wrap' }}>
          {[['bio', 'Bio & Contact Info'], ['portfolio', 'Capstone & Projects'], ['certificates', 'Digital Credentials']].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                background: activeTab === key ? 'var(--pms-yellow)' : 'transparent',
                border: 'none',
                color: activeTab === key ? 'var(--pms-black)' : '#667085',
                fontWeight: '700',
                cursor: 'pointer',
                padding: '0.55rem 1.1rem',
                borderRadius: '9px',
                fontSize: '0.85rem',
                transition: 'all 0.2s ease'
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {activeTab === 'bio' && (
          <div className="card-white" style={{ borderTop: '4px solid var(--pms-yellow)' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)', marginBottom: '1.25rem' }}>PERSONAL INFORMATION</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', color: '#667085', display: 'block', marginBottom: '0.3rem', fontWeight: '700' }}>Full Name</label>
                  <input type="text" value={graduate.fullName} onChange={(e) => setGraduate({...graduate, fullName: e.target.value})} style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '10px', background: '#F8F9FA', border: '1px solid #EAECF0', color: 'var(--pms-black)', outline: 'none', fontSize: '0.88rem', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: '#667085', display: 'block', marginBottom: '0.3rem', fontWeight: '700' }}>Professional Title</label>
                  <input type="text" value={graduate.title} onChange={(e) => setGraduate({...graduate, title: e.target.value})} style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '10px', background: '#F8F9FA', border: '1px solid #EAECF0', color: 'var(--pms-black)', outline: 'none', fontSize: '0.88rem', boxSizing: 'border-box' }} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: '0.8rem', color: '#667085', display: 'block', marginBottom: '0.3rem', fontWeight: '700' }}>Bio Summary</label>
                <textarea rows={3} value={graduate.bio} onChange={(e) => setGraduate({...graduate, bio: e.target.value})} style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '10px', background: '#F8F9FA', border: '1px solid #EAECF0', color: 'var(--pms-black)', outline: 'none', resize: 'vertical', fontSize: '0.88rem', boxSizing: 'border-box' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', color: '#667085', display: 'block', marginBottom: '0.3rem', fontWeight: '700' }}>WhatsApp Number</label>
                  <input type="text" value={graduate.contact.whatsapp} onChange={(e) => setGraduate({...graduate, contact: {...graduate.contact, whatsapp: e.target.value}})} style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '10px', background: '#F8F9FA', border: '1px solid #EAECF0', color: 'var(--pms-black)', outline: 'none', fontSize: '0.88rem', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: '#667085', display: 'block', marginBottom: '0.3rem', fontWeight: '700' }}>GitHub URL</label>
                  <input type="text" value={graduate.contact.github} onChange={(e) => setGraduate({...graduate, contact: {...graduate.contact, github: e.target.value}})} style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '10px', background: '#F8F9FA', border: '1px solid #EAECF0', color: 'var(--pms-black)', outline: 'none', fontSize: '0.88rem', boxSizing: 'border-box' }} />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {graduate.projects.map((p, i) => (
              <div key={i} className="card-white" style={{ borderLeft: '4px solid var(--pms-yellow)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <h3 style={{ color: 'var(--pms-black)', fontSize: '1.05rem', fontWeight: '800' }}>{p.title}</h3>
                  <button style={{ color: '#EF4444', background: 'transparent', border: 'none', cursor: 'pointer', padding: '0.35rem', borderRadius: '6px' }}><Trash2 size={16} /></button>
                </div>
                <p style={{ color: '#667085', fontSize: '0.85rem', marginBottom: '0.5rem', lineHeight: '1.5' }}>{p.description}</p>
                <p style={{ fontSize: '0.8rem', color: '#D97706', fontWeight: '700', marginBottom: '0.65rem' }}>Impact: {p.impact}</p>
                <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                  {p.techStack.map(t => (
                    <span key={t} style={{ background: 'rgba(245, 208, 0, 0.15)', color: 'var(--pms-black)', padding: '0.15rem 0.45rem', borderRadius: '4px', fontSize: '0.72rem', fontWeight: '700' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
            <button className="btn-outline-dark" style={{ alignSelf: 'flex-start', fontSize: '0.85rem', padding: '0.5rem 1rem' }}>
              <Plus size={14} /> Add Capstone Project
            </button>
          </div>
        )}

        {activeTab === 'certificates' && (
          <div className="card-white" style={{ borderTop: '4px solid var(--pms-yellow)' }}>
            <h3 style={{ color: 'var(--pms-black)', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '900', fontFamily: 'var(--font-heading)' }}>ACTIVE CRYPTOGRAPHIC CREDENTIALS</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {graduate.certifications.map(c => (
                <div key={c.credentialCode} style={{ background: '#F8F9FA', padding: '0.85rem 1rem', borderRadius: '12px', border: '1px solid #EAECF0', borderLeft: '4px solid var(--pms-yellow)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div>
                    <h4 style={{ color: 'var(--pms-black)', fontSize: '0.95rem', fontWeight: '800' }}>{c.title}</h4>
                    <p style={{ color: '#667085', fontSize: '0.78rem', marginTop: '0.15rem', fontFamily: 'monospace' }}>Code: {c.credentialCode}</p>
                    <Link to={c.verificationUrl} style={{ color: '#D97706', fontSize: '0.78rem', fontWeight: '700', textDecoration: 'none', marginTop: '0.2rem', display: 'inline-block' }}>
                      View Certificate →
                    </Link>
                  </div>
                  <span className="badge-yellow" style={{ fontSize: '0.7rem' }}><ShieldCheck size={12} /> Issued &amp; Valid</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
