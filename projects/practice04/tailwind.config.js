/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        White: '#fff',
        Gray: {
          900: '#121214',
          800: '#202024',
          500: '#8d8d99',
          300: '#c4c4cc',
          100: '#e1e1e6',
        },
        Green: {
          500: '#00875f',
          300: '#00b37e',
        }
      },
      fontSize: {
        cmd: '1.125rem',
        clg: '1.125rem',
        cxl: '1.5rem',
        'c2xl': '2rem',
      }
    },
  },
  plugins: [],
}
