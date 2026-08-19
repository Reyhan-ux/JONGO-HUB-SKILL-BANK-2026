import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Building, CheckSquare, TrendingUp, AlertCircle } from 'lucide-react';
import { mockGraduates, mockEmployers } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

export default function AdminDashboard() {
  const { user } = useAuth();
  const adminName = user?.fullName || 'Super Administrator';

  return (
    <div style={{ background: '#F8F9FA', minHeight: '100vh', padding: '1.75rem 1.5rem 4rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Compact Dashboard Header Card */}
        <div className="card-white" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderLeft: '5px solid var(--pms-yellow)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
              <span className="badge-yellow" style={{ fontSize: '0.72rem' }}>🛡️ ADMIN CONTROL CENTER</span>
              <span className="badge-black" style={{ fontSize: '0.72rem' }}>SYSTEM PLATFORM AUDIT</span>
            </div>
            <h1 style={{ fontSize: '1.85rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)' }}>
              PLATFORM COMMAND CENTER
            </h1>
            <p style={{ color: '#667085', fontSize: '0.9rem', marginTop: '0.15rem' }}>
              Logged in as {adminName} • Reactor Graduate Pipeline • Mentor Oversight • Credential Issuance
            </p>
          </div>

          <Link to="/admin/operations" className="btn-yellow" style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}>
            <CheckSquare size={16} /> Open Verification Queues
          </Link>
        </div>

        {/* 4-Col KPI Metrics Row */}
        <div className="grid-kpi-4">
          <div className="kpi-card" style={{ borderTop: '4px solid #D97706' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#667085', fontSize: '0.82rem', fontWeight: '600' }}>Pending Verifications</span>
              <AlertCircle size={18} style={{ color: '#D97706' }} />
            </div>
            <div style={{ marginTop: '0.4rem' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#D97706', fontWeight: '900', fontFamily: 'var(--font-heading)' }}>
                {mockGraduates.filter(g => !g.verificationBadge).length}
              </h3>
              <span style={{ color: '#667085', fontSize: '0.75rem', fontWeight: '600' }}>Awaiting capstone audit</span>
            </div>
          </div>

          <div className="kpi-card" style={{ borderTop: '4px solid var(--pms-yellow)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#667085', fontSize: '0.82rem', fontWeight: '600' }}>Issued Credentials</span>
              <Award size={18} style={{ color: 'var(--pms-black)' }} />
            </div>
            <div style={{ marginTop: '0.4rem' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--pms-black)', fontWeight: '900', fontFamily: 'var(--font-heading)' }}>148</h3>
              <span style={{ color: '#16A34A', fontSize: '0.75rem', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                <TrendingUp size={12} /> Valid Cryptographic Hashes
              </span>
            </div>
          </div>

          <div className="kpi-card" style={{ borderTop: '4px solid var(--pms-yellow)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#667085', fontSize: '0.82rem', fontWeight: '600' }}>Reactor Graduates</span>
              <Users size={18} style={{ color: 'var(--pms-black)' }} />
            </div>
            <div style={{ marginTop: '0.4rem' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--pms-black)', fontWeight: '900', fontFamily: 'var(--font-heading)' }}>
                {mockGraduates.length + 52}
              </h3>
              <span style={{ color: '#667085', fontSize: '0.75rem', fontWeight: '600' }}>Across all Reactor cohorts</span>
            </div>
          </div>

          <div className="kpi-card" style={{ borderTop: '4px solid var(--pms-black)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#667085', fontSize: '0.82rem', fontWeight: '600' }}>Vetted Employers</span>
              <Building size={18} style={{ color: 'var(--pms-black)' }} />
            </div>
            <div style={{ marginTop: '0.4rem' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--pms-black)', fontWeight: '900', fontFamily: 'var(--font-heading)' }}>
                {mockEmployers.length + 18}
              </h3>
              <span className="badge-yellow" style={{ fontSize: '0.68rem', marginTop: '0.2rem' }}>ALL PARTNERS VETTED</span>
            </div>
          </div>
        </div>

        {/* 2-Column Main Dashboard Grid */}
        <div className="grid-dashboard-2">
          
          {/* Left Column: System Operational Audit Logs */}
          <div className="card-white">
            <h2 style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)', marginBottom: '1.25rem' }}>
              SYSTEM <span style={{ color: '#D97706' }}>OPERATIONAL AUDIT LOGS</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ padding: '0.85rem 1rem', background: '#F8F9FA', borderRadius: '12px', border: '1px solid #EAECF0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ color: 'var(--pms-black)', fontWeight: '600' }}>
                  Credential <code style={{ color: '#D97706', fontWeight: '700', background: 'rgba(245, 208, 0, 0.2)', padding: '0.15rem 0.45rem', borderRadius: '4px' }}>JHR-2026-8942</code> issued to Amina Osei
                </span>
                <span style={{ color: '#667085', fontSize: '0.78rem', fontWeight: '600' }}>Today, 09:12 AM</span>
              </div>
              <div style={{ padding: '0.85rem 1rem', background: '#F8F9FA', borderRadius: '12px', border: '1px solid #EAECF0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ color: 'var(--pms-black)', fontWeight: '600' }}>
                  Employer <strong style={{ color: '#D97706' }}>AfriTech Solutions</strong> account status updated to Vetted
                </span>
                <span style={{ color: '#667085', fontSize: '0.78rem', fontWeight: '600' }}>Yesterday</span>
              </div>
              <div style={{ padding: '0.85rem 1rem', background: '#F8F9FA', borderRadius: '12px', border: '1px solid #EAECF0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ color: 'var(--pms-black)', fontWeight: '600' }}>
                  Mentor <strong style={{ color: '#D97706' }}>Dr. Ngozi Adeyemi</strong> submitted capstone audit for Samuel Ebo
                </span>
                <span style={{ color: '#667085', fontSize: '0.78rem', fontWeight: '600' }}>2 days ago</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Operations Trigger */}
          <div className="card-white" style={{ borderTop: '4px solid var(--pms-yellow)' }}>
            <span className="badge-yellow" style={{ fontSize: '0.68rem', marginBottom: '0.5rem' }}>QUICK MANAGEMENT</span>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '900', color: 'var(--pms-black)', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
              STAKEHOLDER QUEUES
            </h3>
            <p style={{ color: '#667085', fontSize: '0.82rem', marginBottom: '1.25rem', lineHeight: '1.5' }}>
              Audit pending capstone projects, assign mentors to new cohorts, and approve employer applications.
            </p>
            <Link to="/admin/operations" className="btn-yellow" style={{ width: '100%', justifyContent: 'center', padding: '0.6rem', fontSize: '0.85rem' }}>
              <CheckSquare size={16} /> Open Verification Queue
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
