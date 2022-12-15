import React from 'react';
import Home from '../Components/Landing/Home/Home';
import Way from '../Components/Landing/Way/Way';

function LandingApp ()
{
  return (
    <>
      <div className='nav-gap'>
        <Home />
        <Way />
      </div>
    </>
  );
}

export default LandingApp;