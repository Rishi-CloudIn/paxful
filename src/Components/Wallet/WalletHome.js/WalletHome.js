import React from 'react';
import './WalletHome.css';
import { BsFillPlayCircleFill, BsArrowDown } from 'react-icons/bs';
import { Link } from 'react-scroll';
import wallethome from '../../../Images/Wallet/wallet-home.png';
import security from '../../../Images/Wallet/security.png';
import flexibility from '../../../Images/Wallet/flexibility.png';
import freedom from '../../../Images/Wallet/freedom.png';


function WalletHome ()
{
  return (
    <>
      <section className='wallet-home-section container '>
        <div className='home-content-div'>
          <div className='row'>
            <div className='col-lg-6 col-12'>
              <div>
                <h1 className='h1 wallet-home-title'>
                  Get your free, secure bitcoin wallet
                </h1>
                <h5 className='h4 fw-bold text-voilet mt-2'>A simple and safe way to buy, sell, send, and store your Bitcoin.
                </h5>
                <div className='d-flex mt-5'>
                  <div className='me-3'>
                    <i className='fs-1 text-light-voilet'><BsFillPlayCircleFill /></i>
                  </div>
                  <div>
                    <h6>The Paxful Wallet</h6>
                    <p className='fw-300 tm'>is a secure and convenient way to manage your money. Sign up today and find out for yourself why millions of people trust us.</p>
                  </div>
                </div>

                <button className='btn btn-blue py-3 ts'>Get your free bitcoin wallet</button>

                <div className='mt-4'>
                  <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={1000} className='a-remove ts cursor-pointer'><i className='fs-5 me-2'><BsArrowDown /></i>More Details</Link>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-12 d-flex align-items-center justify-content-center'>
              <div className='wallet-home-img mt-lg-0 mt-4'>
                <img src={wallethome} alt="img" />
              </div>
            </div>
          </div>

          <div className='py-5 my-5' id='test1'>
            <h1 className='h2 fw-bold text-center'>A Bitcoin wallet you can trust</h1>
            <p className='text-center tm text-secondary mt-5 px-md-0 px-3'>Over 3 million people have used the Paxful wallet to send and receive over 40,000 BTC. Its best-in-class security features make it one of the most trusted wallets in the world — so you’ll never have to choose between security and convenience.</p>
            <p className='text-center tm text-secondary px-md-2 px-4 mt-4'>The Paxful wallet is functional, safe, and easy to use on all your devices. You can easily manage your funds and top up directly via our peer-to-peer marketplace, and send or receive Bitcoin, in just a few clicks.</p>

            <div className='d-flex flex-md-row flex-column justify-content-around mt-5'>
              <div className='d-flex flex-column'>
                <h1 className='h1 fw-bold text-skyblue text-center'>0%</h1>
                <p className='tm text-secondary text-center'>No commision fees</p>
              </div>

              <div className='d-flex flex-column'>
                <h1 className='h1 fw-bold text-skyblue text-center'>₹6,000,000</h1>
                <p className='tm text-secondary text-center'>Happy customers</p>
              </div>

              <div className='d-flex flex-column'>
                <h1 className='h1 fw-bold text-skyblue text-center'>+₹2,000,000</h1>
                <p className='tm text-secondary text-center'>Paxful wallets</p>
              </div>
            </div>
          </div>

          <div className='benefit-content-div'>
            <h1 className='h1 fw-800 text-center'>Benefits</h1>
            <h6 className='h6 tm text-center'>Still unsure? We get it. Here are some reasons why you should get the Paxful Wallet.</h6>

            <div className='row mt-5'>
              <div className='col-sm-6 col-12 d-flex justify-content-center align-items-center'>
                <div className='benefit-img-div'>
                  <img src={security} alt="img" />
                </div>
              </div>
              <div className='col-sm-6 col-12 d-flex justify-content-start align-items-center'>
                <div className='benefit-div'>
                  <h2 className='h2 fw-bold'>Security</h2>
                  <p className='tm text-secondary'>At Paxful, we take the safety of your money seriously. Our strict verification and password requirements make sure that you’re the only person with access to your money.</p>
                </div>
              </div>
            </div>

            <div className='row mt-5 d-flex flex-sm-row flex-column-reverse'>
              <div className='col-sm-6 col-12 d-flex justify-content-start align-items-center'>
                <div className='benefit-div'>
                  <h2 className='h2 fw-bold'>Flexibility</h2>
                  <p className='tm text-secondary'>Enjoy the freedom of over 300 ways to buy or sell your Bitcoin. Our peer-to-peer marketplace connects you safely and privately with real people just like you.</p>
                </div>
              </div>

              <div className='col-sm-6 col-12 d-flex justify-content-center align-items-center'>
                <div className='benefit-img-div'>
                  <img src={flexibility} alt="img" />
                </div>
              </div>
            </div>

            <div className='row mt-5'>
              <div className='col-sm-6 col-12 d-flex justify-content-center align-items-center'>
                <div className='benefit-img-div'>
                  <img src={freedom} alt="img" />
                </div>
              </div>
              <div className='col-sm-6 col-12 d-flex justify-content-start align-items-center'>
                <div className='benefit-div'>
                  <h2 className='h2 fw-bold'>
                    Freedom</h2>
                  <p className='tm text-secondary'>Access your money securely anywhere, anytime. Thanks to the power of the cloud, you won’t lose your money even if you lose your device.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WalletHome;