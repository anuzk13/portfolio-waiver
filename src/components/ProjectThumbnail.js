import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class ProjectThumbnail extends Component {
  render() {
    const { project, inversed, index } = this.props;
    const created = moment(project.published_on * 1000).calendar();
    const initialImg = inversed ? <div><img src={project.covers['404']}></img></div> : null;
    const finalImg = !inversed ? <div><img src={project.covers['404']}></img></div> : null;
    return (
      <div className="p-thumbnail">
        <Link to={`/portfolio-waiver/project/${project.id}`}>
          {initialImg}
          <div className="project-info">
            <div className="name">
              <span index={index}>{project.name}</span>
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
