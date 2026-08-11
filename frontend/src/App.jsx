import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Auth from './pages/Auth';
import TalentProfilePublic from './pages/TalentProfilePublic';
import TalentDashboard from './pages/TalentDashboard';
import TalentProfileEditor from './pages/TalentProfileEditor';
import JobMarketplace from './pages/JobMarketplace';
import EmployerDashboard from './pages/EmployerDashboard';
import TalentDirectory from './pages/TalentDirectory';
import JobPostForm from './pages/JobPostForm';
import AdminDashboard from './pages/AdminDashboard';
import AdminOperations from './pages/AdminOperations';
import MentorDashboard from './pages/MentorDashboard';

function FontSizeManager() {
  const location = useLocation();

  useEffect(() => {
    const isLanding = location.pathname === '/';
    if (isLanding) {
      document.documentElement.style.fontSize = '100%';
      document.body.classList.remove('non-landing-page');
      document.body.classList.add('landing-page');
    } else {
      document.documentElement.style.fontSize = '110%';
      document.body.classList.remove('landing-page');
      document.body.classList.add('non-landing-page');
    }
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <FontSizeManager />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/graduate/:id" element={<TalentProfilePublic />} />
            <Route path="/talent/:id" element={<TalentProfilePublic />} />

            {/* Graduate Routes */}
            <Route path="/dashboard" element={<TalentDashboard />} />
            <Route path="/profile" element={<TalentProfileEditor />} />
            <Route path="/jobs" element={<JobMarketplace />} />

            {/* Mentor Routes */}
            <Route path="/mentor" element={<MentorDashboard />} />

            {/* Employer Routes */}
            <Route path="/employer" element={<EmployerDashboard />} />
            <Route path="/employer/search" element={<TalentDirectory />} />
            <Route path="/employer/jobs/new" element={<JobPostForm />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/operations" element={<AdminOperations />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

