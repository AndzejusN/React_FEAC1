import "./TransparentFixed.scss";

import { useState } from "react";

import LogoBig from "../../../assets/images/logo/logo_horizontal.png";
import LogoSmall from "../../../assets/images/logo/logo_square.png";

import { Link } from "react-router-dom";

import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";

const TransparentFixed = () => {
  const [isActive, setIsActive] = useState(false);

  const hamburgerHandler = () => {
    isActive === false ? setIsActive(true) : setIsActive(false);
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="main-header-content-wrapper">
          <div className="logo-wrapper">
            <Link to={"/"}>
              <img src={LogoBig} index="big-logo" alt="Logo UAB Melniko Auto" />
              <img
                src={LogoSmall}
                index="small-logo"
                alt="Logo UAB Melniko Auto"
              />
            </Link>
            <div
              className={isActive ? "hamburger active" : "hamburger"}
              onClick={hamburgerHandler}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
          <nav className="main-navigation">
            <ul className={isActive ? "main-menu active" : "main-menu"}>
              <li className="menu-item">
                <Link className="nav-link" onClick={hamburgerHandler} to={"/"}>
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  className="nav-link"
                  onClick={hamburgerHandler}
                  to={"/services"}
                >
                  Services
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  className="nav-link"
                  onClick={hamburgerHandler}
                  to={"/about"}
                >
                  About Us
                </Link>
              </li>
            </ul>
            <div className="log-wrapper">
                <PrimaryButton>Login / Sign Up</PrimaryButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default TransparentFixed;
