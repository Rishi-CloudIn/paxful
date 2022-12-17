import React, { useState } from 'react';
import './Testimonial.css';
import mainebitcoin from '../../../Images/Landing/Testmonial/mainebitcoin.jpg';
import kareninsf from '../../../Images/Landing/Testmonial/kareninsf.jpg';
import eximius from '../../../Images/Landing/Testmonial/eximius.jpg';
import useWindowDimention from '../../../Footer/useWindowDimention';




import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
SwiperCore.use( [ Autoplay ] );

function Testimonial ()
{

  const { width } = useWindowDimention();

  const [ readmore, setReadMore ] = useState();
  const [ readmore1, setReadMore1 ] = useState();
  const [ readmore2, setReadMore2 ] = useState();



  const linkName = readmore ? ' Readless' : '... Readmore';
  const linkName1 = readmore1 ? ' Readless' : '... Readmore';
  const linkName2 = readmore2 ? ' Readless' : '... Readmore';

  return (
    <>
      <section className='testi-container container'>
        <div className='testi-content-div'>
          <h1 className='fw-bold title text-center'>Testimonials.</h1>
          <p className='para text-center w-75 mx-auto my-3'>Wondering what our users think about using Paxful? Let them tell you in their own words:</p>

          <div className='testi-div'>
            <div className='testi-card-div'>
              <Swiper
                spaceBetween={2}
                slidesPerView={width < 992 ? 1 : 2}
                autoplay={{
                  delay: 10000,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: true
                }}
                loop
                navigation={true}
                modules={[ Autoplay, Navigation ]}
                className='d-flex flex-lg-row flex-column align-items-center justify-content-center px-5'>


                <SwiperSlide>
                  <div className='px-md-5 px-3 col-lg-6 col-12 w-100 h-100 d-flex'>
                    <div className='card testi-card position-relative w-100 h-100 p-2 my-5 '>
                      <div className='card-body'>
                        <div className='testi-card-img position-absolute top-0 translate-middle'>
                          <img src={mainebitcoin} alt="img" width={50} />
                        </div>
                        <div className='pt-4 pb-2 px-lg-2 px-0'>
                          <h5 className='tl text-voilet fw-bold'>MaineBitcoin</h5>
                          <p className='ts mb-0 lh-lg mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque deleniti, eius sapiente rem veniam quia veritatis inventore sequi eveniet consequuntur aperiam reprehenderit itaque, consectetur magnam fugiat quibusdam cupiditate quam dicta?
                            {readmore && 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque deleniti, eius sapiente rem veniam quia veritatis inventore sequi eveniet consequuntur aperiam reprehenderit itaque, consectetur magnam fugiat quibusdam cupiditate quam dicta?'}<span onClick={() => { setReadMore( !readmore ); }} className='ts text-voilet cursor-pointer'>{linkName}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide  >
                  <div className='px-md-5 px-3 col-lg-6 col-12 w-100 h-100'>
                    <div className='card testi-card position-relative w-100 h-100 p-2 my-5 '>
                      <div className='card-body'>
                        <div className='testi-card-img position-absolute top-0 translate-middle'>
                          <img src={kareninsf} alt="img" width={50} />
                        </div>
                        <div className='pt-4 pb-2 px-lg-2 px-0'>
                          <h5 className='tl text-voilet fw-bold'>Kareninsf</h5>
                          <p className='ts mb-0 lh-lg mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque deleniti, eius sapiente rem veniam quia veritatis inventore sequi eveniet consequuntur aperiam reprehenderit itaque, consectetur magnam fugiat quibusdam cupiditate quam dicta?
                            {readmore1 && 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque deleniti, eius sapiente rem veniam quia veritatis inventore sequi eveniet consequuntur aperiam reprehenderit itaque, consectetur magnam fugiat quibusdam cupiditate quam dicta?'}<span onClick={() => { setReadMore1( !readmore1 ); }} className='ts text-voilet cursor-pointer'>{linkName1}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide >
                  <div className='px-md-5 px-3 px-2 col-lg-6 col-12 w-100 h-100'>
                    <div className='card testi-card position-relative w-100 h-100 p-2 my-5'>
                      <div className='card-body'>
                        <div className='testi-card-img position-absolute top-0 translate-middle'>
                          <img src={eximius} alt="img" width={50} />
                        </div>
                        <div className='pt-4 pb-2 px-lg-2 px-0'>
                          <h5 className='tl text-voilet fw-bold'>Eximius</h5>
                          <p className='ts mb-0 lh-lg mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque deleniti, eius sapiente rem veniam quia veritatis inventore sequi eveniet consequuntur aperiam reprehenderit itaque, consectetur magnam fugiat quibusdam cupiditate quam dicta?
                            {readmore2 && 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque deleniti, eius sapiente rem veniam quia veritatis inventore sequi eveniet consequuntur aperiam reprehenderit itaque, consectetur magnam fugiat quibusdam cupiditate quam dicta?'}<span onClick={() => { setReadMore2( !readmore2 ); }} className='ts text-voilet cursor-pointer'>{linkName2}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide >
                  <div className='px-md-5  px-3 px-2 col-lg-6 col-12 w-100 h-100'>
                    <div className='card testi-card position-relative w-100 h-100 p-2 my-5'>
                      <div className='card-body'>
                        <div className='testi-card-img position-absolute top-0 translate-middle'>
                          <img src={kareninsf} alt="img" width={50} />
                        </div>
                        <div className='pt-4 pb-2 px-lg-2 px-0'>
                          <h5 className='tl text-voilet fw-bold'>Kareninsf</h5>
                          <p className='ts mb-0 lh-lg mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque deleniti, eius sapiente rem veniam quia veritatis inventore sequi eveniet consequuntur aperiam reprehenderit itaque, consectetur magnam fugiat quibusdam cupiditate quam dicta?
                            {readmore1 && 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque deleniti, eius sapiente rem veniam quia veritatis inventore sequi eveniet consequuntur aperiam reprehenderit itaque, consectetur magnam fugiat quibusdam cupiditate quam dicta?'}<span onClick={() => { setReadMore1( !readmore1 ); }} className='ts text-voilet cursor-pointer'>{linkName1}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;