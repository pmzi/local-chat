// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  important: '#root',
  theme: {
    extend: {
      gridTemplateColumns: {
        chat: '30rem 1fr',
      },
      gridTemplateRows: {
        chat: '8rem minmax(0, 1fr) 5rem',
      },
      minHeight: (theme) => theme('height'),
      maxWidth: (theme) => theme('width'),
      colors: {
        primary: {
          DEFAULT: defaultTheme.colors.red[700],
          light: defaultTheme.colors.red[600],
        },
        secondary: defaultTheme.colors.gray[700],
      },
      borderColor: (theme) => ({
        layout: theme('colors.gray.900'),
      }),
    },
  },
  variants: {
    extend: {
      margin: ['last', 'first'],
      padding: ['last', 'first'],
    },
  },
  plugins: [],
};
