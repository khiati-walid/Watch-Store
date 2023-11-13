import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pintester_icon.png";
import whatsup_icon from "../Assets/whatsapp_icon.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Watch Store</p>
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <a href="https://github.com/khiati-walid" target="blank">
            <img src={instagram_icon} alt="" />
          </a>
        </div>
        <div className="footer-icon-container">
          <a href="https://github.com/khiati-walid" target="blank">
            <img src={pinterest_icon} alt="" />
          </a>
        </div>
        <div className="footer-icon-container">
          <a href="https://github.com/khiati-walid" target="blank">
            <img src={whatsup_icon} alt="" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  );
};
