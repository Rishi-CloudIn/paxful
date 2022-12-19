import React from 'react';
import VendorHome from '../Components/Vendor/VendorHome/VendorHome';
import WalletNavbar from '../Components/Wallet/WalletNavbar/WalletNavbar';


function VendorApp ()
{
  return (
    <>
      <WalletNavbar />
      <VendorHome />
    </>
  );
}

export default VendorApp;