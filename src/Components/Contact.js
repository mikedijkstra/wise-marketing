import React, { Component } from 'react';
import EasyTransition from 'react-easy-transition';

import ContactForm from './ContactForm';

class Contact extends Component {
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
                <h3>Contact</h3>
                <p>If you have a question, feedback or would just like to say hello, please use the form below:</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </EasyTransition>
    )
  }
}

export default Contact;
