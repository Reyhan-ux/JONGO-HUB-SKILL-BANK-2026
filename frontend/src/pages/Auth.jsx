import React, { useState, useRef } from 'react';
import { useScroll } from 'framer-motion';
import AuthCard from '../components/auth/AuthCard';
import AuthVisualCanvas from '../components/auth/AuthVisualCanvas';

export default function Auth() {
  const [tab, setTab] = useState('login');
  const containerRef = useRef(null);

  useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <div
      ref={containerRef}
      className="auth-page-container"
      style={{
        background: `
          radial-gradient(circle 480px at 85% 15%, rgba(255, 188, 23, 0.46) 0%, rgba(255, 188, 23, 0.14) 50%, rgba(255, 255, 255, 0) 100%),
          radial-gradient(circle 420px at 8% 25%, rgba(255, 188, 23, 0.38) 0%, rgba(255, 188, 23, 0.10) 50%, rgba(255, 255, 255, 0) 100%),
          radial-gradient(circle 440px at 52% 48%, rgba(255, 188, 23, 0.32) 0%, rgba(255, 188, 23, 0.08) 50%, rgba(255, 255, 255, 0) 100%),
          radial-gradient(circle 460px at 82% 82%, rgba(255, 188, 23, 0.44) 0%, rgba(255, 188, 23, 0.12) 50%, rgba(255, 255, 255, 0) 100%),
          radial-gradient(circle 380px at 20% 88%, rgba(255, 188, 23, 0.36) 0%, rgba(255, 188, 23, 0.08) 50%, rgba(255, 255, 255, 0) 100%),
          #FFFFFF
        `
      }}
    >
      {/* Form Column using AuthCard */}
      <AuthCard initialTab={tab} onTabChange={setTab} />

      {/* Visual Canvas Column */}
      <AuthVisualCanvas tab={tab} />
    </div>
  );
}
