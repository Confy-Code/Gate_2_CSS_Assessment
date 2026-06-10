/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This registers 'font-montserrat' as a utility class
        montserrat: ['Montserrat', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}