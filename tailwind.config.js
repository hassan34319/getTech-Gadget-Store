/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    require('flowbite/plugin')
],
  theme: {
    extend: {
      fontFamily : {
        poppins : ['var(--font-poppins)']
      },
      screens : {
        xsm : '370px'
      }
    },
  },
  plugins: [],
}
