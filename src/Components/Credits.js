import React, { Component } from 'react';
import Page from './Page';

class Credits extends Component {
  render() {
    return (
      <Page
        id="about"
        title="Credits for assets used in Wise"
        description="The following is a list of credits for assets used in Wise, a shared reading list."
        {...this.props}
      >
        <div className="page page--narrow page--top">
          <div className="page-content t-set">
            <div className="page-inner">
              <h1>Credits</h1>
              <p>The following assets have been used on the Wise website and in the Wise application.</p>

              <p>
                Avatars by Oksana Latysheva from the Noun Project<br />
                Question mark, onboarding icon by unlimicon from the Noun Project<br />
                Slack icon by Danil Polshin from the Noun Project<br />
                Browser icon by Adrien Coquet from the Noun Project<br />
                App icon by Three Six Five from the Noun Project<br />
                Onboarding icon by Lil Squid from the Noun Project<br />
                Check mark by Alena Artemova from the Noun Project<br />
                Light bulb by Kidiladon from the Noun Project<br />
                Courses icon by Lakshisha from the Noun Project<br />
                Study icon by Rob Crosswell from the Noun Project<br />
              </p>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default Credits;
