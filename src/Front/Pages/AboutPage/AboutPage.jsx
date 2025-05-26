import React, { useEffect } from 'react'
import AboutBanner from '../../Components/AboutComponents/AboutBanner/AboutBanner'
import AboutAnimate from '../../Components/AboutComponents/AboutAnimate/AboutAnimate'
import AboutOur from '../../Components/AboutComponents/AboutOur/AboutOur'
import OurOffice from '../../Components/HomeComponents/OurOffice/OurOffice'
import Empowering from '../../Components/HomeComponents/EmpoweringHome/Empowering'

function AboutPage() {
  useEffect(() => {
      document.title = "About Us | Solwyz Technologies";
    }, []);
  return (
    <div>
      <AboutBanner/>
      <Empowering/>
      <AboutAnimate/>
      <AboutOur/>
      <OurOffice/>
    </div>
  )
}

export default AboutPage
