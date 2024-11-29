/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937', // Gris oscuro
        accent: '#f5f5f7', // Blanco suave
        highlight: '#007aff', // Azul Apple
        skyblue: '#87ceeb', // Azul cielo bonito
      },
      fontFamily: {
        sans: ['-apple-system', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
