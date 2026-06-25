import React, { useEffect, useState } from 'react';
import { FiEye } from 'react-icons/fi';

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Persist visitor count in localStorage
    const stored = parseInt(localStorage.getItem('mg_visitors') || '1247', 10);
    const newCount = stored + 1;
    localStorage.setItem('mg_visitors', newCount);

    // Animate count up
    let current = stored;
    const step = Math.ceil((newCount - stored) / 20);
    const timer = setInterval(() => {
      current = Math.min(current + step, newCount);
      setCount(current);
      if (current >= newCount) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="visitor-counter hidden md:flex">
      <FiEye size={12} className="text-violet-400" />
      <span className="font-mono font-semibold text-violet-300">{count.toLocaleString()}</span>
      <span>visitors</span>
    </div>
  );
}
