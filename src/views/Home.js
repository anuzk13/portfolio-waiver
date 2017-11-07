import React, { Component } from 'react';
import ProjectTag from '../components/ProjectTag';
import Sprite from '../components/Sprite';
import Intro from '../components/Intro';
import m1_sprites from '../styles/spritesheets/m1_sprites.png';
import m2_sprites from '../styles/spritesheets/m2_sprites.png';
import m3_sprites from '../styles/spritesheets/m3_sprites.png';
import girl_sprites from '../styles/spritesheets/girl_sprites.png';

class Home extends Component {
  
  render() {

    //Titles
    const m1_titles = ['Design+ ', 'Engineering+', 'Education'];
    const m2_titles = ['Healthcare+ ', 'Visualization+', 'Information Systems'];
    const m3_titles = ['Illustration+ ', 'Art Direction+', 'Human Centered Design'];
    return (
      <div>
        <Intro/>
        <Sprite spriteClass={'anim-container girl'} sprite={girl_sprites}/>
        <div className="rain"></div>
        <ProjectTag titles={m1_titles} sprite={m1_sprites} name={'m1'} tag='education'/>
        <ProjectTag titles={m2_titles} sprite={m2_sprites} name={'m2'} tag='health'/>
        <ProjectTag titles={m3_titles} sprite={m3_sprites} name={'m3'} tag='artDirection'/>
      </div>
    );
  }
}

export default Home;
