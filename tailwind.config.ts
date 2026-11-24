import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#071426",
        panel: "#0d1d33",
        line: "#1d3554",
        accent: "#39a8ff",
        muted: "#9db0c8"
      },
      boxShadow: {
        glow: "0 0 50px rgba(57,168,255,.13)"
      }
    }
  },
  plugins: []
};
export default config;
