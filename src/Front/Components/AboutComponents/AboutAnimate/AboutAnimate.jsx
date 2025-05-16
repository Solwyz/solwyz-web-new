import React from 'react'
import animate from "../../../../assets/about/animate.png"
import animateMob from "../../../../assets/about/animateMob.png"

function AboutAnimate() {
  return (
    <div className=''>
    <img src={animate} className='w-full md:block hidden h-full' alt="" />
    <img src={animateMob} className='w-full  md:hidden h-full' alt="" />
    </div>
  )
}

export default AboutAnimate