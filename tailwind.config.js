/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
              colors: {
          pink: { DEFAULT: '#ff99c8', 50: '#fff5f8', 100: '#ffe6f0', 200: '#ffcce1', 300: '#ff99c8', 400: '#ff66af', 500: '#ff99c8', 600: '#ff4da6', 700: '#ff3399', 800: '#ff1a8c', 900: '#ff0080' },
          yellow: { DEFAULT: '#fcf6bd', 50: '#fffef7', 100: '#fffdf0', 200: '#fffbe1', 300: '#fcf6bd', 400: '#f9f199', 500: '#fcf6bd', 600: '#f5f075', 700: '#f0ea5c', 800: '#ebe443', 900: '#e6de2a' },
          mint: { DEFAULT: '#d0f4de', 50: '#f7fdfa', 100: '#effbf5', 200: '#dff7eb', 300: '#d0f4de', 400: '#b0eec8', 500: '#d0f4de', 600: '#90e8b2', 700: '#70e29c', 800: '#50dc86', 900: '#30d670' },
          sky: { DEFAULT: '#a9def9', 50: '#f5fbff', 100: '#ebf7ff', 200: '#d7efff', 300: '#a9def9', 400: '#7bcdf3', 500: '#a9def9', 600: '#4dbced', 700: '#2db2e1', 800: '#0da8d5', 900: '#009ec9' },
          purple: { DEFAULT: '#e4c1f9', 50: '#faf5ff', 100: '#f5ebff', 200: '#ebd7ff', 300: '#e4c1f9', 400: '#d4a1f3', 500: '#e4c1f9', 600: '#c481ed', 700: '#b461e1', 800: '#a441d5', 900: '#9421c9' }
        },
      fontFamily: {
        'ibm-plex': ['IBM Plex Sans', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 