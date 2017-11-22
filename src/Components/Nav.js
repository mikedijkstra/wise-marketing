import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="nav u-absolute u-left u-right u-top">
        <div className="container-fluid">
          <div className="u-padding-vertical-sm">
            <Link to="/"><div className="nav-logo sprite-logo-200x71"></div></Link>
            <ul className="nav-links">
              <li className="nav-link"><Link to="/about">About</Link></li>
              <li className="nav-link"><Link to="/pricing">Pricing</Link></li>
              <li className="nav-link"><Link to="/contact">Contact</Link></li>
            </ul>
            <a href="https://read.wiseapp.com/auth/slack" className="nav-cta btn js-section-nav-item">Sign in</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
