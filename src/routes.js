import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import ProjectList from './views/ProjectList';
import Project from './views/Project';

export default (
    <Switch>
        <Route exact path='/portfolio/' component={Home}/>
        <Route path='/portfolio/projects/:tag' component={ProjectList}/>
        <Route path='/portfolio/project/:id' component={Project}/>
    </Switch>
);
