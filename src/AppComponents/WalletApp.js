import React from 'react';
import WalletHome from '../Components/Wallet/WalletHome.js/WalletHome';
import WalletNavbar from '../Components/Wallet/WalletNavbar/WalletNavbar';
import Footer from '../Footer/Footer';


function WalletApp ()
{
  return (
    <>
      <div>
        <WalletNavbar />
        <WalletHome />
        <Footer />
      </div>
    </>
  );
}

export default WalletApp;