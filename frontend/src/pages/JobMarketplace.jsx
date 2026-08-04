import React, { useState } from 'react';
import { Search, Filter, MapPin, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { mockJobs } from '../data/mockData';

export default function JobMarketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSetup, setFilterSetup] = useState('All');

  const filteredJobs = mockJobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.requiredTechnicalSkills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div style={{ maxWidth: '1280px', margin: '2rem auto', padding: '0 1.5rem' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ color: '#FFF', fontSize: '2rem' }}>Developer Job Marketplace</h1>
        <p style={{ color: 'var(--text-muted)' }}>Browse opportunities with real-time skill compatibility matching</p>
      </div>

      {/* Search & Filters Bar */}
      <div className="glass-card" style={{ padding: '1rem', display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', padding: '0 0.75rem', border: '1px solid var(--border-glass)' }}>
          <Search size={18} style={{ color: 'var(--text-sub)' }} />
          <input 
            type="text" 
            placeholder="Search by skill (React, Node.js), job title..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', background: 'transparent', border: 'none', color: '#FFF', outline: 'none' }} 
          />
        </div>

        <select 
          value={filterSetup}
          onChange={(e) => setFilterSetup(e.target.value)}
          style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', color: '#FFF', outline: 'none' }}
        >
          <option value="All" style={{ background: '#111827' }}>All Work Setups</option>
          <option value="Remote" style={{ background: '#111827' }}>Remote Only</option>
          <option value="Hybrid" style={{ background: '#111827' }}>Hybrid</option>
        </select>
      </div>

      {/* Job Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
        {filteredJobs.map(job => (
          <div key={job.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span className="badge-verified" style={{ background: job.targetTalentCategory === 'JongoHub_Graduates_Only' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(16, 185, 129, 0.15)', color: job.targetTalentCategory === 'JongoHub_Graduates_Only' ? 'var(--amber)' : 'var(--emerald-light)', borderColor: job.targetTalentCategory === 'JongoHub_Graduates_Only' ? 'var(--border-amber)' : 'var(--border-emerald)' }}>
                  {job.targetTalentCategory === 'JongoHub_Graduates_Only' ? 'Graduates Only' : 'Open to All'}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>{job.employmentType}</span>
              </div>

              <h3 style={{ color: '#FFF', fontSize: '1.2rem', marginBottom: '0.25rem' }}>{job.title}</h3>
              <p style={{ color: 'var(--emerald-light)', fontWeight: '500', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{job.companyName}</p>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '1rem' }}>
                <MapPin size={14} /> {job.location} ({job.workSetup})
              </p>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem', lineClamp: 3 }}>{job.description}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                {job.requiredTechnicalSkills.map(skill => (
                  <span key={skill} className="badge-skill">{skill}</span>
                ))}
              </div>
            </div>

            <button className="btn-emerald" style={{ width: '100%', justifyContent: 'center' }}>
              Submit Application
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
