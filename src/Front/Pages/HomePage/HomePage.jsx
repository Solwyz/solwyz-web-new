import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

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

function HomePage() {
  useEffect(() => {
    document.title = "Home | Solwyz Technologies";
  }, []);

  return (
    <motion.div
      className='mb-[72px] md:mb-[104px]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }} // 1 second fade-in
    >
      <HomeBanner />
      <WhoweAre />
      <OurServices />
      <WebDesign />
      <RequestAudit />
      <LatestBuzz />
      <Testimonials />
      <OurOffice />
      <HomeContact />
      <Empowering />
      <BookDemoPopup />
    </motion.div>
  )
}

export default HomePage
