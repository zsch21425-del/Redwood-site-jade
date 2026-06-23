/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './visualize.html',
    './estimate.html',
    './thanks.html',
    './services/*.html',
    './slater-marietta.html',
    './greenville-county-landscape-design.html',
    './marietta-sc-lawn-care.html',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#2E5A3C',
          light: '#3A7B52',
          pale: '#E8F3EC',
          dark: '#1E3B28',
        },
        brown: {
          DEFAULT: '#4A3728',
          light: '#6B5344',
          dark: '#2E2219',
        },
        gold: {
          DEFAULT: '#C8960C',
          light: '#E8C84A',
          dark: '#9B7400',
        },
        cream: '#FFFDF7',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.9s ease forwards',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
