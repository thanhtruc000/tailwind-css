module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: "class", // or 'media' or 'class'
  content: [],
  theme: {
    extend: {
      spacing: {
        35: "35px",
      },
      colors: {
        orange: "#c2410c",
      }
    },
  },
  plugins: [],
}
