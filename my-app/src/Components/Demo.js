import React, { useState } from 'react';
import Image1 from '../Assets/design agency.PNG'; // Replace with actual paths
import Image2 from '../Assets/creative agency.PNG';
import Image3 from '../Assets/digital agency.PNG';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Demo = () => {
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

    const images = [
        { src: Image1, alt: 'Image 1', demotext: 'Creative agency' },
        { src: Image2, alt: 'Image 2', demotext: 'Marketing agency' },
        { src: Image3, alt: 'Image 3', demotext: 'Design agency' },
        { src: Image1, alt: 'Image 1', demotext: 'Creative agency' },
        { src: Image2, alt: 'Image 2', demotext: 'Marketing agency' },
        { src: Image3, alt: 'Image 3', demotext: 'Design agency' },
    ];

    return (
        <motion.div  ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={triggered ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1 }} className='lg:h-[1350px] md:h-[1800px] h-[1450px] sm:mb-[0%] mb-[50%] relative' id='Demo'>
            <div className='lg:max-h-[1300px] md:max-h-[3200px] max-h-[3000px] bg-[#F6F5F3] my-[10%]'>
                <h2 className='text-[60px] font-[600] text-[#1601AC] font-[Unbounded] pt-[7%]'>08+</h2>
                <motion.h2 
                            ref={ref}
                            initial={{ opacity: 0, y: 50 }}
                            animate={triggered ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 2 }} className='lg:text-[60px] md:text-[40px] text-[25px] font-[600] font-[Unbounded] pt-[1%] lg:px-[0] md:px-[-90%] px-[-60%] font-bold'>
                    Crafted Demos Ready <br /> for Your Website
                </motion.h2>
                <p className='text-[20px] text-center sm:px-[125px] px-[30px] font-[poppins] sm:pt-[1%] pt-[5%]'>
                    Frisk developed with the Elementor page builder plugin. It has 29+ unique pages containing a full
                    Creative Agency & Portfolio. The theme lets you build and
                </p>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mb-[5%] px-[5%] pt-[5%] pb-[10%]'>
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            ref={ref}
                            initial={{ opacity: 0, y: 50 }}
                            animate={triggered ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 2, delay: 5 }}
                            className='max-w-[600px] mx-auto overflow-hidden pt-[5%]'
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className='w-full h-[300px] mx-[5%] my-[5%] cursor-[pointer] transition-transform duration-300 ease-in-out transform-gpu hover:scale-y-105'
                            />
                            <h2 className='text-[20px] font-[600] font-[unbounded]'>{image.demotext}</h2>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Demo;
