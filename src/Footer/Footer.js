import React, { useState } from 'react';
import './Footer.css';
import { AiFillQuestionCircle } from 'react-icons/ai';
import coingeek from '../Images/Landing/way/coingeek.webp';
import useWindowDimensions from './useWindowDimention';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
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
      <section className='footer-container container-fluid'>
        <div className='footer-content-div px-3'>
          <div className='footer-div-1'>
            <div className='d-flex align-items-center'>
              <div className='footer-logo me-3'>
                <img src={coingeek} alt="img" width={100} />
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
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Paxful Wallet</a></li>
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
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Paxful Pay</a></li>
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
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Paxful Rewards Program</a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Paxful Trader Program
                  </a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Paxful Peer Program</a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Paxful Alliance</a></li>
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
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Paxful Status</a></li>
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
                  <h5 className='h6 fw-bolder mb-0'>About Paxful
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
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Paxful Blog
                  </a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Paxful Reviews
                  </a></li>
                  <li className='  list-remove  '><a href='void:' className='a-remove'>Built with Bitcoin
                  </a></li>
                </ul>

              </div>
            </div>
          </div>

          
        </div>
      </section>
    </>
  );
}

export default Footer;