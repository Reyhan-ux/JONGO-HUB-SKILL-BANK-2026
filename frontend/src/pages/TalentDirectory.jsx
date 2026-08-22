import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, MapPin, MessageCircle } from 'lucide-react';
import { mockGraduates, REACTOR_TRACKS } from '../data/mockData';

export default function TalentDirectory() {
  const [search, setSearch] = useState('');
  const [trackFilter, setTrackFilter] = useState('All Tracks');

  const filtered = mockGraduates.filter(g => {
    const matchesSearch = g.fullName.toLowerCase().includes(search.toLowerCase()) || 
                          g.verifiedSkills.some(s => s.toLowerCase().includes(search.toLowerCase()));
    const matchesTrack = trackFilter === 'All Tracks' || g.reactorTrack === trackFilter;
    return matchesSearch && matchesTrack;
  });

  return (
    <div style={{ background: '#F8F9FA', minHeight: '100vh', padding: '1.75rem 1.5rem 4rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Compact Header Card */}
        <div className="card-white" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderLeft: '5px solid var(--pms-yellow)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
              <span className="badge-yellow" style={{ fontSize: '0.72rem' }}>GRADUATE SHOWCASE DIRECTORY</span>
              <span style={{ fontSize: '0.8rem', color: '#667085', fontWeight: '600' }}>4-Vector Compatibility Matching</span>
            </div>
            <h1 style={{ fontSize: '1.85rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)' }}>
              VERIFIED REACTOR GRADUATES
            </h1>
            <p style={{ color: '#667085', fontSize: '0.9rem', marginTop: '0.15rem' }}>
              Audited engineering profiles with verified digital credentials and mentor audit reports
            </p>
          </div>
        </div>

        {/* Compact Search & Filter Bar */}
        <div className="card-white" style={{ padding: '1rem 1.25rem', display: 'flex', gap: '0.85rem', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', background: '#F8F9FA', borderRadius: '10px', padding: '0 0.85rem', border: '1px solid #EAECF0' }}>
            <Search size={16} style={{ color: '#667085' }} />
            <input 
              type="text" 
              placeholder="Search graduate by name, tech skill (Go, React, Docker)..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: '100%', padding: '0.65rem 0.5rem', background: 'transparent', border: 'none', outline: 'none', fontSize: '0.88rem', color: 'var(--pms-black)' }} 
            />
          </div>

          <select 
            value={trackFilter}
            onChange={(e) => setTrackFilter(e.target.value)}
            style={{ padding: '0.65rem 1rem', borderRadius: '10px', background: '#F8F9FA', border: '1px solid #EAECF0', color: 'var(--pms-black)', fontWeight: '600', fontSize: '0.82rem', outline: 'none' }}
          >
            {REACTOR_TRACKS.map(track => (
              <option key={track} value={track}>{track}</option>
            ))}
          </select>
        </div>

        {/* Candidate Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.25rem' }}>
          {filtered.map((g) => (
            <div 
              key={g.id} 
              className="card-white" 
              style={{ borderTop: '4px solid var(--pms-yellow)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.85rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <img src={g.photo} alt={g.fullName} style={{ width: '48px', height: '48px', borderRadius: '12px', objectFit: 'cover' }} />
                    <div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--pms-black)' }}>{g.fullName}</h3>
                      <p style={{ color: '#D97706', fontWeight: '700', fontSize: '0.82rem' }}>{g.title}</p>
                      <span style={{ color: '#667085', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                        <MapPin size={11} /> {g.location}
                      </span>
                    </div>
                  </div>
                  <span className="badge-yellow" style={{ fontSize: '0.68rem', padding: '0.2rem 0.5rem' }}>{g.matchScore}% FIT</span>
                </div>

                <div style={{ marginBottom: '0.65rem' }}>
                  {g.verificationBadge ? (
                    <span className="badge-black" style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem' }}>
                      <ShieldCheck size={11} /> Reactor Verified Graduate
                    </span>
                  ) : (
                    <span style={{ background: '#FEF3C7', color: '#92400E', padding: '0.15rem 0.5rem', borderRadius: '999px', fontSize: '0.68rem', fontWeight: '600' }}>
                      Pending Capstone Review
                    </span>
                  )}
                </div>

                <p style={{ color: '#667085', fontSize: '0.82rem', marginBottom: '0.85rem', lineHeight: '1.4' }}>{g.bio}</p>

                <div style={{ background: '#F8F9FA', border: '1px solid #EAECF0', padding: '0.65rem', borderRadius: '8px', marginBottom: '0.85rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.35rem', fontSize: '0.72rem' }}>
                  <div>Tech Fit: <strong style={{ color: 'var(--pms-black)' }}>{g.matchBreakdown.technicalSkillFit}%</strong></div>
                  <div>Setup Fit: <strong style={{ color: 'var(--pms-black)' }}>{g.matchBreakdown.workSetupFit}%</strong></div>
                  <div>Soft Fit: <strong style={{ color: 'var(--pms-black)' }}>{g.matchBreakdown.softSkillFit}%</strong></div>
                  <div>Domain Fit: <strong style={{ color: 'var(--pms-black)' }}>{g.matchBreakdown.projectDomainFit}%</strong></div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '1rem' }}>
                  {g.verifiedSkills.map(s => (
                    <span key={s} style={{ background: '#F3F4F6', color: 'var(--pms-black)', padding: '0.15rem 0.45rem', borderRadius: '4px', fontSize: '0.72rem', fontWeight: '600' }}>{s}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Link to={`/graduate/${g.id}`} className="btn-outline-dark" style={{ flex: 1, justifyContent: 'center', padding: '0.45rem', fontSize: '0.82rem' }}>
                  Profile
                </Link>
                <a href={`https://wa.me/${g.contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn-yellow" style={{ flex: 1, justifyContent: 'center', padding: '0.45rem', fontSize: '0.82rem' }}>
                  <MessageCircle size={14} /> Outreach
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
