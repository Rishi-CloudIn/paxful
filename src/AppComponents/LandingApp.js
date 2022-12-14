import React from 'react';
import GetStart from '../Components/Landing/GetStart/GetStart';
import Home from '../Components/Landing/Home/Home';
import Testimonial from '../Components/Landing/Testimonials/Testimonial';
import Way from '../Components/Landing/Way/Way';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
function LandingApp ()
{
  return (
    <>
      <Navbar />
      <div className='mw-1440'>
        <Home />
        <Way />
        <Testimonial />
        <GetStart />
        <Footer />
      </div>
    </>
  );
}

export default LandingApp;