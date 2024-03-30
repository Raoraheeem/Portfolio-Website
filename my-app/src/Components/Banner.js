import React from 'react';
import banner1 from '../Assets/banner.png';
import banner2 from '../Assets/Design studio.PNG';
import banner3 from '../Assets/Modern Agency.PNG';
import { useScrollTrigger } from 'react-scroll-trigger';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Banner = () => {
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
    <div className='lg:max-w-[2900px] md:max-w-[1199px] max-w-[768px] bg-[#0A0C00] lg:h-[800px] md:h-[700px] h-[1200px] relative md:px-[10%]' id='home'>
      <h1  className='text-white lg:text-[75px] md:text-[40px] text-[45px] lg:ms-[100px] md:ms-[100px] font-[Unbounded] lg:px-[0]  px-[20%] md:pt-[20%] lg:pt-[10%] pt-[25%]'>Creative Agency <br />& Portfolio Template </h1>
      <p className='text-white text-[22px] sm:ms-[90px] pb-[40px] font-[poppins]'>The best solution to build Digital Agency & Portfolio website to showcase your portfolio</p>
      <img src={banner1} alt="Girl in a jacket" className='absolute lg:left-[25%]  md:left-[25%] mt-[5px]  z-[2] shadow-[1000px] lg:h-[390px] lg:w-[700px] md:w-[450px] md:h-[300px] h-[220px] w-[370px] sm:px-[0] sm:ps-[0%] md:ps-[1%] ps-[2%]' />
      {/* Conditionally render banner2 and banner3 based on screen size */}
      <motion.img src={banner2} alt="Girl in a jacket" ref={ref} initial={{ opacity: 0, x: 50 }}
    animate={ triggered ?{ opacity: 1, x: 0 }:{}}
    transition={{ duration: 1, delay: 1 }} className='absolute hidden sm:block lg:left-[5%] left-[0%] mt-[5%]  h-[240px] lg:w-[400px] md:w-[350px]' />
      <motion.img src={banner3} alt="Girl in a jacket" 
      initial={{ opacity: 0, x: -50 }}
      animate={ triggered ?{ opacity: 1, x: 0 }:{}}
    transition={{ duration: 1, delay: 1 }} className='absolute hidden sm:block left-[65%] left-[0%] sm:mt-[5%] h-[240px] lg:w-[400px] md:w-[280px] ' />
    </div>
  );
}

export default Banner;
