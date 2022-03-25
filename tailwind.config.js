module.exports = {
  // important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    minWidth: {
      'md': '300px',
      'lg': '400px',
    },

    container: {
      center: true,
    },
    extend: {
      fontSize: {
        '2xs': '10px',
      },
      minHeight: {
        'a4': '1122px',
        '90vh': '90vh',
        'inherit': 'inherit'
      },
      height: {
        'a4': '855px',
      },
      width: {
        'a4': '800px',
      },
      minWidth: {
        '72': '18rem',
      },
      screens: {
        'tablet': '640px',
        'laptop': '860px',
        'desktop': '1024px',
      },
      colors: {
        'barn-background': '#FFFAE7',
      }
    },
  },
  plugins: [],
}
