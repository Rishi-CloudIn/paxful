import React from 'react';
import './GetStart.css';
import bank from '../../../Images/Landing/way/bank.svg';
function GetStart ()
{
  return (
    <>
      <section className='financial-system container'>
        <div className='financial-content-div pt-5 pb-2'>
          <h1 className='fw-bold title text-center'>Welcome to a financial system for the 100%.</h1>

          <div className='financial-card-div'>
            <div className='row'>
              <div className='col-md-4 col-sm-6 p-sm-3 px-3   h-100'>
                <div className='card border-0'>
                  <div className='card-body'>
                    <div className='financial-card-img d-flex justify-content-center'>
                      <img src={bank} alt="" width={40} />
                    </div>
                    <h6 className='tl text-dark text-center mt-2 mb-3'>Buy Bitcoin</h6>
                    <p className='ts text-center px-2'><span className='text-primary cursor-pointer'>Buy Bitcoin</span> from real people in our peer-to-peer Marketplace.</p>
                  </div>
                </div>
              </div>

              <div className='col-md-4 col-sm-6 p-sm-3 px-3   h-100'>
                <div className='card border-0'>
                  <div className='card-body'>
                    <div className='financial-card-img d-flex justify-content-center'>
                      <img src={bank} alt="" width={40} />
                    </div>
                    <h6 className='tl text-dark text-center mt-2 mb-3'>Sell Bitcoin</h6>
                    <p className='ts text-center px-2'>Set your own rates and choose how you want to be paid.</p>
                  </div>
                </div>
              </div>

              <div className='col-md-4 col-sm-6 p-sm-3 px-3   h-100'>
                <div className='card border-0'>
                  <div className='card-body'>
                    <div className='financial-card-img d-flex justify-content-center'>
                      <img src={bank} alt="" width={40} />
                    </div>
                    <h6 className='tl text-dark text-center mt-2 mb-3'>Secure trading</h6>
                    <p className='ts text-center px-2'>Bitcoin is held in secure escrow until a trade is successfully completed.</p>
                  </div>
                </div>
              </div>

              <div className='col-md-4 col-sm-6 p-sm-3 px-3   h-100 '>
                <div className='card border-0'>
                  <div className='card-body'>
                    <div className='financial-card-img d-flex justify-content-center'>
                      <img src={bank} alt="" width={40} />
                    </div>
                    <h6 className='tl text-dark text-center mt-2 mb-3'>Valuable feedback</h6>
                    <p className='ts text-center px-2'>Our feedback system highlights reliable, experienced users, helping you to trade smoothly.</p>
                  </div>
                </div>
              </div>

              <div className='col-md-4 col-sm-6 p-sm-3 px-3   h-100'>
                <div className='card border-0'>
                  <div className='card-body'>
                    <div className='financial-card-img d-flex justify-content-center'>
                      <img src={bank} alt="" width={40} />
                    </div>
                    <h6 className='tl text-dark text-center mt-2 mb-3'>Free Techswap Wallet</h6>
                    <p className='ts text-center px-2'> Get a free<span className='text-primary cursor-pointer'> Techswap Wallet </span>when you sign up to receive, send, and store your Bitcoin safely.</p>
                  </div>
                </div>
              </div>

              <div className='col-md-4 col-sm-6 p-sm-3 px-3  h-100'>
                <div className='card border-0'>
                  <div className='card-body'>
                    <div className='financial-card-img d-flex justify-content-center'>
                      <img src={bank} alt="" width={40} />
                    </div>
                    <h6 className='tl text-dark text-center mt-2 mb-3'>Invite friends</h6>
                    <p className='ts text-center px-2'>Get your friends and family to<span className='text-primary cursor-pointer'>sign up</span>  for Techswap.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='getstart-contetnt-div py-5'>
          <h1 className='fw-bold title text-center'>Ready to get started?</h1>
          <p className='para text-center w-75 mx-auto my-3'>Explore thousands of offers to buy and sell Bitcoin to kickstart your trading journey.</p>
          <div className='w-100 d-flex justify-content-center mt-4'>
            <button className='btn btn-blue py-2'>Create Your Account</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetStart;