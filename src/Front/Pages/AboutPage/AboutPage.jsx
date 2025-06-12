import React, { useEffect, useState } from 'react'
import AboutBanner from '../../Components/AboutComponents/AboutBanner/AboutBanner'
import AboutAnimate from '../../Components/AboutComponents/AboutAnimate/AboutAnimate'
import AboutOur from '../../Components/AboutComponents/AboutOur/AboutOur'
import OurOffice from '../../Components/HomeComponents/OurOffice/OurOffice'
import Empowering from '../../Components/HomeComponents/EmpoweringHome/Empowering'
import Pageloader from '../../Loaders/Pageloader'

function AboutPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      document.title = "About Us | Solwyz Technologies";
    }, []);

    useEffect(() => {
      // Simulate delay
      setTimeout(() => setLoading(false), 1000);
    }, []);
  
    if (loading) return <Pageloader />;
  return (
    <div>
      <AboutBanner/>
      <Empowering/>
      {/* <AboutAnimate/> */}
      <AboutOur/>
      <OurOffice/>
    </div>
  )
}

export default AboutPage
