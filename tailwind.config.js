module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'skin-shades-1': '#E9AA5C',
        'skin-shades-2': '#F9C171',
        'skin-shades-3': '#243c5a',
        'skin-shades-4': '#243c5a',
        'skin-shades-5': '#243c5a',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
