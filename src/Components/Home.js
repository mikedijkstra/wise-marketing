import React, { Component } from 'react';

import Page from './Page';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = { show: false }
  }

  componentDidMount() {
    this.setState({
      show: true
    })
  }

  render() {
    return (
      <Page
        id="home"
        title="Wise is a shared reading list for teams."
        description="Wise helps you create shared reading lists for your team, so links are no longer lost in Slack, emails and text messages."
        {...this.props}
      >
        <div className="header header-home u-relative">
          <div className="header-content">
            <div className="insight"><span>Create a culture of continuous learning</span></div>
            <div className="insight"><span>Build a searchable knowledge base</span></div>
            <div className="insight"><span>Set reading goals to work towards</span></div>
            <div className="insight"><span>Contribute, track and rate links</span></div>
            <div className="insight"><span>Extend formal learning courses</span></div>
            <div className="insight"><span>Share articles, videos and audio</span></div>

            <div className="headlines u-padding-left-sm u-sm-padding-left-xl">
              <div className="headline">
                <h1 className="t-face-title u-tmd u-xs-tlg u-sm-txl u-lg-txxl u-line-sm">
                  <span className="headline-title">Wise was a shared reading</span>
                  <span className="headline-sub">list for your team.</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="page page--narrow">
          <div className="page-content t-set">
            <div className="page-inner">
              <h3>Wise is closing down</h3>
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
    );
  }
}

export default Home;
