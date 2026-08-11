import React from 'react';

import HeroSection from '../components/home/HeroSection';
import TickerMarquee from '../components/home/TickerMarquee';
import HowItWorks from '../components/home/HowItWorks';
import WhyChooseUs from '../components/home/WhyChooseUs';
import EngineeringTracks from '../components/home/EngineeringTracks';
import Testimonials from '../components/home/Testimonials';
import FaqSection from '../components/home/FaqSection';
import CtaBanner from '../components/home/CtaBanner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ background: 'var(--bg-page)', color: 'var(--text-dark)' }}>
      {/* 1. Hero Banner */}
      <HeroSection />

      {/* 2. Ticker Marquee */}
      <TickerMarquee />

      {/* 3. How Jongo Hub Skill Bank Works */}
      <HowItWorks />

      {/* 4. Asymmetric Showcase & Features */}
      <WhyChooseUs />

      {/* 5. Engineering Tracks Grid */}
      <EngineeringTracks />

      {/* 6. Testimonials & Social Proof */}
      <Testimonials />

      {/* 7. FAQ Accordion */}
      <FaqSection />

      {/* 9. Deep Footer */}
      <Footer />
    </div>
  );
}
