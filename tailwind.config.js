module.exports = {
  // purge: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      body: ["Nunito"],
      title: ["Quicksand"],
    },
    colors: {
      title: {
        light: '#000000 ',
        DEFAULT: '#ffffff',
        dark: '##ffffff',
      },
      devPink: {
        light: '#EA0A8E',
        DEFAULT: '#EA0A8E',
        dark: '#EA0A8E',
      },
      mainBlue: {
        DEFAULT: '#488ae8',
        Hover: '#679eec',
      }
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
