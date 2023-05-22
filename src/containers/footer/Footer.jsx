import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="player__footer section__padding">
      <div className="player__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <button type="button">Request Early Access</button>
      </div>
      <div className="player__footer-links">
        <div className="player__footer-links-logo">
          <img src={logo} alt="" />
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
