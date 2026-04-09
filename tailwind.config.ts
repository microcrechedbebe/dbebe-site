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
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7cc8fb",
          400: "#36aaf5",
          500: "#0c8de6",
          600: "#0070c4",
          700: "#01599f",
          800: "#064a82",
          900: "#0b3d6b",
          950: "#082850",
        },
        coral: {
          50: "#fff5f2",
          100: "#ffe8e2",
          200: "#ffd4c7",
          300: "#ffb5a1",
          400: "#ff8a6d",
          500: "#f96040",
          600: "#e03d1d",
          700: "#bc2812",
          800: "#982518",
          900: "#7d2417",
          950: "#440f08",
        },
        sun: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#461017",
        },
        sand: {
          50: "#faf8f5",
          100: "#f3ece3",
          200: "#e6d9c6",
          300: "#d6c2a3",
          400: "#c4a87d",
          500: "#b69463",
          600: "#a77d52",
          700: "#8a6543",
          800: "#705339",
          900: "#5c4531",
          950: "#31231a",
        },
        marine: {
          DEFAULT: "#0c4a6e",
          light: "#36b5e5",
          dark: "#082f49",
        },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "wave": "wave 8s ease-in-out infinite",
        "bubble": "bubble 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        bubble: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
