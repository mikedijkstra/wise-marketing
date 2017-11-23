import React, { Component } from 'react';
import Page from './Page';
import Signup from './Signup';

class Pricing extends Component {
  render() {
    return (
      <Page
        id="pricing"
        title="Wise Pricing: Get started for free"
        description="Get started with Wise today for free! We have plans to launch paid features in the future, but the basic version of Wise will always be free."
        {...this.props}
      >
        <div className="page page--narrow page--top">
          <div className="page-content t-set">
            <div className="page-inner">
              <h1>Pricing</h1>
              <p>Get started with Wise today for free! We have plans to launch paid features in the future, but the basic version of Wise will always be free.</p>
              <p>If you're worried about signing up to a new free service, we make it easy for you to export all your links.</p>
              <hr className="divider" />
              <Signup />
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default Pricing;
