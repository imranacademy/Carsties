import type { Config } from "tailwindcss";

const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    flowbite.content(),
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  corePlugins: { aspectRatio: false },
  plugins: [  flowbite.plugin(),require("@tailwindcss/aspect-ratio")],
} satisfies Config;
