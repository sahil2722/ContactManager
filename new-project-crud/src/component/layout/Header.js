import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

const Header = props => {
  const { branding } = props;
  return (
    <nav className="nav navbar navbar-expand-sm bg-danger mb-3 py-0">
      <div className="container">
        <Link  style={changeColor} to="/" className="navbar-brand">
          {branding}
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" style={changeColor} className="nav-Link">
              <i className="fa fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" style={changeColor} className="nav-Link">
              <i className="fa fa-home" /> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" style={changeColor} className="nav-Link">
              <i className="fa fa-home" /> about
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "Contact Form"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

const changeColor = {
    color:'white'
}


export default Header;
