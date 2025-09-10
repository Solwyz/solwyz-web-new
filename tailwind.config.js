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
        'bannerBackground': "url('@assets/Background.svg')",
        'webDesign': "url('@assets/website-design-software-provide-modish-template-online-retail-business_1.png')",
        'footerMap': "url('@assets/footer/footer.png')", // Change the path accordingly
        'footerMapMob': "url('@assets/footer/footer mobile.png')", // Adjust the path
        'aboutbanner':"url('@assets/about/about.png')",
        'aboutbannerMob':"url('@assets/about/aboutMOb.png')",
        'careersbanner':"url('@assets/Careers/careers.png')",
        'serviceDetailBg':"url('@assets/service/detail.png')",
        'serviceDetailBgMob':"url('@assets/service/detailMob.png')",
 
        'innovateBg':"url('@assets/about/innovateBg.png')",
        'impactBg':"url('@assets/about/impactBg.png')",
        'integrateeBg':"url('@assets/about/integrateBg.png')",
        
 
      },
 
    },
  },
  plugins: [],
}
 
 