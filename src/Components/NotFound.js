import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Page from './Page';

class NotFound extends Component {
  render() {
    return (
      <Page
        id="pricing"
        title="Page Not Found on Wise"
        description="The page you are looking for could not be found."
        {...this.props}
      >
        <div className="page page--narrow page--top">
          <div className="page-content t-set">
            <div className="page-inner">
              <h1>Page Not Found</h1>
              <p>The page you are looking for could not be found.</p>
              <Link to="/" className="btn">Return home</Link>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default NotFound;
