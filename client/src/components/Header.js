import React from "react";
import { Link } from "react-router-dom";

import('./Header.css');

const Header = () => (
  <nav className="Header-nav-wrapper Header-blue">
    <Link to={"/"} className="Header-brand-logo Header-blue-lighten">
      ChatBot
    </Link>
    <ul id="nav-mobile" className="Header-nav-list hide-on-med-and-down">
      <li>
        <Link className='Header-blue-lighten' to={"/shop"}>Shop</Link>
      </li>
      <li>
        <Link className='Header-blue-lighten' to={"/about"}>About</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
