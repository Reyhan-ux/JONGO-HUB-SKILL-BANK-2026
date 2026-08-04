import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ChevronDown, Star, Search, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import codingSvg from '../assets/code-typing-cuate.svg';
import codeReviewSvg from '../assets/Codereview-cuate.svg';
import marketingSvg from '../assets/Marketing-cuate.svg';
import certificationSvg from '../assets/Certification-cuate.svg';
import oversightGif from '../assets/oversight.gif';
import contentSvg from '../assets/business-plan-not-css.svg?raw';
import WorldConnect from '../assets/Connectedworld-rafiki (1).svg';
import innovation from '../assets/Innovation-rafiki.svg';
import softwaregif from '../assets/software.gif';
import graphicdesigngif from '../assets/graphic-designer.gif';
import cybersecuritygif from '../assets/cybersecurity.gif';
import databasegif from '../assets/database.gif';
import artifisialintelligencegif from '../assets/artificial-intelligence.gif';
import feedbackSvg from '../assets/feedback.svg?raw';
import DevicesSvg from '../assets/Devices.svg';
// Animated badge icon asset for the 450+ stat overlay
import clipboardGif from '../assets/clipboard.gif';

const heroImageStyle = {
  width: '100%',
  height: 'auto',
  maxWidth: '900px',
  margin: '0 auto',
  display: 'block',
  animation: 'heroFloat 8s cubic-bezier(.25,.46,.45,.94) infinite, heroPulse 10s ease-in-out infinite',
  transformOrigin: 'center center',
  willChange: 'transform,opacity',
  transition: 'transform 600ms cubic-bezier(.22,.9,.32,1)',
};

const heroHeadingStyle = {
  opacity: 0,
  transform: 'translateY(20px)',
  animation: 'heroSlideIn 0.9s ease-out forwards',
};

const heroTextStyle = {
  opacity: 0,
  transform: 'translateY(12px)',
  animation: 'heroFadeIn 1s ease-out 0.15s forwards',
};

