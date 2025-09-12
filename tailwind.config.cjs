/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        khm: ['KhM', 'monospace'],
        khmb: ['KhMB', 'monospace'],
        khmbi: ['KhMBI', 'monospace'],
        khmi: ['KhMI', 'monospace'],
        kht: ['KhT', 'monospace'],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(-0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
}

