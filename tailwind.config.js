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
        bgColor: '#000000',
      },


      backgroundColor: {
        "bgColor": '#000000'
      },
      backgroundImage: {
        'bannerBackground': "url('/src/assets/Background.svg')",
        'webDesign': "url('src/assets/website-design-software-provide-modish-template-online-retail-business 1.png')",
        'footerMap': "url('/src/assets/footer/footer.png')", // Change the path accordingly
        'footerMapMob': "url('/src/assets/footer/footer mobile.png')", // Adjust the path
        'aboutbanner':"url('/src/assets/about/about.png')",
        'aboutbannerMob':"url('/src/assets/about/aboutMOb.png')",
        'careersbanner':"url('/src/assets/Careers/careers.png')",
        'serviceDetailBg':"url('/src/assets/service/detail.png')",
        'serviceDetailBgMob':"url('/src/assets/service/detailMob.png')",

        'innovateBg':"url('/src/assets/about/innovateBg.png')",
        'impactBg':"url('/src/assets/about/impactBg.png')",
        'integrateeBg':"url('/src/assets/about/integrateBg.png')",
        

      },

    },
  },
  plugins: [],
}
