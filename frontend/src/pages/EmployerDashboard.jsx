import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Users, Briefcase, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { mockEmployers, mockJobs, mockTalents } from '../data/mockData';

export default function EmployerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const employer = mockEmployers[0];

  return (
    <div style={{ maxWidth: '1280px', margin: '2rem auto', padding: '0 1.5rem' }}>
      
      {/* Employer Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <h1 style={{ color: '#FFF', fontSize: '2rem' }}>{employer.companyName}</h1>
            <span className="badge-verified"><ShieldCheck size={14} /> Vetted Partner</span>
          </div>
          <p style={{ color: 'var(--text-muted)' }}>{employer.industry} • {employer.location}</p>
        </div>
        <Link to="/employer/jobs/new" className="btn-amber">
          <Plus size={16} /> Post New Role
        </Link>
      </div>

      {/* Workspace Tabs */}
      <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-glass)', paddingBottom: '0.75rem', marginBottom: '2rem' }}>
        <button onClick={() => setActiveTab('overview')} style={{ background: 'transparent', border: 'none', color: activeTab === 'overview' ? 'var(--emerald-light)' : 'var(--text-muted)', fontWeight: '600', cursor: 'pointer', borderBottom: activeTab === 'overview' ? '2px solid var(--emerald)' : 'none', paddingBottom: '0.5rem' }}>
          Overview Stats
        </button>
        <button onClick={() => setActiveTab('jobs')} style={{ background: 'transparent', border: 'none', color: activeTab === 'jobs' ? 'var(--emerald-light)' : 'var(--text-muted)', fontWeight: '600', cursor: 'pointer', borderBottom: activeTab === 'jobs' ? '2px solid var(--emerald)' : 'none', paddingBottom: '0.5rem' }}>
          Active Job Postings ({mockJobs.length})
        </button>
        <button onClick={() => setActiveTab('applicants')} style={{ background: 'transparent', border: 'none', color: activeTab === 'applicants' ? 'var(--emerald-light)' : 'var(--text-muted)', fontWeight: '600', cursor: 'pointer', borderBottom: activeTab === 'applicants' ? '2px solid var(--emerald)' : 'none', paddingBottom: '0.5rem' }}>
          Candidate Applicants ({mockTalents.length})
        </button>
      </div>

      {activeTab === 'overview' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <span style={{ color: 'var(--text-sub)', fontSize: '0.8rem' }}>Open Roles</span>
            <h3 style={{ fontSize: '2rem', color: '#FFF', marginTop: '0.5rem' }}>{employer.openRolesCount}</h3>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <span style={{ color: 'var(--text-sub)', fontSize: '0.8rem' }}>Jongo Graduates Hired</span>
            <h3 style={{ fontSize: '2rem', color: 'var(--emerald-light)', marginTop: '0.5rem' }}>{employer.hiredInternsCount}</h3>
          </div>
        </div>
      )}

      {activeTab === 'jobs' && (
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {mockJobs.map(j => (
            <div key={j.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ color: '#FFF' }}>{j.title}</h3>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.85rem' }}>Posted {j.postedDate} • {j.workSetup}</p>
              </div>
              <Link to="/employer/search" className="btn-outline">
                View Matched Candidates
              </Link>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'applicants' && (
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {mockTalents.map(talent => (
            <div key={talent.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <img src={talent.photo} alt={talent.fullName} style={{ width: '50px', height: '50px', borderRadius: '10px', objectFit: 'cover' }} />
                <div>
                  <h3 style={{ color: '#FFF', fontSize: '1.1rem' }}>{talent.fullName}</h3>
                  <p style={{ color: 'var(--emerald-light)', fontSize: '0.85rem' }}>{talent.title}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span className="badge-match">{talent.matchScore}% Match</span>
                <a href={`https://wa.me/${talent.contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn-emerald">
                  <MessageCircle size={16} /> WhatsApp Outreach
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
