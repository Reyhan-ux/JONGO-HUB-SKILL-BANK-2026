import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Auth from './pages/Auth';
import TalentProfilePublic from './pages/TalentProfilePublic';
import CertificateVerify from './pages/CertificateVerify';
import TalentDashboard from './pages/TalentDashboard';
import TalentProfileEditor from './pages/TalentProfileEditor';
import JobMarketplace from './pages/JobMarketplace';
import EmployerDashboard from './pages/EmployerDashboard';
import TalentDirectory from './pages/TalentDirectory';
import JobPostForm from './pages/JobPostForm';
import AdminDashboard from './pages/AdminDashboard';
import AdminOperations from './pages/AdminOperations';

export default function App() {
  const [currentRole, setCurrentRole] = useState('Talent');

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar currentRole={currentRole} setCurrentRole={setCurrentRole} />

        <main style={{ flex: 1 }}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/talent/:id" element={<TalentProfilePublic />} />
            <Route path="/verify/:code" element={<CertificateVerify />} />

            {/* Talent Routes */}
            <Route path="/dashboard" element={<TalentDashboard />} />
            <Route path="/profile" element={<TalentProfileEditor />} />
            <Route path="/jobs" element={<JobMarketplace />} />

            {/* Employer Routes */}
            <Route path="/employer" element={<EmployerDashboard />} />
            <Route path="/employer/search" element={<TalentDirectory />} />
            <Route path="/employer/jobs/new" element={<JobPostForm />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/operations" element={<AdminOperations />} />
          </Routes>
        </main>

        <footer style={{ borderTop: '1px solid var(--border-glass)', padding: '1.5rem', textAlign: 'center', color: 'var(--text-sub)', fontSize: '0.8rem', marginTop: '4rem' }}>
          Jongo Hub Reactor Skill Bank © 2026 • Obsidian Dark & Emerald Verification Engine
        </footer>
      </div>
    </Router>
  );
}
