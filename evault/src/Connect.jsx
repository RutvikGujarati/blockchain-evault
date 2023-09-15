import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";

function Connect({ onConnect }) {
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Call the onConnect callback when the wallet is successfully connected
        onConnect();
      } else {
        alert("Please install Metamask or another Ethereum wallet to connect.");
      }
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  return (
    <>
    <button onClick={connectWallet}>Connect Wallet</button>
    </>
  );
}

export default Connect;
