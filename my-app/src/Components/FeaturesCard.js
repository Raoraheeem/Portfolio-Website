import React from 'react';
import Gtmatrix from '../Assets/Gtmatrix.png';
import colorimg from  '../Assets/colorimg.png';
import fontsimg from  '../Assets/fontsimg.png';
import { useScrollTrigger } from 'react-scroll-trigger';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

const FeaturesCard = () => {
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
    <motion.div   ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={triggered ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 1, delay: 1 }} className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-8 bg-[#ffffff] mb-[5%] px-[5%] lg:pt-[0] md:pt-[30%] pt-[50%]">
    {/* Card 1 */}
    <div className="max-w-[600px] mx-auto bg-[#F6F5F3]  overflow-hidden ">
    
   <h1 className='text-[#30AD43] text-[30px] font-bold text-start lg:px-[30%] md:px-[37%] font-[Unbounded]'>A Grade</h1>
     <p className='py-[2%] text-start lg:px-[30%] md:px-[33%] font-[Unbounded]'>Page loading Speed</p>
     <img src={Gtmatrix} alt="Girl in a jacket"  className='lg:w-[250px] h-[120px] lg:mx-[50px] md:mx-[150px]  my-[5%] md:w-[300px] mx-[50px]'  />
     <h1 className='text-[black] font-bold text-[25px] px-[10%] font-[800] font-[Unbounded] text-start '>Top Notch <br/>
Performance</h1>
<p className='my-[20px] px-[9%] text-[19px] text-start text-[black] font-[poppins]  '>High performance, a good structure and well written source code. All in one panel, No code required.</p>
    
    </div>

    {/* Card 2 */}
    <div className="max-w-[600px] mx-auto bg-[#F6F5F3]  overflow-hidden ">
    
    
      <img src={colorimg} alt="Girl in a jacket"  className='w-[500px] h-[230px] mx-[5px] my-[3%]'/>
      <h1 className='text-[black] font-bold text-[25px] px-[10%] font-[800] font-[Unbounded] text-start'>Explore Never Ending Palette of Colors </h1>
 <p className='my-[20px] px-[9%] text-[19px] text-start text-[black] font-[poppins]   '>Say goodbye to static designs. We offers infinite color variations to keep your website dynamic</p>
     
     </div>

    {/* Card 3 */}
    <div className="max-w-[600px] mx-auto bg-[#F6F5F3]  overflow-hidden ">
    
   
      <img src={fontsimg} alt="Girl in a jacket"  className='w-[400px] h-[230px] mx-[5px] my-[3%]'/>
      <h1 className='text-[black] font-bold text-[25px] px-[10%] font-[800] font-[Unbounded] text-start'>Huge Typography Options</h1>
 <p className='my-[20px] px-[9%] text-[19px] text-start text-[black] font-[poppins]    '>Frisk allows you to use custom fonts in your website. Also you have 1000+ Google fonts.</p>
     
     </div>

    {/* Add more cards as needed */}
    
  </motion.div>
  )
}

export default FeaturesCard
