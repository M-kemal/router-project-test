/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.vue"],
  theme: {
    extend: {
      container: true,
    },
  },
  plugins: [],
};
