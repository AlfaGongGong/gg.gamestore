import React from "react";
import { Link } from "react-router-dom";
import "./NavItem.scss";

const NavItem = ({ href, children }) => (
  <li className="nav-item">
    <Link className="nav-link" to={href}>
      {children}
    </Link>
  </li>
);

export default NavItem;
