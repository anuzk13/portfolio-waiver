import React, { Component } from 'react';
import TextModule from './TextModule';
import ImageModule from './ImageModule';
import EmbeddedModule from './EmbeddedModule';
 
class BehancedModule extends Component {

  /**
   * Get module
   *
   * @return {Component}
   */
  getModule( module ) {
    switch (module.type) {
      case 'image':
        return <ImageModule module={module} />;
      case 'text':
        return <TextModule module={module} />;
      case 'embed':
        return <EmbeddedModule module={module} />;
      default:
        return null;
    }
  }

  render() {
    const { module} = this.props;
    const moduleElement = module ? this.getModule(module) : null;
    return (
      <div className="module">
          {moduleElement}
      </div>
    );
  }
}

export default BehancedModule;
