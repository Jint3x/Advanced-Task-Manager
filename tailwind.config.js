module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-purple": "#D05ECC",
        "primary-green": "#00A053",
        "background-black": "#161616"
      },

      spacing: {
      },

      fontSize: {
        "mobile-header": "1.563rem"
      },

      screens: {
        "3xl": "1920px"
      }
    },
  },
  plugins: [],
}
