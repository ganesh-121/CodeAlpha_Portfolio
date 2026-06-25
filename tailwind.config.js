/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0B1120',
          secondary: '#10172A',
          card: '#0F1929',
        },
        brand: {
          blue: '#1E3A8A',
          indigo: '#4338CA',
          violet: '#6366F1',
          purple: '#7C3AED',
          light: '#8B5CF6',
          cyan: '#06B6D4',
          electric: '#3B82F6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2s infinite',
        'typewriter': 'typewriter 3s steps(40) infinite',
        'blink': 'blink 1s step-end infinite',
        'slide-up': 'slideUp 0.6s ease forwards',
        'slide-down': 'slideDown 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'scale-in': 'scaleIn 0.5s ease forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'orbit': 'orbit 10s linear infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'particle': 'particle 15s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px #7C3AED, 0 0 40px #7C3AED50' },
          '50%': { boxShadow: '0 0 40px #8B5CF6, 0 0 80px #8B5CF650' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideUp: {
          from: { transform: 'translateY(30px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          from: { transform: 'translateY(-30px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scaleIn: {
          from: { transform: 'scale(0.8)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { textShadow: '0 0 10px #8B5CF6, 0 0 20px #8B5CF6, 0 0 40px #8B5CF6' },
          '50%': { textShadow: '0 0 20px #06B6D4, 0 0 40px #06B6D4, 0 0 80px #06B6D4' },
        },
        orbit: {
          from: { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          to: { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '75%': { transform: 'rotate(-20deg)' },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px) translateX(100px)', opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
        'hero-gradient': 'radial-gradient(ellipse at center, #1E3A8A20 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(139, 92, 246, 0.3)',
        'glow': '0 0 20px rgba(139, 92, 246, 0.4)',
        'glow-lg': '0 0 40px rgba(139, 92, 246, 0.5)',
        'glow-xl': '0 0 60px rgba(139, 92, 246, 0.6)',
        'cyan-glow': '0 0 20px rgba(6, 182, 212, 0.4)',
        'blue-glow': '0 0 20px rgba(59, 130, 246, 0.4)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 20px 60px rgba(139, 92, 246, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(139, 92, 246, 0.1)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
