import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        accent: "#0047AB",
        "text-primary": "#FFFFFF",
        "text-secondary": "#A0A0A0",
        "hover-state": "#1A1A1A",
        "border-color": "#262626",
      },
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "sans-serif"],
        heading: ["Helvetica Neue", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "Space Mono", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.02em",
        wide: "0.1em",
      },
      maxWidth: {
        container: "1440px",
      },
    },
  },
  plugins: [],
}
export default config
