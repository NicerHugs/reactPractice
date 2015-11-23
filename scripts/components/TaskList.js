'use strict';

import React from 'react';

import Task from './task';

let TaskList = React.createClass({
  filterTasks(path) {
    let filteredTasks = this.props.tasks;
    if (path === '/active') {
      filteredTasks = filteredTasks.filter(function(task) {
        return !task.completed;
      });
    } else if (path === '/completed') {
      filteredTasks = filteredTasks.filter(function(task) {
        return task.completed;
      });
    }
    return filteredTasks;
  },

  render() {
    let filteredTasks = this.filterTasks(this.props.filter);
    let tasks = filteredTasks.map(task => {
      return (<Task key={task.id} id={task.id} body={task.body} completed={task.completed} handleChange={this.props.taskUpdate}/>);
    });
    return (
      <ul>
        {tasks}
      </ul>
    )
  }
});

export default TaskList
