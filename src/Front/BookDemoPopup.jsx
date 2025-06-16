import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import close from "@assets/x.svg"
import Bg from "@assets/Pop.png"
import wp from "@assets/wpIcn.svg"

export default function BookDemoPopup() {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000); // Show after 5 seconds
  
      return () => clearTimeout(timer);
    }, []);
  
    if (!isVisible) return null;
  
    return (
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed bottom-4  md:right-[120px] right-4  w-[224px] rounded-xl overflow-hidden shadow-xl z-50  text-black"
      >
      <div className="relative ">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 hover:rounded-full hover:bg-[#F7D4C5A1] w-8 h-8 right-2 z-10 text-white"
        >
        <img src={close} className='mx-auto w-6 h-6' alt="" />
        </button>
        <img
          src={Bg} // Replace with your actual image
          alt="ERP Demo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  mt-10 p-4 flex flex-col justify-between">
          <p className="text-white font-bold leading-8 text-2xl">
            Want to know more of our ERP solutions ?
          </p>
          <div className="flex justify-center  items-center">
          <button
  onClick={() => window.open("https://wa.me/918086058455", "_blank")}
  className="flex items-center gap-2 bg-[#3DAA30] font-semibold hover:bg-[#2ACF16] text-white w-full px-8 py-2.5 rounded-lg text-base"
>
  <img src={wp} alt="WhatsApp" className="w-4 h-4" />
  Book a demo
</button>
</div>
        </div>
       
      </div>
      
      
    
    </motion.div>
  );
}
