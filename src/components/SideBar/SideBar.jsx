import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="templatemo-sidebar">
      <header className="templatemo-site-header">
        <div className="square"></div>
        <h1>Visual Admin</h1>
      </header>

      <form className="templatemo-search-form" role="search">
        <div className="input-group">
          <button type="submit" className="fa fa-search"></button>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            name="srch-term"
            id="srch-term"
          />
        </div>
      </form>
      <div className="mobile-menu-icon">
        <i className="fa fa-bars"></i>
      </div>
      <nav className="templatemo-left-nav">
        <ul>
          <li>
            <a href="index.html">
              <i className="fa fa-home fa-fw"></i>Dashboard
            </a>
          </li>
          <li>
            <NavLink to={"/admin/drinks"} style={{ textDecoration: "none" }}>
              <i className="fa fa-coffee fa-fw"></i>Manage Drink
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/toppings"} style={{ textDecoration: "none" }}>
              <i className="fa fa-list fa-fw"></i>Manage Topping
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/admin/categories"}
              style={{ textDecoration: "none" }}
            >
              <i className="fa fa-database fa-fw"></i>Manage Category
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/sizes"} style={{ textDecoration: "none" }}>
              <i className="fa fa-sliders fa-fw"></i>Manage Size
            </NavLink>
          </li>
          <li>
            <a href="manage-users.html">
              <i className="fa fa-users fa-fw"></i>Manage Users
            </a>
          </li>
          <li>
            <a href="login.html">
              <i className="fa fa-eject fa-fw"></i>Sign Out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
