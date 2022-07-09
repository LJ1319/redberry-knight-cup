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
        redberryred: '#FD5334',
        redberryblack: '#212529',
        redberrypurple: '#C2A5F9',
        redberrygrey: 'rgba(185, 180, 196, 0.3)'
      },
      height: {
        22: '84px'
      }
    },
  },
  plugins: [],
};
