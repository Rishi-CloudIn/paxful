import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';
import bitcoin from '../../../Images/Navbar/bitcoin.svg';
import ethereum from '../../../Images/Navbar/ethereum.svg';
import tether from '../../../Images/Navbar/tether.svg';
import usd from '../../../Images/Navbar/usd-coin.svg';
import logo from '../../../Images/TechSwap-png.png';


function WalletNavbar ()
{
  const navigate = useNavigate();
  const [ nav, setNav ] = useState( true );
  const [ color, setColor ] = useState( false );

  const changeColor = () =>
  {
    if ( window.scrollY >= 100 )
    {
      setColor( true );
    } else
    {
      setColor( false );
    }
  };

  window.addEventListener( "scroll", changeColor );
  // eslint-disable-next-line no-unused-vars
  function handleClick ()
  {
    setNav( { clicked: !nav.clicked } );
  }
  return (
    <>
      <nav className='nav'>
        <div className='container-fluid navbar-container px-0'>
          <div className={color ? 'navbar-content-div navbar-bg d-flex flex-row align-items-center justify-content-between py-3 ' : 'navbar-content-div-1 d-flex flex-row align-items-center justify-content-between py-3 '}>


            {/* sec-1 */}
            <div className='d-flex'>
              <div className='navbar-logo d-flex flex-row align-items-center justify-content-start' onClick={() => navigate( '/home' )} >
                <img src={logo} alt="img" className='mt-0' />
              </div>


              {/* sec-2 */}
              <div className={!nav ? 'nav-ul-div my-auto d-flex flex-xl-row flex-column align-items-center justify-content-xl-start justify-content-center' : 'nav-ul-div-hide my-auto d-flex flex-xl-row flex-column align-items-center justify-content-start'}>
                <div>
                  <ul className='d-flex flex-xl-row flex-column justify-content-start  align-items-center ps-0 mb-0 ms-xl-3 ms-0'>
                    {/* new */}
                    <li className='nav-li mx-2'>
                      {/* <NavLink className='uc' >Gift Card Hub</NavLink> */}
                      <div className="dropdown">
                        <button className="btn dropdown-btn dropdown-toggle ts text-nowrap" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                          Buy
                        </button>
                        <ul className="dropdown-menu py-0 mx-xl-0 " aria-labelledby="dropdownMenu2">
                          <li>
                            <button className="dropdown-item px-2 py-2" type="button">
                              <div className=' d-flex align-items-center'>
                                <div>
                                  <img src={bitcoin} alt="" width={50} />
                                </div>
                                <div className='mx-3 w-75'>
                                  <h5 className='ts fw-bold mb-1'>But With Bitcoin</h5>
                                  <p className='ts mb-0 text-secondary d-md-block d-none'>Search for offers to buy gift Cards with Bitcoin</p>
                                </div>
                                <div>
                                  <i className='fs-4 dropdown-icons'><MdArrowForwardIos /></i>
                                </div>
                              </div>
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item px-2 py-2" type="button">
                              <div className=' d-flex align-items-center'>
                                <div>
                                  <img src={ethereum} alt="" width={50} />
                                </div>
                                <div className='mx-3  w-75'>
                                  <h5 className='ts fw-bold mb-1'>But With Ethereum</h5>
                                  <p className='ts mb-0 text-secondary d-md-block d-none'>Search for offers to buy gift Cards with Ethereum</p>
                                </div>
                                <div>
                                  <i className='fs-4 dropdown-icons'><MdArrowForwardIos /></i>
                                </div>
                              </div>
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item px-2 py-2" type="button">
                              <div className=' d-flex align-items-center'>
                                <div>
                                  <img src={tether} alt="" width={50} />
                                </div>
                                <div className='mx-3  w-75'>
                                  <h5 className='ts fw-bold mb-1'>But With Tether</h5>
                                  <p className='ts mb-0 text-secondary d-md-block d-none'>Search for offers to buy gift Cards with Tether</p>
                                </div>
                                <div>
                                  <i className='fs-4 dropdown-icons'><MdArrowForwardIos /></i>
                                </div>
                              </div>
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item px-2 py-2" type="button">
                              <div className=' d-flex align-items-center'>
                                <div>
                                  <img src={usd} alt="" width={50} />
                                </div>
                                <div className='mx-3  w-75'>
                                  <h5 className='ts fw-bold mb-1'>But With USD Coin</h5>
                                  <p className='ts mb-0 text-secondary d-md-block d-none'>Search for offers to buy gift Cards with USD Coin</p>
                                </div>
                                <div>
                                  <i className='fs-4 dropdown-icons'><MdArrowForwardIos /></i>
                                </div>
                              </div>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className='nav-li mx-2'>
                      {/* <NavLink className='uc' >Gift Card Hub</NavLink> */}
                      <div className="dropdown">
                        <button className="btn dropdown-btn dropdown-toggle ts text-nowrap" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                          Sell
                        </button>
                        <ul className="dropdown-menu py-0 mx-xl-0 " aria-labelledby="dropdownMenu2">
                          <li>
                            <button className="dropdown-item px-2 py-2" type="button">
                              <div className=' d-flex align-items-center'>
                                <div>
                                  <img src={bitcoin} alt="" width={50} />
                                </div>
                                <div className='mx-3 w-75'>
                                  <h5 className='ts fw-bold mb-1'>But With Bitcoin</h5>
                                  <p className='ts mb-0 text-secondary d-md-block d-none'>Search for offers to buy gift Cards with Bitcoin</p>
                                </div>
                                <div>
                                  <i className='fs-4 dropdown-icons'><MdArrowForwardIos /></i>
                                </div>
                              </div>
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item px-2 py-2" type="button">
                              <div className=' d-flex align-items-center'>
                                <div>
                                  <img src={ethereum} alt="" width={50} />
                                </div>
                                <div className='mx-3  w-75'>
                                  <h5 className='ts fw-bold mb-1'>But With Ethereum</h5>
                                  <p className='ts mb-0 text-secondary d-md-block d-none'>Search for offers to buy gift Cards with Ethereum</p>
                                </div>
                                <div>
                                  <i className='fs-4 dropdown-icons'><MdArrowForwardIos /></i>
                                </div>
                              </div>
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item px-2 py-2" type="button">
                              <div className=' d-flex align-items-center'>
                                <div>
                                  <img src={tether} alt="" width={50} />
                                </div>
                                <div className='mx-3  w-75'>
                                  <h5 className='ts fw-bold mb-1'>But With Tether</h5>
                                  <p className='ts mb-0 text-secondary d-md-block d-none'>Search for offers to buy gift Cards with Tether</p>
                                </div>
                                <div>
                                  <i className='fs-4 dropdown-icons'><MdArrowForwardIos /></i>
                                </div>
                              </div>
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item px-2 py-2" type="button">
                              <div className=' d-flex align-items-center'>
                                <div>
                                  <img src={usd} alt="" width={50} />
                                </div>
                                <div className='mx-3  w-75'>
                                  <h5 className='ts fw-bold mb-1'>But With USD Coin</h5>
                                  <p className='ts mb-0 text-secondary d-md-block d-none'>Search for offers to buy gift Cards with USD Coin</p>
                                </div>
                                <div>
                                  <i className='fs-4 dropdown-icons'><MdArrowForwardIos /></i>
                                </div>
                              </div>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className='nav-ul d-flex flex-xl-row flex-column justify-content-center  justify-content-xl-start m-0 p-0 align-items-center  ms-0'>
                    {/* old */}
                    <li className='nav-li mx-2'>
                      <NavLink className='uc text-nowrap' to='/create_an_offers' onClick={() => setNav( !nav )}>Create an Offer</NavLink>
                    </li>
                    <li className='nav-li mx-2'>
                      <NavLink className='uc' to='/wallet' onClick={() => setNav( !nav )}>Wallet</NavLink>
                    </li>
                    <li className='nav-li mx-2'>
                      {/* <NavLink className='uc' >Gift Card Hub</NavLink> */}
                      <div className="dropdown">
                        <button className="btn dropdown-btn dropdown-toggle ts text-nowrap" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                          Gift Card Hub
                        </button>
                        <ul className="dropdown-menu py-0 mx-xl-0 " aria-labelledby="dropdownMenu2">
                          <li>
                            <button className="dropdown-item px-2 py-2" type="button">
                              <div className=' d-flex align-items-center'>
                                <div>
                                  <img src={bitcoin} alt="" width={50} />
                                </div>
                                <div className='mx-3 w-75'>
                                  <h5 className='ts fw-bold mb-1'>But With Bitcoin</h5>
                                  <p className='ts mb-0 text-secondary d-md-block d-none'>Search for offers to buy gift Cards with Bitcoin</p>
                                </div>
                                <div>
                                  <i className='fs-4 dropdown-icons'><MdArrowForwardIos /></i>
                                </div>
                              </div>
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item px-2 py-2" type="button">
                              <div className=' d-flex align-items-center'>
                                <div>
                                  <img src={ethereum} alt="" width={50} />
                                </div>
                                <div className='mx-3  w-75'>
                                  <h5 className='ts fw-bold mb-1'>But With Ethereum</h5>
                                  <p className='ts mb-0 text-secondary d-md-block d-none'>Search for offers to buy gift Cards with Ethereum</p>
                                </div>
                                <div>
                                  <i className='fs-4 dropdown-icons'><MdArrowForwardIos /></i>
                                </div>
                              </div>
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item px-2 py-2" type="button">
                              <div className=' d-flex align-items-center'>
                                <div>
                                  <img src={tether} alt="" width={50} />
                                </div>
                                <div className='mx-3  w-75'>
                                  <h5 className='ts fw-bold mb-1'>But With Tether</h5>
                                  <p className='ts mb-0 text-secondary d-md-block d-none'>Search for offers to buy gift Cards with Tether</p>
                                </div>
                                <div>
                                  <i className='fs-4 dropdown-icons'><MdArrowForwardIos /></i>
                                </div>
                              </div>
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item px-2 py-2" type="button">
                              <div className=' d-flex align-items-center'>
                                <div>
                                  <img src={usd} alt="" width={50} />
                                </div>
                                <div className='mx-3  w-75'>
                                  <h5 className='ts fw-bold mb-1'>But With USD Coin</h5>
                                  <p className='ts mb-0 text-secondary d-md-block d-none'>Search for offers to buy gift Cards with USD Coin</p>
                                </div>
                                <div>
                                  <i className='fs-4 dropdown-icons'><MdArrowForwardIos /></i>
                                </div>
                              </div>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className='nav-li mx-2'>
                      <NavLink className='uc text-nowrap' to='/vendors' onClick={() => setNav( !nav )}>Become a Vendor</NavLink >
                    </li>

                    <div className='d-xl-none d-block'>
                      <div className='d-flex flex-column'>
                        <button className='btn text-white mb-3 ts shadow-none' onClick={() => navigate( '/' )}>Login</button>
                        <button className='btn nav-btn' onClick={() => navigate( '/register' )}>Register</button>
                      </div>
                    </div>
                  </ul>
                </div>

              </div>
            </div>



            {/* sec-3 */}
            <div className={!nav ? 'nav-ul-div-1 my-auto' : 'nav-ul-div-hide-1 my-auto'}>
              <ul className='nav-ul d-flex flex-xl-row flex-column justify-content-around m-0 p-0 align-items-center'>
                <button className='btn me-2 shadow-none' onClick={() => navigate( '/' )}>Login</button>
                <button className='btn nav-btn' onClick={() => navigate( '/register' )}>Register</button>
              </ul>
            </div>


            <div className={nav ? 'hamburger d-xl-none' : 'hamburger d-xl-none change'} onClick={() => setNav( !nav )}>
              <div className='bar1'></div>
              <div className='bar2'></div>
              <div className='bar3'></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default WalletNavbar;