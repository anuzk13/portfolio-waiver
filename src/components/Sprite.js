import React, { Component } from 'react';

class Sprite extends Component {
  
  render() {
    const {sprite, spriteClass} = this.props;

    return (
      <div className={spriteClass}>
        <img src={sprite} alt=""></img>
      </div>
    );
  }
}

export default Sprite;
