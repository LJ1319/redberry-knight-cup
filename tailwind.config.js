/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: "'Nunito', sans-serif",
        opensans: "'Open Sans', sans-serif"
      },
      fontSize: {
        '7xl': ['80px', {
          lineHeight: '109px',
        }],
      },
      colors: {
        redberryred: '#FD5334',
        redberrylightred: '#DC3545',
        redberryblack: '#212529',
        redberrypurple: '#C2A5F9',
        redberrygrey: 'rgba(185, 180, 196, 0.3)',
        redberrylightgrey: '#E5E6E8',
        redberrylightsilver: '#F5F5F5',
        redberrydarksilver: '#95939A',
        redberrywhite: '#F8F9FA',
        redberrygreysh: '#E9ECEF',
        redberrypale: 'rgba(33, 37, 41, 0.5)',
        redberrygreen: '#E9FAF1'
      },
      height: {
        22: '84px'
      }
    },
  },
  plugins: [],
};
