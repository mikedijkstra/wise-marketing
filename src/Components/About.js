import React, { Component } from 'react'
import Page from './Page'

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
              <p>
                Four years ago we set out to build a shared reading experience
                to make it simple and enjoyable for teams to consolidate their
                reading lists as a team and discover new, relevant content.
                Along the way we built Wise and have been lucky to have
                accumulated a loyal use base who, through feedback, have shared
                our mission through the good and the bad.
              </p>
              <p>
                Alas, it is with regret that we have to end our journey.
                Unfortunately we have not been able to build Wise into a
                sustainable enterprise and as a result will be closing down the
                platform.
              </p>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default About
