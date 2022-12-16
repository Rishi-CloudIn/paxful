import React, { useState } from 'react';
import bank from '../../../Images/Landing/way/bank.svg';
import banking from '../../../Images/Landing/way/banking.svg';

import './Way.css';
import { BsFillPlayFill } from 'react-icons/bs';

import bitcoinMagazine from '../../../Images/Landing/way/bitcoin-magazine.webp';
import bitcoinist from '../../../Images/Landing/way/bitcoinist.webp';
import blockchain from '../../../Images/Landing/way/blockchain-news.webp';
import coindesk from '../../../Images/Landing/way/coindesk.webp';
import cointelegraph from '../../../Images/Landing/way/cointelegraph.png';
import coingeek from '../../../Images/Landing/way/coingeek.webp';
import forbes from '../../../Images/Landing/way/forbes.webp';
import nasdaq from '../../../Images/Landing/way/nasdaq.webp';
import voa from '../../../Images/Landing/way/voa.png';
import yahoo from '../../../Images/Landing/way/yahoo-finance.webp';


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
SwiperCore.use( [ Autoplay ] );


function Way ()
{

  const [ way, setWay ] = useState( 0 );
  return (
    <>
      <section className='way-container container'>
        <div className='way-content-div py-5'>
          <h1 className='fw-bold title text-center'>Over 350 ways to buy and sell Bitcoin.</h1>
          <p className='para text-center w-50 mx-auto'>Explore our Marketplace and start trading with your favorite payment methods or discover something new.</p>

          <div className='d-flex flex-row justify-content-center my-4'>
            <button className={way === 0 ? 'btn way-btn-blue rounded-0 shadow-none text-secondary mx-2' : 'btn way-btn-gray rounded-0 shadow-none text-secondary mx-2'} onClick={() => setWay( 0 )}>Sell Bitcoin</button>
            <button className={way === 1 ? 'btn way-btn-blue rounded-0 shadow-none text-secondary mx-2' : 'btn way-btn-gray rounded-0 shadow-none text-secondary mx-2'} onClick={() => setWay( 1 )}>Buy Bitcoin</button>
          </div>

          <div className={way === 0 ? 'way-content-2' : 'd-none'}>
            <div className='row'>
              <div className='col-lg-4 col-sm-6 col-12 p-3'>
                <a href='void:' className='a-remove'>
                  <div className='card h-100'>
                    <div className='card-body'>
                      <img src={bank} alt="" width={45} />
                      <h4 className='tm my-3 text-dark'>Bank Transfer</h4>
                      <p className='ts text-secondary mb-0'>Our guided bank transfer trades quick and easy to buy Bitcoin.</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className='col-lg-4 col-sm-6 col-12 p-3'>
                <a href='void:' className='a-remove'>
                  <div className='card h-100'>
                    <div className='card-body'>
                      <img src={bank} alt="" width={45} />
                      <h4 className='tm my-3 text-dark'>Cash payment</h4>
                      <p className='ts text-secondary mb-0'>Our guided bank transfer trades quick and easy to buy Bitcoin.</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className='col-lg-4 col-sm-6 col-12 p-3'>
                <a href='void:' className='a-remove'>
                  <div className='card h-100'>
                    <div className='card-body'>
                      <img src={bank} alt="" width={45} />
                      <h4 className='tm my-3 text-dark'>Online wallets</h4>
                      <p className='ts text-secondary mb-0'>Our guided bank transfer trades quick and easy to buy Bitcoin.</p>
                    </div>
                  </div>
                </a>
              </div>


              <div className='col-lg-4 col-sm-6 col-12 p-3'>
                <a href='void:' className='a-remove'>
                  <div className='card h-100'>
                    <div className='card-body'>
                      <img src={bank} alt="" width={45} />
                      <h4 className='tm my-3 text-dark'>Discounted gift cards</h4>
                      <p className='ts text-secondary mb-0'>Our guided bank transfer trades quick and easy to buy Bitcoin.</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className='col-lg-4 col-sm-6 col-12 p-3'>
                <a href='void:' className='a-remove'>
                  <div className='card h-100'>
                    <div className='card-body'>
                      <img src={bank} alt="" width={45} />
                      <h4 className='tm my-3 text-dark'>Digital currencies</h4>
                      <p className='ts text-secondary mb-0'>Our guided bank transfer trades quick and easy to buy Bitcoin.</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className='col-lg-4 col-sm-6 col-12 p-3'>
                <a href='void:' className='a-remove'>
                  <div className='card h-100'>
                    <div className='card-body'>
                      <img src={bank} alt="" width={45} />
                      <h4 className='tm my-3 text-dark'>Goods and services</h4>
                      <p className='ts text-secondary mb-0'>Our guided bank transfer trades quick and easy to buy Bitcoin.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className={way === 1 ? 'way-content-2' : 'd-none'}>
            <div className='row'>
              <div className='col-lg-4 col-sm-6 col-12 p-3'>
                <a href='void:' className='a-remove'>
                  <div className='card h-100'>
                    <div className='card-body'>
                      <img src={bank} alt="" width={45} />
                      <h4 className='tm my-3 text-dark'>Banks Transfer</h4>
                      <p className='ts text-secondary mb-0'>Our guided bank transfer trades quick and easy to buy Bitcoin.</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className='col-lg-4 col-sm-6 col-12 p-3'>
                <a href='void:' className='a-remove'>
                  <div className='card h-100'>
                    <div className='card-body'>
                      <img src={bank} alt="" width={45} />
                      <h4 className='tm my-3 text-dark'>Online wallets</h4>
                      <p className='ts text-secondary mb-0'>Our guided bank transfer trades quick and easy to buy Bitcoin.</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className='col-lg-4 col-sm-6 col-12 p-3'>
                <a href='void:' className='a-remove'>
                  <div className='card h-100'>
                    <div className='card-body'>
                      <img src={bank} alt="" width={45} />
                      <h4 className='tm my-3 text-dark'>Debit/credit cards</h4>
                      <p className='ts text-secondary mb-0'>Our guided bank transfer trades quick and easy to buy Bitcoin.</p>
                    </div>
                  </div>
                </a>
              </div>


              <div className='col-lg-4 col-sm-6 col-12 p-3'>
                <a href='void:' className='a-remove'>
                  <div className='card h-100'>
                    <div className='card-body'>
                      <img src={bank} alt="" width={45} />
                      <h4 className='tm my-3 text-dark'>Gift cards</h4>
                      <p className='ts text-secondary mb-0'>Our guided bank transfer trades quick and easy to buy Bitcoin.</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className='col-lg-4 col-sm-6 col-12 p-3'>
                <a href='void:' className='a-remove'>
                  <div className='card h-100'>
                    <div className='card-body'>
                      <img src={bank} alt="" width={45} />
                      <h4 className='tm my-3 text-dark'>Digital currencies</h4>
                      <p className='ts text-secondary mb-0'>Our guided bank transfer trades quick and easy to buy Bitcoin.</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className='col-lg-4 col-sm-6 col-12 p-3'>
                <a href='void:' className='a-remove'>
                  <div className='card h-100'>
                    <div className='card-body'>
                      <img src={bank} alt="" width={45} />
                      <h4 className='tm my-3 text-dark'>Cash Payment</h4>
                      <p className='ts text-secondary mb-0'>Our guided bank transfer trades quick and easy to buy Bitcoin.</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className='col-lg-4 col-sm-6 col-12 p-3'>
                <a href='void:' className='a-remove'>
                  <div className='card h-100'>
                    <div className='card-body'>
                      <img src={bank} alt="" width={45} />
                      <h4 className='tm my-3 text-dark'>Goods and services</h4>
                      <p className='ts text-secondary mb-0'>Our guided bank transfer trades quick and easy to buy Bitcoin.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className='w-100 d-flex justify-content-center mt-3'>
            <button className='btn btn-blue py-2'>Start Trading</button>
          </div>
        </div>

        <div className='way-content-div py-3'>
          <h1 className='fw-bold title text-center'>Paxful in the media.</h1>
          <p className='para text-center w-75 mx-auto my-4'>Paxful is a global peer-to-peer platform building a financial system for the 100% — one <a href='void:' className='a-remove text-info'>#Bitcoin</a> at a time. Check out our coverage in renowned publications and learn about our Built With Bitcoin initiative.</p>

          <div className='way-youtube-div'>
            <div className='way-youtube-img'>
              <i><BsFillPlayFill /></i>
            </div>
          </div>

          <div className='client-logo py-4'>

            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
              }}
              loop
              navigation={true}
              modules={[ Autoplay, Navigation ]}
              onSlideChange={() => console.log( 'slide change' )}
              onSwiper={( swiper ) => console.log( swiper )}
              className='d-flex flex-row align-items-center justify-content-center ps-md-5 ps-4'>
              <SwiperSlide>
                <div className='client-logo-div'>
                  <img src={bitcoinMagazine} alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='client-logo-div'>
                  <img src={bitcoinist} alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='client-logo-div'>
                  <img src={blockchain} alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='client-logo-div'>
                  <img src={coindesk} alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='client-logo-div'>
                  <img src={cointelegraph} alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='client-logo-div'>
                  <img src={coingeek} alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='client-logo-div'>
                  <img src={forbes} alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='client-logo-div'>
                  <img src={nasdaq} alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='client-logo-div'>
                  <img src={voa} alt="" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='client-logo-div'>
                  <img src={yahoo} alt="" />
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>


        <div className='way-content-div py-3'>
          <div className='experiance-div py-5'>
            <h1 className='fw-bold title text-center'>Your Bitcoin. Your experience.</h1>
            <p className='para text-center w-75 mx-auto my-3'>Buy and sell with people around the world just like you using your own prices and payment methods.</p>
            <div className='experiance-card-div'>
              <div className='row justify-content-center'>
                <div className='col-lg-4 col-md-6 col-12 p-md-2 px-4 py-2'>
                  <div className='card experiance-card h-100'>
                    <div className='card-body'>
                      <div className='experiance-body-content d-flex justify-content-start align-items-center'>
                        <div className='experiance-card-img me-4'>
                          <img src={banking} alt="img" width={60} />
                        </div>
                        <div>
                          <h1 className='h2 fw-bold text-voilet'>12,000+</h1>
                          <p className='tm mb-0'>Active offers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6 col-12 p-md-2 px-4 py-2'>
                  <div className='card experiance-card h-100'>
                    <div className='card-body'>
                      <div className='experiance-body-content d-flex justify-content-start align-items-center'>
                        <div className='experiance-card-img me-4'>
                          <img src={banking} alt="img" width={60} />
                        </div>
                        <div>
                          <h1 className='h2 fw-bold text-voilet'>12,000+</h1>
                          <p className='tm mb-0'>Verified sellers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6 col-12 p-md-2 px-4 py-2'>
                  <div className='card experiance-card h-100'>
                    <div className='card-body'>
                      <div className='experiance-body-content d-flex justify-content-start align-items-center'>
                        <div className='experiance-card-img me-4'>
                          <img src={banking} alt="img" width={60} />
                        </div>
                        <div>
                          <h1 className='h2 fw-bold text-voilet'>6,000,000+</h1>
                          <p className='tm mb-0'>Users around the world</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='w-100 d-flex justify-content-center mt-4'>
                  <button className='btn btn-blue py-2'>Start Trading</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Way;