import React, { Component } from 'react';
import FetchApi from '../tools/FetchApi';
import ProjectThumbnail from '../components/ProjectThumbnail';
import config from '../config';

class ProjectList extends Component {

  constructor(props, context) {
    super(props, context);
    this.projectTag = props.match.params.tag;
    const tagProps = config.projects[this.projectTag];
    const projects = config.projectList.filter (
        project => config.projects[this.projectTag].ids.includes(project.id));
    this.state = {
      projects,
      title: tagProps.title,
      description: tagProps.description
    };
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { projects, title, description} = this.state;
    const projectItems = projects.map((project, index) => 
        <ProjectThumbnail inversed={index%2 === 0} key={project.id} project={project}/>)
    return (
      <div className="project-list">
          <div className="list-intro">
            <div className="title">
              <span>{title}</span>
            </div>
            <div className="description">
              {description}
            </div>
          </div>
          <div className="projects">
            {projectItems}
          </div>
      </div>
    );
  }
}

export default ProjectList;
