import React from 'react'
import HomeBanner from '../../Components/HomeBanner/HomeBanner'

import WebDesign from '../../Components/HomeComponents/WebDesign/WebDesign'
import RequestAudit from '../../Components/HomeComponents/RequestAudit/RequestAudit'
import LatestBuzz from '../../Components/HomeComponents/LatestBuzz/LatestBuzz'

import OurOffice from '../../Components/HomeComponents/OurOffice/OurOffice'
import Empowering from '../../Components/HomeComponents/EmpoweringHome/Empowering'


function HomePage() {
  return (
    <div className=''>
      <HomeBanner/>

      <WebDesign/>
      <RequestAudit/>
      <LatestBuzz/>

      <OurOffice/>
      <Empowering/>
    

    </div>
  )
}

export default HomePage
