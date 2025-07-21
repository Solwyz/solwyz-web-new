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
      className='mb-[72px] md:mb-[104px] '
     
    >
      <div className='md:max-w-[1550px] mx-auto'><HomeBanner /></div>
     <div className='md:max-w-[1550px] mx-auto'> <WhoweAre /></div>
     <div id='our-services'> <OurServices /></div>
   <div className='px-0'>   <WebDesign /></div>
      {/* <RequestAudit /> */}
      <LatestBuzz />
      <OurAssosiate />
      <div className=''><Testimonials /></div>
      <OurOffice />
      <HomeContact />
      <Empowering />
      <BookDemoPopup />
    </div>
  )
}

export default HomePage
