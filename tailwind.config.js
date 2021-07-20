module.exports = {
  // purge: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      body: ["Nunito"],
      title: ["Quicksand"],
    },
    // backgroundColor: (theme) => theme("colors"),
    // colors: {
    //   black: colors.black,
    //   white: colors.white,
    //   gray: colors.coolGray,
    //   red: colors.red,
    //   yellow: colors.amber,
    //   green: colors.emerald,
    //   blue: colors.blue,
    //   indigo: colors.indigo,
    //   purple: colors.violet,
    //   pink: colors.pink,
    // },
    colors: {
      indigo: {
        light: '#202e78',
        DEFAULT: '#5c6ac4',
        dark: '#b3bcf5',
      }
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
