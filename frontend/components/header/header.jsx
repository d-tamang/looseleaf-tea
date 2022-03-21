import React from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let accountLink;
    if (this.props.currentUser) {
      accountLink = <NavLink activeClassName="current" className="button" exact to="/account">Account</NavLink>;
    } else {
      accountLink = <NavLink activeClassName="current" className="button" exact to="/account/register">Account</NavLink>
    }
    return (
      <header>
        <NavLink activeClassName="current" className="button" exact to="/teas/black">Black</NavLink>
        <NavLink activeClassName="current" className="button" exact to="/teas/green">Green</NavLink>
        <NavLink activeClassName="current" className="button" exact to="/teas/herbal">Herbal</NavLink>
        <Link to="/">Logo</Link>
        <NavLink activeClassName="current" className="button" exact to="/menu">Menu</NavLink>
        {accountLink}
      </header>
    )
  }
}

export default Header;