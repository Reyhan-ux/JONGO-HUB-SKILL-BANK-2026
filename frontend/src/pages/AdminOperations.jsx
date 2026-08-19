import React, { useState, useEffect } from 'react';
import { ShieldCheck, Award, CheckCircle2, Users, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockEmployers, mockMentors } from '../data/mockData';
import { fetchGraduates, updateGraduateVerification, issueCredential } from '../services/api';

export default function AdminOperations() {
  const [activeTab, setActiveTab] = useState('graduates');
  const [graduatesList, setGraduatesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [issuing, setIssuing] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const grads = await fetchGraduates();
      setGraduatesList(grads);
    } catch (err) {
      console.error('Failed to load graduates:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleIssueCredential = async (graduate) => {
    setIssuing(graduate.id);
    try {
      // Update verification badge status
      await updateGraduateVerification(graduate.id, true, 'Verified_Graduate');

      // Issue digital credential
      await issueCredential({
        studentId: graduate.id,
        studentName: graduate.fullName,
        programTrack: graduate.reactorTrack || 'Jongo Hub Reactor Developer'
      });

      // Update local UI state
      setGraduatesList(prev => prev.map(g => g.id === graduate.id ? {
        ...g,
        verificationBadge: true,
        verificationStatus: 'Verified_Graduate'
      } : g));
    } catch (err) {
      console.error('Credential issuance failed:', err);
      alert(`Issuance Error: ${err.message}`);
    } finally {
      setIssuing(null);
    }
  };

  const tabs = [
    { key: 'graduates', label: `Graduate Verification Queue (${graduatesList.filter(g => !g.verificationBadge).length} pending)`, icon: '🎓' },
    { key: 'mentors', label: `Mentor Assignments (${mockMentors.length})`, icon: '👨‍🏫' },
    { key: 'employers', label: `Employer Vetting (${mockEmployers.length})`, icon: '🏢' },
  ];

  return (
    <div style={{ background: '#F8F9FA', minHeight: '100vh', padding: '1.75rem 1.5rem 4rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Compact Header Card */}
        <div className="card-white" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderLeft: '5px solid var(--pms-yellow)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
              <Link to="/admin" style={{ color: '#667085', fontSize: '0.8rem', fontWeight: '700', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                Admin Dashboard
              </Link>
              <span style={{ color: '#D1D5DB' }}>›</span>
              <span className="badge-yellow" style={{ fontSize: '0.72rem' }}>🛡️ VERIFICATION PANEL</span>
            </div>
            <h1 style={{ fontSize: '1.85rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)' }}>
              VERIFICATION &amp; AUDIT PANEL
            </h1>
            <p style={{ color: '#667085', fontSize: '0.9rem', marginTop: '0.15rem' }}>
              Audit Reactor capstones, issue credentials, manage mentors &amp; vet partner employers
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="badge-yellow" style={{ fontSize: '0.72rem', padding: '0.55rem 0.85rem' }}>
              <Award size={12} /> {graduatesList.filter(g => g.verificationBadge).length} Credentials Issued
            </span>
            <span className="badge-black" style={{ fontSize: '0.72rem', padding: '0.55rem 0.85rem' }}>
              {graduatesList.filter(g => !g.verificationBadge).length} Pending
            </span>
          </div>
        </div>

        {/* Tab Selector */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: '#FFFFFF', borderRadius: '12px', padding: '0.25rem', border: '1px solid #EAECF0', width: 'fit-content', flexWrap: 'wrap' }}>
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              style={{
                background: activeTab === t.key ? 'var(--pms-yellow)' : 'transparent',
                border: 'none',
                color: activeTab === t.key ? 'var(--pms-black)' : '#667085',
                fontWeight: '700',
                cursor: 'pointer',
                padding: '0.55rem 1.1rem',
                borderRadius: '9px',
                fontSize: '0.82rem',
                transition: 'all 0.2s ease'
              }}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* Graduate Verification Queue */}
        {activeTab === 'graduates' && (
          loading ? (
            <div className="card-white" style={{ textAlign: 'center', padding: '2rem', color: '#667085' }}>
              Loading verification queue...
            </div>
          ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {graduatesList.map(g => (
              <div key={g.id} className="card-white" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderLeft: `4px solid ${g.verificationBadge ? 'var(--pms-yellow)' : '#D97706'}` }}>
                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                  <img src={g.photo} alt={g.fullName} style={{ width: '46px', height: '46px', borderRadius: '10px', objectFit: 'cover' }} />
                  <div>
                    <h3 style={{ color: 'var(--pms-black)', fontSize: '1rem', fontWeight: '800' }}>{g.fullName}</h3>
                    <p style={{ color: '#D97706', fontSize: '0.8rem', fontWeight: '700' }}>{g.title} · Cohort {g.reactorCohort}</p>
                    <p style={{ color: '#667085', fontSize: '0.75rem', marginTop: '0.1rem' }}>{g.verificationStatus.replace(/_/g, ' ')}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  {g.verificationBadge ? (
                    <span className="badge-yellow" style={{ fontSize: '0.72rem' }}>
                      <ShieldCheck size={12} /> Credential Issued
                    </span>
                  ) : (
                    <button
                      onClick={() => handleIssueCredential(g)}
                      className="btn-yellow"
                      disabled={issuing === g.id}
                      style={{ fontSize: '0.82rem', padding: '0.45rem 0.85rem', opacity: issuing === g.id ? 0.7 : 1 }}
                    >
                      {issuing === g.id ? (
                        <><CheckCircle2 size={14} /> Issuing...</>
                      ) : (
                        <><Award size={14} /> Audit &amp; Issue Certificate</>
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Mentor Management */}
        {activeTab === 'mentors' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {mockMentors.map(m => (
              <div key={m.id} className="card-white" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderLeft: '4px solid var(--pms-black)' }}>
                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                  <img src={m.photo} alt={m.fullName} style={{ width: '46px', height: '46px', borderRadius: '10px', objectFit: 'cover' }} />
                  <div>
                    <h3 style={{ color: 'var(--pms-black)', fontSize: '1rem', fontWeight: '800' }}>{m.fullName}</h3>
                    <p style={{ color: '#667085', fontSize: '0.8rem' }}>{m.title} · Cohort {m.assignedCohort}</p>
                    <p style={{ color: '#D97706', fontSize: '0.75rem', fontWeight: '700', marginTop: '0.1rem' }}>
                      <Users size={11} style={{ display: 'inline', verticalAlign: 'middle' }} /> {m.assignedGraduateIds.length} graduates · {m.pendingReviews} pending reviews
                    </p>
                  </div>
                </div>
                <span className="badge-black" style={{ fontSize: '0.72rem' }}>Active Mentor</span>
              </div>
            ))}
          </div>
        )}

        {/* Employer Vetting */}
        {activeTab === 'employers' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {mockEmployers.map(emp => (
              <div key={emp.id} className="card-white" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderLeft: '4px solid var(--pms-yellow)' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                    <Building size={16} style={{ color: 'var(--pms-black)' }} />
                    <h3 style={{ color: 'var(--pms-black)', fontSize: '1.05rem', fontWeight: '800' }}>{emp.companyName}</h3>
                  </div>
                  <p style={{ color: '#667085', fontSize: '0.82rem' }}>{emp.industry} · {emp.location}</p>
                  <p style={{ color: '#667085', fontSize: '0.78rem', marginTop: '0.1rem' }}>Contact: {emp.contactPerson} · {emp.email}</p>
                </div>
                <span className="badge-yellow" style={{ fontSize: '0.72rem' }}>
                  <ShieldCheck size={12} /> Vetted Partner
                </span>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
