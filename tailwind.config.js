/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        'NcNews-green': '#527853',
        'green-hover': '#72A874',
        'hoverColour': '#322F2B',
        'orange-card': '#F7B787',
        'button-red': '#AA3A3A',
        'button-red-hover': '#892E2E',
        'orange-card': '#F7B787'
      }
    },
  },
  plugins: [],
}
