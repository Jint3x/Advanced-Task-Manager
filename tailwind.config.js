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
      },

      gridTemplateRows: {
        "homepage-mobile-description": "110px 60px 110px 60px 110px 60px 110px 60px 110px 60px 110px 60px 110px"
      },

      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },

      gridRowEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      }
    },
  },
  plugins: [],
}
