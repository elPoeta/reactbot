import React from "react";
import { Link } from "react-router-dom";
const Header = () => (
  <nav className="nav-wrapper blue lighten-1">
    <Link to={"/"} className="brand-logo">
      ChatBot
    </Link>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <Link to={"/shop"}>Shop</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
    </ul>
  </nav>
);

export default Header;