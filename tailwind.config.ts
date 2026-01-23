import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        secondary: "#666666",
        accent: "#0066ff",
        background: "#ffffff",
        muted: "#f5f5f5",
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "system-ui", "sans-serif"],
      },
      spacing: {
        section: "120px",
        "section-mobile": "80px",
      },
    },
  },
  plugins: [],
};

export default config;