const sectionFlowStyle = {
  position: 'relative',
  overflow: 'hidden',
  margin: '0 auto',
  padding: '5rem 2rem',
  boxSizing: 'border-box',
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const swipeImages = [marketingSvg, codeReviewSvg, WorldConnect, certificationSvg, innovation];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % swipeImages.length);
    }, 5600);
    return () => clearInterval(interval);
  }, [swipeImages.length]);

  const faqs = [
    {
      q: "How does Jongo Hub verify developer skills?",
      a: "All Jongo Hub Reactor graduates undergo rigorous capstone project code reviews and repository audits by senior engineers before receiving their official verified badge."
    },
    {
      q: "What are Cryptographic QR Digital Credentials?",
      a: "Each verified graduate is issued a tamper-proof digital certificate with a unique security hash and QR code, allowing employers to instantly verify authenticity online."
    },
    {
      q: "How does the AI Compatibility Match Engine work?",
      a: "The match engine calculates a dynamic 4-vector score comparing technical skills, work setup, soft skills, and project domain requirements between talent and employer job specs."
    },
    {
      q: "Can external developers join the Skill Bank?",
      a: "Yes! External developers can register, upload their portfolio, and apply to open verification audits to earn the Community Verified badge."
    }
  ];

  return (
    <div style={{ background: 'var(--bg-page)', color: 'var(--text-dark)' }}>
      <style>{`
        @keyframes heroFloat {
          0% { transform: translateY(0px) scale(1); }
          30% { transform: translateY(-6px) scale(1.008); }
          60% { transform: translateY(-10px) scale(1.012); }
          100% { transform: translateY(0px) scale(1); }
        }

        @keyframes heroPulse {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.02); }
          100% { transform: translateY(0) scale(1.045); }
        }

        @keyframes heroSlideIn {
          0% { opacity: 0; transform: translateY(18px); }
          60% { opacity: 1; transform: translateY(0); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes heroFadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          80% { opacity: 1; transform: translateY(0); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes buttonFloat {
          0% { transform: translateY(0px) scale(1); }
          45% { transform: translateY(-6px) scale(1.01); }
          55% { transform: translateY(-4px) scale(1.005); }
          100% { transform: translateY(0px) scale(1); }
        }

        @keyframes badgeFloat {
          0% { transform: translateY(0px); }
          25% { transform: translateY(-8px); }
          50% { transform: translateY(-4px); }
          75% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }

        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        svg#freepik_stories-business-plan {
          width: 100%;
          height: auto;
          display: block;
        }

        svg#freepik_stories-business-plan:not(.animated) .animable {
          opacity: 0;
        }

        svg#freepik_stories-business-plan.animated #freepik--background-complete--inject-20 {
          animation: 1.5s infinite linear heartbeat;
          animation-delay: 0s;
        }

        svg#freepik_stories-business-plan.animated #freepik--character-2--inject-20 {
          animation: 1.5s infinite linear wind;
          animation-delay: 0s;
        }

        svg#freepik_stories-business-plan.animated #freepik--speech-bubble--inject-20 {
          animation: 1.5s infinite linear shake;
          animation-delay: 0s;
        }

        @keyframes heartbeat {
          0% { transform: scale(1); }
          10% { transform: scale(1.1); }
          30% { transform: scale(1); }
          40% { transform: scale(1); }
          50% { transform: scale(1.1); }
          60% { transform: scale(1); }
          100% { transform: scale(1); }
        }

        @keyframes wind {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }

        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }

        svg#freepik_stories-feedback:not(.animated) .animable {
          opacity: 0;
        }

        svg#freepik_stories-feedback.animated #freepik--background-complete--inject-71 {
          animation: 3s infinite linear shake;
          animation-delay: 0s;
        }

        svg#freepik_stories-feedback.animated #freepik--Stars--inject-71 {
          animation: 6s infinite linear spin;
          animation-delay: -1s;
        }

        svg#freepik_stories-feedback.animated #freepik--character-2--inject-71 {
          animation: 3s infinite linear heartbeat;
          animation-delay: 0s;
        }

        @keyframes spin {
          from { transform: rotate(0); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .hero-split-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-visual-panel {
            margin-top: 1rem !important;
            min-height: 180px !important;
          }
          .hero-title {
            font-size: 2.5rem !important;
          }
          .testimonial-row {
            flex-direction: column-reverse !important;
          }
          .track-scrollbar {
            padding: 1rem 0.5rem !important;
          }
        }
      `}</style>

      {/* 1. HERO SECTION (Split Banner with Embedded Search Card - Matching Arobix Hero) */}
      <section style={{ background: 'var(--pms-black-deep)', color: '#FFFFFF', padding: '1.2rem 1.25rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-split-grid" style={{ maxWidth: '1360px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '2rem', alignItems: 'center' }}>

          {/* Hero Left Content */}
          <div>
            <h1 className="hero-title" style={{ ...heroHeadingStyle, fontSize: '3.6rem', fontWeight: '900', lineHeight: 1.05, marginBottom: '1rem', color: '#FFFFFF', fontFamily: 'var(--font-heading)', textTransform: 'uppercase' }}>
              HIRE VERIFIED AFRICAN <br />
              <span style={{ color: 'var(--pms-yellow)' }}>SOFTWARE TALENT</span> FASTER.
            </h1>
            <p style={{ ...heroTextStyle, fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '1.5rem', maxWidth: '620px', lineHeight: '1.75' }}>
              Connect with vetted Jongo Hub graduates who pass capstone audits, carry digital credentials, and are matched using AI compatibility scoring for your team.
            </p>

           

            {/* Embedded Talent Search Card */}
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '0.5rem', maxWidth: '560px', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 200px', position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Job role / Skill..."
                  style={{ width: '100%', padding: '0.85rem 1rem 0.85rem 2.75rem', borderRadius: 'var(--radius-pill)', border: 'none', outline: 'none', fontSize: '0.9rem' }}
                />
                <Search size={18} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }} />
              </div>
              <div style={{ flex: '1 1 180px', position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Location..."
                  style={{ width: '100%', padding: '0.85rem 1rem 0.85rem 2.75rem', borderRadius: 'var(--radius-pill)', border: 'none', outline: 'none', fontSize: '0.9rem' }}
                />
                <MapPin size={18} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }} />
              </div>
              <button type="submit" className="btn-yellow" style={{ flex: '0 0 auto', padding: '0 1.5rem' }}>
                <Search size={18} />
              </button>
            </form>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <Link to="/employer/search" className="btn-yellow" style={{ padding: '1rem 2rem', fontSize: '1rem', animation: 'buttonFloat 6s ease-in-out infinite', willChange: 'transform' }}>
                Find Tech Talent 
              </Link>
              <Link
                to="/auth"
                className="btn-black"
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  border: '1px solid var(--pms-yellow)',
                  boxShadow: '0 0 0 1px rgba(252,191,5,0.2), 0 18px 60px rgba(252,191,5,0.12)',
                  background: 'rgba(0, 0, 0, 0.95)',
                  position: 'relative',
                  zIndex: 1,
                  animation: 'buttonFloat 6s ease-in-out infinite',
                  willChange: 'transform',
                }}
              >
                Join as Developer
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: '620px' }}>
              <div style={{ background: '#191919', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Phone size={26} style={{ color: 'var(--pms-yellow)', minWidth: '26px' }} />
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#9CA3AF', display: 'block' }}>Hotline Inquiry</span>
                  <strong style={{ fontSize: '0.9rem', color: '#FFF' }}>+237 670 123 456</strong>
                </div>
              </div>
              <div style={{ background: '#191919', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <MapPin size={26} style={{ color: 'var(--pms-yellow)', minWidth: '26px' }} />
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#9CA3AF', display: 'block' }}>Headquarters</span>
                  <strong style={{ fontSize: '0.9rem', color: '#FFF' }}>Buea, Cameroon</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Nitch Code Animation  */}
          <div className="hero-visual-panel" style={{ alignSelf: 'start', marginTop: '-2.4rem', position: 'relative', minHeight: '520px' }}>
            <div style={{ position: 'absolute', top: '10%', left: '18%', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.18)', filter: 'blur(36px)', zIndex: 0 }} />
            <div style={{ position: 'absolute', top: '12%', right: '18%', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.18)', filter: 'blur(36px)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '-5%', left: '50%', transform: 'translateX(-50%)', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.18)', filter: 'blur(48px)', zIndex: 0 }} />
            <img
              className="hero-visual-raw"
              src={codingSvg}
              alt="Code typing illustration"
              style={{ ...heroImageStyle, position: 'relative', zIndex: 1 }}
            />
          </div>

        </div>
      </section>

      {/* 2. INFINITE TICKER MARQUEE */}
      {/*
        This ticker uses a repeated sequence of phrases inside a single scrolling track.
        The `.ticker-track` element animates leftward and the repeated items make the loop seamless.
      */}
      <div className="ticker-banner">
        <div className="ticker-track">
          <span>AI JOB MATCHING</span>
          <span>PROOF OF WORK PORTFOLIO</span>
          <span>DIGITAL CREDENTIALS</span>
          <span>SOCIAL NETWORKING</span>
          <span>JOB MATCH SCORES</span>
          <span>TAMPER-PROOF CERTIFICATES</span>
          <span>AI JOB MATCHING</span>
          <span>PROOF OF WORK PORTFOLIO</span>
          <span>DIGITAL CREDENTIALS</span>
          <span>SOCIAL NETWORKING</span>
          <span>JOB MATCH SCORES</span>
          <span>TAMPER-PROOF CERTIFICATES</span>
        </div>
      </div>

      {/* 3. HOW JONGO HUB SKILL BANK WORKS */}
      <section style={{ ...sectionFlowStyle, background: 'linear-gradient(180deg, #FFFDF6 0%, #FFFFFF 100%)' }}>
        <div style={{ position: 'absolute', top: '0.5rem', left: '24%', width: '240px', height: '70px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.18)', filter: 'blur(50px)' }} />
        <div style={{ position: 'absolute', top: '15%', left: '48%', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.16)', filter: 'blur(50px)' }} />
        <div style={{ position: 'absolute', bottom: '8%', left: '24%', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.14)', filter: 'blur(50px)' }} />
        <div style={{ position: 'absolute', bottom: '1.5rem', right: '4rem', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(17, 17, 17, 0.06)', filter: 'blur(40px)' }} />

        <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: '720px', textAlign: 'left' }}>
              <span style={{ color: '#ffbc17', fontWeight: '800', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.18em' }}>How it works</span>
              <h2 style={{ fontSize: '3.1rem', fontWeight: '900', color: 'var(--pms-black)', margin: '0.5rem 0 1.5rem', lineHeight: '1.2' }}>
              HOW <span style={{ color: '#ffbc17' }}> JONGO HUB SKILL BANK</span><span style={{ color: 'var(--pms-black)' }}> WORKS</span>
            </h2>
              <p style={{ color: '#5b6477', fontSize: '1.112rem', lineHeight: '1.8', marginTop: '1.25rem', maxWidth: '620px' }}>
              Get the skills that are driving growth today. We connect you with top-tier developers experienced in building scalable products, resilient cloud systems, high-performance mobile apps, and robust engineering platforms. Whether you're scaling in Africa or globally, we match you with talent that delivers real impact from day one.
              </p>
            </div>

            <div style={{ flex: '0 0 460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div
                dangerouslySetInnerHTML={{ __html: contentSvg }}
                style={{ width: '100%', maxWidth: '420px', borderRadius: '2rem', overflow: 'hidden' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
            <div className="card-white floating-card" style={{ background: 'linear-gradient(180deg, #111111 0%, #1A1A1A 100%)', color: '#F9F0B7', borderColor: 'rgba(252, 191, 5, 0.22)', borderTop: '12px solid #FBBF24', borderRadius: '2rem', boxShadow: '0 24px 70px rgba(17, 17, 17, 0.16)', padding: '2rem', minHeight: '320px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: '#FBBF24', color: '#111111', fontWeight: 900, fontSize: '1.76rem', fontFamily: 'Jost, sans-serif', fontStyle: 'italic' }}>1</div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FBBF24', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Employers</span>
              </div>
              <h3 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.85rem' }}>For Employers</h3>
              <p style={{ color: '#E5E7EB', fontSize: '0.96rem', lineHeight: '1.8', margin: 0 }}>
                Employers post roles, review verified talent profiles, and shortlist candidates backed by portfolio proof, digital credentials, and AI job-match scoring.
              </p>
            </div>

            <div className="card-white floating-card" style={{ background: 'linear-gradient(180deg, #FBBF24 0%, #FFD34D 100%)', color: '#111111', borderColor: 'rgba(17, 24, 39, 0.14)', borderTop: '12px solid #111111', borderRadius: '2rem', boxShadow: '0 24px 70px rgba(252, 191, 5, 0.18)', padding: '2rem', minHeight: '320px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: '#111111', color: '#FBBF24', fontWeight: 900, fontSize: '1.76rem', fontFamily: 'Jost, sans-serif', fontStyle: 'italic' }}>2</div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#111111', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Graduates</span>
              </div>
              <h3 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#111111', marginBottom: '0.85rem' }}>For Jongo Hub Reactor Program Graduates</h3>
              <p style={{ color: '#1F2937', fontSize: '0.96rem', lineHeight: '1.8', margin: 0 }}>
                Graduates build a verified profile, complete capstone review, unlock credentialed badges, and become discoverable to employers seeking real delivery-ready developers.
              </p>
            </div>

            <div className="card-white floating-card" style={{ background: 'linear-gradient(180deg, #111111 0%, #1A1A1A 100%)', color: '#F9F0B7', borderColor: 'rgba(252, 191, 5, 0.22)', borderTop: '12px solid #FBBF24', borderRadius: '2rem', boxShadow: '0 24px 70px rgba(17, 17, 17, 0.16)', padding: '2rem', minHeight: '320px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: '#FBBF24', color: '#111111', fontWeight: 900, fontSize: '1.76rem', fontFamily: 'Jost, sans-serif', fontStyle: 'italic' }}>3</div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FBBF24', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Talent</span>
              </div>
              <h3 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.85rem' }}>For External Talents</h3>
              <p style={{ color: '#E5E7EB', fontSize: '0.96rem', lineHeight: '1.8', margin: 0 }}>
                Independent developers can register, present portfolio evidence, and go through the same verification pipeline to earn trusted visibility across the platform.
              </p>
            </div>

            <div className="card-white floating-card" style={{ background: 'linear-gradient(180deg, #FBBF24 0%, #FFD34D 100%)', color: '#111111', borderColor: 'rgba(17, 24, 39, 0.14)', borderTop: '12px solid #111111', borderRadius: '2rem', boxShadow: '0 24px 70px rgba(252, 191, 5, 0.18)', padding: '2rem', minHeight: '320px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: '#111111', color: '#FBBF24', fontWeight: 900, fontSize: '1.76rem', fontFamily: 'Jost, sans-serif', fontStyle: 'italic' }}>4</div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#111111', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Coaches</span>
              </div>
              <h3 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#111111', marginBottom: '0.85rem' }}>For Reactor Coaches</h3>
              <p style={{ color: '#1F2937', fontSize: '0.96rem', lineHeight: '1.8', margin: 0 }}>
                Coaches follow up with reactor interns, track mentor check-ins, and keep learners on a clear progression path from onboarding to verified placement readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ASYMMETRIC SHOWCASE SECTION (Matching Arobix "A Worthy Company" section) */}
      <section style={{ ...sectionFlowStyle, maxWidth: '1360px', padding: '5rem 2rem', background: '#FFFFFF' }}>
        <div style={{ position: 'absolute', top: '3rem', left: '14%', width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.16)', filter: 'blur(50px)', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '44%', right: '12%', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.14)', filter: 'blur(50px)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '1rem', left: '42%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.12)', filter: 'blur(50px)', zIndex: 0 }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>

          {/* Collage Images & Floating Stat Badge */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', position: 'relative' }}>
            <div style={{ gridColumn: 'span 2', position: 'relative', width: '100%', minHeight: '660px', background: 'transparent', overflow: 'visible', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: '3rem' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, x: 40, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -40, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  style={{ position: 'relative', width: '79%', background: '#0d0d0d', borderRadius: '2.75rem', boxShadow: '0 32px 90px rgba(0,0,0,0.22)', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', bottom: 'calc(2.5rem + 8%)', borderTop: '8px solid #fcbf05' }}
                >
                  <div style={{ position: 'absolute', top: '8%', left: '8%', width: '230px', height: '230px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.28)', filter: 'blur(60px)', zIndex: 0 }} />
                  <div style={{ position: 'absolute', bottom: '10%', right: '12%', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.22)', filter: 'blur(64px)', zIndex: 0 }} />
                  <motion.img
                    src={swipeImages[activeSlide]}
                    alt={`Why choose us image ${activeSlide + 1}`}
                    initial={false}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                    style={{ position: 'relative', width: '100%', maxWidth: '100%', height: 'auto', margin: '0', objectFit: 'cover', objectPosition: 'center center', borderRadius: '0', boxShadow: '0 0 100px rgba(252,191,5,0.18)', zIndex: 1 }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stat Overlay Badge (Yellow Card matching Arobix) */}
            <div style={{ gridColumn: 'span 2', background: '#000000', padding: '1.5rem 2rem', paddingBottom: '2rem', borderRadius: '2.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', boxShadow: 'none', position: 'absolute', zIndex: 2, width: '79%', left: '10.5%', bottom: '-12%', animation: 'badgeFloat 6s ease-in-out infinite', willChange: 'transform' }}>
              {/* Animated GIF badge icon for the 450+ stat card.
                  The outer holder is transparent, and the animated GIF itself has a gentler rounded corner radius.
                  The surrounding border has been removed so the GIF appears clean and integrated in the badge. */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '84px', height: '84px', borderRadius: '14px', background: 'transparent', padding: '0.6rem' }}>
                <img src={clipboardGif} alt="clipboard animation" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '10px' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '2.4rem', fontWeight: '900', color: 'var(--pms-yellow)', fontFamily: '"Oswald", sans-serif' }}>450+</h3>
                <p style={{ fontWeight: '700', color: 'var(--pms-yellow)', fontSize: '1rem', textTransform: 'uppercase', fontFamily: '"Oswald", sans-serif' }}>Verified Jongo Hub Reactor Graduates</p>
              </div>
            </div>
          </div>

          {/* Right Text & Features */}
          <div style={{ paddingLeft: '6.5rem' }}>
            <span style={{ color: '#ffbc17', fontWeight: '800', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.18em' }}>why choose us</span>
            <h2 style={{ fontSize: '3.1rem', fontWeight: '900', color: 'var(--pms-black)', margin: '0.5rem 0 1.5rem', lineHeight: '1.2' }}>
              WE ARE A<span style={{ color: '#ffbc17' }}> TRUSTED TALENT BASED PLATFORM.</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', maxWidth: '520px' }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{ background: 'linear-gradient(180deg, rgba(252,191,5,0.12), rgba(252,191,5,0.06))', padding: '1.25rem', borderRadius: '1.25rem', borderLeft: '6px solid #fcbf05', boxShadow: '0 18px 40px rgba(252, 191, 5, 0.12)', transition: 'transform 200ms ease, box-shadow 200ms ease' }}
              >
                <h4 style={{ color: 'var(--pms-black)', fontSize: '1.25rem', fontWeight: '900', textTransform: 'uppercase', margin: 0 }}>Industry-Reviewed Code</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.5rem' }}>All capstone projects receive a senior mentor audit and a formal approval before issuing verified credentials.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                style={{ background: 'rgba(252, 191, 5, 0.14)', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #fcbf05', boxShadow: '0 14px 30px rgba(252, 191, 5, 0.1)' }}
              >
                <h4 style={{ color: 'var(--pms-black)', fontSize: '1.25rem', fontWeight: '900', textTransform: 'uppercase' }}>Secure Digital Certificates</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Instantly verifiable certificates that can’t be faked or altered.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                style={{ background: 'rgba(252, 191, 5, 0.14)', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #fcbf05', boxShadow: '0 14px 30px rgba(252, 191, 5, 0.1)' }}
              >
                <h4 style={{ color: 'var(--pms-black)', fontSize: '1.25rem', fontWeight: '900', textTransform: 'uppercase' }}>AI Compatibility Matching</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Matches developer profiles to employer requirements using a dynamic skills and culture scoring model.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                style={{ background: 'rgba(252, 191, 5, 0.14)', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #fcbf05', boxShadow: '0 14px 30px rgba(252, 191, 5, 0.1)' }}
              >
                <h4 style={{ color: 'var(--pms-black)', fontSize: '1.25rem', fontWeight: '900', textTransform: 'uppercase' }}>Real-Time Talent Pairing</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Quickly surface the best candidates with live matching and instant availability signals.</p>
              </motion.div>
            </div>

            <Link to="/employer/search" className="btn-yellow" style={{ color: 'var(--pms-black)', fontWeight: 700 }}>
              Explore Talent Directory
            </Link>
          </div>

        </div>
      </section>

      {/* 4. TRACK / CATEGORY GRID (Upgraded authoring for a stronger engineering showcase) */}
      <section style={{ ...sectionFlowStyle, background: '#FFFFFF' }}>
        <div style={{ position: 'absolute', top: '3rem', left: '18%', width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.16)', filter: 'blur(50px)' }} />
        <div style={{ position: 'absolute', top: '14rem', right: '16%', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.14)', filter: 'blur(50px)' }} />
        <div style={{ position: 'absolute', bottom: '2rem', left: '44%', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.12)', filter: 'blur(50px)' }} />
        <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: '720px' }}>
              <span style={{ color: '#ffbc17', fontWeight: '800', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.18em' }}>ENGINEERING TRACKS</span>
              <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: 'var(--pms-black)', marginTop: '0.75rem', lineHeight: '1.05' }}>
              MOST SOUGHT AFTER SKILLS RIGHT NOW... <br/> <span style={{ color: '#ffbc17' }}>Top Talent, Top Demand.</span>
              </h2>

              <p style={{ color: '#5b6477', fontSize: '1.112rem', lineHeight: '1.8', marginTop: '1.25rem', maxWidth: '620px' }}>
              Get the skills that are driving growth today. We connect you with top-tier developers experienced in building scalable products, resilient cloud systems, high-performance mobile apps, and robust engineering platforms. Whether you're scaling in Africa or globally, we match you with talent that delivers real impact from day one.
              </p>
            </div>
            <div style={{ flex: '0 0 460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={oversightGif} alt="Oversight illustration" style={{ width: '100%', maxWidth: '600px', borderRadius: '2rem', objectFit: 'cover' }} />
            </div>
          </div>

          <div className="track-scrollbar" style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', padding: '1.5rem 0 2rem', alignItems: 'stretch', WebkitOverflowScrolling: 'touch', background: '#FFFFFF', borderRadius: '3rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>

            <div className="card-white floating-card" style={{ flex: '0 0 320px', minWidth: '320px', background: '#111111', borderTop: '12px solid #FBBF24', border: 'none', borderRadius: '3.5rem', padding: '2.2rem', minHeight: '360px', boxShadow: '0 18px 36px rgba(0, 0, 0, 0.12)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#F9F0B7' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '18px', background: '#FBBF24', overflow: 'hidden' }}>
                  <img src={softwaregif} alt="Software" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FBBF24', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Product</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.55rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.8rem' }}>Full Stack Web</h3>
                <p style={{ color: '#E5E7EB', fontSize: '0.96rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  Build fast, resilient web platforms backed by React, Node, TypeScript and scalable API delivery.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ background: '#ffbc17', color: '#111111', padding: '0.4rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>React</span>
                  <span style={{ background: '#ffbc17', color: '#111111', padding: '0.4rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>TypeScript</span>
                  <span style={{ background: '#ffbc17', color: '#111111', padding: '0.4rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>API</span>
                </div>
              </div>
              <Link to="/employer/search" style={{ color: '#FBBF24', fontWeight: 700, textDecoration: 'none', display: 'flex', justifyContent: 'center', fontSize: '0.95rem' }}>
                HIRE FULL STACK TALENT
              </Link>
            </div>

            <div className="card-white floating-card" style={{ flex: '0 0 320px', minWidth: '320px', background: 'linear-gradient(180deg, #FFF9EB 0%, #F9F3D6 100%)', borderTop: '10px solid rgba(17,17,17,0.9)', border: '1px solid rgba(17, 24, 39, 0.08)',
               borderRadius: '2.75rem', padding: '2.25rem', minHeight: '340px', boxShadow: '0 30px 80px rgba(252, 191, 5, 0.12)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#111111', transition: 'transform 220ms ease, box-shadow 220ms ease' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '18px', background: '#111111', overflow: 'hidden' }}>
                  <img src={cybersecuritygif} alt="Systems" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#111111', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Systems</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.55rem', fontWeight: 900, color: '#111111', marginBottom: '0.8rem' }}>Systems & Go</h3>
                <p style={{ color: '#1F2937', fontSize: '0.96rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  Ship reliable infrastructure with Go microservices, caching, gRPC, and container-native workflows.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ background: '#111111', color: '#FBBF24', padding: '0.4rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>Go</span>
                  <span style={{ background: '#111111', color: '#FBBF24', padding: '0.4rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>Docker</span>
                  <span style={{ background: '#111111', color: '#FBBF24', padding: '0.4rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>gRPC</span>
                </div>
              </div>
              <Link to="/employer/search" style={{ color: '#111111', fontWeight: 700, textDecoration: 'none', display: 'flex', justifyContent: 'center', fontSize: '0.95rem' }}>
                HIRE SYSTEMS TALENT
              </Link>
            </div>

            <div className="card-white" style={{ flex: '0 0 320px', minWidth: '320px', background: '#111111', borderTop: '10px solid #FBBF24', border: 'none', borderRadius: '3rem', padding: '2rem', minHeight: '340px', boxShadow: '0 18px 36px rgba(0, 0, 0, 0.12)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#F9F0B7' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '18px', background: '#FBBF24', overflow: 'hidden' }}>
                  <img src={databasegif} alt="Database" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FBBF24', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Cloud</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.55rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.8rem' }}>Cloud & DevOps</h3>
                <p style={{ color: '#E5E7EB', fontSize: '0.96rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  Deploy secure, scalable operations with AWS, Kubernetes, CI/CD automation, and audit-ready pipelines.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ background: '#FBBF24', color: '#111111', padding: '0.4rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>Kubernetes</span>
                  <span style={{ background: '#FBBF24', color: '#111111', padding: '0.4rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>CI/CD</span>
                  <span style={{ background: '#FBBF24', color: '#111111', padding: '0.4rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>AWS</span>
                </div>
              </div>
              <Link to="/employer/search" style={{ color: '#FBBF24', fontWeight: 700, textDecoration: 'none', display: 'flex', justifyContent: 'center', fontSize: '0.95rem' }}>
                HIRE CLOUD & DEVOPS TALENT
              </Link>
            </div>

            <div className="card-white floating-card" style={{ flex: '0 0 320px', minWidth: '320px', background: '#FBBF24', borderTop: '12px solid #111111', border: '1px solid rgba(17, 24, 39, 0.14)', borderRadius: '3.5rem', padding: '2rem', minHeight: '340px', boxShadow: '0 28px 60px rgba(0, 0, 0, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#111111' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '18px', background: '#111111', overflow: 'hidden' }}>
                  <img src={artifisialintelligencegif} alt="AI" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#111111', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Mobile</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.55rem', fontWeight: 900, color: '#111111', marginBottom: '0.8rem' }}>Mobile Engineering</h3>
                <p style={{ color: '#1F2937', fontSize: '0.96rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  Ship polished mobile experiences using React Native, Flutter and modern payment or fintech integrations.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ background: '#111111', color: '#FBBF24', padding: '0.4rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>React Native</span>
                  <span style={{ background: '#111111', color: '#FBBF24', padding: '0.4rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>Flutter</span>
                  <span style={{ background: '#111111', color: '#FBBF24', padding: '0.4rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>Mobile UX</span>
                </div>
              </div>
              <Link to="/employer/search" style={{ color: '#111111', fontWeight: 700, textDecoration: 'none', display: 'flex', justifyContent: 'center', fontSize: '0.95rem' }}>
                HIRE MOBILE APP DEV TALENT
              </Link>
            </div>

            <div className="card-white floating-card" style={{ flex: '0 0 320px', minWidth: '320px', background: '#111111', borderTop: '12px solid #FBBF24', border: 'none', borderRadius: '3.5rem', padding: '2rem', minHeight: '340px', boxShadow: '0 18px 36px rgba(0, 0, 0, 0.12)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#F9F0B7' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '18px', background: '#FBBF24', overflow: 'hidden' }}>
                  <img src={graphicdesigngif} alt="Graphic Design" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FBBF24', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Creative</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.55rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.8rem' }}>Graphic Design</h3>
                <p style={{ color: '#E5E7EB', fontSize: '0.96rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  Develop bold brand systems, UI assets and visual campaigns tailored for premium African tech experiences.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ background: '#FBBF24', color: '#111111', padding: '0.4rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>Brand</span>
                  <span style={{ background: '#FBBF24', color: '#111111', padding: '0.4rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>UI/UX</span>
                  <span style={{ background: '#FBBF24', color: '#111111', padding: '0.4rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>Assets</span>
                </div>
              </div>
              <Link to="/employer/search" style={{ color: '#FBBF24', fontWeight: 700, textDecoration: 'none', display: 'flex', justifyContent: 'center', fontSize: '0.95rem' }}>
                HIRE DESIGN TALENT 
              </Link>
            </div>

            <div className="card-white floating-card" style={{ flex: '0 0 320px', minWidth: '320px', background: '#FBBF24', borderTop: '12px solid #111111', border: '1px solid rgba(17, 24, 39, 0.14)', borderRadius: '3.5rem', padding: '2rem', minHeight: '340px', boxShadow: '0 28px 60px rgba(0, 0, 0, 0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#111111' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '18px', background: '#111111', overflow: 'hidden' }}>
                  <img src={cybersecuritygif} alt="Cybersecurity" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#111111', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Security</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.55rem', fontWeight: 900, color: '#111111', marginBottom: '0.8rem' }}>Cybersecurity</h3>
                <p style={{ color: '#1F2937', fontSize: '0.96rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  Protect mission-critical systems with penetration testing, secure architecture, and incident response readiness.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ background: '#111111', color: '#FBBF24', padding: '0.4rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>Pen Testing</span>
                  <span style={{ background: '#111111', color: '#FBBF24', padding: '0.4rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>ThreatOps</span>
                  <span style={{ background: '#111111', color: '#FBBF24', padding: '0.4rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>Secure Cloud</span>
                </div>
              </div>
              <Link to="/employer/search" style={{ color: '#111111', fontWeight: 700, textDecoration: 'none', display: 'flex', justifyContent: 'center', fontSize: '0.95rem' }}>
                HIRE CYBERSECURITY TALENT 
              </Link>
            </div>

          </div>

        </div>
      </section>
      {/* Fix note:
          The previous update accidentally left a stray `talent`-related JSX fragment inside this track section.
          That caused Vite to report a missing `</section>` closing tag and an unexpected `))}` token.
          The fix was to remove the orphaned markup and restore the proper section closing structure.
      */}

      {/* 6. TESTIMONIALS REVIEWS SECTION (Matching Arobix "What Our Customers Say") */}
      <section style={{ ...sectionFlowStyle, background: '#FFFFFF', paddingTop: '0.5rem', marginTop: '-1rem' }}>
        <div style={{ position: 'absolute', top: '2.2rem', left: '20%', width: '340px', height: '340px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.26)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', top: '8rem', right: '18%', width: '310px', height: '310px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.2)', filter: 'blur(58px)' }} />
        <div style={{ position: 'absolute', bottom: '2rem', left: '48%', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.16)', filter: 'blur(55px)' }} />
        <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

           <div className="testimonial-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            
            <div style={{ flex: '0 0 460px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div
                className="review-svg animated"
                dangerouslySetInnerHTML={{ __html: feedbackSvg }}
                style={{ width: '100%', maxWidth: '600px', borderRadius: '2rem', overflow: 'hidden' }}
              />
            </div>
            
            <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right', borderTop: 'none' }}> 
             <span style={{  color: '#ffbc17', fontWeight: '800', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.18em' }}>a few reviews from users</span>
              <h2 style={{ fontSize: '3.1rem', fontWeight: '900', color: 'var(--pms-black)', margin: '0.5rem 0 1.5rem', lineHeight: '1.2' }}>
              WHAT OUR<span style={{ color: '#ffbc17' }}> USERS</span><span style={{ color: 'var(--pms-black)' }}> SAY</span>
            </h2>
            <p style={{ color: '#5b6477', fontSize: '1.112rem', lineHeight: '1.8', marginTop: '1.25rem', maxWidth: '620px' }}>
             A-grade Talent, Exceptional Skill, Top-Notch Matching...<br/>Excellent Reviews
              </p> 
          </div> 

        </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>

            <div className="card-white" style={{ background: 'rgba(252, 191, 5, 0.06)', border: '1px solid rgba(252, 191, 5, 0.18)' }}>
              <div style={{ display: 'flex', gap: '0.25rem', color: '#fcbf05', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#fcbf05" />)}
              </div>
              <p style={{ color: 'var(--pms-black)', fontSize: '0.95rem', fontWeight: '500', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                "We hired 3 full-stack engineers directly through Jongo Hub Skill Bank. The QR certificate verification gave us instant confidence in their capstone work."
              </p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--pms-black)', color: 'var(--pms-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>CN</div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--pms-black)' }}>Dr. Charles Nkwain</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>VP of Engineering, AfriTech Solutions</span>
                </div>
              </div>
            </div>

            <div className="card-white">
              <div style={{ display: 'flex', gap: '0.25rem', color: '#fcbf05', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#fcbf05" />)}
              </div>
              <p style={{ color: 'var(--pms-black)', fontSize: '0.95rem', fontWeight: '500', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                "The 4-vector job match percentage saved our engineering team weeks of screening resumes. Highly recommended platform for hiring African tech talent."
              </p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--pms-yellow)', color: 'var(--pms-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>SK</div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--pms-black)' }}>Sarah Kamau</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Lead Recruiter, Jongo Incubator Labs</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (Styled two-column FAQ + image) */}
      <section style={{ ...sectionFlowStyle, maxWidth: '1100px', background: '#F3F4F6' }}>
        <div style={{ position: 'absolute', top: '-2rem', left: '12%', width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.16)', filter: 'blur(50px)', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '6rem', right: '14%', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.14)', filter: 'blur(50px)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '-2rem', left: '44%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(252, 191, 5, 0.12)', filter: 'blur(50px)', zIndex: 0 }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1, padding: '2rem 1rem' }}>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 360px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={DevicesSvg} alt="FAQ illustration" style={{ width: '100%', maxWidth: '420px', borderRadius: '1rem', boxShadow: '0 20px 60px rgba(16,24,40,0.12)', objectFit: 'cover' }} />
            </div>

            <div style={{ flex: '1 1 620px' }}>
              <div style={{ textAlign: 'left', marginBottom: '1.75rem' }}>
                <span style={{ color: '#ffbc17', fontWeight: '800', fontSize: '1.5rem', textTransform: 'uppercase' }}>Frequently Asked</span>
                <h2 style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--pms-black)', marginTop: '0.35rem' }}>SYSTEM & AUDIT <span style={{ color: '#ffbc17' }}>QUESTIONS</span></h2>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem', maxWidth: '560px' }}>Here are the common questions about our systems, audits and verification workflows. Click a question to reveal the answer.</p>
              </div>

              <div style={{ display: 'grid', gap: '0.85rem' }}>
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={index} style={{ background: '#FFFFFF', borderRadius: '0.9rem', boxShadow: isOpen ? '0 26px 60px rgba(16,24,40,0.08)' : '0 12px 30px rgba(16,24,40,0.04)', overflow: 'hidden', borderLeft: isOpen ? '6px solid #FBBF24' : '6px solid transparent', transition: 'box-shadow 220ms ease, border-left 220ms ease' }}>
                      <button onClick={() => setOpenFaq(isOpen ? -1 : index)} style={{ width: '100%', padding: '1rem 1.25rem', background: 'transparent', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', textAlign: 'left' }}>
                        <div>
                          <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--pms-black)', fontFamily: 'var(--font-body)' }}>{faq.q}</div>
                          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem', display: isOpen ? 'block' : 'none' }}>{/* small preview when open */}</div>
                        </div>
                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: isOpen ? 'var(--pms-yellow)' : '#F3F4F6', transition: 'background 160ms ease' }}>
                          <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease' }} />
                        </div>
                      </button>

                      {isOpen && (
                        <div style={{ padding: '0 1.25rem 1.25rem', color: 'var(--text-muted)', fontSize: '0.96rem', borderTop: '1px solid rgba(15,23,42,0.04)' }}>
                          <p style={{ paddingTop: '0.9rem', margin: 0 }}>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA CONVERSION BANNER (Matching Arobix Email Capture Banner) */}
      <section style={{ background: 'var(--pms-black-deep)', color: '#FFFFFF', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#FFFFFF', marginBottom: '0.5rem' }}>GET THE BEST VERIFIED TECH TALENT FOR YOUR PROJECT</h2>
            <p style={{ color: '#9CA3AF', fontSize: '0.95rem' }}>Subscribe for instant developer placement updates and talent drop alerts</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="Enter corporate email..."
              style={{ padding: '0.85rem 1.25rem', borderRadius: 'var(--radius-pill)', border: 'none', outline: 'none', width: '280px', fontSize: '0.9rem' }}
            />
            <button className="btn-yellow" style={{ padding: '0.85rem 1.5rem' }}>
              Get Estimate <Mail size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* 9. DEEP FOOTER (Matching Arobix Footer) */}
      <footer style={{ background: '#0D0D0D', color: '#9CA3AF', padding: '4rem 2rem 2rem', borderTop: '1px solid #1E1E1E' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', fontWeight: '900', marginBottom: '1rem' }}>SKILL<span style={{ color: 'var(--pms-yellow)' }}>BANK</span></h3>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>Built for Jongo Hub Reactor graduates and African software engineers. Proof of work over academic grades.</p>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: '800', marginBottom: '1rem' }}>PLATFORM LINKS</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <li><Link to="/employer/search" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Talent Directory</Link></li>
              <li><Link to="/jobs" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Job Marketplace</Link></li>
              <li><Link to="/verify/JHR-2026-8942" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Certificate Verification</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: '800', marginBottom: '1rem' }}>LEGAL & AUDIT</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <li><a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Terms of Service</a></li>
              <li><a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Jongo Hub Academic Board</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: '800', marginBottom: '1rem' }}>HEADQUARTERS</h4>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>Jongo Hub Tech Accelerator, Silicon Mountain, Buea, Cameroon</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid #1E1E1E', fontSize: '0.8rem' }}>
          Jongo Hub Reactor Skill Bank © 2026 • Pantone 107 C Theme
        </div>
      </footer>

    </div>
  );
}
