import React, { Component } from 'react';
import Page from './Page';

import ContactForm from './ContactForm';

class Contact extends Component {
  render() {
    return (
      <Page
        id="contact"
        title="Contact Wise"
        description="If you have a question, feedback or would just like to say hello, please use the form on this page."
        {...this.props}
      >
        <div className="page page--narrow page--top">
          <div className="page-content t-set">
            <div className="page-inner">
              <h1>Get notified</h1>
              <p>Sign up to be notified when we open Wise up to all users.</p>
              <ContactForm notify={true} />
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default Contact;
