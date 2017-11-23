import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super()

    this.trackSignin = this.trackSignin.bind(this);
  }

  trackSignin(event) {
    event.preventDefault()
    const url = event.target.getAttribute('href')

    window.gtag('event', 'conversion', {
      'send_to': 'AW-866051402/O13pCPqu0HkQysr7nAM',
      'event_callback': function() {
        window.location = url
      }
    });
  }

  render() {
    return (
      <div>
        <h3>Start your shared reading list</h3>

        <p>By signing up with Slack you'll allow Wise to connect to your Slack account and create a #wise channel which will be your first reading list.</p>
        <p>You can add links directly from Slack and every new article added will be shared in your linked Slack channel.</p>

        <p><a href="https://read.wiseapp.com/auth/slack" className="btn" onClick={this.trackSignin} >Sign up with Slack</a></p>

        <p><small>Don't use Slack? We'll be opening up Wise to all users soon.</small></p>
      </div>
    )
  }
}

export default Signup;
