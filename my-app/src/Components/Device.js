import React from 'react';
import Led from '../Assets/Led.PNG';
import Mobile from '../Assets/Mobile.PNG';
import Tablet from '../Assets/Tablet.PNG';
import Notebook from '../Assets/Notebook.PNG';
import Designstudio2 from '../Assets/Design studio 2.png'
import ModernAgency2 from '../Assets/Modern Agency2.png'
import device1 from '../Assets/device_img01.png'
import device2 from '../Assets/device_img02.png'
import { useScrollTrigger } from 'react-scroll-trigger';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

const Device = () => {
  const [triggered, setTriggered] = useState(false);
  const [ref, inView] = useInView({
      triggerOnce: true, // Only trigger once
      threshold: 0.01, // Trigger when 50% of the component is in view
  });

  // Update the triggered state only when inView changes
  React.useEffect(() => {
      if (inView) {
          setTriggered(true);
      }
  }, [inView]);

  return (
    <motion.div  
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={triggered ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 1, delay: 1 }} className='sm:max-h-[1200px] sm:h-[1200px] h-[2730px] w-[100%] sm:pt-[10%] pt-[100%] relative '>
        <div className=''>
      <h1 className='font-[Unbounded] lg:text-[56px] text-[40px] sm:pt-[0] pt-[90%]  lg:mt-[-10%] md:mt-[-20%] mt-[100%] md:text-[40px] px-[-40%]   '>Looks Amazing on <br/> Any Device</h1>
      <p className='font-[poppins] lg:px-[25%] md:px-[5%] pt-[2%] text-[20px]'>Frisk automatically detects the screen size and adjust the content
accordingly to provide fully responsive and optimized sites</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 bg-[#ffffff] mb-[5%] px-[5%] py-[5%]">
    {/* Card 1 */}
    <div className="max-w-full sm:max-w-[600px] mx-auto  overflow-hidden">
    <span className='bg-[black] h-[200px] w-[2px] border-[1px] border-[black] absolute left-[25%] lg:block md:hidden hidden  '></span>
    <img src={Led} alt="Girl in a jacket" width="90" height="200" className='pt-[30%] sm:pl-[30%] pl-[35%] '/>
    <h3 className='font-[Unbounded] text-[black] text-[15px] font-bold pt-[30%] '>1920 x 1080px</h3>
    <p className='font-[poppins] text-[black] text-[15px] pt-[5%]  '>Full Screen Layout</p>
    </div>
    <div className="max-w-full sm:max-w-[600px] mx-auto  overflow-hidden">
    <span className='bg-[black] h-[200px] w-[2px] border-[1px] border-[black] absolute left-[50%] lg:block md:hidden hidden  '></span>
    <img src={Notebook} alt="Girl in a jacket" width="90" height="200" className='pt-[30%] pl-[30%]'/>
    <h3 className='font-[Unbounded] text-[black] text-[15px] font-bold pt-[25%] pr-[20%] '>1364 x 768px</h3>
    <p className='font-[poppins] text-[black] text-[15px] pt-[5%]  '>Notebook Screen Layout</p>
    </div>
    <div className="max-w-full sm:max-w-[600px] mx-auto  overflow-hidden">
    <span className='bg-[black] h-[200px] w-[2px] border-[1px] border-[black] absolute left-[70%] lg:block md:hidden hidden '></span>
    <img src={Tablet} alt="Girl in a jacket" width="70" height="200" className='pt-[30%] sm:pl-[20%] pl-[30%]'/>
    <h3 className='font-[Unbounded] text-[black] text-[15px] font-bold pt-[30%] pr-[20%]  '>1024 x 768px</h3>
    <p className='font-[poppins] text-[black] text-[15px] pt-[5%]  '>Tablet Screen Layout</p>
    </div>
    <div className="max-w-full sm:max-w-[600px] mx-auto  overflow-hidden">
 
    <img src={Mobile} alt="Girl in a jacket" width="70" height="200"className='pt-[30%] sm:pl-[20%] pl-[30%]'/>
    <h3 className='font-[Unbounded] text-[black] text-[15px] font-bold pt-[30%] pr-[20%]'>375 x 667px</h3>
    <p className='font-[poppins] text-[black] text-[15px] pt-[5%]  '>Mobile Screen Layout</p>
    </div>
   
</div>
<div className="flex items-center justify-between mt-[30%]">
  <img src={Designstudio2} alt="Design Studio" className="lg:w-[630px] md:w-[300px]  lg:h-[460px] md:h-[200px] absolute lg:block md:block hidden right-[5%] mt-[20%] z-[2] " />
  <img src={ModernAgency2} alt="Modern Agency" className="lg:w-[900px] md:w-[500px] w-[300px]  lg:h-[700px] md:h-[300px] h-[240px] absolute sm:left-[20%] left-[10%] z-[1] sm:mt-[0] mt-[50%]" />
  <img src={device1} alt="Device 1" className=" absolute left-[10%] z-[2] mt-[22%] lg:block md:block hidden " />
  <img src={device2} alt="Device 2" className="w-[100px] h-[150px] absolute sm:block hidden right-[60%] mt-[40%] z-[3]" />
</div>
</motion.div>
    
  )
}

export default Device
