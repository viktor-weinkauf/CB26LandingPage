import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureCarousel } from './components/FeatureCarousel';
import { FeaturesGrid } from './components/FeaturesGrid';
import { OpeningReport } from './components/OpeningReport';
import { MonteCarlo } from './components/MonteCarlo';
import { ConsultAI } from './components/ConsultAI';
import { ComparisonTable } from './components/ComparisonTable';
import { Testimonials } from './components/Testimonials';
import { Stats } from './components/Stats';
import { FAQ } from './components/FAQ';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { ConversionPopup } from './components/ConversionPopup';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollReveal } from './components/ScrollReveal';
import { SCROLL } from './config/constants';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > SCROLL.TOP_BUTTON_SHOW_OFFSET);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTopClasses = [
    'scroll-top-btn',
    showScrollTop ? 'scroll-top-btn--visible' : 'scroll-top-btn--hidden'
  ].join(' ');

  return (
    <div className="app">
      <ScrollProgress />
      <Navbar />

      <main className="app__main">
        <Hero />

        <ScrollReveal animation="slide-up">
          <FeatureCarousel />
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={100}>
          <FeaturesGrid />
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={100}>
          <OpeningReport />
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={100}>
          <MonteCarlo />
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={100}>
          <ConsultAI />
        </ScrollReveal>

        <ScrollReveal animation="fade-in">
          <ComparisonTable />
        </ScrollReveal>

        <ScrollReveal animation="slide-up">
          <Testimonials />
        </ScrollReveal>

        <Stats />

        <ScrollReveal animation="slide-up">
          <Pricing />
        </ScrollReveal>

        <ScrollReveal animation="fade-in">
          <FAQ />
        </ScrollReveal>
      </main>

      <Footer />
      <ConversionPopup />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={scrollTopClasses}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
};

export default App;
