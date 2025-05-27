import React, { useEffect } from 'react'
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


function HomePage() {
  useEffect(() => {
    document.title = "Home | Solwyz Technologies";
  }, []);
  
  return (
    <div className='mb-[72px] md:mb-[104px]'>
      <HomeBanner/>
      <WhoweAre/>
      <OurServices/>

      <WebDesign/>
      <RequestAudit/>
      <LatestBuzz/>
      <Testimonials/>
      <OurOffice/>
      <HomeContact/>
      <Empowering/>
    
    </div>
  )
}

export default HomePage
