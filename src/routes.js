import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import ProjectList from './views/ProjectList';
import Project from './views/Project';
import Bio from './views/Bio';

export default (
    <Switch>
        <Route exact path='/portfolio-waiver/' component={Home}/>
        <Route exact path='/portfolio-waiver/profile' component={Bio}/>
        <Route path='/portfolio-waiver/projects/:tag' component={ProjectList}/>
        <Route path='/portfolio-waiver/project/:id' component={Project}/>
    </Switch>
);
