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
        "sm": '100%',
        "md": '540px',
        "lg": '720px',
        "xl": '960px',
        '2xl': '1200px',
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Saira Semi Condensed', 'sans-serif'],
        'display': ['Saira Semi Condensed',],
        'body': ['"Saira Semi Condensed"',],
      },
      maxHeight: {
        '450': '450px',
      },
      height: {
        '385': '385px',
        '60vh': '60vh',
        '80vh': '80vh',
        '400': '400px',
        '300': '300px',
      },
      zIndex: {
        '10000': '10000',
      },
      colors: {
        'main-blue': '#0f1d2f',
        'strong-blue': '#031327',
        'orange-main': '#ff5400',
        'btn-home': '#ffa83d ',
      },
    },
  },
  plugins: [],
}