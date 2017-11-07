import React, { Component } from 'react';

class ImageModule extends Component {
  render() {
    const { module } = this.props;
    return (
        <div className="image">
            <img src={module.src} alt={module.id}></img>
        </div>
    );
  }
}

export default ImageModule;
