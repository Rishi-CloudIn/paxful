import React from 'react';
import WalletHome from '../Components/Wallet/WalletHome.js/WalletHome';
import WalletNavbar from '../Components/Wallet/WalletNavbar/WalletNavbar';


function WalletApp ()
{
  return (
    <>
      <div>
        <WalletNavbar />
        <WalletHome />
      </div>
    </>
  );
}

export default WalletApp;