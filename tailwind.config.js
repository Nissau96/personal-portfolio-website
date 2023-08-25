/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#17171F',
        accent: '#009688',
      },
    },
    fontFamily: {
      heading: ['Roboto Mono', 'monospace'],
      poppins: ['Poppins', 'sans-serif'],
    },

  },
  plugins: [

  ],
}
