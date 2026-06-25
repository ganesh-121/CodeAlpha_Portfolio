import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const FAQS = [
  {
    question: 'Are you available for internship opportunities?',
    answer: 'Yes! I am actively looking for internship opportunities in frontend development, full-stack web development, and software engineering. I am available for both remote and on-site positions in India.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'I primarily specialize in frontend development with React, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS. I also have experience with Node.js, Express, MongoDB, Firebase, and Python for backend and scripting.',
  },
  {
    question: 'Can you take on freelance web development projects?',
    answer: 'Absolutely! I accept freelance projects for portfolio websites, landing pages, web applications, and more. Feel free to reach out via the contact form or email to discuss your project requirements.',
  },
  {
    question: 'How quickly can you respond to project inquiries?',
    answer: 'I typically respond within 24 hours for most inquiries. For urgent project requirements, you can also reach me via phone at +91 8639979748 or on LinkedIn.',
  },
  {
    question: 'Do you have experience with responsive/mobile-first design?',
    answer: 'Yes, responsive design is a core part of my development process. All my projects are built with a mobile-first approach using CSS media queries, Tailwind CSS responsive utilities, and flexbox/grid layouts.',
  },
  {
    question: 'What is your educational background?',
    answer: "I'm pursuing a Bachelor of Technology (B.Tech) in Computer Science & Engineering at Vignan's Institute of Information Technology, Visakhapatnam. I completed my intermediate (10+2) from Ascent Junior College and schooling from Sri Chaitanya School.",
  },
  {
    question: 'Are you open to relocation for work opportunities?',
    answer: 'Yes, I am open to relocation within India for the right opportunity. I am also comfortable with remote work arrangements and have good experience collaborating in distributed team environments.',
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button
        className="faq-question w-full"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-sm text-left pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <FiChevronDown size={18} className={isOpen ? 'text-violet-400' : 'text-slate-500'} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 relative z-10">
      <div className="container-custom max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="section-tag"><span>❓</span> FAQ</span>
          <h2 className="section-title mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Common questions about my skills, availability, and work style
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        <div className="text-center mt-10" data-aos="fade-up">
          <p className="text-slate-600 text-sm">
            Still have questions?{' '}
            <a href="mailto:ganeshmahanty121@gmail.com" className="text-violet-400 hover:underline">
              Email me directly →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
