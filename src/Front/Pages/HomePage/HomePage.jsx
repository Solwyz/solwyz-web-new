import React, { useEffect } from 'react'
// import { motion } from 'framer-motion'

import HomeBanner from '../../Components/HomeBanner/HomeBanner'
import WebDesign from '../../Components/HomeComponents/WebDesign/WebDesign'
import RequestAudit from '../../Components/HomeComponents/RequestAudit/RequestAudit'
import LatestBuzz from '../../Components/HomeComponents/LatestBuzz/LatestBuzz'
import OurOffice from '../../Components/HomeComponents/OurOffice/OurOffice'
import Empowering from '../../Components/HomeComponents/EmpoweringHome/Empowering'
import Testimonials from '../../Components/HomeComponents/Testimonials/Testimonials'
import HomeContact from '../../Components/HomeComponents/HomeContact/HomeContact'
import WhoweAre from '../../Components/HomeComponents/WhoweAre/WhoweAre'
import OurServices from '../../Components/HomeComponents/OurServices/OurServices'
import BookDemoPopup from '../../BookDemoPopup'
import OurAssosiate from '../../Components/OurAssociate/OurAssociate'

function HomePage() {
  useEffect(() => {
    document.title = "Home | Solwyz Technologies";
  }, []);

  return (
    <div
      className='mb-[72px] md:mb-[104px]'
     
    >
      <HomeBanner />
      <WhoweAre />
     <div id='our-services'> <OurServices /></div>
      <WebDesign />
      <RequestAudit />
      <LatestBuzz />
      <OurAssosiate />
      <Testimonials />
      <OurOffice />
      <HomeContact />
      <Empowering />
      <BookDemoPopup />
    </div>
  )
}

export default HomePage
