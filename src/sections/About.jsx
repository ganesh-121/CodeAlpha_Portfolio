import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiZap, FiTarget, FiStar } from 'react-icons/fi';

const STATS = [
  { number: 3, suffix: '+', label: 'Certifications', icon: '🏆' },
  { number: 10, suffix: '+', label: 'Projects Built', icon: '💻' },
  { number: 500, suffix: '+', label: 'Problems Solved', icon: '⚡' },
  { number: 1, suffix: '+', label: 'Years Learning', icon: '📚' },
];

const ABOUT_CARDS = [
  {
    icon: FiCode,
    title: 'Frontend Focus',
    desc: 'Specializing in React, JavaScript, HTML/CSS to craft beautiful, responsive UIs.',
    color: '#6366F1',
  },
  {
    icon: FiZap,
    title: 'Problem Solver',
    desc: 'Love tackling algorithmic challenges and competitive programming on CodeChef.',
    color: '#06B6D4',
  },
  {
    icon: FiTarget,
    title: 'Goal-Oriented',
    desc: 'Aiming to become a skilled software engineer at a top-tier tech company.',
    color: '#8B5CF6',
  },
  {
    icon: FiStar,
    title: 'Continuous Learner',
    desc: 'Always exploring new technologies, frameworks, and best practices.',
    color: '#F59E0B',
  },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-tag">
            <span>👤</span> About Me
          </span>
          <h2 className="section-title mb-4">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A passionate developer turning complex ideas into elegant digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* ── Left: Bio ── */}
          <div data-aos="fade-right">
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-10 blur-2xl"
                style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }}
              />

              <p className="text-slate-300 leading-relaxed text-lg mb-5">
                Hello! I'm <span className="text-white font-semibold">Mahanty Ganesh</span>, a Computer Science and Engineering student at{' '}
                <span className="text-violet-400 font-medium">Vignan's Institute of Information Technology</span>, Visakhapatnam.
              </p>
              <p className="text-slate-400 leading-relaxed mb-5">
                I'm passionate about building <span className="text-cyan-400">modern, responsive web applications</span> that provide exceptional user experiences. My primary focus is on frontend development, where I combine creativity with technical expertise to craft pixel-perfect, performant interfaces.
              </p>
              <p className="text-slate-400 leading-relaxed mb-5">
                Beyond coding, I love <span className="text-violet-400">solving algorithmic problems</span> — it sharpens my analytical thinking and makes me a better engineer. I'm continuously learning new technologies and best practices to stay at the forefront of web development.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                My career goal is to join a forward-thinking tech company as a <span className="text-cyan-400">skilled software engineer</span>, contribute to impactful products, and grow as part of an innovative team.
              </p>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'JavaScript', 'Python', 'C++', 'Node.js', 'MySQL', 'Git', 'Figma'].map(tech => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
              </div>

              {/* Location + Contact */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:ganeshmahanty121@gmail.com"
                  className="btn-primary"
                >
                  Say Hello 👋
                </a>
                <a
                  href="https://github.com/ganesh-121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: Cards + Stats ── */}
          <div className="space-y-6" data-aos="fade-left">
            {/* Trait cards */}
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_CARDS.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="glass-card p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: card.color + '20', border: `1px solid ${card.color}40` }}
                  >
                    <card.icon size={18} style={{ color: card.color }} />
                  </div>
                  <h4 className="font-semibold text-slate-200 text-sm mb-1.5">{card.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div ref={ref} className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <div key={stat.label} className="stat-card">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="stat-number">
                    {inView ? (
                      <CountUp end={stat.number} suffix={stat.suffix} duration={2} delay={i * 0.2} />
                    ) : (
                      '0'
                    )}
                  </div>
                  <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
