import React, { useState, useRef } from 'react';
import techswap from '../../../Images/TechSwap-png.png';
import loginImg from '../../../Images/Form/Login/login-image.webp';
import { FiInfo } from 'react-icons/fi';
import { HiLockClosed } from 'react-icons/hi';
import './Login.css';
import { RiArrowRightSLine } from 'react-icons/ri';
import { BiShow, BiHide } from 'react-icons/bi';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function Login ()
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
      navigate( '/home' );
    } else
    {
      alert( 'Incorrect credential' );
    }

    reset();
  };


  const [ password, setPassword ] = useState( true );
  return (
    <>
      <section className='login-section container-fluid mw-1440'>
        <div className='login-content-div'>
          <div className='row'>
            <div className='col-lg-5 col-12 vh-100 login-scroll '>
              <div className='login-div'>
                <div className='card pt-2 px-3 border-0'>
                  <div className='card-body'>
                    <img src={techswap} alt="logo" width={200} className='mt-4' onClick={() => navigate( '/home' )} />
                    <h4 className='h4 fw-bold text-voilet mt-4'>Log In With Techswap</h4>

                    <div className='card login-inner-card mt-4'>
                      <div className="card-body d-flex flex-sm-row flex-column  ">
                        <div className='d-flex flex-sm-row flex-column'>
                          <div className='me-2'>
                            <i className='fs-5 fw-bold text-info'><FiInfo /></i>
                          </div>
                          <div className='ts me-2'><span className='uc'>Important!</span>  Please check that you are visiting https://accounts.paxful.com/</div>
                        </div>
                        <button className='btn btn-border ts d-flex align-items-center mw-sm-50 w-sm-50 w-100 overflow-hidden bg-white mt-sm-0 mt-3'><div className='text-success d-flex align-items-center'><HiLockClosed className='me-1' />https://</div>accouts.paxful.com</button>
                      </div>
                    </div>

                    <form ref={form} onSubmit={handleSubmit( onSubmit )}>
                      <div className='py-4'>
                        <div>
                          <label htmlFor="email">Your Phone or Email</label>
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
                      <button className='btn btn-blue w-100 d-flex align-items-center justify-content-between py-2 px-3' ><div className='tm'>Login</div><div><i className='fs-4'><RiArrowRightSLine /></i></div></button>
                    </form>

                    <div className='login-line'></div>

                    <div className='ts'>
                      New On Techswap? <span className='text-primary' onClick={() => navigate( '/register' )}>Create an Account</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-7 vh-100 d-none d-lg-flex align-items-center justify-content-center login-bg'>
              <div className='login-img-div '>
                <img src={loginImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;