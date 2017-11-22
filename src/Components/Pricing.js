import React, { Component } from 'react';
import EasyTransition from 'react-easy-transition';

class About extends Component {
  render() {
    return (
      <EasyTransition
        path={this.props.location.pathname}
        initialStyle={{opacity: 0}}
        transition="opacity 0.3s ease-in"
        finalStyle={{opacity: 1}}
      >
        <div className="wrapper about">
          <div className="page page--narrow page--top">
            <div className="page-content t-set">
              <div className="page-inner">
                <h3>Pricing</h3>
                <p>Get started with Wise today for free! We have plans to launch paid features in the future, but the basic version of Wise will always be free.</p>
                <p>If you're worried about signing up to a new free service, we make it easy for you to export all your links</p>
                <h3>Start your shared reading list</h3>
                <p>By signing up with Slack you'll allow Wise to connect to your Slack account and create a #wise channel which will be your first reading list.</p>
                <p>You can add links directly from Slack and every new article added will be shared in your linked Slack channel.</p>

                <p><a href="https://read.wiseapp.com/auth/slack" className="btn">Sign up with Slack</a></p>

                <p><small>Don't use Slack? We'll be opening up Wise to all users soon.</small></p>
              </div>
            </div>
          </div>
        </div>
      </EasyTransition>
    )
  }
}

export default About;
