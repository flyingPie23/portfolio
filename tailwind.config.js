/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': "#00809D",
      'dark-blue':"#0F172A",
      'light-blue':'#48A6A7',
      'gray':'#333446',
      'light-gray':'#7F8CAA',
      'white': "#FFFFFF",
      'black': "#000000"
    },
    fontFamily: {
      header: ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}
