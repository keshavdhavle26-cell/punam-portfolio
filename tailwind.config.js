/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#050816',
          secondary: '#0B1020',
          card: 'rgba(15, 23, 42, 0.65)',
          hover: 'rgba(30, 41, 59, 0.75)',
        },
        accent: {
          cyan: '#00E5FF',
          'cyan-glow': 'rgba(0, 229, 255, 0.25)',
          indigo: '#6366F1',
          'indigo-glow': 'rgba(99, 102, 241, 0.25)',
          emerald: '#10B981',
        },
        surface: {
          main: '#F8FAFC',
          muted: '#94A3B8',
          subtle: '#64748B',
          border: 'rgba(148, 163, 184, 0.15)',
          'border-bright': 'rgba(0, 229, 255, 0.3)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Grotesk', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -5px rgba(0, 229, 255, 0.3)',
        'cyan-glow-sm': '0 0 12px -2px rgba(0, 229, 255, 0.25)',
        'indigo-glow': '0 0 25px -5px rgba(99, 102, 241, 0.3)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 15px -3px rgba(0, 229, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'grid-scroll': 'gridScroll 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gridScroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' },
        },
      },
    },
  },
  plugins: [],
};
