/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: "'Nunito', sans-serif",
        opensans: "Open Sans', sans-serif"
      },
      fontSize: {
        '7xl': ['80px', {
          lineHeight: '109px',
        }],
      },
      colors: {
        redberry: '#FD5334',
        button: '#212529'
      },
    },
  },
  plugins: [],
};
