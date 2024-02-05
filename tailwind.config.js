/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': '#0013BA',
      'white': '#ffffff',
    },
    extend: {
      fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans]
    }},
  },
  plugins: [],
}

