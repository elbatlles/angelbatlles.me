module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  color: {
    "smoke-darkest": "rgba(0, 0, 0, 0.9)",
    "smoke-darker": "rgba(0, 0, 0, 0.75)",
    "smoke-dark": "rgba(0, 0, 0, 0.6)",
    smoke: "rgba(0, 0, 0, 0.5)",
    "smoke-light": "rgba(0, 0, 0, 0.4)",
    "smoke-lighter": "rgba(0, 0, 0, 0.25)",
    "smoke-lightest": "rgba(0, 0, 0, 0.1)",
  },
  variants: {
    display: ["group-hover", "responsive"],
    position: ["hover", "focus"],
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
