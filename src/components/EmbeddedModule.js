import React, { Component } from 'react';

class EmbeddedModule extends Component {
  render() {
    const { module, index } = this.props;
    return (
      <div>
        <span tabIndex={index} className='embedded'>Embedded content</span>
        <div dangerouslySetInnerHTML={{__html: module.embed}}/>
      </div>
    );
  }
}

export default EmbeddedModule;
