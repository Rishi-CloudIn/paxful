import React from 'react';
import VendorHome from '../Components/Vendor/VendorHome/VendorHome';
import VendorMobile from '../Components/Vendor/VendorMobile/VendorMobile';
import VendorTrust from '../Components/Vendor/VendorTrust/VendorTrust';
import WalletNavbar from '../Components/Wallet/WalletNavbar/WalletNavbar';
import Footer from '../Footer/Footer';


function VendorApp ()
{
  return (
    <>
      <WalletNavbar />
      <div className='mw-1440'> 
        <VendorHome />
        <VendorMobile />
        <VendorTrust />
        <Footer />
      </div>
    </>
  );
}

export default VendorApp;