import type { Config } from "tailwindcss";
const {addDynamicIconSelectors} = require('@iconify/tailwind');

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        citrine: "var(--citrine)",
        persimmon: "var(--persimmon)",
        hookersGreen: "var(--hookers-green)",
        licorice: "var(--licorice)",
        honeydew: "var(--honeydew)",
      },
      screens: {
        tiniest: '280px',
        tiny: '320px',
        xxs: '375px',
        xs: '475px',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['autofill'],
      textColor: ['autofill'],
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
} satisfies Config;
