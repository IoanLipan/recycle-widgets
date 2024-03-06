/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cabin", "ui-sans-serif", "system-ui"],
      },
      colors: {
        'custom-blue': '#2F398C',
        'custom-green': '#3B755F',
        'custom-beige': '#F2EBDB',
      },
    },
  },
  mode: 'jit',
  plugins: [],
};
