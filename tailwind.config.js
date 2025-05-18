/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        'product': ['"Oswald", sans-seriff'],
        'nav': ['"Cinzel Decorative", serif'],
        romul: ['Romul', 'sans-serif'],
        maglio:['"Maglio", serif'],
      },
      
      backgroundImage: {
        'order': "url('../src/assets/orderpage.jpg')",
        'Home':"url('../src/assets/Home.png')",
      },

      colors:{

        '281612':'#281612',

      },
      
       },
  },
  plugins: [],
};