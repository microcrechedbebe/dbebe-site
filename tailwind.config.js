/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F3FA',
          100: '#B3D9F5',
          200: '#81BFF0',
          300: '#578CB4',
          400: '#3E6A91',
          500: '#2C3E50',
        },
        accent: {
          light: '#F5E6D3',
          DEFAULT: '#F9CEB4',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}