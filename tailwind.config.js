module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '15px',

      // default breakpoints but with 40px removed
      screens: {
        "xs": "420px",
        "sm": '540px',
        "md": '	720px',
        "lg": '960px',
        "xl": '1140px',
        '2xl': '1320px',
      },
    },
    // screens: {
    //   "xs": "",
    //   "sm": '576px',
    //   "md": '768px',
    //   "lg": '720px',
    //   "xl": '992px',
    //   '2xl': '1400px',
    // },
    extend: {
      fontFamily: {
        'sans': ['Saira Semi Condensed', 'sans-serif'],
        'display': ['Saira Semi Condensed',],
        'body': ['"Saira Semi Condensed"',],
      },
      maxHeight: {
        '450': '450px',
      },
      minHeight: {
        '60vh': '60vh',
      },
      maxWidth: {
        '250': "250px",
        '1/3': '33.333333%',
        '1/2': '50%',
        '1/4': '25%',
        '3/5': '60%',
        '2/5': '40%',
        '3/4': '75%',
      },
      height: {
        '385': '385px',
        '60vh': '60vh',
        '80vh': '80vh',
        '400': '400px',
        '300': '300px',
        '350': "350px",
      },
      width: {
        '250': "250px"
      },
      zIndex: {
        '10000': '10000',
      },
      colors: {
        'main-blue': '#0f1d2f',
        'strong-blue': '#031327',
        'orange-main': '#ff5400',
        'btn-home': '#ffa83d ',
        "blue-main": "#0f1d2f"
      },
    },
  },
  plugins: [],
}