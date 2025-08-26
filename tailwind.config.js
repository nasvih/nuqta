/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBF2FF',
          100: '#DBE8FF',
          200: '#BDD4FF',
          300: '#94B8FF',
          400: '#6291FF',
          500: '#1A73E8',
          600: '#1557C7',
          700: '#0F3FA6',
          800: '#0A2B85',
          900: '#071B6E',
        },
        amber: {
          400: '#FBBF24',
          500: '#F59E0B',
        },
        navy: {
          50: '#F8FAFC',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};