import React, { Component } from 'react';
import EasyTransition from 'react-easy-transition';
import { Helmet } from 'react-helmet'
import classNames from 'classnames';

class Page extends Component {
  render() {
    const wrapperClass = classNames('wrapper', {
      [this.props.id]: true
    })

    return(
      <EasyTransition
        path={this.props.location.pathname}
        initialStyle={{opacity: 0}}
        transition="opacity 0.3s ease-in"
        finalStyle={{opacity: 1}}
      >
        <Helmet title={this.props.title} />
        <div className={wrapperClass}>
          {this.props.children}
        </div>
      </EasyTransition>
    )
  }
}

export default Page;
