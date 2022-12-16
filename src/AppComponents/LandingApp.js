import React from 'react';
import GetStart from '../Components/Landing/GetStart/GetStart';
import Home from '../Components/Landing/Home/Home';
import Testimonial from '../Components/Landing/Testimonials/Testimonial';
import Way from '../Components/Landing/Way/Way';

function LandingApp ()
{
  return (
    <>
      <div className='nav-gap'>
        <Home />
        <Way />
        <Testimonial />
        <GetStart />
      </div>
    </>
  );
}

export default LandingApp;