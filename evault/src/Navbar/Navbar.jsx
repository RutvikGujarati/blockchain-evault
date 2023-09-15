import React from "react";
import { Link } from "react-router-dom";
import { ConnectWallet } from "@thirdweb-dev/react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="Home">
          <Link to="/home">Home</Link>
        </div>
        <div className="About">
          <Link to="/about">About</Link>
        </div>
        <div className="Vault">
          <Link to="/vault">Vault</Link>
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
