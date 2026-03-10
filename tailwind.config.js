/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2F6FA3',
        navy: '#1B3A57',
        landscape: '#58B947',
        water: '#7EC8E3',
        neutral: '#F5F7FA',
        'primary-dark': '#274e7a',
        'landscape-dark': '#4a9d3f',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        neutral: theme('colors.neutral'),
      }),
    },
  },
  plugins: [],
};