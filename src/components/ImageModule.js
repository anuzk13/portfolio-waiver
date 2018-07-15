import React, { Component } from 'react';

class ImageModule extends Component {
  render() {
    const { module, index } = this.props;
    const image = module.sizes["1400"] || module.sizes["max_1240"] || module.sizes["original"];
    const alt_text = module.caption_plain
    return (
        <div className="image" alt={alt_text}>
            <img tabIndex={index} src={image} alt={alt_text}></img>
        </div>
    );
  }
}

export default ImageModule;
