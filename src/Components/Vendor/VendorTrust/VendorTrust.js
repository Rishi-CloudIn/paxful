import React from 'react';
import './VendorTrust.css';
import mainebitcoin from '../../../Images/Landing/Testmonial/mainebitcoin.jpg';
import kareninsf from '../../../Images/Landing/Testmonial/kareninsf.jpg';
import { MdArrowForwardIos } from 'react-icons/md';
import earnMore from '../../../Images/Vendor/earn-more.png';

function VendorTrust ()
{
  return (
    <>
      <section className='vendor-trust-section container-fluid'>
        <div className='vendor-trust-div px-sm-4 px-2'>

          {/* trust */}
          <div className='py-md-5 py-0'>
            <div className='row'>
              <div className='col-md-4 col-12'>
                <div className='mt-md-5 mt-0'>
                  <h1 className='vendor-trust-title'>Trusted by over ₹12,000 registered Bitcoin vendors</h1>
                </div>
              </div>
              <div className='col-md-8 col-12'>
                <div className='px-md-5 px-3 col-lg-6 col-12 w-100'>
                  <div className='card testi-card position-relative w-100 p-2 my-5 '>
                    <div className='card-body'>
                      <div className='testi-card-img position-absolute top-0 translate-middle'>
                        <img src={mainebitcoin} alt="img" width={50} />
                      </div>
                      <div className='pt-4 pb-2 px-lg-2 px-0'>
                        <h5 className='tl text-voilet fw-bold'>MaineBitcoin</h5>
                        <p className='ts text-secodary'>Techswap vendor - USA</p>
                        <p className='ts mb-0 lh-lg mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque deleniti, eius sapiente rem veniam quia veritatis inventore sequi eveniet consequuntur aperiam reprehenderit itaque, consectetur magnam fugiat quibusdam cupiditate quam dicta?

                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='px-md-5 px-3 col-lg-6 col-12 w-100 '>
                  <div className='card testi-card position-relative w-100  p-2 my-3 '>
                    <div className='card-body'>
                      <div className='testi-card-img position-absolute top-0 translate-middle'>
                        <img src={kareninsf} alt="img" width={50} />
                      </div>
                      <div className='pt-4 pb-2 px-lg-2 px-0'>
                        <h5 className='tl text-voilet fw-bold'>Kareninsf</h5>
                        <p className='ts text-secodary'>Techswap vendor - Maine, USA</p>
                        <p className='ts mb-0 lh-lg mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque deleniti, eius sapiente rem veniam quia veritatis inventore sequi eveniet consequuntur aperiam reprehenderit itaque, consectetur magnam fugiat quibusdam cupiditate quam dicta?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='earn-more py-5'>
              <div className='row'>
                <div className='col-md-6 col-12'>
                  <h5 className='text-voilet fw-bold fs-4'>Earn more with the Techswap Affiliate Program</h5>
                  <p className='tm mt-4'>Techswap's Affiliate Program was created to help you increase your profits by inviting your friends, family, and extended network to our platform.</p>

                  <p className='tm'>Instant Profits on Every Trade:</p>

                  <ul className='mt-3'>
                    <li className='tm vendor-li'><span className='fw-bold'>50%</span> of your Tier 1 affiliates fees</li>
                    <li className='tm mt-3 vendor-li'><span className='fw-bold'>10%</span> of your Tier 2 affiliates fees paid by their affiliates</li>
                  </ul>

                  <button className='btn btn-blue tm mt-2'>View More <i className='fs-5'><MdArrowForwardIos /></i></button>
                </div>
                <div className='col-md-6 col-12 mt-md-0 mt-4 '>
                  <div className='earn-more-img mx-md-0 mx-auto'>
                    <img src={earnMore} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <p className='ts text-secondary py-4'>
            * You understand and agree that Techswap does not provide legal, tax, or investment advice, and to the extent you deem necessary, you will consult with qualified professionals in your own jurisdiction before using Techswap's peer-to-peer platform and becoming a vendor. Please remember that past performance is not indicative of future performance. Techswap does not make any guarantee or other promises as to any financial performance or results that may be obtained from becoming a Techswap vendor and you understand and agree that all decisions to use the Techswap peer-to-peer platform are solely and entirely yours. You understand and agree that we accept no responsibility whatsoever for, and shall in no circumstances be liable to you in connection with, your decisions. You understand and agree that under no circumstances shall the use of Techswap's peer-to-peer platform and becoming a vendor be deemed to create a relationship that includes the provision or tendering of investment advice.
          </p>

        </div>
      </section>
    </>
  );
}

export default VendorTrust;