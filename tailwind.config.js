/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        prata : ['Prata','serif'],
        prompt : ['Prompt', 'sans-serif'],
        inter : ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}