import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#FC4747",
        dark_blue: "#10141E",
        semi_dark_blue: "#161D2F",
        greyish_blue: "#5A698F",
      },
      fontSize: {
        heading_large: "32px",
        heading_medium: "24px",
        heading_small: "20px",
        heading_xsmall:"18px",
        body_medium: "15px",
        body_small: "13px",
      },
    },
  },
  plugins: [],
};
export default config;
