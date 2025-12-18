import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0b',
          secondary: '#111113',
          tertiary: '#18181b',
          card: '#141416'
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#f4d03f',
          dark: '#a08629'
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Outfit', '-apple-system', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'gold-soft': '0 4px 30px rgba(212,175,55,0.25)'
      }
    }
  },
  plugins: []
};

export default config;


