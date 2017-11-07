import React, { Component } from 'react';
import striptags from 'striptags';

class TextModule extends Component {
  render() {
    const { module } = this.props;
    const text = module.text.split('<br>').map( (text, index) => <p key={`txt-${index}`}>{striptags(text)}</p>);
    return (
        <div className="text">
            {text}
        </div>
    );
  }
}

export default TextModule;
