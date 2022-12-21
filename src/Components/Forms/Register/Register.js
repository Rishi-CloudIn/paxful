import React, { useState, useRef } from 'react';
import techswap from '../../../Images/TechSwap-png.png';
import registerImg from '../../../Images/Form/Register/register-img.webp';
import indianFlag from '../../../Images/Form/Register/indian flag.png';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { RiArrowRightSLine } from 'react-icons/ri';
import { BiShow, BiHide, BiSearch } from 'react-icons/bi';
import './Register.css';

import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
function Register ()
{

  const navigate = useNavigate();

  const form = useRef();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    reset
  } = useForm();

  const [ data, setData ] = useState( {} );

  const onInputChange = ( e ) =>
  {
    setData( { ...data, [ e.target.name ]: e.target.value } );
  };

  const onSubmit = data =>
  {
    if ( data.email === 'admin@gmail.com' && data.password === 'admin' )
    {
      navigate( '/home  ' );
    } else
    {
      alert( 'Incorrect credential' );
    }

    reset();
  };


  const [ password, setPassword ] = useState( true );



  // new

  const [ drop2, setDrop2 ] = useState( false );

  // eslint-disable-next-line no-redeclare
  function handleClick ()
  {
    setDrop2( { clicked: !drop2.clicked } );
  }

  const [ type, setType ] = useState( 'phone' );
  return (
    <>
      <section className='login-section container-fluid mw-1440'>
        <div className='login-content-div'>
          <div className='row'>
            <div className='col-lg-5 col-12 vh-100  login-scroll '>
              <div className='login-div'>
                <div className='card pt-2 px-3  border-0'>
                  <div className='card-body'>
                    <img src={techswap} alt="logo" width={200} className='mt-4' onClick={() => navigate( '/home' )} />
                    <h4 className='h4 fw-bold text-voilet mt-4'>Create Your Account</h4>

                    {/* underline */}
                    <div className='position-relative'>
                      <button className='register-line btn p-0 w-100 d-flex justify-content-start'>
                        <button className={type === 'phone' ? 'register-btn-active ts btn m-0' : 'register-btn  ts btn m-0'} onClick={() => setType( 'phone' )}>
                          phone number
                        </button>
                        <button className={type === 'email' ? 'register-btn-active ts btn m-0' : 'register-btn  ts btn m-0'} onClick={() => setType( 'email' )}>
                          Email
                        </button>
                      </button>


                    </div>

                    {/* form */}
                    {/* <div className='card login-inner-card mt-4'>
                      <div className="card-body d-flex flex-sm-row flex-column  ">
                        <div className='d-flex flex-sm-row flex-column'>
                          <div className='me-2'>
                            <i className='fs-5 fw-bold text-info'><FiInfo /></i>
                          </div>
                          <div className='ts me-2'><span className='uc'>Important!</span>  Please check that you are visiting https://accounts.paxful.com/</div>
                        </div>
                        <button className='btn btn-border ts d-flex align-items-center mw-sm-50 w-sm-50 w-100 overflow-hidden bg-white mt-sm-0 mt-3'><div className='text-success d-flex align-items-center'><HiLockClosed className='me-1' />https://</div>accouts.paxful.com</button>
                      </div>
                    </div> */}

                    <form ref={form} onSubmit={handleSubmit( onSubmit )}>
                      <div className='py-4'>
                        <div className={type === 'email' ? 'email d-block' : 'd-none'}>
                          <label htmlFor="email">Your Email Address</label>
                          <div className='form-input-div  mt-2'>
                            <input
                              type="text"
                              name='email'
                              id='email'
                              autofill={false}
                              className='form-control shadow-none py-3'
                              onChange={e => onInputChange( e )}
                              {...register( "email", {
                                required: "Email is required",
                              } )}
                              onKeyUp={() =>
                              {
                                trigger( "email" );
                              }}
                            />
                          </div>
                          {errors.email &&
                            ( <small className='text-danger error-text'>{errors.email.message} </small> )}
                        </div>

                        <div className={type === 'phone' ? 'phone d-block position-relative' : 'd-none'}>
                          <div >
                            <label htmlFor="phone">Phone Number</label>
                            <div className='form-input-div input-group mt-2 d-flex align-items-center'>
                              <button className='btn shadow-none register-flag-btn my-auto ms-2 px-1 border-1 border-info border d-flex align-items-center justify-content-center py-0 me-2' onClick={() => setDrop2( !drop2 )}>
                                <div className='register-flag-div me-2 mt-1'>
                                  <img src={indianFlag} alt="img" />
                                </div>
                                {drop2 ? <IoIosArrowUp /> : <IoIosArrowDown />}

                              </button>
                              <div>+91</div>
                              <input
                                type='text'
                                id='phone'
                                className='form-control shadow-none py-3 border-none'
                                name='phone'
                                onChange={e => onInputChange( e )}
                                {...register( "phone", {
                                  required: "phone number is required",
                                } )}
                                onKeyUp={() =>
                                {
                                  trigger( "phonenumber" );
                                }}
                              />

                            </div>
                            {errors.phone &&
                              ( <small className='text-danger error-text'>{errors.phone.message} </small> )}

                            {/* flag list */}
                            <div className={drop2 ? 'card card-div position-absolute w-100 mt-1 ' : 'd-none'}>
                              <div className='card-body p-1'>
                                <ul className='px-0'>
                                  <div className='position-sticky'>
                                    <button className='btn w-100 py-2 tm text-start d-flex align-items-center justify-content-between fs-6 fw-normal shadow-none mb-1 border border-1 border-info'>
                                      <div className='d-flex'>
                                        <i className='text-secondary fs-5'><BiSearch /></i>
                                        <input type='text' className='ms-2 border-0 w-100' />
                                      </div>
                                    </button>
                                  </div>

                                  <li className='list-remove home-list border-none'>


                                    <button className='btn-active btn w-100 py-3 tm text-start d-flex align-items-center justify-content-between fs-6 fw-normal mb-1'>
                                      <div>
                                        <img src={indianFlag} alt="img" width={23} className='me-2' /> <span>India</span>
                                      </div>
                                      <div>
                                        +91
                                      </div>
                                    </button>

                                    <button className='btn w-100 py-3 tm text-start d-flex align-items-center justify-content-between fs-6 fw-normal mb-1'>
                                      <div>
                                        <img src={indianFlag} alt="img" width={23} className='me-2' /> <span>India</span>
                                      </div>
                                      <div>
                                        +91
                                      </div>
                                    </button>

                                    <button className='btn w-100 py-3 tm text-start d-flex align-items-center justify-content-between fs-6 fw-normal mb-1'>
                                      <div>
                                        <img src={indianFlag} alt="img" width={23} className='me-2' /> <span>India</span>
                                      </div>
                                      <div>
                                        +91
                                      </div>
                                    </button>

                                    <button className='btn w-100 py-3 tm text-start d-flex align-items-center justify-content-between fs-6 fw-normal mb-1'>
                                      <div>
                                        <img src={indianFlag} alt="img" width={23} className='me-2' /> <span>India</span>
                                      </div>
                                      <div>
                                        +91
                                      </div>
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='mt-3'>
                          <label htmlFor="password">Your Password</label>
                          <div className='form-input-div input-group mt-2'>
                            <input
                              type={password ? 'password' : 'text'}
                              id='password'
                              className='form-control shadow-none py-3 border-none'
                              name='password'
                              onChange={e => onInputChange( e )}
                              {...register( "password", {
                                required: "password is required",
                              } )}
                              onKeyUp={() =>
                              {
                                trigger( "password" );
                              }}
                            />
                            <button className='btn border-none shadow-none py-0' onClick={( e ) =>
                            {
                              e.preventDefault();
                              setPassword( !password );
                            }}>{password ? <BiShow /> : <BiHide />}</button>
                          </div>
                          {errors.password &&
                            ( <small className='text-danger error-text'>{errors.password.message} </small> )}
                        </div>
                      </div>

                      <a className='a-remove text-primary ts' href='void:'>I have a refferal code</a>
                      <button className='btn btn-blue w-100 d-flex align-items-center justify-content-between py-2 px-3 my-3' ><div className='tm'>Create Account</div><div><i className='fs-4'><RiArrowRightSLine /></i></div></button>

                      <a className='a-remove text-primary ts' href='void:'>Create a corporate account instead ?</a>
                    </form>

                    <div className='login-line'></div>

                    <div className='ts'>
                      Already on Paxful? <span className='text-primary' onClick={() => navigate( '/' )}>Login</span>
                    </div>

                    <div className='ts my-4'>
                      By continuing you agree to Paxful's <span className='text-primary'> Terms of Service, Affiliate Program Terms of Service,<span className='text-secondary'>and</span>  Privacy Notice.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-7 d-none d-lg-flex align-items-center justify-content-center login-bg'>
              <div className='login-img-div '>
                <img src={registerImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;