import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Award, Briefcase, Sparkles, CheckCircle2, Clock, Send } from 'lucide-react';
import { mockTalents, mockJobs } from '../data/mockData';

export default function TalentDashboard() {
  const [tab, setTab] = useState('overview');
  const talent = mockTalents[0];

  return (
    <div style={{ maxWidth: '1280px', margin: '2rem auto', padding: '0 1.5rem' }}>
      
      {/* Header Greeting */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ color: '#FFF', fontSize: '2rem' }}>Welcome back, {talent.fullName.split(' ')[0]} 👋</h1>
          <p style={{ color: 'var(--text-muted)' }}>Here is your skill verification & job application overview</p>
        </div>
        <Link to="/profile" className="btn-emerald">
          Edit Developer Profile
        </Link>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-glass)', paddingBottom: '0.75rem', marginBottom: '2rem' }}>
        <button onClick={() => setTab('overview')} style={{ background: 'transparent', border: 'none', color: tab === 'overview' ? 'var(--emerald-light)' : 'var(--text-muted)', fontWeight: '600', cursor: 'pointer', borderBottom: tab === 'overview' ? '2px solid var(--emerald)' : 'none', paddingBottom: '0.5rem' }}>
          Overview & Recommendations
        </button>
        <button onClick={() => setTab('applications')} style={{ background: 'transparent', border: 'none', color: tab === 'applications' ? 'var(--emerald-light)' : 'var(--text-muted)', fontWeight: '600', cursor: 'pointer', borderBottom: tab === 'applications' ? '2px solid var(--emerald)' : 'none', paddingBottom: '0.5rem' }}>
          My Applications (2 Active)
        </button>
      </div>

      {tab === 'overview' ? (
        <>
          {/* Stat Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <span style={{ color: 'var(--text-sub)', fontSize: '0.8rem' }}>Profile Views</span>
              <h3 style={{ fontSize: '1.8rem', color: '#FFF', marginTop: '0.5rem' }}>142</h3>
              <span style={{ color: 'var(--emerald-light)', fontSize: '0.75rem' }}>+24% this week</span>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <span style={{ color: 'var(--text-sub)', fontSize: '0.8rem' }}>Avg Compatibility</span>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--emerald-light)', marginTop: '0.5rem' }}>96%</h3>
              <span style={{ color: 'var(--text-sub)', fontSize: '0.75rem' }}>Top 5% candidate</span>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <span style={{ color: 'var(--text-sub)', fontSize: '0.8rem' }}>Active Applications</span>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--amber)', marginTop: '0.5rem' }}>2</h3>
              <span style={{ color: 'var(--text-sub)', fontSize: '0.75rem' }}>1 interview pending</span>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <span style={{ color: 'var(--text-sub)', fontSize: '0.8rem' }}>Verification Badge</span>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--emerald-light)', marginTop: '0.75rem' }}>Verified Graduate</h3>
              <span style={{ color: 'var(--text-sub)', fontSize: '0.75rem' }}>Jongo Hub Audit Active</span>
            </div>
          </div>

          {/* Recommended Job Section */}
          <div>
            <h2 style={{ color: '#FFF', fontSize: '1.4rem', marginBottom: '1.25rem' }}>AI Job Compatibility Recommendations</h2>
            <div style={{ display: 'grid', gap: '1.25rem' }}>
              {mockJobs.map(job => (
                <div key={job.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span className="badge-match" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>96% Fit Score</span>
                    <h3 style={{ color: '#FFF', fontSize: '1.15rem' }}>{job.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{job.companyName} • {job.location}</p>
                  </div>
                  <Link to="/jobs" className="btn-emerald">
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* Applications Tracker Tab */
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ color: '#FFF', fontSize: '1.1rem' }}>Senior React & Fullstack Developer</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>AfriTech Solutions • Applied on July 22, 2026</p>
            </div>
            <span className="badge-verified" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--amber)', borderColor: 'var(--border-amber)' }}>
              <Clock size={14} /> Interview Scheduled
            </span>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ color: '#FFF', fontSize: '1.1rem' }}>Junior Frontend Engineer</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Jongo Incubator Labs • Applied on July 26, 2026</p>
            </div>
            <span className="badge-verified">
              <CheckCircle2 size={14} /> Under Review
            </span>
          </div>
        </div>
      )}

    </div>
  );
}
