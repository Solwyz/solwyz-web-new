import React from 'react'
import HomeBanner from '../../Components/HomeBanner/HomeBanner'
import OurOffice from '../../Components/HomeComponents/OurOffice/OurOffice'
import Empowering from '../../Components/HomeComponents/EmpoweringHome/Empowering'
import HomeContact from '../../Components/HomeComponents/HomeContact/HomeContact'

function HomePage() {
  return (
    <div className=''>
      <HomeBanner/>
      <OurOffice/>
      <HomeContact/>
      <Empowering/>
    
    </div>
  )
}

export default HomePage
