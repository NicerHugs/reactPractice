'use strict';

import React from 'react';
import {render} from 'react-dom';
import { IndexRoute, Router, Route } from 'react-router';

import App from './components/App';
import TaskList from './components/TaskList';

render((
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={TaskList} />
        <Route path="completed" component={TaskList} />
        <Route path="active" component={TaskList} />
      </Route>
    </Router>
), document.getElementById('container'));
