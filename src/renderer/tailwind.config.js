// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        h1: defaultTheme.fontSize['6xl'],
        h2: defaultTheme.fontSize['4xl'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
