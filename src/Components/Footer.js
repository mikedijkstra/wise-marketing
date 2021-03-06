import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <div className="footer js-footer">
        <div className="footer-container">
          <div className="row">
            <div className="col-sm-9" />

            <div className="col-sm-3">
              <Link to="/terms" className="footer-link  footer-link-right">
                Terms
              </Link>
              <Link to="/credits" className="footer-link  footer-link-right">
                Credits
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
