import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import "./Navbar.css";
import logo from '../images/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faAward , faIdCard, faCircleInfo, faLightbulb} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <div className="Main-header">
      <div className="header">
        <div className="logo-1">
          <img src={logo} alt="Logo" />
        </div>

        <div className="connect">
          <ConnectWallet
            dropdownPosition={{
              side: "right",
              align: "center",
            }}
          />
        </div>
      </div>
      <nav className="navbar">

        <div className="Home">
          <a href="/home">
            <i><FontAwesomeIcon icon={faHouseChimney} style={{ color: "#E0FFFF" }} /></i> Home
          </a>
        </div>

        <div className="Get Document">
          <a href="/getdocument">
            <i><FontAwesomeIcon icon={faIdCard} style={{color: "#E0FFFF",}} /></i>Get Document
            </a>
        </div>

        <div className="Issued document">
          <a href="/issueddocument">
            <i><FontAwesomeIcon icon={faAward} style={{color: "#E0FFFF",}} /></i>Issued Document
          </a>
        </div>

        <div className="About">
          <a href="/About">
            <i><FontAwesomeIcon icon={faCircleInfo} style={{color: "#E0FFFF",}} /></i>About</a>
        </div>

        <div className="Help">
          <a href="/help">
            <i><FontAwesomeIcon icon={faLightbulb} style={{color: "#E0FFFF",}} /></i>Help</a>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
