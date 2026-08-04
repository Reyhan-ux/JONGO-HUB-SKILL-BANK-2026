import React, { useState } from 'react';
import { Save, Plus, Trash2, ShieldCheck, Code, ExternalLink } from 'lucide-react';
import { mockTalents } from '../data/mockData';

export default function TalentProfileEditor() {
  const [activeTab, setActiveTab] = useState('bio');
  const [talent, setTalent] = useState(mockTalents[0]);

  return (
    <div style={{ maxWidth: '1000px', margin: '2rem auto', padding: '0 1.5rem' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ color: '#FFF', fontSize: '2rem' }}>Talent Profile Editor</h1>
          <p style={{ color: 'var(--text-muted)' }}>Manage bio, capstone portfolio projects, and verified digital certificates</p>
        </div>
        <button className="btn-emerald">
          <Save size={16} /> Save Changes
        </button>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-glass)', paddingBottom: '0.75rem', marginBottom: '2rem' }}>
        <button onClick={() => setActiveTab('bio')} style={{ background: 'transparent', border: 'none', color: activeTab === 'bio' ? 'var(--emerald-light)' : 'var(--text-muted)', fontWeight: '600', cursor: 'pointer', borderBottom: activeTab === 'bio' ? '2px solid var(--emerald)' : 'none', paddingBottom: '0.5rem' }}>
          Bio & Contact Info
        </button>
        <button onClick={() => setActiveTab('portfolio')} style={{ background: 'transparent', border: 'none', color: activeTab === 'portfolio' ? 'var(--emerald-light)' : 'var(--text-muted)', fontWeight: '600', cursor: 'pointer', borderBottom: activeTab === 'portfolio' ? '2px solid var(--emerald)' : 'none', paddingBottom: '0.5rem' }}>
          Capstone & Projects (1)
        </button>
        <button onClick={() => setActiveTab('certificates')} style={{ background: 'transparent', border: 'none', color: activeTab === 'certificates' ? 'var(--emerald-light)' : 'var(--text-muted)', fontWeight: '600', cursor: 'pointer', borderBottom: activeTab === 'certificates' ? '2px solid var(--emerald)' : 'none', paddingBottom: '0.5rem' }}>
          Digital Credentials
        </button>
      </div>

      {activeTab === 'bio' && (
        <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>Full Name</label>
            <input type="text" value={talent.fullName} onChange={(e) => setTalent({...talent, fullName: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', color: '#FFF' }} />
          </div>
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>Professional Title</label>
            <input type="text" value={talent.title} onChange={(e) => setTalent({...talent, title: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', color: '#FFF' }} />
          </div>
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>Bio Summary</label>
            <textarea rows={4} value={talent.bio} onChange={(e) => setTalent({...talent, bio: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', color: '#FFF', resize: 'vertical' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>WhatsApp Number</label>
              <input type="text" value={talent.contact.whatsapp} onChange={(e) => setTalent({...talent, contact: {...talent.contact, whatsapp: e.target.value}})} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', color: '#FFF' }} />
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>GitHub URL</label>
              <input type="text" value={talent.contact.github} onChange={(e) => setTalent({...talent, contact: {...talent.contact, github: e.target.value}})} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', color: '#FFF' }} />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'portfolio' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {talent.projects.map((p, i) => (
            <div key={i} className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ color: '#FFF' }}>{p.title}</h3>
                <button style={{ color: '#EF4444', background: 'transparent', border: 'none', cursor: 'pointer' }}><Trash2 size={18} /></button>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{p.description}</p>
              <span style={{ fontSize: '0.8rem', color: 'var(--amber)' }}>Quantifiable Impact: {p.impact}</span>
            </div>
          ))}
          <button className="btn-outline" style={{ alignSelf: 'flex-start' }}>
            <Plus size={16} /> Add Capstone Project
          </button>
        </div>
      )}

      {activeTab === 'certificates' && (
        <div className="glass-card" style={{ padding: '2rem' }}>
          <h3 style={{ color: '#FFF', marginBottom: '1rem' }}>Active Cryptographic Credentials</h3>
          {talent.certifications.map(c => (
            <div key={c.credentialCode} style={{ background: 'rgba(16,185,129,0.08)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-emerald)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ color: '#FFF' }}>{c.title}</h4>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.8rem' }}>Credential Code: {c.credentialCode}</p>
              </div>
              <span className="badge-verified"><ShieldCheck size={14} /> Issued & Valid</span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
