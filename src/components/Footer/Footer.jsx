import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>CryptoConnect</p>
      <p>Made by Tanmay Vedpathak</p>
      <ul className="footerList">
        <li className="footerItem">
          <Link className="footerLink" to="/">
            Home
          </Link>
        </li>
        <li className="footerItem">
          <Link className="footerLink" to="/cryptocurrencies">
            Cryptocurrencies
          </Link>
        </li>
        <li className="footerItem">
          <Link className="footerLink" to="/exchanges">
            Exchanges
          </Link>
        </li>
        <li className="footerItem">
          <Link className="footerLink" to="/news">
            News
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
