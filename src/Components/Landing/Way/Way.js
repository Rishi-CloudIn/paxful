import React, { useState } from 'react';
import bank from '../../../Images/Landing/way/bank.svg';
import './Way.css';
import { BsFillPlayFill } from 'react-icons/bs';
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

        <div className='way-content-div'>
          <h1 className='fw-bold title text-center'>Paxful in the media.</h1>
          <p className='para text-center w-75 mx-auto'>Paxful is a global peer-to-peer platform building a financial system for the 100% — one <a href='void:' className='a-remove text-info'>#Bitcoin</a> at a time. Check out our coverage in renowned publications and learn about our Built With Bitcoin initiative.</p>

          <div className='way-youtube-div'>
            <div className='way-youtube-img'>
              <i><BsFillPlayFill /></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Way;