import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
          Tags:
          <Link to={`/portfolio/projects/art_direction`}>Art Direction + Human Centered Design</Link>
      </div>
    );
  }
}

export default Home;
