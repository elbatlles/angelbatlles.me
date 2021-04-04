module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    display: ["group-hover", "responsive"],
    position: ["hover", "focus"],
    extend: {
      outline: ["hover", "active"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
