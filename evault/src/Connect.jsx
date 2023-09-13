import React from 'react';
import { ConnectWallet } from '@thirdweb-dev/react';

const ConnectButton = ({ onConnect }) => {
  return (
    <div className='connect'>
    <ConnectWallet
      dropdownPosition={{
        side: 'right',
        align: 'center',
      }}
    />
  </div>
  );
};

export default ConnectButton;
