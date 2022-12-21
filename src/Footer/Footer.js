import React, { useState } from 'react';
import './Footer.css';
import { AiFillQuestionCircle } from 'react-icons/ai';
import logo from '../Images/TechSwap-png.png';
import useWindowDimensions from './useWindowDimention';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import playStore from '../Images/Footer/play-store.png';
import { BsApple, BsInstagram, BsFacebook, BsTwitter, BsYoutube, BsReddit } from 'react-icons/bs';

function Footer ()
{
  const { width } = useWindowDimensions();

  const [ open, setOpen ] = useState( false );
  const [ open1, setOpen1 ] = useState( false );
  const [ open2, setOpen2 ] = useState( false );
  const [ open3, setOpen3 ] = useState( false );
  const [ open4, setOpen4 ] = useState( false );
  const [ open5, setOpen5 ] = useState( false );

  return (
    <>
      <hr />
      <section className='footer-container container-fluid mt-4'>
        <div className='footer-content-div px-3'>
          <div className='footer-div-1'>
            <div className='d-flex align-items-center'>
              <div className='footer-logo me-3'>
                <img src={logo} alt="img" width={100} />
              </div>
              <button className='btn btn-border d-flex justify-content-center align-items-center ts'><AiFillQuestionCircle className='fs-5 me-2' />FAQ & Help Center</button>
            </div>
          </div>
          <div className='row mt-4'>
            {/* FOOTER-1 */}
            <div className='col-lg-2 col-12 '>
              <div className=''>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                  <h5 className='h6 fw-bolder mb-0'>For You</h5>
                  <i className={width >= 992 ? 'd-none' : 'fs-4 cursor-pointer'} onClick={() => setOpen( !open )}>
                    {!open ? <MdOutlineKeyboardArrowDown className='fs-1 text-dark' /> : <MdOutlineKeyboardArrowUp className='text-secondary fs-1' />}
                  </i>
                </div>

                <ul className={width > 992 || open ? 'd-block p-0 footer-ul' : 'd-none'}>
                  <li className=' list-remove  '><a href='void:' className='a-remove'>Buy Bitcoin</a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Buy Tether</a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Buy Ethereum</a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Sell Bitcoin</a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Sell Tether</a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Sell Ethereum</a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Become Vendor</a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Techswap Wallet</a></li>
                </ul>

              </div>
            </div>

            {/* FOOTER-2 */}
            <div className='col-lg-2 col-12 '>
              <div className=''>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                  <h5 className='h6 fw-bolder mb-0'>For Your Business</h5>
                  <i className={width >= 992 ? 'd-none' : 'fs-4 cursor-pointer'} onClick={() => setOpen1( !open1 )}>
                    {!open1 ? <MdOutlineKeyboardArrowDown className='fs-1 text-dark' /> : <MdOutlineKeyboardArrowUp className='text-secondary fs-1' />}
                  </i>
                </div>

                <ul className={width > 992 || open1 ? 'd-block p-0 footer-ul' : 'd-none'}>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Techswap Pay</a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Virtual Bitcoin Kiosk
                  </a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>API Documentation</a></li>
                </ul>

              </div>
            </div>

            {/* FOOTER-3 */}
            <div className='col-lg-2 col-12 '>
              <div className=''>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                  <h5 className='h6 fw-bolder mb-0'>Growth</h5>
                  <i className={width >= 992 ? 'd-none' : 'fs-4 cursor-pointer'} onClick={() => setOpen2( !open2 )}>
                    {!open2 ? <MdOutlineKeyboardArrowDown className='fs-1 text-dark' /> : <MdOutlineKeyboardArrowUp className='text-secondary fs-1' />}
                  </i>
                </div>

                <ul className={width > 992 || open2 ? 'd-block p-0 footer-ul' : 'd-none'}>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Techswap Rewards Program</a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Techswap Trader Program
                  </a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Techswap Peer Program</a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Techswap Alliance</a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Community</a></li>
                </ul>

              </div>
            </div>

            {/* FOOTER-4 */}
            <div className='col-lg-2 col-12 '>
              <div className=''>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                  <h5 className='h6 fw-bolder mb-0'>Buy Anywhere
                  </h5>
                  <i className={width >= 992 ? 'd-none' : 'fs-4 cursor-pointer'} onClick={() => setOpen3( !open3 )}>
                    {!open3 ? <MdOutlineKeyboardArrowDown className='fs-1 text-dark' /> : <MdOutlineKeyboardArrowUp className='text-secondary fs-1' />}
                  </i>
                </div>

                <ul className={width > 992 || open3 ? 'd-block p-0 footer-ul' : 'd-none'}>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Buy Bitcoin in USA</a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Buy Bitcoin in Nigeria
                  </a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Buy Bitcoin in China</a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Buy Bitcoin in India</a></li>
                </ul>

              </div>
            </div>

            {/* FOOTER-5 */}
            <div className='col-lg-2 col-12 '>
              <div className=''>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                  <h5 className='h6 fw-bolder mb-0'>Useful Links
                  </h5>
                  <i className={width >= 992 ? 'd-none' : 'fs-4 cursor-pointer'} onClick={() => setOpen4( !open4 )}>
                    {!open4 ? <MdOutlineKeyboardArrowDown className='fs-1 text-dark' /> : <MdOutlineKeyboardArrowUp className='text-secondary fs-1' />}
                  </i>
                </div>

                <ul className={width > 992 || open4 ? 'd-block p-0 footer-ul' : 'd-none'}>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Techswap Status</a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Bitcoin Calculator
                  </a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Peer-to-Peer Market Prices
                  </a></li>
                </ul>

              </div>
            </div>

            {/* FOOTER-6 */}
            <div className='col-lg-2 col-12 '>
              <div className=''>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                  <h5 className='h6 fw-bolder mb-0'>About Techswap
                  </h5>
                  <i className={width >= 992 ? 'd-none' : 'fs-4 cursor-pointer'} onClick={() => setOpen5( !open5 )}>
                    {!open5 ? <MdOutlineKeyboardArrowDown className='fs-1 text-dark' /> : <MdOutlineKeyboardArrowUp className='text-secondary fs-1' />}
                  </i>
                </div>

                <ul className={width > 992 || open5 ? 'd-block p-0 footer-ul' : 'd-none'}>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>About Us</a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Business Contacts
                  </a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Careers
                  </a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Techswap Blog
                  </a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Techswap Reviews
                  </a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Built with Bitcoin
                  </a></li>
                </ul>

              </div>
            </div>
          </div>

          <div className='social-icon-div d-flex flex-md-row flex-column align-items-center justify-content-between'>
            <div className='social-div-1 d-flex flex-sm-row flex-column align-items-center'>
              <div className='mx-md-0 mx-2' >
                <button className='btn social-btn d-flex align-items-center bg-dark py-1 px-2'>
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

            <div className='social-div-1 d-flex align-items-center mt-md-0 mt-4'>
              <div className='me-md-3 mx-2'>
                <a className='a-remove' href='void:'>
                  <i className='text-secondary px-2 py-1 rounded-3 fs-5 social-icon'><BsInstagram /></i>
                </a>
              </div>
              <div className='me-md-3 mx-2'>
                <a className='a-remove' href='void:'>
                  <i className='text-secondary px-2 py-1 rounded-3 fs-5 social-icon'><BsFacebook /></i>
                </a>
              </div>
              <div className='me-md-3 mx-2'>
                <a className='a-remove' href='void:'>
                  <i className='text-secondary px-2 py-1 rounded-3 fs-5 social-icon'><BsTwitter /></i>
                </a>
              </div>
              <div className='me-md-3 mx-2'>
                <a className='a-remove' href='void:'>
                  <i className='text-secondary px-2 py-1 rounded-3 fs-5 social-icon'><BsYoutube /></i>
                </a>
              </div>
              <div className='me-md-3 mx-2'>
                <a className='a-remove' href='void:'>
                  <i className='text-secondary px-2 py-1 rounded-3 fs-5 social-icon'><BsReddit /></i>
                </a>
              </div>
            </div>
          </div>

          <div className='footer-description text-secondary lh-sm my-4'>
            “TECHSWAP” is a registered trademark of Techswap, Inc. Copyright © 2022 Techswap, Inc. All Rights Reserved. Techswap Inc. has no relation to MoneyGram, Western Union, Payoneer, WorldRemit, Paxum, PayPal, Amazon, OkPay, Payza, Walmart, Reloadit, Perfect Money, WebMoney, Google Wallet, BlueBird, Serve, Square Cash, NetSpend, Chase QuickPay, Skrill, Vanilla, MyVanilla, OneVanilla, Neteller, Venmo, Apple, ChimpChange or any other payment method. We make no claims about being supported by or supporting these services. Their respective wordmarks and trademarks belong to them alone. Official mailing address: 3422 Old Capitol Trail, PMB 989, Wilmington DE 19808
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;