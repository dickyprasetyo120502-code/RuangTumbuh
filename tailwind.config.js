/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFDFB',
          100: '#FAF8F1', // Main Cream
          200: '#F4EFE0',
          300: '#ECE3CC',
        },
        forest: {
          50: '#F1F6F3',
          100: '#DEEDE3',
          500: '#3D6C53',
          700: '#294C3A', // Main Forest Green
          800: '#1F3A2C',
          900: '#14271E',
        },
        sage: {
          100: '#EDF5EF',
          200: '#D7E9DD',
          300: '#B9D6C2', // Main Sage Green
          400: '#9EC2A8',
        },
        sky: {
          100: '#F0F6FD',
          200: '#E2EEFA',
          300: '#DCEBFA', // Main Sky Blue
          400: '#BAD7F5',
        },
        peach: {
          100: '#FDEDE6',
          200: '#FBE0D5',
          300: '#F5D6C7', // Main Soft Peach
          400: '#EDBFA9',
        },
        lavender: {
          100: '#F4F2FC',
          200: '#E9E4FA',
          300: '#DDD7F5', // Main Lavender
          400: '#C2B8EB',
        },
        butter: {
          100: '#FCF9E8',
          200: '#FAF4D2',
          300: '#F5E8A8', // Main Butter Yellow
          400: '#EDD977',
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(41, 76, 58, 0.06)',
        'soft-lg': '0 10px 30px -4px rgba(41, 76, 58, 0.08)',
        'card': '0 2px 12px rgba(41, 76, 58, 0.04)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
