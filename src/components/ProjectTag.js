import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sprite from './Sprite';

class ProjectTag extends Component {

  render() {
    const {sprite, titles, name, tag} = this.props;
    const rainClass = `rain ${name}`;
    const spriteClass = `anim-container ${name}-sprite`;
    return (
      
      <div className={rainClass}>
        <div className="work-header">
          <Link to={`/portfolio/projects/${tag}`}>
            <span>{titles[0]}</span><br></br>
            <span>{titles[1]}</span><br></br>
            <span>{titles[2]}</span><br></br>
          </Link>
        </div>
        <Sprite spriteClass={spriteClass} sprite={sprite}/>
      </div>
    );
  }
}

export default ProjectTag;
