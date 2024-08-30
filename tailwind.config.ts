import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      purple: "#721B65",
      orange: "#E47653",
      yellow: "#FFC95C",
      magenta: "#B80B57",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
