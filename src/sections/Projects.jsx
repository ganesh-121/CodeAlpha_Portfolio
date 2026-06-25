import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiSearch, FiX } from 'react-icons/fi';

const PROJECTS = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    category: 'Frontend',
    description: 'A premium, fully responsive personal portfolio website built with React and Vite, featuring glassmorphism design, custom cursor, animated sections, and advanced animations.',
    longDescription: 'This portfolio showcases my skills and projects using cutting-edge web technologies. It features a custom animated cursor, particle background with canvas API, GSAP animations, Framer Motion transitions, AOS scroll animations, and a command palette (⌘K).',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Canvas API'],
    features: ['Custom Animated Cursor', 'Particle Background', 'Command Palette (⌘K)', 'Glassmorphism Design', 'PWA Support', 'SEO Optimized'],
    github: 'https://github.com/ganesh-121',
    live: '#',
    image: null,
    gradient: 'from-violet-900/40 to-indigo-900/40',
    accent: '#6366F1',
    status: 'Live',
  },
  {
    id: 2,
    title: 'Currency Converter',
    category: 'Frontend',
    description: 'A real-time currency converter web application that fetches live exchange rates via API, supports 150+ currencies, with a clean, intuitive interface.',
    longDescription: 'Built with vanilla JavaScript and a currency exchange API, this app allows users to convert between 150+ currencies in real time. Features include swap functionality, historical rate charts, and offline detection.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Exchange Rate API', 'Chart.js'],
    features: ['Real-time Exchange Rates', '150+ Currencies', 'Swap Currencies', 'Responsive Design', 'Clean UI'],
    github: 'https://github.com/ganesh-121',
    live: '#',
    image: null,
    gradient: 'from-cyan-900/40 to-blue-900/40',
    accent: '#06B6D4',
    status: 'Completed',
  },
  {
    id: 3,
    title: 'Full Stack Web App',
    category: 'Full Stack',
    description: 'An upcoming full-stack project featuring a React frontend, Node.js/Express backend, and MongoDB database with authentication and real-time features.',
    longDescription: 'A comprehensive full-stack application with JWT authentication, RESTful API, real-time updates via WebSocket, and a polished React frontend.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io'],
    features: ['JWT Authentication', 'RESTful API', 'Real-time Updates', 'Responsive UI', 'Cloud Deployment'],
    github: 'https://github.com/ganesh-121',
    live: '#',
    image: null,
    gradient: 'from-purple-900/40 to-violet-900/40',
    accent: '#8B5CF6',
    status: 'In Progress',
  },
  {
    id: 4,
    title: 'AI-Powered Web Project',
    category: 'AI / ML',
    description: 'An upcoming AI-integrated web application leveraging modern language model APIs to provide intelligent, context-aware features and interactions.',
    longDescription: 'Planned AI project integrating OpenAI/Gemini APIs for features like content generation, intelligent search, chatbot functionality, and personalized recommendations.',
    tech: ['React', 'Python', 'FastAPI', 'OpenAI API', 'TailwindCSS'],
    features: ['AI Chat Interface', 'Content Generation', 'Semantic Search', 'REST API Backend', 'Modern UI'],
    github: 'https://github.com/ganesh-121',
    live: '#',
    image: null,
    gradient: 'from-amber-900/30 to-orange-900/30',
    accent: '#F59E0B',
    status: 'Planned',
  },
];

const CATEGORIES = ['All', 'Frontend', 'Full Stack', 'AI / ML'];

const STATUS_COLORS = {
  'Live':        '#10B981',
  'Completed':   '#06B6D4',
  'In Progress': '#F59E0B',
  'Planned':     '#94A3B8',
};

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      className="project-card cursor-pointer"
      layoutId={`project-${project.id}`}
      onClick={() => onClick(project)}
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Image / Gradient Banner */}
      <div
        className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
      >
        <div className="text-6xl opacity-30 select-none">💻</div>
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: `radial-gradient(circle at center, ${project.accent}40, transparent)` }}
        />
        {/* Status badge */}
        <div
          className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full"
          style={{ background: `${STATUS_COLORS[project.status]}20`, color: STATUS_COLORS[project.status], border: `1px solid ${STATUS_COLORS[project.status]}40` }}
        >
          ● {project.status}
        </div>
        <span
          className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full"
          style={{ background: `${project.accent}20`, color: project.accent, border: `1px solid ${project.accent}30` }}
        >
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 4).map(t => (
            <span key={t} className="tech-pill text-xs" style={{ color: `${project.accent}cc`, borderColor: `${project.accent}30`, background: `${project.accent}10` }}>
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="tech-pill text-xs text-slate-500">+{project.tech.length - 4}</span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white border border-white/8 hover:border-violet-500/40 transition-all hover:bg-violet-500/10"
          >
            <FiGithub size={14} /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold text-white transition-all"
            style={{ background: `linear-gradient(135deg, ${project.accent}80, ${project.accent}60)`, border: `1px solid ${project.accent}40` }}
          >
            <FiExternalLink size={14} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        className="relative w-full max-w-2xl glass-card overflow-hidden"
        style={{ borderColor: `${project.accent}30` }}
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
          <div className="text-6xl opacity-20">💻</div>
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-black/30 flex items-center justify-center text-white hover:bg-black/50 transition-colors">
            <FiX size={16} />
          </button>
        </div>

        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-display font-bold text-white text-2xl mb-1">{project.title}</h3>
              <span className="tech-pill text-xs" style={{ color: project.accent, borderColor: `${project.accent}30`, background: `${project.accent}10` }}>
                {project.category}
              </span>
            </div>
            <span
              className="text-xs font-bold px-3 py-1.5 rounded-full"
              style={{ background: `${STATUS_COLORS[project.status]}15`, color: STATUS_COLORS[project.status], border: `1px solid ${STATUS_COLORS[project.status]}30` }}
            >
              {project.status}
            </span>
          </div>

          <p className="text-slate-400 leading-relaxed mb-6">{project.longDescription}</p>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-3">Key Features</h4>
              <ul className="space-y-1">
                {project.features.map(f => (
                  <li key={f} className="text-slate-400 text-sm flex items-center gap-2">
                    <span style={{ color: project.accent }}>▸</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-3">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 justify-center">
              <FiGithub size={16} /> View on GitHub
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 justify-center">
              <FiExternalLink size={16} /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered = PROJECTS.filter(p => {
    const matchCat = category === 'All' || p.category === category;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tech.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="section-tag"><span>🚀</span> Projects</span>
          <h2 className="section-title mb-4">
            My <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A showcase of projects I've built — from frontend experiments to full-stack applications
          </p>
        </div>

        {/* Filter + Search */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between mb-10" data-aos="fade-up" data-aos-delay="100">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  category === cat
                    ? 'btn-primary py-2'
                    : 'text-slate-400 glass border border-white/8 hover:border-violet-500/30 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={15} />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="form-input pl-9 w-64 py-2 text-sm"
            />
          </div>
        </div>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} onClick={setSelected} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-600">
            <p className="text-4xl mb-4">🔍</p>
            <p>No projects found for "{search}"</p>
          </div>
        )}

        {/* GitHub CTA */}
        <div className="text-center mt-12" data-aos="fade-up">
          <p className="text-slate-500 text-sm mb-4">More projects on GitHub</p>
          <a
            href="https://github.com/ganesh-121"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <FiGithub size={16} /> View All on GitHub
          </a>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
