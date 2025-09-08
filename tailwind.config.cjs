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
    },
  },
  plugins: [],
}

