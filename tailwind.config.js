module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      "nature-light": "url('./images/bg1.jpg')",
      "nature-dark": "url('./images/bg2.jpg')",
    },
  },
  plugins: [require('flowbite/plugin')],
}
