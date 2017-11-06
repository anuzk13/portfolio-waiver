import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FetchApi from '../tools/FetchApi';
import config from '../config';

class ProjectList extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      projects: []
    };
    this.projectTag = props.match.params.tag;
    FetchApi.get('userProjects',  { user: config.api.user }).then(
        response => {
            const projects = response.projects.filter (
                project => config.projects[this.projectTag].includes(project.id));
            this.setState({ projects });
        }
    );
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { projects } = this.state;
    const projectItems = projects.map( 
        project => 
            <div key={project.id} >
                <Link to={`/project/${project.id}`}>{project.name}</Link>
            </div>)
    return (
      <div>
          {projectItems}
      </div>
    );
  }
}

export default ProjectList;
