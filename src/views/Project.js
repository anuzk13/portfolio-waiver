import React, { Component } from 'react';
import FetchApi from '../tools/FetchApi';
import BehancedModule from '../components/BehancedModule';

class Project extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      project: null
    };
    this.projectId = props.match.params.id;
    FetchApi.get('project',  { project: this.projectId}).then(
        response => {
            this.setState({ project : response.project});
        }
    );
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { project } = this.state;
    const display = project ? project.name.split(' ').map( (word, index) => <span key={index}>{`${word} `}</span>) : '';
    const columns = project ? project.modules.map( 
      (module, index) => <BehancedModule module={module} key={`module-${index}`}/>
    ) : null;
    return (
      <div className="project">
        <div className="modules">
          <div className="project-title">
            {display}
          </div>
          {columns}
        </div>
      </div>
    );
  }
}

export default Project;
