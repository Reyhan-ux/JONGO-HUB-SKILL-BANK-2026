import React, { useState, useEffect, useCallback } from 'react';
import { Search, ShieldCheck, Award, ExternalLink, Code2, Sparkles, ChevronRight, User } from 'lucide-react';
import { fetchGraduates } from '../services/api';
import { REACTOR_TRACKS } from '../data/mockData';

export default function GraduatesPage() {
  const [graduates, setGraduates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('All Tracks');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [selectedGrad, setSelectedGrad] = useState(null);

  const loadGraduates = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchGraduates({
        search,
        track: selectedTrack,
        verifiedOnly: verifiedOnly ? 'true' : 'false'
      });
      setGraduates(data);
    } catch (err) {
      console.error('Failed to load graduates:', err);
    } finally {
      setLoading(false);
    }
  }, [search, selectedTrack, verifiedOnly]);

  useEffect(() => {
    loadGraduates();
  }, [loadGraduates]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    loadGraduates();
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #0b0f19 0%, #111827 100%)', color: '#f3f4f6', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* Header Banner */}
      <div style={{ background: 'radial-gradient(ellipse at top, #1e293b 0%, #0f172a 100%)', borderBottom: '1px solid #1e293b', padding: '60px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', padding: '6px 16px', borderRadius: '30px', color: '#60a5fa', fontSize: '14px', fontWeight: 600, marginBottom: '20px' }}>
            <ShieldCheck size={16} /> Verified Proof of Work Platform
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(90deg, #ffffff 0%, #93c5fd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Jongo Hub Reactor Graduates
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#9ca3af', maxWidth: '680px', margin: '0 auto 32px', lineHeight: 1.6 }}>
            Top 1% vetted software engineers & tech leaders from Cameroon & Africa. Every graduate profile features verified capstone projects and audit badge.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '12px', maxWidth: '640px', margin: '0 auto', background: '#1e293b', padding: '8px', borderRadius: '12px', border: '1px solid #334155' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, paddingLeft: '12px' }}>
              <Search size={20} color="#94a3b8" />
              <input
                type="text"
                placeholder="Search by candidate name, skill (React, Go, AWS)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: '100%', background: 'transparent', border: 'none', color: '#fff', fontSize: '15px', outline: 'none' }}
              />
            </div>
            <button type="submit" style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
        
        {/* Track Filter Pills & Verification Filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
            {REACTOR_TRACKS.map(track => (
              <button
                key={track}
                onClick={() => setSelectedTrack(track)}
                style={{
                  background: selectedTrack === track ? '#2563eb' : '#1e293b',
                  color: selectedTrack === track ? '#ffffff' : '#94a3b8',
                  border: '1px solid',
                  borderColor: selectedTrack === track ? '#3b82f6' : '#334155',
                  padding: '8px 18px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s'
                }}
              >
                {track}
              </button>
            ))}
          </div>

          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: '#cbd5e1', fontSize: '14px', background: '#1e293b', padding: '8px 16px', borderRadius: '20px', border: '1px solid #334155' }}>
            <input
              type="checkbox"
              checked={verifiedOnly}
              onChange={(e) => setVerifiedOnly(e.target.checked)}
              style={{ width: '16px', height: '16px', accentColor: '#2563eb' }}
            />
            Verified Graduates Only
          </label>
        </div>

        {/* Graduates Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#94a3b8', fontSize: '18px' }}>
            Loading verified graduate profiles...
          </div>
        ) : graduates.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', background: '#1e293b', borderRadius: '16px', border: '1px dashed #334155' }}>
            <User size={48} color="#64748b" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '20px', margin: '0 0 8px' }}>No graduates matched your criteria</h3>
            <p style={{ color: '#94a3b8' }}>Try adjusting your search terms or filter selection.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
            {graduates.map(grad => (
              <div
                key={grad.id}
                style={{
                  background: '#1e293b',
                  borderRadius: '16px',
                  border: '1px solid #334155',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  transition: 'transform 0.2s, border-color 0.2s',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}
              >
                <div>
                  {/* Top Candidate Row */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                    <img
                      src={grad.photo}
                      alt={grad.fullName}
                      style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #3b82f6' }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: '#f8fafc' }}>{grad.fullName}</h3>
                        {grad.verificationBadge && (
                          <span title="Verified Jongo Hub Reactor Graduate" style={{ display: 'inline-flex', color: '#10b981' }}>
                            <ShieldCheck size={18} />
                          </span>
                        )}
                      </div>
                      <p style={{ margin: '4px 0 6px', color: '#60a5fa', fontSize: '14px', fontWeight: 600 }}>{grad.title}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#94a3b8' }}>
                        <span>📍 {grad.location}</span>
                        <span>•</span>
                        <span>🎓 {grad.reactorCohort}</span>
                      </div>
                    </div>
                  </div>

                  {/* Match Score Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '8px 12px', borderRadius: '8px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '13px', color: '#34d399', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Sparkles size={14} /> Job Compatibility Score
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: 800, color: '#10b981' }}>
                      {grad.matchScore}% Match
                    </span>
                  </div>

                  {/* Bio */}
                  <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.5, margin: '0 0 16px' }}>
                    {grad.bio || `Vetted ${grad.title} from Jongo Hub Reactor.`}
                  </p>

                  {/* Verified Skills Pills */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Verified Technical Stack
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {grad.verifiedSkills && grad.verifiedSkills.map(skill => (
                        <span key={skill} style={{ background: '#0f172a', color: '#93c5fd', border: '1px solid #1e3a8a', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: 500 }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div style={{ borderTop: '1px solid #334155', paddingTop: '16px', display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => setSelectedGrad(grad)}
                    style={{ flex: 1, background: '#2563eb', color: '#ffffff', border: 'none', padding: '10px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '14px' }}
                  >
                    View Full Profile <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Candidate Profile Modal */}
      {selectedGrad && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
          <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '20px', maxWidth: '720px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '32px', position: 'relative', color: '#f3f4f6' }}>
            
            <button
              onClick={() => setSelectedGrad(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: '#334155', color: '#fff', border: 'none', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', fontWeight: 700 }}
            >
              ✕
            </button>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '24px' }}>
              <img src={selectedGrad.photo} alt={selectedGrad.fullName} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #3b82f6' }} />
              <div>
                <h2 style={{ fontSize: '24px', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {selectedGrad.fullName}
                  {selectedGrad.verificationBadge && <ShieldCheck size={22} color="#10b981" />}
                </h2>
                <p style={{ color: '#60a5fa', margin: '4px 0', fontSize: '16px', fontWeight: 600 }}>{selectedGrad.title}</p>
                <div style={{ fontSize: '13px', color: '#94a3b8' }}>
                  📍 {selectedGrad.location} • Status: <span style={{ color: '#34d399', fontWeight: 600 }}>{selectedGrad.availability}</span>
                </div>
              </div>
            </div>

            {/* Certifications & Proof of Work */}
            {selectedGrad.certifications && selectedGrad.certifications.length > 0 && (
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', padding: '16px', borderRadius: '12px', marginBottom: '20px' }}>
                <h4 style={{ margin: '0 0 8px', color: '#93c5fd', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}>
                  <Award size={18} /> Official Jongo Hub Credential
                </h4>
                {selectedGrad.certifications.map((c, i) => (
                  <div key={i} style={{ fontSize: '13px', color: '#cbd5e1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{c.title} (Code: <code>{c.credentialCode}</code>)</span>
                    <a href={c.verificationUrl} target="_blank" rel="noreferrer" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 600 }}>Verify Credential →</a>
                  </div>
                ))}
              </div>
            )}

            {/* Capstone Projects */}
            {selectedGrad.projects && selectedGrad.projects.length > 0 && (
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '16px' }}>Capstone Projects & Proof of Work</h3>
                {selectedGrad.projects.map((proj, idx) => (
                  <div key={idx} style={{ background: '#0f172a', padding: '16px', borderRadius: '12px', border: '1px solid #1e293b', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <h4 style={{ margin: 0, fontSize: '16px', color: '#f8fafc' }}>{proj.title}</h4>
                      {proj.githubUrl && (
                        <a href={proj.githubUrl} target="_blank" rel="noreferrer" style={{ color: '#60a5fa', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <Code2 size={14} /> GitHub Repo <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                    <p style={{ fontSize: '14px', color: '#cbd5e1', margin: '0 0 10px' }}>{proj.description}</p>
                    <div style={{ fontSize: '12px', color: '#34d399', fontWeight: 600 }}>Impact: {proj.impact}</div>
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button onClick={() => setSelectedGrad(null)} style={{ background: '#334155', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>
                Close
              </button>
              <a href={`mailto:${selectedGrad.contact?.email}`} style={{ background: '#2563eb', color: '#fff', textDecoration: 'none', padding: '10px 24px', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Contact Talent Directly
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
