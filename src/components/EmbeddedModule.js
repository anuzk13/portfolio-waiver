import React, { Component } from 'react';

class EmbeddedModule extends Component {
  render() {
    const { module } = this.props;
    return (
      <div dangerouslySetInnerHTML={{__html: module.embed}}/>
    );
  }
}

export default EmbeddedModule;
