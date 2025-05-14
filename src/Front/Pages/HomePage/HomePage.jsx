import React from 'react'
import HomeBanner from '../../Components/HomeBanner/HomeBanner'
import WebDesign from '../../Components/HomeComponents/WebDesign/WebDesign'
import RequestAudit from '../../Components/HomeComponents/RequestAudit/RequestAudit'
import LatestBuzz from '../../Components/HomeComponents/LatestBuzz/LatestBuzz'

function HomePage() {
  return (
    <div className=''>
      <HomeBanner/>
      <WebDesign/>
      <RequestAudit/>
      <LatestBuzz/>
    </div>
  )
}

export default HomePage
