const colors = require('./app/styles/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors,
      // colors: {
      //   telus: {
      //     white: "#FFF",
      //     black: '#000',
      //     green: "#66CC00",
      //     purple: "#4B286D",
      //     "dark-blue": "#003366",
      //     "light-green": "#99FF33",
      //   },
      // }
    },
  },
  plugins: [],
};
