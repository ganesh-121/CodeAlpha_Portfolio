import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // loading | done

  useEffect(() => {
    // Simulate loading progress
    const intervals = [];
    let p = 0;
    const tick = setInterval(() => {
      p += Math.random() * 15 + 5;
      if (p >= 100) {
        p = 100;
        setProgress(100);
        clearInterval(tick);
        setTimeout(() => {
          setPhase('done');
          setTimeout(onComplete, 600);
        }, 400);
      } else {
        setProgress(Math.round(p));
      }
    }, 150);
    return () => clearInterval(tick);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase === 'loading' && (
        <motion.div
          className="loader-container select-none"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Orbiting rings */}
          <div className="relative flex items-center justify-center mb-8">
            {[160, 120, 90].map((size, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-violet-600/20"
                style={{ width: size, height: size }}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 4 + i * 2, repeat: Infinity, ease: 'linear' }}
              />
            ))}
            {/* Orbiting dot */}
            <motion.div
              className="absolute w-3 h-3 rounded-full bg-cyan-400"
              style={{ boxShadow: '0 0 12px #06B6D4' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              // Offset so it orbits along the outer ring
              initial={{ x: 80 }}
            />

            {/* MG Initials */}
            <motion.div
              className="loader-logo z-10"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              MG
            </motion.div>
          </div>

          {/* Name */}
          <motion.p
            className="font-display text-slate-400 text-sm tracking-widest uppercase mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Mahanty Ganesh
          </motion.p>

          {/* Progress bar */}
          <div className="loader-bar mt-4">
            <motion.div
              className="loader-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Percentage */}
          <motion.p
            className="text-xs text-violet-400 mt-3 font-mono"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading... {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
