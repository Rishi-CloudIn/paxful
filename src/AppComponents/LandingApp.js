import React from 'react';
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
      </div>
    </>
  );
}

export default LandingApp;