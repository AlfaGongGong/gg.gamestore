import React from "react";

const NavItem = ({ href, children }) => (
  <li className="nav-item">
    <a className="nav-link" href={href}>
      {children}
    </a>
  </li>
);

export default NavItem;
