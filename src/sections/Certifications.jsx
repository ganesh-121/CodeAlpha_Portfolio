import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiAward, FiExternalLink } from 'react-icons/fi';

const CERTS = [
  {
    id: 1,
    title: 'Oracle Certification',
    issuer: 'Oracle Corporation',
    description: 'Industry-recognized certification validating proficiency in Oracle technologies and programming concepts.',
    year: '2024',
    icon: '🏛️',
    gradient: 'from-red-900/50 to-orange-900/40',
    accent: '#F97316',
    badge: '🏅',
    skills: ['Database Management', 'SQL', 'Oracle Technologies'],
    verify: '#',
  },
  {
    id: 2,
    title: 'IBM Certification',
    issuer: 'IBM (SkillsBuild)',
    description: 'IBM SkillsBuild certification demonstrating competency in modern computing and software development principles.',
    year: '2024',
    icon: '🔵',
    gradient: 'from-blue-900/50 to-indigo-900/40',
    accent: '#3B82F6',
    badge: '🏅',
    skills: ['Cloud Computing', 'Software Development', 'IBM Technologies'],
    verify: '#',
  },
  {
    id: 3,
    title: 'Prompt Engineering Certification',
    issuer: 'Online Platform',
    description: 'Specialized certification in AI prompt engineering, covering techniques for effective communication with large language models.',
    year: '2024',
    icon: '🤖',
    gradient: 'from-violet-900/50 to-purple-900/40',
    accent: '#8B5CF6',
    badge: '🏅',
    skills: ['AI Prompting', 'LLM Interaction', 'Generative AI'],
    verify: '#',
  },
];

function CertModal({ cert, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
      <motion.div
        className="relative w-full max-w-lg glass-card overflow-hidden"
        initial={{ scale: 0.85, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.85, y: 30 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`h-36 bg-gradient-to-br ${cert.gradient} flex items-center justify-center relative`}>
          <div className="text-7xl">{cert.icon}</div>
          <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle, ${cert.accent}, transparent)` }} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-black/30 flex items-center justify-center text-white hover:bg-black/50"
          >
            <FiX size={16} />
          </button>
        </div>

        <div className="p-8">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-display font-bold text-white text-xl">{cert.title}</h3>
              <p className="text-sm" style={{ color: cert.accent }}>{cert.issuer}</p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-400 border border-white/8">
              {cert.year}
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">{cert.description}</p>
          <div className="mb-6">
            <p className="text-xs uppercase tracking-wider text-slate-600 mb-2">Skills Validated</p>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map(s => (
                <span key={s} className="tech-pill text-xs" style={{ color: cert.accent, borderColor: `${cert.accent}30`, background: `${cert.accent}10` }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
          <a href={cert.verify} className="btn-primary w-full justify-center">
            <FiExternalLink size={15} /> Verify Certificate
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-tag"><span>🏆</span> Certifications</span>
          <h2 className="section-title mb-4">
            Credentials & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Industry-recognized certifications validating my technical expertise
          </p>
        </div>

        {/* Cert Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="cert-card glass-card overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              onClick={() => setSelected(cert)}
              whileHover={{ y: -6 }}
              style={{ borderColor: `${cert.accent}25` }}
            >
              {/* Card banner */}
              <div className={`h-36 bg-gradient-to-br ${cert.gradient} flex items-center justify-center relative`}>
                <div className="text-6xl">{cert.icon}</div>
                <div className="absolute inset-0 opacity-15" style={{ background: `radial-gradient(circle, ${cert.accent}, transparent)` }} />
                <div className="cert-card-overlay">
                  <span className="text-xs text-slate-300 font-medium">Click to view details →</span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-white text-sm">{cert.title}</h3>
                    <p className="text-xs mt-0.5" style={{ color: cert.accent }}>{cert.issuer}</p>
                  </div>
                  <span className="text-2xl">{cert.badge}</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed mb-3">{cert.description.slice(0, 90)}...</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">{cert.year}</span>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full flex items-center gap-1"
                    style={{ background: `${cert.accent}15`, color: cert.accent }}
                  >
                    <FiAward size={10} /> Certified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
