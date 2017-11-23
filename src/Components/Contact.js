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
              <h1>Contact</h1>
              <p>If you have a question, feedback or would just like to say hello, please use the form below:</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default Contact;
