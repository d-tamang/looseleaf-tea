import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <NavLink activeClassName="current" className="button" exact to="/teas/black">Black</NavLink>
    <NavLink activeClassName="current" className="button" exact to="/teas/green">Green</NavLink>
    <NavLink activeClassName="current" className="button" exact to="/teas/herbal">Herbal</NavLink>
    <Link to="/">Logo</Link>
    <NavLink activeClassName="current" className="button" exact to="/menu">Menu</NavLink>
    {/* <NavLink activeClassName="current" className="button" exact to="/account">Account</NavLink> */}
  </header>
);

export default Header;