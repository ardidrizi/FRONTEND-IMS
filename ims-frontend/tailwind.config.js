/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#199aaf', // azul osc turquesa
        accent: '#cdedfe', // azul claro
        highlight: '#3ed7d7', // Azul turquesa intenso
        skyblue: '#87ceeb', // Azul cielo bonito
      },
      fontFamily: {
        sans: ['-apple-system', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
