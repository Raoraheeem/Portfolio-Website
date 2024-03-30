import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Features from './Components/Features';
import FeaturesCard from './Components/FeaturesCard';
import Demo from './Components/Demo';
import InnerPages from './Components/InnerPages';
import Footer from './Components/Footer';
import Service from './Components/Service';
import Review from './Components/Review';
import Device from './Components/Device';
import Home from './Components/Home';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function App() {
  
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
  return (
    <Router>
    <div className="App">
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Demo" element={<Demo />} />
        <Route path="/InnerPages" element={<InnerPages />} />
        <Route path="/Review" element={<Review />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
