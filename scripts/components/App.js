'use strict';

import React from 'react';

import NewTask from './NewTask';
import Links from './Links'
import TaskList from './TaskList'

let App = React.createClass({
  getInitialState() {
    return {
      newTaskValue: '',
      tasks: [],
      filteredTasks: []
    }
  },

  updateTask(val) {
    this.setState({newTaskValue: val});
  },

  modifyTask(taskId, completed) {
    var updatedTasks = this.state.tasks.map(function(task) {
      if (task.id === taskId) {
        task.completed = completed;
      }
      return task;
    });
    this.setState({tasks: updatedTasks});
  },

  saveTask() {
    let newTask = this.state.newTaskValue;
    let updatedTasks = this.state.tasks;
    updatedTasks.push({id: Date.now(), body: newTask, completed: false})
    this.setState({tasks: updatedTasks});
    this.setState({newTaskValue: ''});
  },

  render() {
    return (
      <div>
        <NewTask
          updateTask={this.updateTask}
          saveTask={this.saveTask}
          ref="newTaskInput"
          value={this.state.newTaskValue}
        />
        <TaskList
          tasks={this.state.tasks}
          filter={this.props.location.pathname}
          taskUpdate={this.modifyTask}
        />
        <Links />
      </div>
    )
  }
});

export default App;
