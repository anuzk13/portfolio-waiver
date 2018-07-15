import React, { Component } from 'react';

class TextModule extends Component {
  render() {
    const { module, index } = this.props;
    const text = module.text.split('<br>').map( (text, index) => 
      <p key={`txt-${index}`}>{text.replace(/(<([^>]+)>)/ig,"")}</p>);
    return (
        <div className="text">
          <span tabIndex={index} >{text}</span>
        </div>
    );
  }
}

export default TextModule;
