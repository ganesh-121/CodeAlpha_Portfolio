import React from 'react';
import { motion } from 'framer-motion';

const ACHIEVEMENTS = [
  {
    icon: '🏆',
    title: 'Oracle Certified Professional',
    description: 'Earned Oracle Corporation certification, validating expertise in database and programming technologies.',
    date: '2024',
    color: '#F97316',
  },
  {
    icon: '🔵',
    title: 'IBM SkillsBuild Certification',
    description: 'Completed IBM SkillsBuild certification in software development and modern computing principles.',
    date: '2024',
    color: '#3B82F6',
  },
  {
    icon: '🤖',
    title: 'Prompt Engineering Certified',
    description: 'Achieved certification in AI Prompt Engineering — mastering effective communication with LLMs.',
    date: '2024',
    color: '#8B5CF6',
  },
  {
    icon: '💻',
    title: 'Active Competitive Programmer',
    description: 'Solved 100+ problems on CodeChef, continuously sharpening algorithmic problem-solving skills.',
    date: 'Ongoing',
    color: '#06B6D4',
  },
  {
    icon: '🌐',
    title: 'Full-Stack Portfolio Launch',
    description: 'Designed and launched a premium personal portfolio website with advanced animations and modern UI.',
    date: '2025',
    color: '#10B981',
  },
  {
    icon: '🎓',
    title: 'B.Tech Computer Science',
    description: 'Pursuing B.Tech in Computer Science & Engineering at Vignan\'s Institute of Information Technology.',
    date: '2022–Present',
    color: '#F59E0B',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-tag"><span>🌟</span> Achievements</span>
          <h2 className="section-title mb-4">
            Milestones & <span className="gradient-text">Highlights</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Key accomplishments and milestones in my learning and development journey
          </p>
        </div>

        {/* Timeline grid */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {ACHIEVEMENTS.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 flex gap-4"
                data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-delay={i * 80}
                whileHover={{ scale: 1.02, y: -3 }}
                style={{ borderColor: `${item.color}20` }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                    boxShadow: `0 0 16px ${item.color}20`,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed mb-2">{item.description}</p>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{ background: `${item.color}12`, color: item.color, border: `1px solid ${item.color}25` }}
                  >
                    {item.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
