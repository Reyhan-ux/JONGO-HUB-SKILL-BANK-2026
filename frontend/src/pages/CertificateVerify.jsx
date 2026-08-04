import React from 'react';
import { useParams } from 'react-router-dom';
import { ShieldCheck, CheckCircle, Award, ExternalLink, QrCode } from 'lucide-react';
import { mockCertificates, mockTalents } from '../data/mockData';

export default function CertificateVerify() {
  const { code } = useParams();
  const cert = mockCertificates.find(c => c.credentialCode === code) || mockCertificates[0];
  const student = mockTalents.find(t => t.id === cert.studentId) || mockTalents[0];

  return (
    <div style={{ maxWidth: '720px', margin: '3rem auto', padding: '0 1.5rem' }}>
      <div className="glass-card glass-card-emerald" style={{ padding: '3rem', textAlign: 'center', position: 'relative' }}>
        
        {/* Verified Stamp Badge */}
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#042F2E', boxShadow: '0 0 30px var(--emerald-glow)' }}>
          <ShieldCheck size={48} />
        </div>

        <span className="badge-verified" style={{ fontSize: '0.9rem', padding: '0.4rem 1rem', marginBottom: '1.5rem' }}>
          OFFICIAL JONGO HUB DIGITAL CREDENTIAL
        </span>

        <h1 style={{ color: '#FFF', fontSize: '2.2rem', marginBottom: '0.5rem' }}>Certificate of Verification</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Issued to</p>

        <h2 style={{ color: 'var(--emerald-light)', fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.25rem' }}>{cert.studentName}</h2>
        <p style={{ color: 'var(--amber)', fontSize: '0.95rem', fontWeight: '600', marginBottom: '2rem' }}>{cert.programTrack}</p>

        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'left', marginBottom: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-sub)' }}>Credential Code</span>
            <div style={{ color: '#FFF', fontWeight: '600', fontFamily: 'monospace' }}>{cert.credentialCode}</div>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-sub)' }}>Issue Date</span>
            <div style={{ color: '#FFF', fontWeight: '600' }}>{cert.issueDate}</div>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-sub)' }}>Issuer Entity</span>
            <div style={{ color: '#FFF', fontWeight: '600' }}>{cert.issuer}</div>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-sub)' }}>Security Hash</span>
            <div style={{ color: 'var(--emerald-light)', fontWeight: '600', fontFamily: 'monospace', fontSize: '0.75rem' }}>{cert.securityHash}</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
          <img src={cert.qrCodeUrl} alt="QR Code" style={{ width: '100px', height: '100px', borderRadius: '8px', border: '2px solid var(--emerald)' }} />
          <div style={{ textAlign: 'left' }}>
            <p style={{ color: '#FFF', fontSize: '0.85rem', fontWeight: '600' }}>Verification Status: <span style={{ color: 'var(--emerald-light)' }}>VALID</span></p>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.75rem', marginTop: '0.25rem' }}>This credential is cryptographically anchored to Jongo Hub Reactor record databases.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
