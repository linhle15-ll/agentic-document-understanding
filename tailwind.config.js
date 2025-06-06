import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // Move para a largura total
        },
      },
      color: {
        violet: "from-[#FF1CF7] to-[#b249f8]",
        yellow: "from-[#FF705B] to-[#FFB457]",
        cyan: "from-[#00b7fa] to-[#01cfea]",
        foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
        fptBlue: "#0066B2",
        fptOrange: "#F36F21",
        fptGreen: "#0DB14B",
        fptGradient: "fpt-gradient",
      },
      animation: { "infinite-scroll": "infinite-scroll linear infinite" },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;