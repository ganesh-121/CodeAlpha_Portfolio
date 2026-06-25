import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCommand, FiSearch, FiX } from 'react-icons/fi';

const COMMANDS = [
  { label: 'Go to Home', action: () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }), icon: '🏠' },
  { label: 'Go to About', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), icon: '👤' },
  { label: 'Go to Skills', action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }), icon: '⚡' },
  { label: 'Go to Projects', action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), icon: '💻' },
  { label: 'Go to Contact', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), icon: '📬' },
  { label: 'Go to Education', action: () => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' }), icon: '🎓' },
  { label: 'View GitHub', action: () => window.open('https://github.com/ganesh-121', '_blank'), icon: '🐙' },
  { label: 'View LinkedIn', action: () => window.open('https://www.linkedin.com/in/mahanty-ganesh-59747331b', '_blank'), icon: '💼' },
  { label: 'View CodeChef', action: () => window.open('https://www.codechef.com/users/ganesh5658', '_blank'), icon: '🍴' },
  { label: 'Download Resume', action: () => { const a = document.createElement('a'); a.href='/resume.pdf'; a.download='Mahanty_Ganesh_Resume.pdf'; a.click(); }, icon: '📄' },
  { label: 'Send Email', action: () => window.location.href = 'mailto:ganeshmahanty121@gmail.com', icon: '✉️' },
];

export default function CommandPalette({ onClose }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);

  const filtered = COMMANDS.filter(c =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  const execute = (cmd) => {
    cmd.action();
    onClose();
  };

  const handleKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelected(s => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelected(s => Math.max(s - 1, 0));
    } else if (e.key === 'Enter' && filtered[selected]) {
      execute(filtered[selected]);
    }
  };

  return (
    <div className="command-palette-overlay" onClick={onClose}>
      <motion.div
        className="command-palette"
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.2 }}
        onClick={e => e.stopPropagation()}
        onKeyDown={handleKey}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/8">
          <FiSearch size={18} className="text-slate-500 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-slate-200 text-sm outline-none placeholder-slate-600"
          />
          <button onClick={onClose} className="text-slate-500 hover:text-slate-300">
            <FiX size={18} />
          </button>
        </div>

        {/* Commands */}
        <div className="py-2 max-h-80 overflow-y-auto">
          {filtered.length === 0 ? (
            <p className="text-slate-600 text-sm text-center py-8">No commands found</p>
          ) : (
            filtered.map((cmd, i) => (
              <button
                key={i}
                className={`w-full flex items-center gap-3 px-5 py-3 text-sm transition-colors ${
                  i === selected
                    ? 'bg-violet-600/20 text-violet-200'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
                onClick={() => execute(cmd)}
                onMouseEnter={() => setSelected(i)}
              >
                <span className="text-base">{cmd.icon}</span>
                {cmd.label}
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-white/5 flex gap-4 text-xs text-slate-600">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>Esc close</span>
        </div>
      </motion.div>
    </div>
  );
}
