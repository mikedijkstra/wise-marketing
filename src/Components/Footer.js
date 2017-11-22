import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer js-footer">
        <div className="footer-container">
          <div className="row">
            <div className="col-sm-9">
              <div className="u-text-center u-sm-text-left">
                <Link to="/about" className="footer-link">About</Link>
                <Link to="/pricing" className="footer-link">Pricing</Link>
                <Link to="/contact" className="footer-link">Contact</Link>
                <a href="" className="footer-link" target="_blank">Help</a>
                <a href="" className="footer-link" target="_blank">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
