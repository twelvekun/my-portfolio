/** @type {import('tailwindcss').Config} */
export default {
  // PENTING: Gunakan 'class' untuk backward compatibility dengan Tailwind v4
  darkMode: 'class',
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}