import React, { useEffect, useState } from 'react'
import HomeContact from '../../Components/HomeComponents/HomeContact/HomeContact'
import Pageloader from '../../Loaders/Pageloader';

function ContactPage() {
    const [loading, setLoading] = useState(true);
  
  useEffect(() => {
      document.title = "Contact | Solwyz Technologies";
    }, []);
    useEffect(() => {
      // Simulate delay
      setTimeout(() => setLoading(false), 1000);
    }, []);
  
    if (loading) return <Pageloader />;
  return (
    <div className='md:max-w-[1440px] mx-auto'>
    <div className='h-[95px]'></div>
        <HomeContact/>
    </div>
  )
}

export default ContactPage