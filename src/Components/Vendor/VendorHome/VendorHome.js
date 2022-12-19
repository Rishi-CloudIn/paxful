import React from 'react';
import './VendorHome.css';
import { IoIosArrowForward } from 'react-icons/io';
import vendor_home from '../../../Images/Vendor/vendor-home.png';
import icon_feature from '../../../Images/Vendor/icon_features.png';
import icon_user from '../../../Images/Vendor/icon_users.png';
import icon_support from '../../../Images/Vendor/icon_support.png';
import icon_vendor from '../../../Images/Vendor/icon_vendors.png';

import profit_img from '../../../Images/Vendor/VendorsBrowserScreen-bg.png';

import create_find_offer from '../../../Images/Vendor/create-find-offer.png';
import build_profile from '../../../Images/Vendor/build-profile.png';
import trade_earn_profit from '../../../Images/Vendor/trade-earn-profit.png';


function VendorHome ()
{
  return (
    <>
      <section className='vendor-home-section container-fluid'>
        <div className='home-content-div px-sm-4 px-2'>
          {/* home */}
          <div className='row'>
            <div className='col-md-6 col-12 d-flex align-items-start flex-column justify-content-center'>
              <h6 className='h6 fw-bold text-secondary'>Become a Bitcoin vendor on Paxful</h6>
              <h2 className='h2 fw-bold lh-base mt-4'>Generate income by selling your Bitcoin on Paxful using our 350+ payment methods</h2>
              <p className='tm mt-4'>With Paxful, kickstart your very own business in a matter of minutes. Create offers with your Bitcoin, set profit margins, and build out a unique customer experience to increase your profits. <a href='void:' className='a-remove text-skyblue'>Sign up</a> as a vendor today and <a href='void:' className='a-remove text-skyblue'>create your first offer.*</a></p>
              <button className='btn btn-blue tm py-1 d-flex align-items-center'>Sign me up! <i className='mb-1 fs-3 ms-3 my-auto'><IoIosArrowForward /></i></button>
            </div>
            <div className='col-md-6 col-12 mt-md-0 mt-4 d-flex align-items-center flex-column justify-content-center'>
              <div className='vendor-home-img'>
                <img src={vendor_home} alt="" />
              </div>
            </div>
          </div>

          {/* features */}
          <div className='py-5'>
            <div className='row'>
              <div className='col-lg-3 col-sm-6 col-12 p-2'>
                <div className='card border-0 h-100'>
                  <div className='card-body'>
                    <div>
                      <div className='d-flex justify-content-center'>
                        <img src={icon_feature} alt="img" width={100} />
                      </div>
                      <div>
                        <p className='tm fw-300 text-center mt-4'>The right set of <span className='fw-bold'>features</span> to manage your trades, offers, and stats</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-3 col-sm-6 col-12 p-2'>
                <div className='card border-0 h-100'>
                  <div className='card-body'>
                    <div>
                      <div className='d-flex justify-content-center'>
                        <img src={icon_user} alt="img" width={100} />
                      </div>
                      <div>
                        <p className='tm fw-300 text-center mt-4'>Over <span className='fw-bold'>6 million</span> registered users worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className='col-lg-3 col-sm-6 col-12 p-2'>
                <div className='card border-0 h-100'>
                  <div className='card-body'>
                    <div>
                      <div className='d-flex justify-content-center'>
                        <img src={icon_vendor} alt="img" width={100} />
                      </div>
                      <div>
                        <p className='tm fw-300 text-center mt-4'>Trusted by over<span className='fw-bold'> ₹12,000</span> registered Bitcoin vendors</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-3 col-sm-6 col-12 p-2'>
                <div className='card border-0 h-100 '>
                  <div className='card-body'>
                    <div>
                      <div className='d-flex justify-content-center'>
                        <img src={icon_support} alt="img" width={100} />
                      </div>
                      <div>
                        <p className='tm fw-300 text-center mt-4'><span className='fw-bold'>High-end support</span> for a seamless trading experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* profit */}

          <div>
            <div className='row'>
              <div className='col-8 d-lg-block d-none'>
                <div className='vendor-profit-img'>
                  <img src={profit_img} alt="" />
                </div>
              </div>
              <div className='col-lg-4 col-12 d-flex align-items-center justify-content-center'>
                <div>
                  <h3 className='h3 fw-bold'>Bring your Bitcoin to Paxful and sell for a profit</h3>
                  <ul>
                    <li className='fs-6 mt-3'>350+ payment methods</li>
                    <li className='fs-6 mt-3'>Transaction fees 0-2%</li>
                    <li className='fs-6 mt-3'>VIP support for high-volume vendors</li>
                    <li className='fs-6 mt-3'>Overview of transactions and earnings</li>
                    <li className='fs-6 mt-3'>Affiliate program to onboard new vendors and expand your business</li>

                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* trade */}

          <div>
            <h1 className='h1 trade-h1 mx-auto fw-800 text-center'>Trade on Paxful and start your very own fintech business</h1>
            <p className='ts text-center mt-4'>Current Bitcoin price:
              USD 16,775.24</p>

            <div className='row'>
              <div className='col-lg-4 col-sm-6 col-12'>
                <div className='vendor-trade-img-div mx-sm-0 mx-auto my-sm-0 my-4'>
                  <img src={create_find_offer} alt="" />
                </div>
              </div>
              <div className='col-lg-4 col-sm-6 col-12 mt-sm-0 mt-5 d-flex justify-content-center align-items-center'>
                <div>
                  <h4 className='h4 fw-bold text-voilet'>1. <a href='viod:' className='trade-a a-remove'>Create</a> or <a href='viod:' className='trade-a a-remove'>find</a> an offer</h4>
                  <p className='tm lh-base mt-3'>
                    You can browse or create offers for both buying and selling Bitcoin. Set your own rates, find a trade partner, and make your first transaction today.
                  </p>
                </div>
              </div>
              <div className='col-4 d-lg-block d-none'>
                &nbsp;
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default VendorHome;