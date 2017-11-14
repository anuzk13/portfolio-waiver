import React, { Component } from 'react';

class ImageModule extends Component {
  render() {
    const { module } = this.props;
    const image = module.sizes["1400"] || module.sizes["max_1240"] || module.sizes["original"];
    return (
        <div className="image">
            <img src={image} alt={image}></img>
        </div>
    );
  }
}

export default ImageModule;
