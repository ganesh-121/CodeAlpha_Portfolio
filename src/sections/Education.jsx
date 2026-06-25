import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiAward, FiMapPin, FiCalendar } from 'react-icons/fi';

const EDUCATION = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    institution: "Vignan's Institute of Information Technology",
    location: 'Visakhapatnam, Andhra Pradesh',
    period: '2022 – Present',
    status: 'Ongoing',
    icon: '🎓',
    color: '#6366F1',
    highlights: ['Full Stack Web Development', 'Data Structures & Algorithms', 'Database Management', 'Object-Oriented Programming'],
  },
  {
    degree: 'Intermediate (10+2)',
    field: 'Mathematics, Physics & Chemistry',
    institution: 'Ascent Junior College',
    location: 'Andhra Pradesh',
    period: '2020 – 2022',
    status: 'Completed',
    icon: '📚',
    color: '#06B6D4',
    highlights: ['Mathematics', 'Physics', 'Chemistry'],
  },
  {
    degree: 'Secondary School (10th)',
    field: 'General Education',
    institution: 'Sri Chaitanya School',
    location: 'Andhra Pradesh',
    period: '2019 – 2020',
    status: 'Completed',
    icon: '🏫',
    color: '#8B5CF6',
    highlights: ['Academic Excellence', 'Extracurricular Activities'],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }}
      />

      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-tag">
            <span>🎓</span> Education
          </span>
          <h2 className="section-title mb-4">
            My <span className="gradient-text">Academic Journey</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Building a strong foundation through continuous learning and academic excellence
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5 md:left-1/2 md:-translate-x-0.5"
            style={{ background: 'linear-gradient(180deg, #6366F1, #06B6D4, #8B5CF6, transparent)' }}
          />

          <div className="space-y-12">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={i}
                className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {/* Timeline dot */}
                <div className={`
                  absolute flex items-center justify-center
                  left-0 top-6 md:left-1/2 md:-translate-x-1/2
                  w-10 h-10 rounded-full z-10 text-lg
                `}
                  style={{
                    background: `linear-gradient(135deg, ${edu.color}40, ${edu.color}20)`,
                    border: `2px solid ${edu.color}60`,
                    boxShadow: `0 0 20px ${edu.color}40`,
                  }}
                >
                  {edu.icon}
                </div>

                {/* Content card */}
                <div className={`
                  ml-16 md:ml-0 w-full
                  ${i % 2 === 0 ? 'md:pr-12 md:w-1/2' : 'md:pl-12 md:w-1/2 md:ml-auto'}
                `}>
                  <div
                    className="glass-card p-6 relative overflow-hidden"
                    style={{ borderColor: `${edu.color}25` }}
                  >
                    {/* Accent corner */}
                    <div
                      className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-10"
                      style={{ background: edu.color }}
                    />

                    {/* Status badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{
                          background: `${edu.color}15`,
                          color: edu.color,
                          border: `1px solid ${edu.color}30`,
                        }}
                      >
                        {edu.status}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500">
                        <FiCalendar size={11} />
                        {edu.period}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-white text-lg mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium mb-1" style={{ color: edu.color }}>
                      {edu.field}
                    </p>
                    <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-4">
                      <FiBook size={13} />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-4">
                      <FiMapPin size={11} />
                      <span>{edu.location}</span>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map(h => (
                        <span
                          key={h}
                          className="text-xs px-2.5 py-1 rounded-full"
                          style={{
                            background: `${edu.color}10`,
                            color: `${edu.color}cc`,
                            border: `1px solid ${edu.color}20`,
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
