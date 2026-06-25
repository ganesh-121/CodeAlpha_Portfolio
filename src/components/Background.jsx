import React, { useEffect, useRef } from 'react';

// Floating code symbols for the background
const CODE_SYMBOLS = [
  '<div>', '</div>', 'const', '=>', 'function()', '{...}',
  'import', 'export', 'return', 'useState', 'useEffect',
  'async', 'await', '.map()', '.filter()', 'npm', 'git',
  '#include', 'int main()', 'System.out', 'SELECT *',
  '01010', '{ }', '[ ]', '()', '!=', '===', '&&', '||',
];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

export default function Background() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const PARTICLE_COUNT = 80;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: random(0, W),
      y: random(0, H),
      r: random(1, 2.5),
      vx: random(-0.3, 0.3),
      vy: random(-0.5, -0.1),
      alpha: random(0.2, 0.8),
      color: Math.random() > 0.5 ? '#8B5CF6' : '#06B6D4',
    }));

    let animId;
    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Draw subtle grid
      ctx.strokeStyle = 'rgba(99,102,241,0.04)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < W; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Mouse parallax glow
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 400);
      grad.addColorStop(0, 'rgba(124,58,237,0.04)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // Particles
      particles.forEach(p => {
        p.x += p.vx + (mx - W / 2) * 0.0001;
        p.y += p.vy;
        if (p.y < -5) { p.y = H + 5; p.x = random(0, W); }
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(p.alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color + '18';
        ctx.fill();
      });

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(139,92,246,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }
    draw();

    const handleResize = () => {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W; canvas.height = H;
    };
    const handleMouse = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouse);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated gradient blobs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #7C3AED, transparent)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #06B6D4, transparent)',
          animation: 'float 10s ease-in-out 3s infinite',
        }}
      />
      <div
        className="absolute top-3/4 left-1/3 w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #4338CA, transparent)',
          animation: 'float 12s ease-in-out 6s infinite',
        }}
      />

      {/* Floating code symbols */}
      {CODE_SYMBOLS.map((sym, i) => (
        <span
          key={i}
          className="code-symbol"
          style={{
            left: `${random(0, 100)}%`,
            bottom: `-${random(10, 50)}px`,
            animationDuration: `${random(15, 30)}s`,
            animationDelay: `${random(0, 20)}s`,
            fontSize: `${random(0.65, 1)}rem`,
            opacity: random(0.05, 0.2),
          }}
        >
          {sym}
        </span>
      ))}

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
