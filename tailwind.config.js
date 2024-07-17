/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        navy: '#3A3F77',
        background: '#242530',
        number: '#404258',
        operations: '#F49D1A',
      },
    },
  },
  plugins: [],
}
