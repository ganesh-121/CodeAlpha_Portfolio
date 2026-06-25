import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { SiCodechef } from 'react-icons/si';
import toast from 'react-hot-toast';

const CONTACT_INFO = [
  { icon: FiMail, label: 'Email', value: 'ganeshmahanty121@gmail.com', href: 'mailto:ganeshmahanty121@gmail.com', color: '#06B6D4' },
  { icon: FiPhone, label: 'Phone', value: '+91 8639979748', href: 'tel:+918639979748', color: '#8B5CF6' },
  { icon: FiMapPin, label: 'Location', value: 'Visakhapatnam, AP, India', color: '#F59E0B' },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/ganesh-121', href: 'https://github.com/ganesh-121', color: '#94A3B8' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'in/mahanty-ganesh', href: 'https://www.linkedin.com/in/mahanty-ganesh-59747331b', color: '#0A66C2' },
];

const SUBJECTS = [
  'Internship Opportunity', 'Job Opportunity', 'Project Collaboration', 'Freelance Work', 'General Inquiry',
];

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email';
  if (!form.subject) errors.subject = 'Please select a subject';
  if (!form.message.trim()) errors.message = 'Message is required';
  else if (form.message.length < 20) errors.message = 'Message must be at least 20 characters';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setSending(true);
    try {
      // Simulate sending (replace with EmailJS in production)
      await new Promise(r => setTimeout(r, 1800));
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      toast.success('Message sent! I\'ll reply soon. 🚀', { duration: 5000 });
      setTimeout(() => setSent(false), 5000);
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      {/* BG glow */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[300px] opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #7C3AED, transparent)' }}
      />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-tag"><span>📬</span> Contact</span>
          <h2 className="section-title mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto">
            I'm open to internships, collaborations, and exciting opportunities. Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* ── Contact Info ── */}
          <div data-aos="fade-right">
            <h3 className="font-display font-bold text-white text-xl mb-6">Get in Touch</h3>

            <div className="space-y-4 mb-8">
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 glass-card group">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}35` }}
                  >
                    <item.icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-slate-300 text-sm hover:text-violet-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-300 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability card */}
            <div
              className="glass-card p-5"
              style={{ borderColor: 'rgba(16,185,129,0.25)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Available for Opportunities</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                Currently open to internships, junior developer roles, and freelance web development projects.
                Response time: within 24 hours.
              </p>
            </div>
          </div>

          {/* ── Contact Form ── */}
          <div data-aos="fade-left">
            <div className="glass-card p-8">
              <h3 className="font-display font-bold text-white text-xl mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="form-label">Name <span className="text-violet-500">*</span></label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'border-red-500/50' : ''}`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><FiAlertCircle size={11} /> {errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="form-label">Email <span className="text-violet-500">*</span></label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'border-red-500/50' : ''}`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><FiAlertCircle size={11} /> {errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="form-label">Subject <span className="text-violet-500">*</span></label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`form-input ${errors.subject ? 'border-red-500/50' : ''}`}
                  >
                    <option value="" disabled className="bg-[#0F1929]">Select a subject...</option>
                    {SUBJECTS.map(s => (
                      <option key={s} value={s} className="bg-[#0F1929]">{s}</option>
                    ))}
                  </select>
                  {errors.subject && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><FiAlertCircle size={11} /> {errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="form-label">Message <span className="text-violet-500">*</span></label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    value={form.message}
                    onChange={handleChange}
                    className={`form-input resize-none ${errors.message ? 'border-red-500/50' : ''}`}
                  />
                  <div className="flex justify-between mt-1">
                    {errors.message
                      ? <p className="text-red-400 text-xs flex items-center gap-1"><FiAlertCircle size={11} /> {errors.message}</p>
                      : <span />
                    }
                    <span className="text-xs text-slate-600">{form.message.length} chars</span>
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  disabled={sending || sent}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {sent ? (
                    <><FiCheck size={16} /> Message Sent!</>
                  ) : sending ? (
                    <><span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><FiSend size={16} /> Send Message</>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
