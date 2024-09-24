/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-pink': '#E6C7EB',
        'color-turquoise': '#64CEBB',
        'color-white': '#FFFFFF'

      },
      fontFamily: { 
        'font-title': 'Fahkwang'
      }
    },
  },
  plugins: [],
}

