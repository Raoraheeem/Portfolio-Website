import React, { useState } from 'react';
import { a  ,useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Features from './Features';


const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [buttonColor, setButtonColor] = useState('#E3FF04'); // Initial color of the button
    const location = useLocation();
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        // Change button color when toggling the mobile menu
        setButtonColor(isMobileMenuOpen ? '#E3FF04' : '#E3FF04');
    };

    const handleLinkClick = (target) => {
        const section = document.querySelector(target);
        if (section) {
            const offsetTop = section.offsetTop;
            const duration = 800; // Duration of the scroll animation in milliseconds
            const startTime = performance.now();
            const startTop = window.pageYOffset || document.documentElement.scrollTop;
    
            const scrollStep = (timestamp) => {
                const currentTime = timestamp || performance.now();
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1); // Ensure progress is between 0 and 1
                const easedProgress = easeInOutCubic(progress); // Apply easing function
                const scrollTo = startTop + (offsetTop - startTop) * easedProgress;
    
                window.scrollTo(0, scrollTo);
    
                if (elapsedTime < duration) {
                    window.requestAnimationFrame(scrollStep);
                }
            };
    
            window.requestAnimationFrame(scrollStep);
        }
    };
    
    // Easing function for smooth animation
    const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    return (
        <div className='bg-[#0A0C00] '>
            <nav className="bg-[#0A0C00] h-[105px] fixed w-full z-50">
                <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        {/* Toggle Menu Bar for Small Devices */}
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden md:block lg:hidden">
                            <button
                                type="button"
                                className={`absolute md:left-[700px] md:top-[20px] left-[300px] inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700  focus:outline-none focus:ring-2 focus:ring-inset  `}
                                aria-controls="mobile-menu"
                                aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                                onClick={toggleMobileMenu}
                                style={{ backgroundColor: buttonColor }} // Set button background color dynamically
                            >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                
                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {/* Logo */}
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <h2 className='text-[#ffff] text-[30px] sm:mt-[40px] mt-[10px] font-bold font-[Unbounded]'>Frisk</h2>
                            </div>
                            {/* Navigation Links */}
                            <div className="hidden sm:ml-[50px] mt-[40px] sm:block lg:block md:hidden  ">
                                <div className="flex space-x-4 py-[155px] px-[100px]   ">
                                    <a   href="#home"className=" text-[#ffff] text-[18px] py-[40px] font-bold px-4 hover:text-[#E3FF04] font-[Unbounded] " aria-current="page" onClick={() => handleLinkClick('#home')}>HOME</a >
                                    <a href='#features' className=" text-[#ffff] text-[18px] py-[40px] font-bold px-4 hover:text-[#E3FF04] font-[Unbounded] " aria-current="page" onClick={() => handleLinkClick('#features')}>FEATURES</a >
                                 
                                 
                                    <a  href="#Demo" className="text-[#ffff] text-[18px] py-[40px] font-bold px-2 hover:text-[#E3FF04]  font-[Unbounded] "onClick={() => handleLinkClick('#Demo')}>DEMO</a >
                                    <a  href="#innerpage" className="text-[#ffff] text-[18px] py-[40px] font-bold  px-2 hover:text-[#E3FF04]   font-[Unbounded] "onClick={() => handleLinkClick('#innerpage')}>INNER PAGES</a >
                                    <a  href="#Review" className="text-[#ffff] text-[18px] py-[40px] font-bold hover:text-[#E3FF04]     font-[Unbounded] "onClick={() => handleLinkClick('#Review')}>CUSTOMER REVIEW</a >
                                </div>
                             
                            </div>
                            <button className='text-[black] text-[20px] bg-[#E3FF04] absolute md:right-[10%] lg:right-[2%] sm:top-[30%] w-[150px] h-[60px] font-[Unbounded] text-bold md:block'>
                            Buy Now
                                </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`${isMobileMenuOpen ? 'md:block' : 'hidden'}  sm:hidden `} id="mobile-menu">
                    <div className="flex flex-col space-y-2 px-4 pb-3 pt-2  bg-[#E3FF04] h-[700px] relative z-[3] mt-[5%]">
                        <a  to="/" className=" text-[black] text-[30px] py-[40px] font-bold px-4 font-[Unbounded] " aria-current="page">HOME</a >
                        <a  to="/Features" className="text-[black] text-[30px] py-[40px] font-bold  px-2 font-[Unbounded]    ">FEATURES</a >
                        <a  to="/Demo" className="text-[black] text-[30px] py-[40px] font-bold px-2 font-[Unbounded]  ">DEMO</a >
                        <a  to="/Innerpages" className="text-[black] text-[30px] py-[40px] font-bold  px-2 font-[Unbounded]   ">INNER PAGES</a >
                        <a  to="/Review" className="text-[black] text-[30px] py-[40px] font-bold font-[Unbounded]    ">CUSTOMER REVIEW</a >
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
