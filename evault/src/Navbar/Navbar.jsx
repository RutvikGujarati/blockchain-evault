import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import "./Navbar.css";
// import { useLogin } from "@thirdweb-dev/react";

const Navbar = () => {
  // const { isLoading, login } = useLogin();
  return (
    <div>
      <nav className="navbar">
        <div className="Home">
          <a href="/home">Home</a>
        </div>
        <div className="About">
          <a href="/About">About</a>
        </div>
        <div className="connect">
          <ConnectWallet
            dropdownPosition={{
              side: "right",
              align: "center",
            }}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
