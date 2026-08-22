import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Briefcase, Save } from 'lucide-react';

export default function JobPostForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    employmentType: 'Full-time',
    targetAudience: 'Reactor_Graduates_Only',
    workSetup: 'Remote',
    location: '',
    requiredTechnicalSkills: '',
    requiredSoftSkills: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/employer');
  };

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    borderRadius: 'var(--radius-md)',
    background: '#F9FAFB',
    border: '1px solid #E5E7EB',
    color: 'var(--pms-black)',
    outline: 'none',
    fontSize: '0.9rem',
    fontFamily: 'var(--font-body)',
    transition: 'border 0.2s ease'
  };

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer'
  };

  const labelStyle = {
    fontSize: '0.82rem',
    color: 'var(--text-muted)',
    display: 'block',
    marginBottom: '0.35rem',
    fontWeight: '600'
  };

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>

      {/* Hero Header */}
      <section style={{ background: 'var(--pms-black-deep)', color: '#FFFFFF', padding: '2.5rem 2rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '5%', right: '20%', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.14)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '0', left: '30%', width: '300px', height: '200px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.1)', filter: 'blur(50px)' }} />
        <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Link to="/employer" style={{ color: '#D1D5DB', textDecoration: 'none', fontSize: '0.88rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginBottom: '1rem' }}>
            Back to Employer Dashboard
          </Link>
          <h1 style={{ fontSize: '2.2rem', fontWeight: '900', fontFamily: 'var(--font-heading)', marginTop: '0.5rem' }}>
            POST NEW <span style={{ color: 'var(--pms-yellow)' }}>JOB OPENING</span>
          </h1>
          <p style={{ color: '#D1D5DB', fontSize: '1rem', marginTop: '0.35rem' }}>Define job specifications to trigger the 4-vector AI Match Engine</p>
        </div>
      </section>

      <div style={{ maxWidth: '720px', margin: '-1.5rem auto 4rem', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
        <div className="card-white" style={{ padding: '2.5rem', borderTop: '6px solid var(--pms-yellow)', borderRadius: 'var(--radius-xl)' }}>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={labelStyle}>Job Title</label>
              <input
                type="text"
                placeholder="e.g. Senior Frontend Engineer"
                required
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                style={inputStyle}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Target Audience</label>
                <div style={{ ...selectStyle, background: '#F3F4F6', color: 'var(--text-muted)', fontWeight: '600' }}>
                  Reactor Graduates Only
                </div>
              </div>
              <div>
                <label style={labelStyle}>Work Setup</label>
                <select
                  value={formData.workSetup}
                  onChange={(e) => setFormData({...formData, workSetup: e.target.value})}
                  style={selectStyle}
                >
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="On-site">On-site</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Employment Type</label>
                <select
                  value={formData.employmentType}
                  onChange={(e) => setFormData({...formData, employmentType: e.target.value})}
                  style={selectStyle}
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Location</label>
                <input
                  type="text"
                  placeholder="e.g. Lagos, Nigeria (Remote)"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Required Technical Skills (Comma separated)</label>
              <input
                type="text"
                placeholder="React, Node.js, PostgreSQL, Docker"
                required
                value={formData.requiredTechnicalSkills}
                onChange={(e) => setFormData({...formData, requiredTechnicalSkills: e.target.value})}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Job Description</label>
              <textarea
                rows={4}
                placeholder="Outline project requirements and expectations..."
                required
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </div>

            <button type="submit" className="btn-yellow" style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', marginTop: '0.5rem', fontSize: '1rem' }}>
              <Save size={18} /> Publish Job Posting
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
