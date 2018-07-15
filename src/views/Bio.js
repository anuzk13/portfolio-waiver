import React, { Component } from 'react';
import images from '../styles/images';
import cv from '../config/AnaMariaCardenasCV.pdf';
import Footer from '../components/Footer';

class Bio extends Component {
  
  render() {
    return (
      <div>
        <img tabIndex="1" alt="Ana Maria profile image" className="pull-left" width="25%" height="70%" src={images.profile}></img>
        <div className="content">
            <h1 className="bio_title">Ana María Cárdenas</h1>
            <div className="bio_text">
              <p tabIndex="2">
                I finished a BS in Computer Science at <b>Universidad de Los Andes</b> I'm on my 4rth (and last) year of Design. 
              </p>
              <p tabIndex="3">
                I'm interested in visualization, game design, UX, Interfaces design and Education. 
              </p>
            </div>
            <p tabIndex="4">
                You can have a link of my CV here <a href={cv}>Ana Maria Cardenas CV</a>
            </p>
        </div>		
        <Footer/>
	  </div>
    );
  }
}

export default Bio;
