import React, { useEffect } from 'react'
import HomeContact from '../../Components/HomeComponents/HomeContact/HomeContact'

function ContactPage() {
  useEffect(() => {
      document.title = "Contact | Solwyz Technologies";
    }, []);
  return (
    <div>
    <div className='h-[95px]'></div>
        <HomeContact/>
    </div>
  )
}

export default ContactPage