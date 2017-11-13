import React, { Component } from 'react';
import ProjectTag from '../components/ProjectTag';
import Intro from '../components/Intro';
import config from '../config';

class Home extends Component {
  
  render() {
    const tags = Object.keys(config.projects);
    const projectTags = tags.map( tag => 
      <ProjectTag
        title={config.projects[tag].title}
        key= {tag}
        tag={tag}
        name={config.projects[tag].class}/>
    )
    return (
      <div className="cross-menu">
        <svg version="1.1" className="cross" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 300 300" >
          <line className="crossline" x1="150" y1="0" x2="150" y2="300"></line>
          <line className="crossline" x1="0" y1="150" x2="300" y2="150"></line>
        </svg>
        <Intro/>
        { projectTags }
      </div>
    );
  }
}

export default Home;
