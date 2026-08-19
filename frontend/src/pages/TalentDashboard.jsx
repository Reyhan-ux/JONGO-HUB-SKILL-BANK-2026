import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Briefcase, Sparkles, CheckCircle2, Clock, ShieldCheck, TrendingUp, Cpu, ExternalLink } from 'lucide-react';
import { mockGraduates, mockJobs } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

export default function TalentDashboard() {
  const [tab, setTab] = useState('overview');
  const { user } = useAuth();
  const graduate = {
    ...mockGraduates[0],
    fullName: user?.fullName || mockGraduates[0].fullName,
    email: user?.email || mockGraduates[0].email
  };

  const skillProficiency = [
    { name: 'React / Frontend Architecture', level: 95 },
    { name: 'Node.js & Express REST APIs', level: 92 },
    { name: 'PostgreSQL & Database Design', level: 88 },
    { name: 'Docker & Containerization', level: 85 },
    { name: 'TypeScript & Type Safety', level: 90 }
  ];

  return (
    <div style={{ background: '#F8F9FA', minHeight: '100vh', padding: '1.75rem 1.5rem 4rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Compact Dashboard Header Card */}
        <div className="card-white" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderLeft: '5px solid var(--pms-yellow)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
              <span className="badge-yellow" style={{ fontSize: '0.72rem' }}>🎓 REACTOR GRADUATE PORTAL</span>
              <span style={{ fontSize: '0.8rem', color: '#667085', fontWeight: '600' }}>Cohort {graduate.reactorCohort}</span>
            </div>
            <h1 style={{ fontSize: '1.85rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)' }}>
              Welcome back, {graduate.fullName.split(' ')[0]} <span style={{ fontSize: '1.5rem' }}>👋</span>
            </h1>
            <p style={{ color: '#667085', fontSize: '0.9rem', marginTop: '0.15rem' }}>
              {graduate.title} • Capstone Audited Digital Credentials
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.65rem' }}>
            <Link to={`/graduate/${graduate.id}`} className="btn-outline-dark" style={{ padding: '0.55rem 1.15rem', fontSize: '0.85rem' }}>
              View Public Profile <ExternalLink size={14} />
            </Link>
            <Link to="/profile" className="btn-yellow" style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}>
              Edit Profile
            </Link>
          </div>
        </div>

        {/* 4-Col KPI Metrics Row */}
        <div className="grid-kpi-4">
          <div className="kpi-card" style={{ borderTop: '4px solid var(--pms-yellow)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#667085', fontSize: '0.82rem', fontWeight: '600' }}>Profile Views</span>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(245, 208, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Eye size={18} style={{ color: 'var(--pms-black)' }} />
              </div>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--pms-black)', fontWeight: '900', fontFamily: 'var(--font-heading)' }}>142</h3>
              <span style={{ color: '#16A34A', fontSize: '0.75rem', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                <TrendingUp size={12} /> +24% this week
              </span>
            </div>
          </div>

          <div className="kpi-card" style={{ borderTop: '4px solid var(--pms-yellow)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#667085', fontSize: '0.82rem', fontWeight: '600' }}>Avg Compatibility</span>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(245, 208, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={18} style={{ color: 'var(--pms-black)' }} />
              </div>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#D97706', fontWeight: '900', fontFamily: 'var(--font-heading)' }}>96%</h3>
              <span style={{ color: '#667085', fontSize: '0.75rem', fontWeight: '600' }}>Top 5% candidate fit</span>
            </div>
          </div>

          <div className="kpi-card" style={{ borderTop: '4px solid var(--pms-yellow)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#667085', fontSize: '0.82rem', fontWeight: '600' }}>Active Applications</span>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(245, 208, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Briefcase size={18} style={{ color: 'var(--pms-black)' }} />
              </div>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--pms-black)', fontWeight: '900', fontFamily: 'var(--font-heading)' }}>2</h3>
              <span style={{ color: '#D97706', fontSize: '0.75rem', fontWeight: '700' }}>1 interview scheduled</span>
            </div>
          </div>

          <div className="kpi-card" style={{ borderTop: '4px solid var(--pms-black)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#667085', fontSize: '0.82rem', fontWeight: '600' }}>Verification Badge</span>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--pms-black)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={18} style={{ color: 'var(--pms-yellow)' }} />
              </div>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--pms-black)', fontWeight: '800' }}>Verified Graduate</h3>
              <span className="badge-yellow" style={{ fontSize: '0.68rem', marginTop: '0.2rem' }}>JONGO HUB AUDITED</span>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: '#FFFFFF', borderRadius: '12px', padding: '0.25rem', border: '1px solid #EAECF0', width: 'fit-content' }}>
          <button 
            onClick={() => setTab('overview')} 
            style={{ 
              background: tab === 'overview' ? 'var(--pms-yellow)' : 'transparent', 
              border: 'none', 
              color: tab === 'overview' ? 'var(--pms-black)' : '#667085', 
              fontWeight: '700', 
              cursor: 'pointer', 
              padding: '0.55rem 1.25rem', 
              borderRadius: '9px', 
              fontSize: '0.85rem',
              transition: 'all 0.2s ease'
            }}
          >
            Overview &amp; Recommendations
          </button>
          <button 
            onClick={() => setTab('applications')} 
            style={{ 
              background: tab === 'applications' ? 'var(--pms-yellow)' : 'transparent', 
              border: 'none', 
              color: tab === 'applications' ? 'var(--pms-black)' : '#667085', 
              fontWeight: '700', 
              cursor: 'pointer', 
              padding: '0.55rem 1.25rem', 
              borderRadius: '9px', 
              fontSize: '0.85rem',
              transition: 'all 0.2s ease'
            }}
          >
            Applications Tracker (2)
          </button>
        </div>

        {/* Main 2-Column Dashboard Grid */}
        <div className="grid-dashboard-2">
          
          {/* Left Main Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {tab === 'overview' ? (
              <div className="card-white">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)' }}>
                      AI MATCHED <span style={{ color: '#D97706' }}>OPPORTUNITIES</span>
                    </h2>
                    <p style={{ fontSize: '0.82rem', color: '#667085' }}>Open positions from verified partner employers</p>
                  </div>
                  <Link to="/jobs" style={{ color: 'var(--pms-black)', fontSize: '0.82rem', fontWeight: '700', textDecoration: 'none' }}>
                    View All
                  </Link>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {mockJobs.slice(0, 4).map(job => (
                    <div key={job.id} style={{ padding: '1rem 1.15rem', background: '#F8F9FA', borderRadius: '12px', border: '1px solid #EAECF0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.85rem' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                          <span className="badge-yellow" style={{ fontSize: '0.68rem', padding: '0.2rem 0.5rem' }}>96% FIT</span>
                          <span style={{ fontSize: '0.78rem', color: '#667085', fontWeight: '600' }}>{job.workSetup}</span>
                        </div>
                        <h3 style={{ color: 'var(--pms-black)', fontSize: '1rem', fontWeight: '800' }}>{job.title}</h3>
                        <p style={{ color: '#667085', fontSize: '0.82rem' }}>{job.companyName} • {job.location}</p>
                      </div>
                      <Link to="/jobs" className="btn-yellow" style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}>
                        Apply
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="card-white">
                <h2 style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)', marginBottom: '1.25rem' }}>
                  ACTIVE JOB APPLICATIONS
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ padding: '1rem 1.15rem', background: '#F8F9FA', borderRadius: '12px', borderLeft: '4px solid #D97706', border: '1px solid #EAECF0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                    <div>
                      <h3 style={{ color: 'var(--pms-black)', fontSize: '0.98rem', fontWeight: '800' }}>Senior React &amp; Fullstack Developer</h3>
                      <p style={{ color: '#667085', fontSize: '0.82rem' }}>AfriTech Solutions • Applied July 22, 2026</p>
                    </div>
                    <span className="badge-yellow" style={{ fontSize: '0.72rem' }}>
                      <Clock size={12} /> Interview Scheduled
                    </span>
                  </div>

                  <div style={{ padding: '1rem 1.15rem', background: '#F8F9FA', borderRadius: '12px', borderLeft: '4px solid var(--pms-yellow)', border: '1px solid #EAECF0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                    <div>
                      <h3 style={{ color: 'var(--pms-black)', fontSize: '0.98rem', fontWeight: '800' }}>Junior Frontend Engineer</h3>
                      <p style={{ color: '#667085', fontSize: '0.82rem' }}>Jongo Incubator Labs • Applied July 26, 2026</p>
                    </div>
                    <span className="badge-black" style={{ fontSize: '0.72rem' }}>
                      <CheckCircle2 size={12} /> Under Review
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Secondary Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Technical Proficiency Module */}
            <div className="card-white">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)' }}>SKILL MASTERY RADAR</h3>
                <Cpu size={20} style={{ color: 'var(--pms-yellow)' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {skillProficiency.map(skill => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.25rem', fontWeight: '700', color: 'var(--pms-black)' }}>
                      <span>{skill.name}</span>
                      <span style={{ color: '#D97706', fontFamily: 'monospace' }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: '6px', background: '#EAECF0', borderRadius: '999px', overflow: 'hidden' }}>
                      <div style={{ width: `${skill.level}%`, height: '100%', background: 'var(--pms-yellow)', borderRadius: '999px' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Capstone Card */}
            <div className="card-white" style={{ borderTop: '4px solid var(--pms-yellow)' }}>
              <span className="badge-yellow" style={{ fontSize: '0.68rem', marginBottom: '0.5rem' }}>PRIMARY CAPSTONE AUDIT</span>
              <h3 style={{ color: 'var(--pms-black)', fontSize: '1.05rem', fontWeight: '800', marginBottom: '0.35rem' }}>
                {graduate.projects[0]?.title}
              </h3>
              <p style={{ color: '#667085', fontSize: '0.82rem', marginBottom: '0.75rem', lineHeight: '1.5' }}>
                {graduate.projects[0]?.description}
              </p>
              <div style={{ fontSize: '0.78rem', color: '#D97706', fontWeight: '700', marginBottom: '0.85rem' }}>
                Impact: {graduate.projects[0]?.impact}
              </div>
              <a href={graduate.projects[0]?.githubUrl} target="_blank" rel="noreferrer" className="btn-outline-dark" style={{ width: '100%', justifyContent: 'center', padding: '0.5rem', fontSize: '0.82rem' }}>
                Code Repository <ExternalLink size={14} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
