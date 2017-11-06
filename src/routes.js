import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import ProjectList from './views/ProjectList';
import Project from './views/Project';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/projects/:tag' component={ProjectList}/>
        <Route path='/project/:id' component={Project}/>
    </Switch>
);
