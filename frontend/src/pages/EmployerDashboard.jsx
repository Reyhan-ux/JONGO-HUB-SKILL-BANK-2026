import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Users, Briefcase, MessageCircle, ExternalLink, ShieldCheck, TrendingUp, Building } from 'lucide-react';
import { mockEmployers, mockJobs, mockGraduates } from '../data/mockData';

export default function EmployerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const employer = mockEmployers[0];

  return (
    <div style={{ background: '#F8F9FA', minHeight: '100vh', padding: '1.75rem 1.5rem 4rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Compact Dashboard Header Card */}
        <div className="card-white" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderLeft: '5px solid var(--pms-yellow)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
              <span className="badge-yellow" style={{ fontSize: '0.72rem' }}>🏢 VETTED EMPLOYER PORTAL</span>
              <span className="badge-black" style={{ fontSize: '0.72rem' }}><ShieldCheck size={12} /> VERIFIED PARTNER</span>
            </div>
            <h1 style={{ fontSize: '1.85rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)' }}>
              {employer.companyName}
            </h1>
            <p style={{ color: '#667085', fontSize: '0.9rem', marginTop: '0.15rem' }}>
              {employer.industry} • {employer.location} • Exclusive Reactor Graduate Access
            </p>
          </div>

          <Link to="/employer/jobs/new" className="btn-yellow" style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}>
            <Plus size={16} /> Post New Role
          </Link>
        </div>

        {/* 4-Col KPI Metrics Row */}
        <div className="grid-kpi-4">
          <div className="kpi-card" style={{ borderTop: '4px solid var(--pms-yellow)' }}>
            <span style={{ color: '#667085', fontSize: '0.82rem', fontWeight: '600' }}>Open Job Listings</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--pms-black)', marginTop: '0.4rem', fontFamily: 'var(--font-heading)' }}>
              {employer.openRolesCount}
            </h3>
            <span style={{ color: '#667085', fontSize: '0.75rem', fontWeight: '600' }}>Active postings</span>
          </div>

          <div className="kpi-card" style={{ borderTop: '4px solid var(--pms-yellow)' }}>
            <span style={{ color: '#667085', fontSize: '0.82rem', fontWeight: '600' }}>Graduates Hired</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#D97706', marginTop: '0.4rem', fontFamily: 'var(--font-heading)' }}>
              8
            </h3>
            <span style={{ color: '#667085', fontSize: '0.75rem', fontWeight: '600' }}>Jongo Hub Reactor Alumni</span>
          </div>

          <div className="kpi-card" style={{ borderTop: '4px solid var(--pms-yellow)' }}>
            <span style={{ color: '#667085', fontSize: '0.82rem', fontWeight: '600' }}>Total Applicants</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--pms-black)', marginTop: '0.4rem', fontFamily: 'var(--font-heading)' }}>
              {mockGraduates.length}
            </h3>
            <span style={{ color: '#16A34A', fontSize: '0.75rem', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
              <TrendingUp size={12} /> +12% this week
            </span>
          </div>

          <div className="kpi-card" style={{ borderTop: '4px solid var(--pms-black)' }}>
            <span style={{ color: '#667085', fontSize: '0.82rem', fontWeight: '600' }}>Partner Status</span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--pms-black)', marginTop: '0.4rem' }}>
              Vetted Employer
            </h3>
            <span className="badge-yellow" style={{ fontSize: '0.68rem', marginTop: '0.2rem' }}>VERIFIED BY JONGO HUB</span>
          </div>
        </div>

        {/* Tab Selection */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: '#FFFFFF', borderRadius: '12px', padding: '0.25rem', border: '1px solid #EAECF0', width: 'fit-content' }}>
          <button
            onClick={() => setActiveTab('overview')}
            style={{
              background: activeTab === 'overview' ? 'var(--pms-yellow)' : 'transparent',
              border: 'none',
              color: activeTab === 'overview' ? 'var(--pms-black)' : '#667085',
              fontWeight: '700',
              cursor: 'pointer',
              padding: '0.55rem 1.25rem',
              borderRadius: '9px',
              fontSize: '0.85rem',
              transition: 'all 0.2s ease'
            }}
          >
            Overview &amp; Matched Candidates
          </button>
          <button
            onClick={() => setActiveTab('jobs')}
            style={{
              background: activeTab === 'jobs' ? 'var(--pms-yellow)' : 'transparent',
              border: 'none',
              color: activeTab === 'jobs' ? 'var(--pms-black)' : '#667085',
              fontWeight: '700',
              cursor: 'pointer',
              padding: '0.55rem 1.25rem',
              borderRadius: '9px',
              fontSize: '0.85rem',
              transition: 'all 0.2s ease'
            }}
          >
            Active Postings ({mockJobs.length})
          </button>
        </div>

        {/* Main 2-Column Dashboard Grid */}
        <div className="grid-dashboard-2">

          {/* Left Column: Applicants & Active Postings */}
          <div>
            {activeTab === 'overview' ? (
              <div className="card-white">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)' }}>
                      CANDIDATE <span style={{ color: '#D97706' }}>APPLICANT PIPELINE</span>
                    </h2>
                    <p style={{ fontSize: '0.82rem', color: '#667085' }}>Capstone-audited Reactor graduates</p>
                  </div>
                  <Link to="/employer/search" style={{ color: 'var(--pms-black)', fontSize: '0.82rem', fontWeight: '700', textDecoration: 'none' }}>
                    Browse Talent Directory
                  </Link>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {mockGraduates.map(graduate => (
                    <div key={graduate.id} style={{ padding: '0.85rem 1rem', background: '#F8F9FA', borderRadius: '12px', border: '1px solid #EAECF0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <img src={graduate.photo} alt={graduate.fullName} style={{ width: '44px', height: '44px', borderRadius: '10px', objectFit: 'cover' }} />
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <h3 style={{ color: 'var(--pms-black)', fontSize: '0.95rem', fontWeight: '800' }}>{graduate.fullName}</h3>
                            <span className="badge-yellow" style={{ fontSize: '0.68rem', padding: '0.15rem 0.45rem' }}>{graduate.matchScore}% FIT</span>
                          </div>
                          <p style={{ color: '#667085', fontSize: '0.8rem' }}>{graduate.title} • {graduate.reactorCohort}</p>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <Link to={`/graduate/${graduate.id}`} className="btn-outline-dark" style={{ padding: '0.4rem 0.75rem', fontSize: '0.78rem' }}>
                          Profile
                        </Link>
                        <a href={`https://wa.me/${graduate.contact.whatsapp}`} target="_blank" rel="noreferrer" className="btn-yellow" style={{ padding: '0.4rem 0.75rem', fontSize: '0.78rem' }}>
                          <MessageCircle size={13} /> Outreach
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {mockJobs.map(j => (
                  <div key={j.id} className="card-white" style={{ borderLeft: '4px solid var(--pms-yellow)' }}>
                    {/* Header Section */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div>
                        <h3 style={{ color: 'var(--pms-black)', fontSize: '1.05rem', fontWeight: '800' }}>{j.title}</h3>
                        <p style={{ color: '#667085', fontSize: '0.82rem' }}>Posted {j.postedDate} • {j.workSetup}</p>
                      </div>
                      <Link to="/employer/search" className="btn-outline-dark" style={{ fontSize: '0.82rem', padding: '0.45rem 0.85rem' }}>
                        Matched Candidates
                      </Link>
                    </div>

                    {/* Skills Section */}
                    <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                      {j.requiredTechnicalSkills.map(skill => (
                        <span key={skill} style={{ background: 'rgba(245, 208, 0, 0.15)', color: 'var(--pms-black)', padding: '0.2rem 0.55rem', borderRadius: '4px', fontSize: '0.72rem', fontWeight: '700' }}>{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Quick Hiring Actions Card */}
          <div>
            <div className="card-white" style={{ borderTop: '4px solid var(--pms-yellow)' }}>
              <span className="badge-yellow" style={{ fontSize: '0.68rem', marginBottom: '0.5rem' }}>RECRUITMENT SHORTCUTS</span>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                TALENT MATCH ENGINE
              </h3>
              <p style={{ color: '#667085', fontSize: '0.82rem', marginBottom: '1.25rem', lineHeight: '1.5' }}>
                Filter graduates by capstone tech stack, availability, and 4-vector compatibility fit scores.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <Link to="/employer/search" className="btn-yellow" style={{ width: '100%', justifyContent: 'center', padding: '0.6rem', fontSize: '0.85rem' }}>
                  Browse Graduate Directory
                </Link>
                <Link to="/employer/jobs/new" className="btn-outline-dark" style={{ width: '100%', justifyContent: 'center', padding: '0.6rem', fontSize: '0.85rem' }}>
                  Post New Opportunity
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}