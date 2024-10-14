/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'primary': "#335eea",
        'secondary': "#506690",
        'success': "#42ba96",
        'info': "#7c69ef",
        'warning': "#fad776",
        'danger': "#df4759",
        'light': "#f9fbfd",
        'dark': "#1b2a4e",
        'gris-leger': "#ececec"
      },
    
      fontFamily: {
        "sans-serif": ["SFMono-Regular","Segoe UI","Roboto","Helvetica"],
      },
      padding: {
        'container': "0 50px 0 50px",
      }
    },
  },
  plugins: [],
}

