import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Save, ArrowLeft } from 'lucide-react';

export default function JobPostForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    employmentType: 'Full-time',
    targetTalentCategory: 'All_Talents',
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

  return (
    <div style={{ maxWidth: '720px', margin: '2rem auto', padding: '0 1.5rem' }}>
      <button onClick={() => navigate(-1)} className="btn-outline" style={{ marginBottom: '1.5rem', fontSize: '0.85rem' }}>
        <ArrowLeft size={16} /> Back to Dashboard
      </button>

      <div className="glass-card" style={{ padding: '2.5rem' }}>
        <h1 style={{ color: '#FFF', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Post New Job Opening</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Define job specifications to trigger the 4-vector AI Match Engine</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>Job Title</label>
            <input 
              type="text" 
              placeholder="e.g. Senior Frontend Engineer" 
              required
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', color: '#FFF' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>Target Audience</label>
              <select 
                value={formData.targetTalentCategory}
                onChange={(e) => setFormData({...formData, targetTalentCategory: e.target.value})}
                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: '#111827', border: '1px solid var(--border-glass)', color: '#FFF' }}
              >
                <option value="All_Talents">Open to All Developers</option>
                <option value="JongoHub_Graduates_Only">Jongo Hub Graduates Only</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>Work Setup</label>
              <select 
                value={formData.workSetup}
                onChange={(e) => setFormData({...formData, workSetup: e.target.value})}
                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: '#111827', border: '1px solid var(--border-glass)', color: '#FFF' }}
              >
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-site">On-site</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>Required Technical Skills (Comma separated)</label>
            <input 
              type="text" 
              placeholder="React, Node.js, PostgreSQL, Docker" 
              required
              value={formData.requiredTechnicalSkills}
              onChange={(e) => setFormData({...formData, requiredTechnicalSkills: e.target.value})}
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', color: '#FFF' }}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>Job Description</label>
            <textarea 
              rows={4} 
              placeholder="Outline project requirements and expectations..." 
              required
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', color: '#FFF', resize: 'vertical' }}
            />
          </div>

          <button type="submit" className="btn-amber" style={{ justifyContent: 'center', padding: '0.85rem' }}>
            <Save size={18} /> Publish Job Posting
          </button>
        </form>
      </div>
    </div>
  );
}
