import React, { useState } from 'react';
import { Search, MapPin, Briefcase, CheckCircle2 } from 'lucide-react';
import { mockJobs } from '../data/mockData';

export default function JobMarketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSetup, setFilterSetup] = useState('All');
  const [applying, setApplying] = useState(null);

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.requiredTechnicalSkills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSetup = filterSetup === 'All' || job.workSetup === filterSetup;
    return matchesSearch && matchesSetup;
  });

  return (
    <div style={{ background: '#F8F9FA', minHeight: '100vh', padding: '1.75rem 1.5rem 4rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Compact Header Card */}
        <div className="card-white" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderLeft: '5px solid var(--pms-yellow)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
              <span className="badge-yellow" style={{ fontSize: '0.72rem' }}>JOB MARKETPLACE</span>
              <span style={{ fontSize: '0.8rem', color: '#667085', fontWeight: '600' }}>AI Compatibility Matching Enabled</span>
            </div>
            <h1 style={{ fontSize: '1.85rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)' }}>
              DEVELOPER JOB MARKETPLACE
            </h1>
            <p style={{ color: '#667085', fontSize: '0.9rem', marginTop: '0.15rem' }}>
              Exclusive opportunities for Jongo Hub Reactor graduates — vetted employer postings only
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <span className="badge-black" style={{ fontSize: '0.72rem', padding: '0.55rem 0.85rem' }}>
              <Briefcase size={12} /> {mockJobs.length} Active Roles
            </span>
          </div>
        </div>

        {/* Compact Search & Filter Bar */}
        <div className="card-white" style={{ padding: '0.85rem 1.25rem', display: 'flex', gap: '0.85rem', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', background: '#F8F9FA', borderRadius: '10px', padding: '0 0.85rem', border: '1px solid #EAECF0' }}>
            <Search size={16} style={{ color: '#667085' }} />
            <input
              type="text"
              placeholder="Search by skill (React, Node.js, Go) or job title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '0.6rem 0.5rem', background: 'transparent', border: 'none', color: 'var(--pms-black)', outline: 'none', fontSize: '0.88rem' }}
            />
          </div>

          {['All', 'Remote', 'Hybrid', 'On-site'].map(opt => (
            <button
              key={opt}
              onClick={() => setFilterSetup(opt)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: filterSetup === opt ? '2px solid var(--pms-yellow)' : '1px solid #EAECF0',
                background: filterSetup === opt ? 'rgba(245, 208, 0, 0.12)' : '#FFFFFF',
                color: filterSetup === opt ? 'var(--pms-black)' : '#667085',
                fontWeight: '700',
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Job Listings */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredJobs.map(job => (
            <div key={job.id} className="card-white" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', borderLeft: '4px solid var(--pms-yellow)' }}>
              
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                  <h3 style={{ color: 'var(--pms-black)', fontSize: '1.1rem', fontWeight: '800' }}>{job.title}</h3>
                  <span className="badge-yellow" style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem' }}>96% FIT</span>
                  <span style={{ background: '#F3F4F6', color: '#374151', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.72rem', fontWeight: '700' }}>{job.employmentType}</span>
                </div>

                <p style={{ color: '#D97706', fontWeight: '700', fontSize: '0.88rem', marginBottom: '0.25rem' }}>{job.companyName}</p>
                <p style={{ color: '#667085', fontSize: '0.8rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <MapPin size={12} /> {job.location} · {job.workSetup}
                </p>

                <p style={{ color: '#667085', fontSize: '0.85rem', marginBottom: '0.75rem', lineHeight: '1.5', maxWidth: '680px' }}>{job.description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                  {job.requiredTechnicalSkills.map(skill => (
                    <span key={skill} style={{ background: 'rgba(245, 208, 0, 0.15)', color: 'var(--pms-black)', padding: '0.15rem 0.45rem', borderRadius: '4px', fontSize: '0.72rem', fontWeight: '700' }}>{skill}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', minWidth: '160px' }}>
                {applying === job.id ? (
                  <div style={{ padding: '0.6rem 1rem', background: '#ECFDF5', border: '1px solid #6EE7B7', borderRadius: '10px', color: '#065F46', fontSize: '0.82rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={14} /> Application Sent
                  </div>
                ) : (
                  <button
                    className="btn-yellow"
                    style={{ justifyContent: 'center', padding: '0.55rem 1rem', fontSize: '0.85rem' }}
                    onClick={() => setApplying(job.id)}
                  >
                    Apply Now
                  </button>
                )}
                <p style={{ color: '#667085', fontSize: '0.75rem', textAlign: 'center' }}>Posted {job.postedDate}</p>
              </div>

            </div>
          ))}

          {filteredJobs.length === 0 && (
            <div className="card-white" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <Briefcase size={36} style={{ color: '#D1D5DB', marginBottom: '0.75rem' }} />
              <p style={{ color: '#667085', fontWeight: '600' }}>No job listings match your search. Try different filters.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
