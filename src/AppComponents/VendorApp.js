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
      <VendorHome />
      <VendorMobile />
      <VendorTrust />
      <Footer />
    </>
  );
}

export default VendorApp;