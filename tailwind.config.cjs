/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#0F1719',
        'hero-tittle': '#F0E6BC',
        'rust-button': '#874519',
        'rust-button-hover': '#804117',
        'dark-green': '#162320',
        'blue-footer': '#325A7D',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        helvetica: ['Helvetica Neue', 'Helvetica'],
      },
      fontSize: {
        50: '50px',
        40: '40px',
        20: '20px',
      },
      backgroundImage: {
        'hero-bg': "url('Hero.png')",
      },
    },
    plugins: [require('flowbite/plugin')],
  },
};
