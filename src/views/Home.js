import React, { Component } from 'react';
import ProjectTag from '../components/ProjectTag';
import Sprite from '../components/Sprite';
import Intro from '../components/Intro';
import images from '../styles/images';
import config from '../config';

class Home extends Component {
  
  render() {
    const tags = Object.keys(config.projects);
    const projectTags = tags.map( tag => 
      <ProjectTag key={tag} titles={config.projects[tag].titles} sprite={images[config.projects[tag].sprite]} name={config.projects[tag].name} tag={tag}/>
    )
    return (
      <div>
        <Intro/>
        <Sprite spriteClass={'anim-container girl'} sprite={images.girl_sprites}/>
        <div className="rain"></div>
        {projectTags}
      </div>
    );
  }
}

export default Home;
