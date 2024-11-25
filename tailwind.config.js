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
      screens: {
        sm: '320px',
        md: '640px',
        lg: '860px',
        xl: '1024px',
        '2xl': '1200px',
      },
    },
    extend: {
      fontSize: {
        '2xs': '10px',
      },
      minHeight: {
        'a4': '83rem',
        '90vh': '90vh',
        'inherit': 'inherit',
        'preview-a4': '801px'
      },
      maxWidth: {
        '3xs': '230px'
      },
      height: {
        'a4': '83rem',
        'preview-a4': '762px'
      },
      width: {
        'a4': '59rem',
        'mobile-preview-a4': '360px',
        'desktop-preview-a4': '569px'
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
        'upwork': "#14A800"
      }
    },
  },
  plugins: [],
}
