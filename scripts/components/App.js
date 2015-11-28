'use strict';

import React from 'react';

import TaskStore from './../stores/taskStore';

import NewTask from './NewTask';
import Links from './Links'
import TaskList from './TaskList'

let App = React.createClass({
  getInitialState() {
    return TaskStore.getState();
  },

  componentDidMount() {
    TaskStore.listen(this.onChange);
  },

  componentWillUnmount() {
    TaskStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  render() {
    let childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {filter: this.props.location.pathname, tasks: this.state.tasks});
    });
    return (
      <div>
        <NewTask
          ref="newTaskInput"
          value={this.state.newTask}
        />
        {childrenWithProps}
        <Links />
      </div>
    )
  }
});

export default App;
