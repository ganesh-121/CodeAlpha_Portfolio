import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    icon: '💻',
    color: '#6366F1',
    skills: [
      { name: 'C', level: 80 },
      { name: 'C++', level: 78 },
      { name: 'Java', level: 72 },
      { name: 'Python', level: 75 },
      { name: 'JavaScript', level: 85 },
    ],
  },
  {
    title: 'Frontend Development',
    icon: '🎨',
    color: '#06B6D4',
    skills: [
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 88 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Tailwind CSS', level: 82 },
      { name: 'React', level: 78 },
    ],
  },
  {
    title: 'Backend & Database',
    icon: '⚙️',
    color: '#8B5CF6',
    skills: [
      { name: 'Node.js', level: 65 },
      { name: 'Express.js', level: 62 },
      { name: 'MySQL', level: 70 },
      { name: 'MongoDB', level: 65 },
      { name: 'Firebase', level: 68 },
    ],
  },
  {
    title: 'Developer Tools',
    icon: '🛠️',
    color: '#F59E0B',
    skills: [
      { name: 'Git & GitHub', level: 82 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 65 },
      { name: 'Prompt Engineering', level: 78 },
    ],
  },
];

// Animated progress bar
function SkillBar({ name, level, color, animate }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{
            width: animate ? `${level}%` : '0%',
            transition: animate ? `width 1.5s cubic-bezier(0.4,0,0.2,1)` : 'none',
            background: `linear-gradient(90deg, ${color}bb, ${color})`,
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 relative z-10">
      {/* BG decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6366F1, transparent)' }}
      />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-tag"><span>⚡</span> Skills</span>
          <h2 className="section-title mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A curated set of technologies I use to build modern, scalable applications
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10" data-aos="fade-up" data-aos-delay="100">
          {SKILL_CATEGORIES.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === i
                  ? 'text-white'
                  : 'text-slate-400 hover:text-slate-200 glass border border-white/5 hover:border-violet-500/30'
              }`}
              style={activeTab === i ? {
                background: `linear-gradient(135deg, ${cat.color}30, ${cat.color}15)`,
                border: `1px solid ${cat.color}50`,
                boxShadow: `0 0 20px ${cat.color}20`,
              } : {}}
            >
              <span>{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="150">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <motion.div
              key={ci}
              className="glass-card p-6 relative overflow-hidden"
              style={{ borderColor: activeTab === ci ? `${cat.color}40` : undefined }}
              whileHover={{ y: -4 }}
            >
              {/* Card glow accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 blur-2xl"
                style={{ background: cat.color }}
              />

              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: `${cat.color}20`, border: `1px solid ${cat.color}40` }}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-200 text-sm">{cat.title}</h3>
                  <p className="text-xs text-slate-600">{cat.skills.length} skills</p>
                </div>
              </div>

              <div>
                {cat.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    animate={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills bubbles cloud */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-slate-600 text-sm mb-6 uppercase tracking-wider">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['REST APIs', 'GraphQL', 'Docker basics', 'Linux', 'Postman', 'Chrome DevTools', 'NPM', 'Webpack', 'Vite', 'Responsive Design', 'Web Accessibility', 'SEO'].map(skill => (
              <motion.span
                key={skill}
                className="tech-pill"
                whileHover={{ scale: 1.08, y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
