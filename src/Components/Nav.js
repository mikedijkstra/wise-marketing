import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="nav u-absolute u-left u-right u-top">
        <div className="container-fluid">
          <div className="u-padding-vertical-sm">
            <a href="/"><div className="nav-logo sprite-logo-200x71"></div></a>

            <a href="https://read.wiseapp.com/auth/slack" className="nav-cta btn js-section-nav-item">Sign in</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
