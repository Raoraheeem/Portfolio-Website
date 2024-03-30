import React from 'react';
import { useScrollTrigger } from 'react-scroll-trigger';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
const Features = () => {
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
        transition={{ duration: 1, delay: 1 }}
     className="max-h-[500px] grid grid-cols-1 lg:grid-cols-2 gap-40 bg-white" id='features'>
      {/* Core Features */}
      <div className="order-1 lg:order-1 md:order-1">
        <h2 className="sm:text-[50px] text-[40px] font-bold w-700px text-start px-[5%]  font-[Unbounded] lg:my-[150px] md:my-[100px] my-[10%] ">Core Features <br /> All Your Website <br/>Needs</h2>
      </div>

      {/* Other Content */}
      <div className="order-2 lg:order-2 md:order-2">
        <p className="sm:text-[25px] sm:px-[5%]  px-[2%] text-start lg:my-[170px] md:my-[-20%] my-[-40%] font-[poppins]">Frisk is a clean and modern Bootstrap Creative Agency Portfolio Template. It has 29+ unique pages containing a full Creative Agency & Portfolio Website. The template lets you build and manage an online Creative Agency & Portfolio effortlessly</p>
      </div>
    </motion.div>
  );
};

export default Features;
