/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffeeee',
          100: '#ffdada',
          200: '#ffbbbb',
          300: '#ff8b8b',
          400: '#ff4949',
          500: '#ff1111',
          600: '#ff0000',
          700: '#e70000',
          800: '#be0000',
          900: '#900000',
          950: '#560000',
        },
      },
    },
  },
};
