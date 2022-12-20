import React from 'react';
import OfferPage from '../Components/Offers/OfferPage';
import WalletNavbar from '../Components/Wallet/WalletNavbar/WalletNavbar';
import Footer from '../Footer/Footer';


function OfferApp ()
{
  return (
    <>
      <WalletNavbar />
      <OfferPage />
      <Footer />
    </>
  );
}

export default OfferApp;