import React from 'react'
import HomeBanner from '../../Components/HomeBanner/HomeBanner'

import WebDesign from '../../Components/HomeComponents/WebDesign/WebDesign'
import RequestAudit from '../../Components/HomeComponents/RequestAudit/RequestAudit'
import LatestBuzz from '../../Components/HomeComponents/LatestBuzz/LatestBuzz'

import OurOffice from '../../Components/HomeComponents/OurOffice/OurOffice'
import Empowering from '../../Components/HomeComponents/EmpoweringHome/Empowering'
import HomeContact from '../../Components/HomeComponents/HomeContact/HomeContact'
import WhoweAre from '../../Components/HomeComponents/WhoweAre/WhoweAre'


function HomePage() {
  return (
    <div className=''>
      <HomeBanner/>
      <WhoweAre/>

      <WebDesign/>
      <RequestAudit/>
      <LatestBuzz/>

      <OurOffice/>
      <HomeContact/>
      <Empowering/>
    

    </div>
  )
}

export default HomePage
