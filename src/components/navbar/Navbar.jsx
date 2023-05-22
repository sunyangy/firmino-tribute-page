import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#whatishe">Who is He</a>
      </p>
      <p>
        <a href="#abouthe">about he</a>
      </p>
      <p>
        <a href="#blogs">blog</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="player__navbar">
      <div className="player__navbar-links">
        <div className="player__navbar-links-logo">
          {/* <img src={logo} alt="" /> */}
          <h2>Firmino</h2>
        </div>
        <div className="nav-menu">
          <Menu />
        </div>
      </div>
      <div className="sign-in">
        <p>Sign in </p>
        <button className="sign-up">Sign up</button>
      </div>
      <div className="sign-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="sign-menu-container scale-up-center ">
            <div className="sign-menu-container-links">
              <Menu />
              <div className="sing-menu-container-links-sign">
                <p>Sign in</p>
                <button className="sign-up sign-up-btn">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
