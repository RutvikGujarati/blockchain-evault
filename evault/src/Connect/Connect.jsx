import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import './Connect.css';
import logo from "./logologo.png";
import image1 from "./poster1.jpg";
import image2 from "./poster2.jpg";
import image3 from "./logologo.png";
import image4 from "./logologo.png";



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
    <body className="body">
      <div className="header">
        <div className="homelogo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="homebutton">
          <button onClick={connectWallet}>Connect Wallet</button>
        </div>
      </div>
      <div className="poster">
          <div className="image">
          <img src={image1} alt="Logo" />
          <img src={image2} alt="Logo" />
          <img src={image2} alt="Logo" />
          </div>

      </div>
    </body>
    
    
    </>
  );
}

export default Connect;