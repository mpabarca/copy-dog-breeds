/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-color-pink': '#F4E6E0',
        'main-color-pink-dark': '#DBB5AC',
        'main-color-orange': '#F0221D',
        'secondary-color-black': '#111011',
        'secondary-color-gray-light': '#A49C98',
        'secondary-color-gray-dark': '#494949',
        'secondary-color-purple': '#97768A',
      },
    },
  },
  plugins: [],
};
