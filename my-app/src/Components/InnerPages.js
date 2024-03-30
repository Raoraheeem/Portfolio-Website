import React from 'react';
import Image1 from '../Assets/design agency.PNG'; // Replace with actual paths
import Image2 from '../Assets/creative agency.PNG';
import Image3 from '../Assets/digital agency.PNG';
import Transform from '../Assets/Transform.png';
import Everything from '../Assets/Everything.png';
import portfolio1 from '../Assets/portfolio1.png';
import portfolio2 from '../Assets/protfolio_img02.png';
import { useScrollTrigger } from 'react-scroll-trigger';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
const InnerPages = () => {
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
    <motion.div ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={triggered ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 1, delay: 1 }} className='lg:h-[2300px] md:h-[2600px] h-[2500px] lg:mt-[10%] md:mt-[-20%] ' id='innerpage'>
    <div className='relative bg-[#0A0C00] z-[4] sm:h-[1000px] h-[1020px] w-[100%]  sm:mt-[3%] pt-[7%]   '>
        <h1 className='text-[#E3FF04] sm:text-[80px] text-[50px] font-[Unbounded] cursor-[pointer]'>21+</h1>
        <h1 className='text-[white] sm:text-[45px] text-[30px] font-[Unbounded] cursor-[pointer]'>Ready-Made Collection
<br/> of Inner Pages</h1>
<p className='text-[white] sm:text-[20px] sm:px-[0] px-[10%]  font-[poppins] '>Enjoy a versatile collection of ready-made pages for various purposes. <br/>
Create a unique and eye-catching website easily!</p>
<div className="w-[100%] grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 mb-[5%] mt-[5%] overflow-hidden ">
    {/* Card 1 */}
    <div className="sm:max-w-[600px]  max-w-[300px] bg-[#F6F5F3] relative  sm:left-[-30%] left:[30%] sm:ms-[0%] ms-[10%]">
        <img src={Image1} alt="Girl in a jacket" width="300" height="300" className='sm:pl-[0] pl-[20%]'  />
    </div>
    <div className="max-w-[600px] bg-[#F6F5F3] relative left-[-10%]   sm:ms-[0%] ms-[10%]">
        <img src={Image2} alt="Girl in a jacket" width="300" height="300" />
    </div>
    <div className="max-w-[600px] bg-[#F6F5F3] sm:block hidden ">
        <img src={Image3} alt="Girl in a jacket" width="300" height="300" />
    </div>
    <div className="max-w-[100%] bg-[#F6F5F3]  relative sm:right-[-30%] right:[30%] sm:ms-[0%] ms-[20%] sm:block hidden ">
        <img src={Image1} alt="Girl in a jacket" width="300" height="300" className='' />
    </div>
</div>



      
    </div>


    <motion.div ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={triggered ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 3, delay: 2 }} className="max-h-[500px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-40 bg-[white] mb-[10%]  ">
      {/* Left Side */}
      <motion.div ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={triggered ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 5, delay: 2 }}  className="order-1 md:order-1  lg:order-1 col-span-1 sm:my-[150px] sm:w-[600px] w-[200px] sm:ms-[0] ms-[30%]  ">
        {/* Your content for the left side goes here */}
        <img src={portfolio2} alt="Girl in a jacket" width="400" height="300" className='relative z-[2] left-[10%]' style={{boxShadow:'0px 24px 40px 0px rgba(10, 12, 0, 0.20)' }}/>
        <img src={portfolio1} alt="Girl in a jacket" width="600" height="600" className='relative bottom-[30%] z-[1]'/>
       
        
      </motion.div>

      {/* Right Side */}
      <motion.div ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={triggered ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 6, delay: 3 }}  className="order-2 md:order-2 lg:order-2 col-span-1 lg:my-[170px] md:my-[-500px] my-[-240px]  ">
        {/* Your content for the right side goes here */}
        <h2 className="lg:text-[55px] md:text-[40px] text-[30px] font-bold w-[100%] text-start px-[5%] font-[Unbounded]   ">Professional <br/> Portfolio <br/> Showcase</h2>
        <p className='text-[20px] text-start my-[30px] font-[poppins]  '>Show your gorgeous projects using our portfolio, which includes different styles like: grid, masonry, carousel,
full-width, slider.</p>
      
     
      </motion.div>
      </motion.div>

      <div className="max-h-[500px] grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-40 bg-[white]  ">
      {/* Left Side */}
      <motion.div ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={triggered ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 6, delay: 3 }}  className="order-2 md:order-2 lg:order-2 col-span-1 lg:my-[150px] md:my-[-1000px] my-[-200px]">
        {/* Your content for the left side goes here */}
        <h2 className="sm:text-[55px] text-[30px]  font-bold    text-start px-[5%] font-[Unbounded]   ">Elevating Your
<br/> Blogging <br/>Experience</h2>
<p className='lg:text-[20px] md:text-[20px] text-[15px] text-start my-[30px] font-[poppins] lg:ms-[5%] md:ms-[5%] ms-[1%]  '>Powerful post options offer greater control over each post, allowing each one to have their own settings.</p>
      
      </motion.div>

      {/* Right Side */}
      <motion.div ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={triggered ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 6, delay: 3 }} className=" order-1 md:order-1 lg:order-1 col-span-1 lg:my-[170px] md:my-[650px] my-[20px] sm:ms-[0%] ms-[5%] ">
        {/* Your content for the right side goes here */}
        <img src={Everything} alt="Girl in a jacket" width="600" height="100"/>
        <img src={Transform} alt="Girl in a jacket" width="200" height="100" className='relative bottom-[50%]' style={{boxShadow:'0px 24px 40px 0px rgba(10, 12, 0, 0.20)' }} />
      </motion.div>
      </div>
    </motion.div>
  )
}

export default InnerPages
