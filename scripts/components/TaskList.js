'use strict';

import React from 'react';

import Task from './task';

let TaskList = React.createClass({
  filterTasks() {
    let path = this.props.filter;
    let filteredTasks = this.props.tasks;
    if (path === '/') {
    } else if (path === '/active' || path === 'active') {
      filteredTasks = filteredTasks.filter(function(task) {
        return !task.completed;
      });
    } else if (path === '/completed' || path === 'completed') {
      filteredTasks = filteredTasks.filter(function(task) {
        return task.completed;
      });
    }
    return filteredTasks;
  },

  render() {
    let tasks = this.filterTasks().map(task => {
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
