import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Background from './components/Background';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import VisitorCounter from './components/VisitorCounter';
import CommandPalette from './components/CommandPalette';

import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import CodingProfiles from './sections/CodingProfiles';
import Achievements from './sections/Achievements';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import FAQ from './sections/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [commandOpen, setCommandOpen] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: false,
      offset: 80,
    });
  }, []);

  // Global keyboard shortcut for command palette
  useEffect(() => {
    const handleKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setCommandOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setCommandOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <HelmetProvider>
      <div className="relative min-h-screen bg-[#0B1120] text-slate-200">
        {/* Loading Screen */}
        {loading && <Loader onComplete={() => setLoading(false)} />}

        {/* UI Layer (hidden during load) */}
        <div
          className="transition-opacity duration-700"
          style={{ opacity: loading ? 0 : 1, pointerEvents: loading ? 'none' : 'auto' }}
        >
          {/* Global Elements */}
          <CustomCursor />
          <Background />
          <ScrollProgress />
          <Navbar />
          <BackToTop />
          <VisitorCounter />

          {/* Command Palette */}
          {commandOpen && (
            <CommandPalette onClose={() => setCommandOpen(false)} />
          )}

          {/* Main Sections */}
          <main>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Certifications />
            <CodingProfiles />
            <Achievements />
            <Testimonials />
            <Contact />
            <FAQ />
          </main>

          <Footer />
        </div>

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#10172A',
              color: '#E2E8F0',
              border: '1px solid rgba(99,102,241,0.3)',
              borderRadius: '12px',
              boxShadow: '0 0 20px rgba(139,92,246,0.2)',
            },
          }}
        />
      </div>
    </HelmetProvider>
  );
}
