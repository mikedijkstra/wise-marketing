import React, { Component } from 'react';
import Page from './Page';
import Signup from './Signup';

class About extends Component {
  render() {
    return (
      <Page
        id="about"
        title="About Wise"
        description="Wise is a shared reading list product by Front Row Ventures, founded by Tim Howard and Michael Dijkstra."
        {...this.props}
      >
        <div className="page page--narrow page--top">
          <div className="page-content t-set">
            <div className="page-inner">
              <h1>About</h1>
              <p>Wise is a product by Front Row Ventures, founded by Tim Howard and Michael Dijkstra. Both as individuals and as a team we have been involved in the formation, development and guidance of dozens of early stage technology businesses.</p>
                <p>Recently, Wise has become our primary focus and the product that we are most passionate about seeing succeed and continue to get the most enjoyment out of building and taking to market.</p>
              <p>Wise has been through a number of iterations, from a twitter-only implementation originally to test the concept, through life under its working title of Professional learning in your pocket ("Pliyp") and now under full Beta as ‘Wise’.</p>
              <p>We developed Wise in response to our own needs and with a belief that the current model for continuous learning was broken. We never really engaged with traditional curriculum-based approaches and instead turned to our own knowledge discovery to satisfy our learning needs, Wise is a formalisation of these informal learning habits.</p>
              <hr className="divider" />
              <Signup />
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default About;
