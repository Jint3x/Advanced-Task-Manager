module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-purple": "#D05ECC",
        "primary-purple-hover": "#AF46AB",
        "primary-purple-active": "#982A94",
        "primary-green": "#00A053",
        "primary-green-hover": "#008646",
        "primary-green-active": "#006534",
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
        "homepage-mobile-description": "110px 60px 110px 60px 110px 60px 110px 60px 110px 60px 110px 60px 110px",
        "homepage-tablet-description": "110px 138px 110px 138px 110px",
      },

      gridTemplateColumns: {
        "homepage-tablet-description": "220px 100px 110px 100px 220px",
        "homepage-laptop-description": "383px 150px 110px 150px 383px",
        "homepage-screen-description": "383px 230px 110px 230px 383px",
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
