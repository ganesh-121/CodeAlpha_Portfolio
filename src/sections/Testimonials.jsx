import React from 'react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    name: 'Dr. Ramesh Kumar',
    role: 'Professor, Computer Science',
    org: "Vignan's Institute of Information Technology",
    text: "Mahanty Ganesh is a highly motivated student with exceptional problem-solving skills. His dedication to learning and passion for web development is truly commendable. He consistently delivers quality work.",
    avatar: '👨‍🏫',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Senior Developer & Mentor',
    org: 'Tech Community',
    text: "Ganesh demonstrates a remarkable ability to quickly grasp new technologies. His frontend development skills, especially in React, are impressive for someone at his stage. A genuinely talented developer.",
    avatar: '👩‍💻',
    rating: 5,
  },
  {
    name: 'Arjun Reddy',
    role: 'Classmate & Peer',
    org: "Vignan's Institute",
    text: "Working with Ganesh on college projects has been a great experience. He brings creativity and technical precision to every task, and always goes the extra mile to make things look and work great.",
    avatar: '👨‍🎓',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative z-10">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-tag"><span>💬</span> Testimonials</span>
          <h2 className="section-title mb-4">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Feedback from professors, mentors, and peers who have worked with me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 relative"
              data-aos="fade-up"
              data-aos-delay={i * 120}
              whileHover={{ y: -4 }}
            >
              {/* Quote decoration */}
              <div className="text-6xl text-violet-500/10 font-serif absolute top-4 right-4 leading-none select-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <span key={si} className="text-amber-400 text-sm">★</span>
                ))}
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600/40 to-indigo-600/40 border border-violet-500/25 flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-200 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role} · {t.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
