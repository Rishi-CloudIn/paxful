import React, { useState } from 'react';
import './OfferPage.css';
import bitcoin from '../../Images/Navbar/bitcoin.svg';
import ethereum from '../../Images/Navbar/ethereum.svg';
import tether from '../../Images/Navbar/tether.svg';
import usdCoin from '../../Images/Navbar/usd-coin.svg';
import { BiSearch } from 'react-icons/bi';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
// import { BiSearch } from 'react-icons/bi';


function OfferPage ()
{

  const [ drop2, setDrop2 ] = useState( false );

  // eslint-disable-next-line no-redeclare
  function handleClick ()
  {
    setDrop2( { clicked: !drop2.clicked } );
  }
  return (
    <>
      <section className='offer-section container-fluid'>
        <div className='offer-content-div'>
          <div className='row'>
            <div className='col-lg-8 col-12 px-4'>
              <h2 className='h2 fw-bold mt-4'>Create an Offer to Sell Tether</h2>


              <div className='mt-4'>
                <ul className='d-flex align-items-center flex-sm-row flex-column justify-content-start px-0 mx-0'>
                  <li className='offer-li active list-remove d-flex  align-items-center me-2'>
                    <div className='li-circle active me-2'>
                      <div className='li-dot active'>
                      </div>
                    </div>
                    <span className='text-nowrap'>Payment Method</span>
                  </li>
                  <div className='offer-line me-2'></div>
                  <li className='offer-li list-remove d-flex align-items-center me-2'>
                    <div className='li-circle me-2'>
                      <div className='li-dot '>
                      </div>
                    </div>
                    <span className='text-secondary text-nowrap'>Pricing</span>
                  </li>
                  <div className='offer-line'></div>
                  <li className='offer-li list-remove d-flex align-items-center me-2'>
                    <div className='li-circle me-2'>
                      <div className='li-dot '></div>
                    </div>
                    <span className='text-secondary text-nowrap'>Other Settings</span>
                  </li>
                </ul>
              </div>

              <div className='mt-5'>
                <h5 className='tl fw-bold'>Choose your cryptocurrency</h5>
                <div className='offer-btn-group d-flex align-items-center mt-4'>
                  <div className='d-flex flex-sm-row flex-column'>
                    <button className='d-flex align-items-center btn offer-btn active'>
                      <div className='me-2 d-flex align-items-center justify-content-center'>
                        <img src={bitcoin} alt="" />
                      </div>
                      Bitcoin
                    </button>

                    <button className='d-flex align-items-center btn offer-btn  mt-sm-0 mt-2'>
                      <div className='me-2 d-flex align-items-center justify-content-center'>
                        <img src={ethereum} alt="" />
                      </div>
                      Ethereum
                    </button>
                  </div>


                  <div className='d-flex flex-sm-row flex-column'>
                    <button className='d-flex align-items-center btn offer-btn '>
                      <div className='me-2 d-flex align-items-center justify-content-center'>
                        <img src={tether} alt="" />
                      </div>
                      Tether
                    </button>

                    <button className='d-flex align-items-center btn offer-btn  mt-sm-0 mt-2'>
                      <div className='me-2 d-flex align-items-center justify-content-center'>
                        <img src={usdCoin} alt="" />
                      </div>
                      <span className='word-nowrap'>USD Coin</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className='mt-5'>
                <h5 className='tl fw-bold'>What would you like to do?</h5>

                <div>
                  <div className='mt-4'>
                    <div className='ques-div-1-active d-flex mt-3'>
                      <div className='ques-big active me-2'>
                        <div className='ques-dot active'></div>
                      </div>
                      <div className='ques-content'>
                        <h6 className='h6 fw-bold'>Sell Bitcoin</h6>
                        <p className='tm fw-300'>Your offer will be listed on the Buy Bitcoin page</p>
                      </div>
                    </div>

                    <div className='ques-div-1 d-flex mt-3'>
                      <div className='ques-big me-2'>
                        <div className='ques-dot'></div>
                      </div>
                      <div className='ques-content'>
                        <h6 className='h6 fw-bold'>Buy Bitcoin</h6>
                        <p className='tm fw-300'>Your offer will be listed on the Sell Bitcoin page
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div>
                <h4 className='h4 fw-bold mt-4'>Payment Method
                </h4>

                <div className='pb-5 pt-4'>
                  <label htmlFor='search' className='ts mb-2'>Payment Method</label>
                  <button className='ques-btn d-flex align-items-center justify-content-between px-3  py-2'>
                    <div>
                      <i className='fw-bold text-secondary h5 mt-2 me-2'><BiSearch /></i>
                      <input className='ques-input ts' type='text' placeholder='Start typing...' name='search'></input>
                    </div>

                    <div>
                      <div class="btn-group btn-group-sm" role="group">
                        <button className='btn btn-blue ts  d-flex align-items-center' onClick={() => setDrop2( !drop2 )}>USD<i className='ms-2'>{drop2 ? <IoIosArrowUp /> : <IoIosArrowDown />}</i></button>
                      </div>
                    </div>
                  </button>
                  <div className={drop2 ? 'card card-div position-absolute w-25 mt-1 ' : 'd-none'}>
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
                              <img src={usdCoin} alt="img" width={23} className='me-2' /> <span>USD Coin<span></span></span>
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-12 px-4'>
              <div className='mt-4'>
                <h3 className='h3 fw-bold text-start'>About This Step</h3>
                <p className='ts py-3'>Start creating your offer by selecting the cryptocurrency you want to trade, whether or not you want to buy or sell, and the payment method you want to use.</p>
                <button className='btn btn-blue ts text-nowarp w-100 py-3'>Sign up</button>
                <p className='ts text-center mt-2'>To proceed, please create an account</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OfferPage;