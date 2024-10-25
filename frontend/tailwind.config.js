/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rojoPersonalizado: 'rgb(146, 24, 31)',
      },
    },
  },
  plugins: [],
}