import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class ProjectThumbnail extends Component {
  render() {
    const {project, inversed} = this.props;
    const created = moment(project.published_on * 1000).calendar();
    const initialImg = inversed ? <img src={project.covers['404']} alt={module.id}></img>: null;
    const finalImg = !inversed ? <img src={project.covers['404']} alt={module.id}></img>: null;
    return (
      <div className="p-thumbnail">
            <Link to={`/portfolio/project/${project.id}`}>
                {initialImg}
                <div className="project-info">
                    <div className="name"> 
                        {project.name} 
                    </div>
                    <div className="date"> 
                        {created} 
                    </div>
                </div>
                {finalImg}
            </Link>
            
      </div>
    );
  }
}

export default ProjectThumbnail;
