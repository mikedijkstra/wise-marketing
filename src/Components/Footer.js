import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer js-footer">
        <div className="footer-container">
          <div className="row">
            <div className="col-sm-9">
              <div className="u-text-center u-sm-text-left">
                <a href="" className="footer-link">About</a>
                <a href="" className="footer-link">Contact</a>
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
