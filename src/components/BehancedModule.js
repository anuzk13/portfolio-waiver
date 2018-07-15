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
  getModule( module, index ) {
    switch (module.type) {
      case 'image':
        return <ImageModule module={module} index={index} />;
      case 'text':
        return <TextModule module={module} index={index} />;
      case 'embed':
        return <EmbeddedModule module={module} index={index} />;
      default:
        return null;
    }
  }

  render() {
    const { module, index} = this.props;
    const moduleElement = module ? this.getModule(module, index) : null;
    return (
      <div className="module">
          {moduleElement}
      </div>
    );
  }
}

export default BehancedModule;
