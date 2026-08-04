import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, MapPin, MessageCircle, ArrowRight, Filter } from 'lucide-react';
import { mockTalents } from '../data/mockData';

export default function TalentDirectory() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filtered = mockTalents.filter(t => {
    const matchesSearch = t.fullName.toLowerCase().includes(search.toLowerCase()) || 
                          t.verifiedSkills.some(s => s.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = categoryFilter === 'All' || t.talentCategory === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh', padding: '3rem 2rem' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="badge-black" style={{ marginBottom: '0.5rem' }}>TALENT MARKETPLACE</span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--pms-black)' }}>
            TALENT DIRECTORY & <span style={{ color: '#D97706' }}>COMPATIBILITY MATCH</span>
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>Audit capstone repositories and connect directly with verified African engineers</p>
        </div>

        {/* Filter Bar */}
        <div className="card-white" style={{ padding: '1.25rem', display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', background: '#F9FAFB', borderRadius: 'var(--radius-pill)', padding: '0 1rem', border: '1px solid #E5E7EB' }}>
            <Search size={18} style={{ color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="Search candidate by name, skill (Go, React, Docker)..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: '100%', padding: '0.85rem', background: 'transparent', border: 'none', outline: 'none', fontSize: '0.9rem' }} 
            />
          </div>

          <select 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            style={{ padding: '0.85rem 1.25rem', borderRadius: 'var(--radius-pill)', background: '#F9FAFB', border: '1px solid #E5E7EB', color: 'var(--pms-black)', fontWeight: '600', fontSize: '0.85rem', outline: 'none' }}
          >
            <option value="All">All Developers</option>
            <option value="JongoHub_Reactor_Graduate">Jongo Hub Graduates Only</option>
            <option value="External_Developer">External Developers</option>
          </select>
        </div>

        {/* Candidate Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {filtered.map(t => (
            <div key={t.id} className="card-white" style={{ padding: '0', overflow: 'hidden', borderTop: '5px solid var(--pms-yellow)' }}>
              <div style={{ padding: '1.75rem' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <img src={t.photo} alt={t.fullName} style={{ width: '64px', height: '64px', borderRadius: '16px', objectFit: 'cover' }} />
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--pms-black)' }}>{t.fullName}</h3>
                      <p style={{ color: '#D97706', fontWeight: '700', fontSize: '0.85rem' }}>{t.title}</p>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <MapPin size={12} /> {t.location}
                      </span>
                    </div>
                  </div>
                  <span className="badge-yellow" style={{ fontSize: '0.75rem' }}>{t.matchScore}% FIT</span>
                </div>

                {t.verificationBadge ? (
                  <span className="badge-black" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                    <ShieldCheck size={12} /> Jongo Hub Verified
                  </span>
                ) : (
                  <span style={{ background: '#F3F4F6', color: 'var(--text-muted)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-pill)', fontSize: '0.75rem', fontWeight: '600', marginBottom: '1rem', display: 'inline-block' }}>
                    External Developer
                  </span>
                )}

                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.25rem', lineHeight: '1.5' }}>{t.bio}</p>

                {/* 4-Vector Breakdown Bar */}
                <div style={{ background: 'rgba(252, 191, 5, 0.06)', border: '1px solid rgba(252, 191, 5, 0.18)', padding: '0.85rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.75rem', fontWeight: '600' }}>
                  <div>Tech Fit: <span style={{ color: 'var(--pms-black)', fontWeight: '800' }}>{t.matchBreakdown.technicalSkillFit}%</span></div>
                  <div>Setup Fit: <span style={{ color: 'var(--pms-black)', fontWeight: '800' }}>{t.matchBreakdown.workSetupFit}%</span></div>
                  <div>Soft Fit: <span style={{ color: 'var(--pms-black)', fontWeight: '800' }}>{t.matchBreakdown.softSkillFit}%</span></div>
                  <div>Domain Fit: <span style={{ color: 'var(--pms-black)', fontWeight: '800' }}>{t.matchBreakdown.projectDomainFit}%</span></div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
                  {t.verifiedSkills.map(s => (
                    <span key={s} style={{ background: '#F3F4F6', color: 'var(--pms-black)', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '600' }}>{s}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Link to={`/talent/${t.id}`} className="btn-outline-dark" style={{ flex: 1, justifyContent: 'center', padding: '0.65rem', fontSize: '0.85rem' }}>
                    Profile
                  </Link>
                  <a href={`https://wa.me/${t.contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn-yellow" style={{ flex: 1, justifyContent: 'center', padding: '0.65rem', fontSize: '0.85rem' }}>
                    <MessageCircle size={16} /> Outreach
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
