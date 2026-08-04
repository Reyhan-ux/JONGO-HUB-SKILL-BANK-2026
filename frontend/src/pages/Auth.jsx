import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, LogIn, UserPlus, Check } from 'lucide-react';

export default function Auth() {
  const [tab, setTab] = useState('login');
  const [category, setCategory] = useState('JongoHub_Reactor_Graduate');
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div style={{ maxWidth: '480px', margin: '4rem auto', padding: '0 1rem' }}>
      <div className="glass-card" style={{ padding: '2.5rem' }}>
        
        {/* Header Tabs */}
        <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', padding: '0.25rem', marginBottom: '2rem' }}>
          <button 
            onClick={() => setTab('login')} 
            style={{ flex: 1, padding: '0.6rem', border: 'none', background: tab === 'login' ? 'var(--emerald)' : 'transparent', color: tab === 'login' ? '#042F2E' : 'var(--text-muted)', fontWeight: '600', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}
          >
            Sign In
          </button>
          <button 
            onClick={() => setTab('register')} 
            style={{ flex: 1, padding: '0.6rem', border: 'none', background: tab === 'register' ? 'var(--emerald)' : 'transparent', color: tab === 'register' ? '#042F2E' : 'var(--text-muted)', fontWeight: '600', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}
          >
            Create Account
          </button>
        </div>

        <h2 style={{ color: '#FFF', fontSize: '1.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>
          {tab === 'login' ? 'Welcome Back' : 'Join Skill Bank'}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', marginBottom: '1.5rem' }}>
          {tab === 'login' ? 'Access your verified developer or employer portal' : 'Choose your developer account category'}
        </p>

        <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {tab === 'register' && (
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>Talent Category</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => setCategory('JongoHub_Reactor_Graduate')}
                  style={{
                    padding: '0.75rem 0.5rem',
                    borderRadius: 'var(--radius-md)',
                    border: category === 'JongoHub_Reactor_Graduate' ? '1px solid var(--emerald)' : '1px solid var(--border-glass)',
                    background: category === 'JongoHub_Reactor_Graduate' ? 'rgba(16,185,129,0.1)' : 'transparent',
                    color: category === 'JongoHub_Reactor_Graduate' ? 'var(--emerald-light)' : 'var(--text-muted)',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Jongo Hub Graduate
                </button>
                <button
                  type="button"
                  onClick={() => setCategory('External_Developer')}
                  style={{
                    padding: '0.75rem 0.5rem',
                    borderRadius: 'var(--radius-md)',
                    border: category === 'External_Developer' ? '1px solid var(--amber)' : '1px solid var(--border-glass)',
                    background: category === 'External_Developer' ? 'rgba(245,158,11,0.1)' : 'transparent',
                    color: category === 'External_Developer' ? 'var(--amber)' : 'var(--text-muted)',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  External Developer
                </button>
              </div>
            </div>
          )}

          <div>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>Email Address</label>
            <input 
              type="email" 
              placeholder="dev@example.com" 
              required
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', color: '#FFF', outline: 'none' }} 
            />
          </div>

          <div>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required
              style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', color: '#FFF', outline: 'none' }} 
            />
          </div>

          <button type="submit" className="btn-emerald" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem', marginTop: '0.5rem' }}>
            {tab === 'login' ? <LogIn size={18} /> : <UserPlus size={18} />}
            {tab === 'login' ? 'Sign In to Portal' : 'Register Developer Account'}
          </button>
        </form>

      </div>
    </div>
  );
}
