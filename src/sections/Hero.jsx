import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiEye } from 'react-icons/fi';
import { SiCodechef } from 'react-icons/si';
import { gsap } from 'gsap';

const SOCIAL_LINKS = [
  { icon: FiGithub, href: 'https://github.com/ganesh-121', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/mahanty-ganesh-59747331b', label: 'LinkedIn' },
  { icon: SiCodechef, href: 'https://www.codechef.com/users/ganesh5658', label: 'CodeChef' },
  { icon: FiMail, href: 'mailto:ganeshmahanty121@gmail.com', label: 'Email' },
];

// Animated floating orb
function Orb({ size, color, delay, x, y }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl pointer-events-none"
      style={{ width: size, height: size, background: color, left: x, top: y, opacity: 0.12 }}
      animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
}

export default function Hero() {
  const heroRef = useRef(null);

  // GSAP entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content > *', {
        y: 40, opacity: 0,
      }, {
        y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out', delay: 0.3,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden z-10"
    >
      {/* Background orbs */}
      <Orb size={500} color="radial-gradient(circle, #7C3AED, transparent)" delay={0} x="-10%" y="10%" />
      <Orb size={400} color="radial-gradient(circle, #06B6D4, transparent)" delay={2} x="70%" y="50%" />
      <Orb size={300} color="radial-gradient(circle, #1E3A8A, transparent)" delay={4} x="40%" y="20%" />

      <div className="container-custom w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* ── Left Content ── */}
          <div className="hero-content space-y-6 order-2 lg:order-1">
            {/* Badge */}
            <div className="hero-badge w-fit">
              <span className="dot" />
              <span>Available for Internship & Opportunities</span>
            </div>

            {/* Name */}
            <div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-white">
                Mahanty
                <br />
                <span className="gradient-text">Ganesh</span>
              </h1>
            </div>

            {/* Typing animation */}
            <div className="text-xl sm:text-2xl font-semibold text-slate-300 h-9 flex items-center gap-2">
              <span className="text-violet-400">&lt;</span>
              <TypeAnimation
                sequence={[
                  'Computer Science Student', 2000,
                  'Front-End Developer', 2000,
                  'Web Developer', 2000,
                  'Problem Solver', 2000,
                  'Tech Enthusiast', 2000,
                  'Future Software Engineer', 2000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={60}
                repeat={Infinity}
                className="text-cyan-300"
              />
              <span className="text-violet-400">/&gt;</span>
            </div>

            {/* Description */}
            <p className="text-slate-400 leading-relaxed max-w-lg text-base sm:text-lg">
              A passionate Computer Science & Engineering student from{' '}
              <span className="text-violet-400 font-medium">Vignan's Institute of Information Technology</span>,
              Visakhapatnam. I craft beautiful, performant web experiences and love turning complex ideas into elegant solutions.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <span>📍</span>
              <span>Visakhapatnam, Andhra Pradesh, India</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => { const a = document.createElement('a'); a.href='/resume.pdf'; a.download='Mahanty_Ganesh_Resume.pdf'; a.click(); }}
                className="btn-primary"
              >
                <FiDownload size={16} />
                Download Resume
              </button>
              <button onClick={() => scrollTo('projects')} className="btn-secondary">
                <FiEye size={16} />
                View Projects
              </button>
              <button onClick={() => scrollTo('contact')} className="btn-secondary">
                <FiMail size={16} />
                Contact Me
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #06B6D4, #3B82F6)', boxShadow: '0 0 20px rgba(6,182,212,0.3)' }}
              >
                Hire Me <FiArrowRight size={14} />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-slate-600 uppercase tracking-wider">Find me on</span>
              <div className="w-8 h-px bg-white/10" />
              {SOCIAL_LINKS.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title={s.label}
                  whileHover={{ y: -4, scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <s.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Right: Profile Image ── */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              className="relative"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #7C3AED, #06B6D4, #6366F1, #7C3AED)',
                  padding: 3,
                  borderRadius: '50%',
                  animation: 'spin 8s linear infinite',
                }}
              />

              {/* Profile image container */}
              <div
                className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#0B1120] z-10"
                style={{
                  boxShadow: '0 0 60px rgba(124,58,237,0.5), 0 0 100px rgba(6,182,212,0.2)',
                }}
              >
                {/* Gradient placeholder (replace with actual photo) */}
                <div className="w-full h-full bg-gradient-to-br from-[#10172A] via-[#1E3A8A] to-[#7C3AED] flex items-center justify-center">
                  <div className="text-center select-none">
                    <div className="text-8xl font-black font-display gradient-text opacity-60">MG</div>
                    <p className="text-xs text-slate-500 mt-2">Add your photo here</p>
                  </div>
                </div>
              </div>

              {/* Floating badge cards */}
              <motion.div
                className="absolute -bottom-4 -left-8 glass-card px-4 py-2 rounded-xl text-xs font-medium"
                animate={{ x: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-cyan-400">⚡</span>{' '}
                <span className="text-slate-300">React Developer</span>
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-xl text-xs font-medium"
                animate={{ x: [4, -4, 4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-violet-400">🏆</span>{' '}
                <span className="text-slate-300">Oracle Certified</span>
              </motion.div>
              <motion.div
                className="absolute top-1/3 -right-12 glass-card px-3 py-2 rounded-xl text-xs font-medium hidden sm:block"
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-green-400">●</span>{' '}
                <span className="text-slate-300">Open to work</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex flex-col items-center gap-2 mt-16"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll to explore</span>
          <div className="w-5 h-8 border border-white/10 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 bg-violet-500 rounded-full" style={{ animation: 'scrollDot 1.5s ease-in-out infinite' }} />
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
