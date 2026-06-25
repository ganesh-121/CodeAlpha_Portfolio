import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enlarged, setEnlarged] = useState(false);

  useEffect(() => {
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;
    let animId;

    const moveDot = (e) => {
      dotX = e.clientX;
      dotY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = dotX + 'px';
        dotRef.current.style.top = dotY + 'px';
      }
    };

    const animateRing = () => {
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px';
        ringRef.current.style.top = ringY + 'px';
      }
      animId = requestAnimationFrame(animateRing);
    };

    const handleMouseOver = (e) => {
      const el = e.target.closest('a, button, [role="button"], .cursor-pointer, input, textarea, select, label');
      setEnlarged(!!el);
    };

    window.addEventListener('mousemove', moveDot);
    window.addEventListener('mouseover', handleMouseOver);
    animId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', moveDot);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${enlarged ? 'enlarged' : ''}`} />
    </>
  );
}
