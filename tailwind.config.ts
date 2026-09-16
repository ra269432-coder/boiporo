import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F8F5EF',
        'paper-dark': '#F0EBE1',
        ink: '#18181A',
        charcoal: '#2C2C2C',
        muted: '#6B6560',
        green: {
          DEFAULT: '#1B5E3B',
          hover: '#2D7A52',
          light: '#EBF5EF',
        },
        red: {
          DEFAULT: '#9B2335',
          light: '#F5EBEC',
        },
        gold: {
          DEFAULT: '#B8944A',
          light: '#F7F1E6',
        },
        border: {
          DEFAULT: '#E4DDD3',
          dark: '#C8BFB4',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        bangla: ['Hind Siliguri', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.05' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '100': '25rem',
        '120': '30rem',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
