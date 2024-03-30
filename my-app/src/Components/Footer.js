import React from 'react';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState,useEffect } from 'react';

const Footer = () => {
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
    <div className='w-[100%] lg:h-[600px] md:h-[600px] h-[700px]  bg-[#0A0C00] py-[10%]'>
        <motion.h1  ref={ref} initial={{fontSize:45,scale:0.5}} animate={triggered ? {fontSize:45,scale:1}:{}} transition={{delay:2, duration:5}} className='sm:text-[90px] text-[45px] font-[Unbounded] text-[white]'>Let's Build a Creative <br/> "Website Today!"</motion.h1>
        <p className='text-[20px] font-[poppins] text-[white] px-[5%]'>One-time payment and get all Features, options, templates & demos!</p>
        <motion.button 
    initial={{ scale: 1 }} 
    whileHover={{ scale: 1.5  }} 
    transition={{ yoyo: Infinity,  duration: 0.3 }}
    className='text-[black] text-[20px] bg-[#E3FF04]  w-[150px] h-[60px] font-[Unbounded] text-bold sm:mt-[5%] mt-[20%] '
>
    Buy Now
</motion.button>

    </div>
  )
}

export default Footer
