import React, { Component } from 'react';
import Markdown from './Markdown';
import terms from './Markdown/Terms';

import Page from './Page';

class Terms extends Component {
  render() {

    return (
      <Page
        id="terms"
        title="Wise Terms of Use"
        description=""
        {...this.props}
      >
        <div className="page page--narrow page--top">
          <div className="page-content t-set">
            <div className="page-inner">
              <Markdown markdown={terms} />
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default Terms;
