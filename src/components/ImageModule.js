import React, { Component } from 'react';

class ImageModule extends Component {
  render() {
    const { module } = this.props;
    return (
        <div className="image">
            <img src={module.sizes["1400"]} alt={module.sizes["1400"]}></img>
        </div>
    );
  }
}

export default ImageModule;
