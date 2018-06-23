import React, { Component } from 'react';
import cv from '../config/AnaMariaCardenasCV.pdf';
import { Link } from 'react-router-dom';

class Intro extends Component {
  render() {
    return (
      <Link to={`/portfolio-waiver/profile`}>
        <div className="tag-title presentation">
          <div className="title">
            <div className="title-cont">
              <span className="name">
                Ana M. Cardenas
              </span>
              <span className="present">
                DESIGN + CODE
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Intro;
