import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiHeart, FiArrowUp } from 'react-icons/fi';
import { SiCodechef } from 'react-icons/si';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { icon: FiGithub, href: 'https://github.com/ganesh-121', label: 'GitHub', color: '#94A3B8' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/mahanty-ganesh-59747331b', label: 'LinkedIn', color: '#0A66C2' },
  { icon: SiCodechef, href: 'https://www.codechef.com/users/ganesh5658', label: 'CodeChef', color: '#8B5CF6' },
  { icon: FiMail, href: 'mailto:ganeshmahanty121@gmail.com', label: 'Email', color: '#06B6D4' },
];

export default function Footer() {
  const scrollTo = (href) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#080E1C] border-t border-white/5 overflow-hidden">
      <div className="footer-glow" />

      {/* Top glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(ellipse, #7C3AED, transparent)' }}
        />
      </div>

      <div className="container-custom relative py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center text-white font-bold">
                MG
              </div>
              <div>
                <p className="font-display font-bold text-white">Mahanty Ganesh</p>
                <p className="text-xs text-slate-500">CS Student & Front-End Developer</p>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Building modern web experiences with passion, precision, and creativity.
            </p>
            {/* Contact info */}
            <div className="space-y-2">
              {[
                { icon: FiMail, text: 'ganeshmahanty121@gmail.com', href: 'mailto:ganeshmahanty121@gmail.com' },
                { icon: FiPhone, text: '+91 8639979748', href: 'tel:+918639979748' },
                { icon: FiMapPin, text: 'Visakhapatnam, Andhra Pradesh, India' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                  <item.icon size={12} className="text-violet-500 flex-shrink-0" />
                  {item.href ? (
                    <a href={item.href} className="hover:text-violet-400 transition-colors">{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-200 mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {FOOTER_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-slate-500 hover:text-violet-400 text-sm transition-colors text-left hover-underline"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-slate-200 mb-5 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {SOCIAL_LINKS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 hover:border-violet-500/30 transition-all group text-sm"
                >
                  <s.icon size={16} className="text-slate-400 group-hover:text-violet-400 transition-colors" />
                  <span className="text-slate-400 group-hover:text-slate-200 transition-colors text-xs">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm flex items-center gap-1.5">
            Made with <FiHeart className="text-violet-500" size={14} fill="currentColor" /> by{' '}
            <span className="text-violet-400 font-medium">Mahanty Ganesh</span>
          </p>
          <p className="text-slate-700 text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-violet-400 transition-colors"
          >
            <FiArrowUp size={12} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
