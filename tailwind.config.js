/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      backgroundColor: {
        bgColor: '#010B02',
      },
      backgroundImage: {
        'footerMap': "url('/src/assets/footer/world 1.png')", // Change the path accordingly
        'footerMapMob': "url('/src/assets/footer/footer mobile.png')", // Change the path accordingly
      },
    },
  },
  plugins: [],
}
