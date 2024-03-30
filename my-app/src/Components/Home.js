import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Features from '../Components/Features';
import FeaturesCard from '../Components/FeaturesCard';
import Demo from '../Components/Demo';
import InnerPages from '../Components/InnerPages';
import Footer from '../Components/Footer';
import Service from '../Components/Service';
import Review from '../Components/Review';
import Device from '../Components/Device';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner />
    <Features />
    <FeaturesCard />
    <Demo />
    <Device />
    <InnerPages />
    <Review />
    <Footer />
    <Service />
  </>
  )
}

export default Home
