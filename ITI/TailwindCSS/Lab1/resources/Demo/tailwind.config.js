/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: '2rem',
      center:true
    },
    extend: {
      aspectRatio: {
        'ui': '5/2',
      }
    },
  },
  plugins: [],
}

