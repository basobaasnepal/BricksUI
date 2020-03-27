import React from "react";
import "../sass/layouts/sidebar.scss";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar-listing-wrapper">
      <NavLink to="/" activeClassName="active" exact>
        <span>Home</span>
      </NavLink>
      <NavLink to="/button" activeClassName="active" exact>
        <span>Buttons</span>
      </NavLink>
      <NavLink to="/tooltip" activeClassName="active" exact>
        <span>Tooltip</span>
      </NavLink>
      <NavLink to="/typography" activeClassName="active" exact>
        <span>Typography</span>
      </NavLink>
      <NavLink to="/dropdown" activeClassName="active" exact>
        <span>Dropdown</span>
      </NavLink>
      <NavLink to="/table" activeClassName="active" exact>
        <span>Table</span>
      </NavLink>
    </div>
  );
};
export default Sidebar;
