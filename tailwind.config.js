module.exports = {
  // purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body':['Nunito'],
      'title':['Quicksand'] 
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
