import React, { Component } from 'react';
import cv from '../config/AnaMariaCardenasCV.pdf';

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <h2>
          Hello, my name is Ana Maria!
        </h2>
        <p>
          I am a Systems Engineer and a senior Design student from Colombia. This is a gallery of several projects I have worked on as a designer and a developper.
        </p>
        <p>
          You can download <a href={cv}> a copy of my CV  </a>
        </p>
      </div>
    );
  }
}

export default Intro;
