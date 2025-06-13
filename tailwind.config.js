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
      colors: {
        primary: "#092156",
        fptBlue: "#0066B2",
        fptOrange: "#F36F21",
        fptGreen: "#0DB14B",
        lightWhite: "#f6f8fa",
        darkBlue: "#092156"
      },
      animation: { "infinite-scroll": "infinite-scroll linear infinite" },
    },
  },
  darkMode: "class",
  plugins: [heroui(
    {
      theme: {
        extend: {
          colors: {
            primary: "#0066B2",
            secondary: "#ffffff",
          },
        },
      },
    }
  )],
}

module.exports = config;