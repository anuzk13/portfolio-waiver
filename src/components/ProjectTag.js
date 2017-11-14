import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectTag extends Component {

  render() {
    const {title, name, tag} = this.props;
    const tagClass = `tag-title ${name}`;
    return (
      <Link to={`/portfolio/projects/${tag}`}>
        <div className={tagClass}>
          <div className="title">
            <div className="title-cont">
              <span>
                {title}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default ProjectTag;
