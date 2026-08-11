import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckCircle2, Clock, MessageCircle, BookOpen, ShieldCheck, Cpu } from 'lucide-react';
import { mockMentors, mockGraduates } from '../data/mockData';

export default function MentorDashboard() {
  const [activeTab, setActiveTab] = useState('cohort');
  const mentor = mockMentors[0];
  const assignedGraduates = mockGraduates.filter(g => mentor.assignedGraduateIds.includes(g.id));

  const cohortMastery = [
    { track: 'Full Stack Web Capstones', completed: 85 },
    { track: 'Go Systems & Distributed Code', completed: 78 },
    { track: 'Cloud & DevOps Deployments', completed: 90 }
  ];

  return (
    <div style={{ background: '#F8F9FA', minHeight: '100vh', padding: '1.75rem 1.5rem 4rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Compact Dashboard Header Card */}
        <div className="card-white" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderLeft: '5px solid var(--pms-yellow)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
              <span className="badge-yellow" style={{ fontSize: '0.72rem' }}>👨‍🏫 MENTOR PORTAL</span>
              <span style={{ fontSize: '0.8rem', color: '#667085', fontWeight: '600' }}>Cohort {mentor.assignedCohort}</span>
            </div>
            <h1 style={{ fontSize: '1.85rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)' }}>
              Welcome back, {mentor.fullName.split(' ')[1]} <span style={{ fontSize: '1.5rem' }}>👋</span>
            </h1>
            <p style={{ color: '#667085', fontSize: '0.9rem', marginTop: '0.15rem' }}>
              {mentor.title} • Capstone Auditing &amp; Student Roster
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.65rem' }}>
            <span className="badge-yellow" style={{ padding: '0.55rem 1rem', fontSize: '0.82rem' }}>
              <Users size={14} /> {assignedGraduates.length} Assigned Graduates
            </span>
            <span className="badge-black" style={{ padding: '0.55rem 1rem', fontSize: '0.82rem' }}>
              <Clock size={14} /> {mentor.pendingReviews} Review Pending
            </span>
          </div>
        </div>

        {/* 4-Col KPI Metrics Row */}
        <div className="grid-kpi-4">
          <div className="kpi-card" style={{ borderTop: '4px solid var(--pms-yellow)' }}>
            <span style={{ color: '#667085', fontSize: '0.82rem', fontWeight: '600' }}>Assigned Graduates</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--pms-black)', marginTop: '0.4rem', fontFamily: 'var(--font-heading)' }}>
              {assignedGraduates.length}
            </h3>
            <span style={{ color: '#667085', fontSize: '0.75rem', fontWeight: '600' }}>Reactor Cohort {mentor.assignedCohort}</span>
          </div>

          <div className="kpi-card" style={{ borderTop: '4px solid var(--pms-yellow)' }}>
            <span style={{ color: '#667085', fontSize: '0.82rem', fontWeight: '600' }}>Check-ins This Week</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--pms-black)', marginTop: '0.4rem', fontFamily: 'var(--font-heading)' }}>
              {mentor.checkInsThisWeek}
            </h3>
            <span style={{ color: '#16A34A', fontSize: '0.75rem', fontWeight: '700' }}>Active Mentorship Log</span>
          </div>

          <div className="kpi-card" style={{ borderTop: '4px solid #D97706' }}>
            <span style={{ color: '#667085', fontSize: '0.82rem', fontWeight: '600' }}>Capstone Reviews Pending</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#D97706', marginTop: '0.4rem', fontFamily: 'var(--font-heading)' }}>
              {mentor.pendingReviews}
            </h3>
            <span style={{ color: '#D97706', fontSize: '0.75rem', fontWeight: '700' }}>Requires Code Audit</span>
          </div>

          <div className="kpi-card" style={{ borderTop: '4px solid var(--pms-black)' }}>
            <span style={{ color: '#667085', fontSize: '0.82rem', fontWeight: '600' }}>Verified Graduates</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--pms-black)', marginTop: '0.4rem', fontFamily: 'var(--font-heading)' }}>
              {assignedGraduates.filter(g => g.verificationBadge).length}
            </h3>
            <span className="badge-yellow" style={{ fontSize: '0.68rem', marginTop: '0.2rem' }}>CREDENTIALS ISSUED</span>
          </div>
        </div>

        {/* Tab Selection */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: '#FFFFFF', borderRadius: '12px', padding: '0.25rem', border: '1px solid #EAECF0', width: 'fit-content' }}>
          <button 
            onClick={() => setActiveTab('cohort')} 
            style={{ 
              background: activeTab === 'cohort' ? 'var(--pms-yellow)' : 'transparent', 
              border: 'none', 
              color: activeTab === 'cohort' ? 'var(--pms-black)' : '#667085', 
              fontWeight: '700', 
              cursor: 'pointer', 
              padding: '0.55rem 1.25rem', 
              borderRadius: '9px', 
              fontSize: '0.85rem',
              transition: 'all 0.2s ease'
            }}
          >
            My Assigned Cohort
          </button>
          <button 
            onClick={() => setActiveTab('reviews')} 
            style={{ 
              background: activeTab === 'reviews' ? 'var(--pms-yellow)' : 'transparent', 
              border: 'none', 
              color: activeTab === 'reviews' ? 'var(--pms-black)' : '#667085', 
              fontWeight: '700', 
              cursor: 'pointer', 
              padding: '0.55rem 1.25rem', 
              borderRadius: '9px', 
              fontSize: '0.85rem',
              transition: 'all 0.2s ease'
            }}
          >
            Capstone Code Reviews ({mentor.pendingReviews})
          </button>
        </div>

        {/* 2-Column Dashboard Grid */}
        <div className="grid-dashboard-2">
          
          {/* Left Column: Roster & Code Review */}
          <div>
            {activeTab === 'cohort' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {assignedGraduates.map(g => (
                  <div key={g.id} className="card-white" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderLeft: '4px solid var(--pms-yellow)' }}>
                    <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                      <img src={g.photo} alt={g.fullName} style={{ width: '48px', height: '48px', borderRadius: '12px', objectFit: 'cover' }} />
                      <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--pms-black)' }}>{g.fullName}</h3>
                        <p style={{ color: '#D97706', fontSize: '0.82rem', fontWeight: '700' }}>{g.title}</p>
                        <p style={{ color: '#667085', fontSize: '0.75rem' }}>{g.reactorTrack}</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                      {g.verificationBadge ? (
                        <span className="badge-yellow" style={{ fontSize: '0.72rem' }}><ShieldCheck size={12} /> Verified</span>
                      ) : (
                        <span style={{ background: '#FEF3C7', color: '#92400E', padding: '0.25rem 0.65rem', borderRadius: '999px', fontSize: '0.72rem', fontWeight: '700' }}>Awaiting Review</span>
                      )}
                      <Link to={`/graduate/${g.id}`} className="btn-outline-dark" style={{ fontSize: '0.82rem', padding: '0.45rem 0.85rem' }}>
                        Profile
                      </Link>
                      <button className="btn-yellow" style={{ fontSize: '0.82rem', padding: '0.45rem 0.85rem' }}>
                        <MessageCircle size={14} /> Log Check-in
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {assignedGraduates.filter(g => !g.verificationBadge).map(g => (
                  <div key={g.id} className="card-white" style={{ borderLeft: '4px solid #D97706' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--pms-black)' }}>{g.fullName} — Capstone Audit</h3>
                        <p style={{ color: '#667085', fontSize: '0.82rem', marginTop: '0.15rem' }}>
                          <BookOpen size={13} style={{ display: 'inline', verticalAlign: 'middle' }} /> {g.projects[0]?.title}
                        </p>
                      </div>
                      <button className="btn-yellow" style={{ fontSize: '0.82rem', padding: '0.45rem 0.85rem' }}>
                        <CheckCircle2 size={14} /> Approve Capstone &amp; Issue Badge
                      </button>
                    </div>
                    <p style={{ color: '#667085', fontSize: '0.85rem', lineHeight: '1.5' }}>{g.projects[0]?.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Cohort Progress Metrics */}
          <div>
            <div className="card-white">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)' }}>COHORT TRACK PROGRESS</h3>
                <Cpu size={20} style={{ color: 'var(--pms-yellow)' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {cohortMastery.map((item) => (
                  <div key={item.track}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.25rem', fontWeight: '700', color: 'var(--pms-black)' }}>
                      <span>{item.track}</span>
                      <span style={{ color: '#D97706', fontFamily: 'monospace' }}>{item.completed}%</span>
                    </div>
                    <div style={{ height: '6px', background: '#EAECF0', borderRadius: '999px', overflow: 'hidden' }}>
                      <div style={{ width: `${item.completed}%`, height: '100%', background: 'var(--pms-yellow)', borderRadius: '999px' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
