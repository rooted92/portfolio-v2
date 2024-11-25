import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        citrine: "var(--citrine)",
        persimmon: "var(--persimmon)",
        hookersGreen: "var(--hookers-green)",
        licorice: "var(--licorice)",
        honeydew: "var(--honeydew)",
      },
    },
  },
  plugins: [],
} satisfies Config;
