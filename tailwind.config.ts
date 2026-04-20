import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#f0f7fb",
          100: "#dceef5",
          200: "#b9ddec",
          300: "#6BA8C8",
          400: "#5090B0",
          500: "#3A7A9A",
          600: "#2E6480",
          700: "#234E66",
          800: "#1A3A4D",
          900: "#112833",
        },
        gold: {
          50: "#fef9ef",
          100: "#fdf0d5",
          200: "#fbe0a8",
          300: "#F0C080",
          400: "#E0A050",
          500: "#C08830",
          600: "#A07020",
          700: "#805810",
          800: "#604008",
          900: "#402800",
        },
        peach: {
          50: "#fffaf7",
          100: "#fff0e8",
          200: "#F0D0C0",
          300: "#E8B8A0",
          400: "#D8A080",
          500: "#C08860",
          600: "#A07050",
          700: "#805840",
          800: "#604030",
          900: "#402820",
        },
        cream: {
          DEFAULT: "#FFF8F0",
          50: "#FFFDF9",
          100: "#FFF8F0",
          200: "#FFEFD8",
          300: "#FFE4BF",
          400: "#FFD4A0",
          500: "#FFC480",
          600: "#E0A060",
          700: "#C08040",
          800: "#A06830",
          900: "#805020",
        },
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        baloo: ['Baloo 2', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 3s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(15px) rotate(-3deg)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
