/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        fontFamily:{
          clashDisplay:['var(--clash-display)']
          , Roboto:['var(--font-roboto)']
        }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
