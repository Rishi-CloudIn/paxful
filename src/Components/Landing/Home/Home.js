import React, { useState, useRef } from 'react';
import bitcoin from '../../../Images/Landing/Home/bitcoin.svg';
import ethereum from '../../../Images/Landing/Home/ethereum.svg';
import tether from '../../../Images/Landing/Home/tether.svg';
import usd from '../../../Images/Landing/Home/usd-coin.svg';
import { IoIosArrowDown, IoIosArrowUp, IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { FcLineChart } from 'react-icons/fc';
import './Home.css';
import gsap from "gsap";

function Home ()
{

  const [ drop, setDrop ] = useState( false );
  const [ method, setMethod ] = useState( 'buy' );

  // eslint-disable-next-line no-unused-vars
  function handleClick ()
  {
    setDrop( { clicked: !drop.clicked } );
  }

  const [ drop2, setDrop2 ] = useState( false );

  // eslint-disable-next-line no-redeclare
  function handleClick ()
  {
    setDrop2( { clicked: !drop2.clicked } );
  }


  // scroll


  let scrl = useRef( null );
  const [ scrollX, setscrollX ] = useState( 0 );
  const [ scrolEnd, setscrolEnd ] = useState( false );

  //Slide click
  const slide = ( shift ) =>
  {
    scrl.current.scrollLeft += shift;
    setscrollX( scrollX + shift );

    if (
      Math.floor( scrl.current.scrollWidth - scrl.current.scrollLeft ) <=
      scrl.current.offsetWidth
    )
    {
      setscrolEnd( true );
    } else
    {
      setscrolEnd( false );
    }
  };

  //Anim
  const anim = ( e ) =>
  {
    gsap.from( e.target, { scale: 1 } );
    gsap.to( e.target, { scale: 1.5 } );
  };
  const anim2 = ( e ) =>
  {
    gsap.from( e.target, { scale: 1.5 } );
    gsap.to( e.target, { scale: 1 } );
  };

  const scrollCheck = () =>
  {
    setscrollX( scrl.current.scrollLeft );
    if (
      Math.floor( scrl.current.scrollWidth - scrl.current.scrollLeft ) <=
      scrl.current.offsetWidth
    )
    {
      setscrolEnd( true );
    } else
    {
      setscrolEnd( false );
    }
  };
  return (
    <>
      <section className='home-container container-fluid'>
        <div className='home-content-div '>
          <div className='row'>
            <div className='col-12'>
              <h1 className='text-center hero-title fw-bold text-white'>Trade Bitcoin with Techswap.</h1>
              <p className='home-p text-center text-white w-md-50 w-75 mx-auto'>Join the leading peer-to-peer platform to buy and sell Bitcoin using 350+ payment methods with 10 million people just like you.</p>

              <div className='mt-5'>
                <div className='card card-div-1 mx-auto px-3 py-4'>
                  <div className='card-body'>
                    <div className='d-flex justify-content-center mb-4'>
                      <button className={method === 'buy' ? 'btn btn-blue px-4 me-2' : 'btn btn-border px-4 me-2'} onClick={() => setMethod( 'buy' )}>Buy</button>
                      <button className={method === 'sell' ? 'btn btn-blue px-4 ms-2' : 'btn btn-border px-4 ms-2'} onClick={() => setMethod( 'sell' )}>Sell</button>
                    </div>

                    <div className='position-relative '>
                      <button className='btn btn-border w-100 py-3 tm text-start d-flex align-items-center justify-content-between fs-6 fw-normal' onClick={() => setDrop( !drop )}>
                        <div>
                          <img src={bitcoin} alt="img" width={23} className='me-2' /> <span className='tm'>Bitcoin</span>
                        </div>
                        <div><i className=''>{drop ? <IoIosArrowUp /> : <IoIosArrowDown />}</i></div>
                      </button>
                      <span className={!drop ? 'home-span ts d-flex align-items-center mt-1 ms-1' : 'd-none'}><span className='text-secondary'>1 BTC =&nbsp;</span> <span className='text-primary'>17,689.68 USD <i><FcLineChart /></i></span></span>
                      <div className={drop ? 'card card-div position-absolute w-100 mt-1 ' : 'd-none'}>
                        <div className='card-body p-1'>
                          <ul className='px-0'>
                            <li className='list-remove home-list border-none'>
                              <button className='btn-active btn w-100 py-3 tm text-start d-flex align-items-center fs-6 fw-normal mb-1'>
                                <div>
                                  <img src={bitcoin} alt="img" width={23} className='me-2' /> <span>Bitcoin</span>
                                </div>
                              </button>

                              <button className='btn w-100 py-3 tm text-start d-flex align-items-center fs-6 fw-normal mb-1'>
                                <div>
                                  <img src={ethereum} alt="img" width={23} className='me-2' /> <span>Ethereum</span>
                                </div>
                              </button>

                              <button className='btn w-100 py-3 tm text-start d-flex align-items-center fs-6 fw-normal mb-1'>
                                <div>
                                  <img src={tether} alt="img" width={23} className='me-2' /> <span>Tether</span>
                                </div>
                              </button>

                              <button className='btn w-100 py-3 tm text-start d-flex align-items-center fs-6 fw-normal mb-1'>
                                <div>
                                  <img src={usd} alt="img" width={23} className='me-2' /> <span>USD Coin<span></span></span>
                                </div>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className='mt-4'>
                      <h6 className='tm mb-1'>{method === 'buy' ? 'Pay with' : 'Get paid via'}</h6>
                      <button className='btn btn-border w-100 py-2 mt-2 tm text-start d-flex align-items-center justify-content-between fs-6 fw-normal'>
                        <div><span className='ts'>Select payment method (350+)</span></div>
                        <div>
                          <div class="btn-group btn-group-sm" role="group">
                            <button className='btn btn-border ts border-info text-nowrap'>Show All</button>
                          </div>
                        </div>
                      </button>

                      <div className='d-flex align-items-center mt-2 '>
                        {scrollX !== 0 && (
                          <button
                            className="prev btn border-none shadow-none p-0"
                            onClick={() => slide( -80 )}
                            onMouseEnter={( e ) => anim( e )}
                            onMouseLeave={( e ) => anim2( e )}
                          >
                            <i className=""><IoIosArrowBack /></i>
                          </button>
                        )}

                        <div class="btn-group btn-group-sm w-100 group-button" role="group" ref={scrl} onScroll={scrollCheck}>
                          <button className='btn txs fw-bold border-secondary border rounded-1 me-2 text-nowrap shadow-none'>Bank Transfer</button>
                          <button className='btn txs fw-bold border-secondary  rounded-1 me-2 text-nowrap shadow-none'>PayPal</button>
                          <button className='btn txs fw-bold border-secondary  rounded-1 me-2 text-nowrap shadow-none'>Amazon Gift Card</button>
                          <button className='btn txs fw-bold border-secondary  rounded-1 me-2 text-nowrap shadow-none'>Steam Wallet Gift Card</button>
                          <button className='btn txs fw-bold border-secondary  rounded-1 me-2 text-nowrap shadow-none'>iTunes Gift Card</button>
                        </div>
                        {!scrolEnd && (
                          <button
                            className="next btn border-none p-0"
                            onClick={() => slide( +80 )}
                            onMouseEnter={( e ) => anim( e )}
                            onMouseLeave={( e ) => anim2( e )}
                          >
                            <i className=""><IoIosArrowForward /></i>
                          </button>
                        )}
                      </div>

                    </div>

                    <div className='mt-4 position-relative'>
                      <h6 className='tm mb-1'>{method === 'buy' ? ' I want to spend' : 'I want to receive'}</h6>
                      <button className='btn btn-border w-100 py-2 mt-2 tm text-start d-flex align-items-center justify-content-between fs-6 fw-normal'>
                        <div><input type='text' placeholder='Enter amount' className='home-input ' /></div>
                        <div>
                          <div class="btn-group btn-group-sm" role="group">
                            <button className='btn btn-blue ts  d-flex align-items-center' onClick={() => setDrop2( !drop2 )}>USD<i className='ms-2'>{drop2 ? <IoIosArrowUp /> : <IoIosArrowDown />}</i></button>
                          </div>
                        </div>
                      </button>
                      <span className='text-secondary ts'>Minimum: 10 USD</span>
                      <div className={drop2 ? 'card card-div position-absolute w-100 mt-1 ' : 'd-none'}>
                        <div className='card-body p-1'>
                          <ul className='px-0'>
                            <li className='list-remove home-list border-none'>
                              <button className='btn-active btn w-100 py-3 tm text-start d-flex align-items-center fs-6 fw-normal mb-1'>
                                <div>
                                  <img src={bitcoin} alt="img" width={23} className='me-2' /> <span>Bitcoin</span>
                                </div>
                              </button>

                              <button className='btn w-100 py-3 tm text-start d-flex align-items-center fs-6 fw-normal mb-1'>
                                <div>
                                  <img src={ethereum} alt="img" width={23} className='me-2' /> <span>Ethereum</span>
                                </div>
                              </button>

                              <button className='btn w-100 py-3 tm text-start d-flex align-items-center fs-6 fw-normal mb-1'>
                                <div>
                                  <img src={tether} alt="img" width={23} className='me-2' /> <span>Tether</span>
                                </div>
                              </button>

                              <button className='btn w-100 py-3 tm text-start d-flex align-items-center fs-6 fw-normal mb-1'>
                                <div>
                                  <img src={usd} alt="img" width={23} className='me-2' /> <span>USD Coin<span></span></span>
                                </div>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <button className='btn btn-blue w-100 py-2 mt-4'>Find Offers</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;