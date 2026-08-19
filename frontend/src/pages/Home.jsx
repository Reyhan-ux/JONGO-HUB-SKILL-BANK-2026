import React from 'react';

import HeroSection from '../components/home/HeroSection';
import TickerMarquee from '../components/home/TickerMarquee';
import HowItWorks from '../components/home/HowItWorks';
import WhyChooseUs from '../components/home/WhyChooseUs';
import EngineeringTracks from '../components/home/EngineeringTracks';
import Testimonials from '../components/home/Testimonials';
import FaqSection from '../components/home/FaqSection';
import CtaBanner from '../components/home/CtaBanner';

export default function Home() {
  return (
    <div style={{ background: 'var(--bg-page)', color: 'var(--text-dark)' }}>
      {/* 1. Hero Banner */}
      <HeroSection
        title="SHOWCASING JONGO HUB"
        titleHighlight="REACTOR GRADUATES"
        titleSuffix="TO THE WORLD."
        subtitle="Jongo Hub's internal platform for verified Reactor graduates — capstone-audited profiles, digital credentials, mentor oversight, and AI-powered employer matching."
        primaryCtaText="Browse Graduates"
        primaryCtaLink="/employer/search"
        secondaryCtaText="Graduate Portal"
        secondaryCtaLink="/auth"
        initialTab="login"
        hotlineNumber="+237 670 123 456"
        headquartersLocation="Buea, Cameroon"
      />

      {/* 2. Ticker Marquee */}
      <TickerMarquee />

      {/* 3. How Jongo Hub Skill Bank Works */}
      <HowItWorks
        badgeText="How it works"
        title="HOW"
        titleHighlight="JONGO HUB SKILL BANK"
        titleSuffix="WORKS"
        subtitle="Skill Bank connects four stakeholders — administrators, Reactor graduates, mentors, and partner employers — in one company system built to showcase verified graduate talent from Jongo Hub's Reactor program."
      />

      {/* 4. Asymmetric Showcase & Features */}
      <WhyChooseUs
        badgeText="WHY CHOOSE JONGO HUB"
        title="THE OFFICIAL SYSTEM FOR"
        titleHighlight="REACTOR TALENT"
        subtitle="Built specifically for Jongo Hub Reactor graduates, alumni, partner employers, and mentors. Practical utility without LMS bloat."
      />

      {/* 5. Engineering Tracks Grid */}
      <EngineeringTracks
        badgeText="ENGINEERING TRACKS"
        title="REACTOR GRADUATE TRACKS..."
        titleHighlight="Verified Skills, Real Capstones."
        subtitle="Browse graduates by engineering track — each profile backed by mentor-audited capstone projects and digital credentials from the Jongo Hub Reactor program."
      />

      {/* 6. Testimonials & Social Proof */}
      <Testimonials
        badgeText="TESTIMONIALS & REVIEWS"
        title="WHAT OUR"
        titleHighlight="PARTNERS & GRADUATES SAY"
        subtitle="Hear from tech leads, partner employers, mentors, and Reactor alumni who use Skill Bank to showcase and hire verified graduates."
      />

      {/* 7. FAQ Accordion */}
      <FaqSection
        badgeText="FREQUENTLY ASKED QUESTIONS"
        title="GOT QUESTIONS?"
        titleHighlight="WE'VE GOT ANSWERS."
      />

      {/* 8. Call to Action Banner */}
      <CtaBanner
        badgeText="JONGO HUB REACTOR GRADUATE SHOWCASE"
        title="THE OFFICIAL"
        titleHighlight="SKILL BANK PORTAL"
        subtitle="Browse verified Reactor graduate profiles, partner with employers, and manage capstone credentials — all in one internal platform."
        primaryBtnText="Browse Graduates"
        primaryBtnLink="/employer/search"
        secondaryBtnText="Sign In to Portal"
        secondaryBtnLink="/auth"
        initialTab="login"
      />
    </div>
  );
}
