'use strict';

import alt from './../alt.js';

import TaskActions from './../actions/taskActions';

class TaskStore {
  constructor() {
    this.tasks = [];
    this.newTask = '';
    this.bindListeners({
      handleToggleComplete: TaskActions.TOGGLE_COMPLETE,
      handleUpdateNewTask: TaskActions.UPDATE_NEW_TASK,
      handleSaveNewTask: TaskActions.SAVE_NEW_TASK
    });
    this.exportPublicMethods({
      getTask: this.getTask
    });
  }

  handleToggleComplete(task) {
    task.completed = !task.completed;
  }

  handleUpdateNewTask(val) {
    this.newTask = val;
  }

  handleSaveNewTask() {
    let body = this.newTask;
    this.newTask = '';
    this.tasks.push({id: Date.now(), body: body, completed: false});
  }

  getTask(id) {
    var { tasks } = this.getState();
    for (var i = 0; i < tasks.length; i += 1) {
      if (tasks[i].id === id) {
        return tasks[i];
      }
    }

    return null;
  }
};

export default alt.createStore(TaskStore, 'TaskStore');
