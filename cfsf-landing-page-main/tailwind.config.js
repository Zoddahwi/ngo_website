/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg) scale(1)' },
          '50%': { transform: 'rotate(1deg) scale(1.03)' },
        },
        pop: {
          '0%': { transform: 'scale(0.98)' },
          '60%': { transform: 'scale(1.06)' },
          '100%': { transform: 'scale(1)' },
        },
        flash: {
          '0%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.25)' },
          '100%': { filter: 'brightness(1)' },
        },
      },
      animation: {
        'wiggle-short': 'wiggle 350ms ease-in-out',
        'pop': 'pop 220ms ease-out',
        'flash': 'flash 400ms ease-out',
      },
      colors: {
        primary: {
          50: '#f0fff4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#008b00', // requested green rgb(0,139,0)
          700: '#006f00',
          800: '#004e00',
          900: '#003b00',
        },
        secondary: {
          50: '#f0fff4',
          100: '#e8fbee',
          200: '#d1f7dc',
          300: '#a8efbf',
          400: '#7ee6a3',
          500: '#55dc86',
          600: '#23c464',
          700: '#1aa350',
          800: '#167f3f',
          900: '#125f30',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'heading': ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

