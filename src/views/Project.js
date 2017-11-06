import React, { Component } from 'react';
import FetchApi from '../tools/FetchApi';

class Project extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      project: null
    };
    this.projectId = props.match.params.id;
    FetchApi.get('project',  { project: this.projectId}).then(
        response => {
            console.log(response);
            this.setState({ project : response.project});
        }
    );
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { project } = this.state;
    const display = project ? project.name : '';
    return (
      <div>
          {display}
      </div>
    );
  }
}

export default Project;
