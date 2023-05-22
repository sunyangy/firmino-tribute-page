import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="player__footer section__padding">
      <div className="player__footer-heading">
        <h1 className="gradient__text">
          你想要成为利物浦球迷的一员吗
        </h1>
        <button type="button">赶 快 点 击 加 入</button>
      </div>
      <div className="player__footer-links">
        <div className="player__footer-links-logo">
          {/* <img src={logo} alt="" /> */}
          <h2 style={{margin: '0rem 0 1rem'}}>liverpool</h2>
          <p>
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        <div className="player__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="player__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="player__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="player__footer-copyright">
        <p>@2016 FIRMINO. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
