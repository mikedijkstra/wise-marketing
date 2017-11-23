import React, { Component } from 'react';
import marked from 'marked';

class Markdown extends Component {
  render() {
    const markdown = marked(this.props.markdown, {sanitize: true});

    return (
      <div dangerouslySetInnerHTML={{ __html: markdown }} />
    )
  }
}

export default Markdown;
