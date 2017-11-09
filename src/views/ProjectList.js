import React, { Component } from 'react';
import FetchApi from '../tools/FetchApi';
import Sprite from '../components/Sprite';
import ProjectThumbnail from '../components/ProjectThumbnail';
import config from '../config';
import images from '../styles/images';

class ProjectList extends Component {

  constructor(props, context) {
    super(props, context);
    this.projectTag = props.match.params.tag;
    const tagProps = config.projects[this.projectTag];
    this.state = {
      projects: [],
      sprite: images[tagProps.sprite],
      titles: tagProps.titles,
      description: tagProps.description,
      spriteClass :  `anim-container ${tagProps.name}-sprite`
    };
    FetchApi.get('userProjects',  { user: config.api.user }).then(
        response => {
            const projects = response.projects.filter (
                project => config.projects[this.projectTag].ids.includes(project.id));
            this.setState({ projects });
        }
    );
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { projects, sprite, titles, spriteClass, description} = this.state;
    const projectItems = projects.map((project, index) => 
        <ProjectThumbnail inversed={index%2 === 0} key={project.id} project={project}/>)
    return (
      <div className="project-list">
          <div className="rain">
            <div className="title">
                <span>{titles[0]}</span><br></br>
                <span>{titles[1]}</span><br></br>
                <span>{titles[2]}</span><br></br>
            </div>
            <Sprite spriteClass={spriteClass} sprite={sprite}/>
          </div>
          <div className="projects">
            <div className="description">
              {description}
            </div>
            {projectItems}
          </div>
      </div>
    );
  }
}

export default ProjectList;
