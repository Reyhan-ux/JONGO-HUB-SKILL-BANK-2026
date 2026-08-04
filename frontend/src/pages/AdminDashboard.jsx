import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, Award, Building, CheckSquare } from 'lucide-react';
import { mockTalents, mockEmployers } from '../data/mockData';

export default function AdminDashboard() {
  return (
    <div style={{ maxWidth: '1280px', margin: '2rem auto', padding: '0 1.5rem' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ color: '#FFF', fontSize: '2rem' }}>Admin Control Center</h1>
          <p style={{ color: 'var(--text-muted)' }}>Platform oversight, verification queue management, and credential issuance</p>
        </div>
        <Link to="/admin/operations" className="btn-emerald">
          <CheckSquare size={16} /> Open Verification Queues
        </Link>
      </div>

      {/* Admin Quick Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <span style={{ color: 'var(--text-sub)', fontSize: '0.8rem' }}>Pending Verifications</span>
          <h3 style={{ fontSize: '2rem', color: 'var(--amber)', marginTop: '0.5rem' }}>3</h3>
          <span style={{ color: 'var(--text-sub)', fontSize: '0.75rem' }}>1 Graduate • 2 External</span>
        </div>
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <span style={{ color: 'var(--text-sub)', fontSize: '0.8rem' }}>Issued Credentials</span>
          <h3 style={{ fontSize: '2rem', color: 'var(--emerald-light)', marginTop: '0.5rem' }}>148</h3>
          <span style={{ color: 'var(--text-sub)', fontSize: '0.75rem' }}>Valid Cryptographic Hashes</span>
        </div>
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <span style={{ color: 'var(--text-sub)', fontSize: '0.8rem' }}>Registered Developers</span>
          <h3 style={{ fontSize: '2rem', color: '#FFF', marginTop: '0.5rem' }}>{mockTalents.length + 52}</h3>
        </div>
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <span style={{ color: 'var(--text-sub)', fontSize: '0.8rem' }}>Vetted Employers</span>
          <h3 style={{ fontSize: '2rem', color: 'var(--emerald-light)', marginTop: '0.5rem' }}>{mockEmployers.length + 18}</h3>
        </div>
      </div>

      {/* Platform Activity Overview */}
      <div className="glass-card" style={{ padding: '2rem' }}>
        <h2 style={{ color: '#FFF', fontSize: '1.25rem', marginBottom: '1rem' }}>System Operational Logs</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ padding: '0.85rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
            <span style={{ color: '#FFF' }}>Credential <code style={{ color: 'var(--emerald-light)' }}>JHR-2026-8942</code> issued to Amina Osei</span>
            <span style={{ color: 'var(--text-sub)' }}>Today, 09:12 AM</span>
          </div>
          <div style={{ padding: '0.85rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
            <span style={{ color: '#FFF' }}>Employer <strong style={{ color: 'var(--amber)' }}>AfriTech Solutions</strong> account status updated to Vetted</span>
            <span style={{ color: 'var(--text-sub)' }}>Yesterday</span>
          </div>
        </div>
      </div>

    </div>
  );
}
