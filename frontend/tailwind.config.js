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
        blancoPersonalizado: 'rgb(224, 182, 150)'
      },
      colorTextoPrincipal: {
        'texto-gradiente': 'linear-gradient(90deg, rgb(146, 24, 31), rgb(221, 80, 56), rgb(255, 123, 67))',
      },
    },
  },
  plugins: [],
}