import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { MdCurrencyExchange } from "react-icons/md";

import icon from "../../assets/cryptocurrency.png";
import "./navbar.css";

const Navbar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className="aside">
        <div className="sidebarUp">
          <img src={icon} alt="icon" className="sidebarIcon" />
          <a href="" className="sidebarTitle">
            CryptoConnect
          </a>
        </div>
        <nav className={toggle ? "navbar show-menu" : "navbar"}>
          <ul className="navbarList">
            <li className="navbarItem">
              <NavLink className="itemLink" to="/" activeClassName="active">
                <AiOutlineHome />
                Home
              </NavLink>
            </li>
            <li className="navbarItem">
              <NavLink
                className="itemLink"
                to="/cryptocurrencies"
                activeClassName="active"
              >
                <BsCurrencyBitcoin />
                Cryptocurrencies
              </NavLink>
            </li>
            <li className="navbarItem">
              <NavLink
                className="itemLink"
                to="/exchanges"
                activeClassName="active"
              >
                <MdCurrencyExchange />
                Exchanges
              </NavLink>
            </li>
            <li className="navbarItem">
              <NavLink className="itemLink" to="/news" activeClassName="active">
                <BiNews />
                News
              </NavLink>
            </li>
          </ul>
        </nav>
        <div
          className="nav__toggle nav__toggle-open"
          onClick={() => showMenu(!toggle)}
        >
          <AiOutlineMenu />
        </div>
      </aside>
    </>
  );
};

export default Navbar;
