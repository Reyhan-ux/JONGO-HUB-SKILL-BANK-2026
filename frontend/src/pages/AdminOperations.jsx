import React, { useState } from 'react';
import { ShieldCheck, Award, CheckCircle2, XCircle, ExternalLink, QrCode } from 'lucide-react';
import { mockTalents, mockEmployers } from '../data/mockData';

export default function AdminOperations() {
  const [activeTab, setActiveTab] = useState('graduates');
  const [talentsList, setTalentsList] = useState(mockTalents);

  const handleIssueCredential = (talentId) => {
    setTalentsList(prev => prev.map(t => t.id === talentId ? {
      ...t,
      verificationBadge: true,
      verificationStatus: 'Verified_Graduate'
    } : t));
    alert(`Digital Credential generated & verified badge assigned to ${talentId}!`);
  };

  return (
    <div style={{ maxWidth: '1280px', margin: '2rem auto', padding: '0 1.5rem' }}>
      
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ color: '#FFF', fontSize: '2rem' }}>Admin Operations & Audit Panel</h1>
        <p style={{ color: 'var(--text-muted)' }}>Audit capstones, issue cryptographic credentials, and vet employers</p>
      </div>

      {/* Operations Tabs */}
      <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-glass)', paddingBottom: '0.75rem', marginBottom: '2rem' }}>
        <button onClick={() => setActiveTab('graduates')} style={{ background: 'transparent', border: 'none', color: activeTab === 'graduates' ? 'var(--emerald-light)' : 'var(--text-muted)', fontWeight: '600', cursor: 'pointer', borderBottom: activeTab === 'graduates' ? '2px solid var(--emerald)' : 'none', paddingBottom: '0.5rem' }}>
          Jongo Graduates Queue
        </button>
        <button onClick={() => setActiveTab('external')} style={{ background: 'transparent', border: 'none', color: activeTab === 'external' ? 'var(--emerald-light)' : 'var(--text-muted)', fontWeight: '600', cursor: 'pointer', borderBottom: activeTab === 'external' ? '2px solid var(--emerald)' : 'none', paddingBottom: '0.5rem' }}>
          External Dev Audit Queue
        </button>
        <button onClick={() => setActiveTab('employers')} style={{ background: 'transparent', border: 'none', color: activeTab === 'employers' ? 'var(--emerald-light)' : 'var(--text-muted)', fontWeight: '600', cursor: 'pointer', borderBottom: activeTab === 'employers' ? '2px solid var(--emerald)' : 'none', paddingBottom: '0.5rem' }}>
          Employer Vetting
        </button>
      </div>

      {activeTab === 'graduates' && (
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {talentsList.filter(t => t.talentCategory === 'JongoHub_Reactor_Graduate').map(t => (
            <div key={t.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <img src={t.photo} alt={t.fullName} style={{ width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover' }} />
                <div>
                  <h3 style={{ color: '#FFF' }}>{t.fullName}</h3>
                  <p style={{ color: 'var(--emerald-light)', fontSize: '0.85rem' }}>{t.title}</p>
                  <p style={{ color: 'var(--text-sub)', fontSize: '0.75rem' }}>Status: {t.verificationStatus}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                {t.verificationBadge ? (
                  <span className="badge-verified"><ShieldCheck size={14} /> Credential Active</span>
                ) : (
                  <button onClick={() => handleIssueCredential(t.id)} className="btn-emerald">
                    <Award size={16} /> Audit Capstone & Issue Certificate
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'external' && (
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {talentsList.filter(t => t.talentCategory === 'External_Developer').map(t => (
            <div key={t.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ color: '#FFF' }}>{t.fullName}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{t.title} • {t.location}</p>
                <p style={{ color: 'var(--amber)', fontSize: '0.75rem', marginTop: '0.25rem' }}>Verification Status: Unverified Community Developer</p>
              </div>
              <button onClick={() => handleIssueCredential(t.id)} className="btn-amber">
                Approve Verification Request
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'employers' && (
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {mockEmployers.map(emp => (
            <div key={emp.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ color: '#FFF' }}>{emp.companyName}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{emp.industry} • Contact: {emp.contactPerson} ({emp.email})</p>
              </div>
              <span className="badge-verified"><ShieldCheck size={14} /> Vetted & Verified</span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
