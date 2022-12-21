import React from 'react';
import './VendorMobile.css';
import { BsApple } from 'react-icons/bs';
import playStore from '../../../Images/Footer/play-store.png';
import mobile_screen from '../../../Images/Vendor/mobile-screen-bg-img.jpg';
function VendorMobile ()
{
  return (
    <>
      <section className='vendor-mobile-section container-fluid px-0 mx-0'>
        <div className='vendor-mobile-div'>
          <div className='mobile-screen-img'>
            <img src={mobile_screen} alt='img' />
          </div>
          <div className='mobile-screen-content'>
            <h5 className='h5 fw-bold mobile-screen-h5'>Stay informed, anytime, anywhere</h5>
            <p className='tm text-lg-white mobile-screen-p'>Don't worry about missing out on potential trades, or messages from customers. Techswap is easy-to-use and works on all your devices. Our iOS and Android apps, will ensure you are always in the loop and ready for action.</p>

            <div className=''>
              <div className='social-div-1 d-flex flex-sm-row flex-column align-items-center justify-content-center justify-content-lg-start mt-lg-0 mt-3 '>
                <div className='mx-md-0 mx-2' >
                  <button className='btn border-1 border border-white  mobile-screen-btn d-flex align-items-center py-1 px-2'>
                    <div className='me-3 '>
                      <i className='fs-5 text-light'><BsApple /></i>
                    </div>
                    <div>
                      <p className='social-p mb-0'>Download on the</p>
                      <h6 className='social-h6 mb-0 text-light'>App Store</h6>
                    </div>
                  </button>
                </div>
                <div className='me-md-2 mx-2'>
                  <img src={playStore} alt='img' width={150} />
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
}

export default VendorMobile;