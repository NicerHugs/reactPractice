'use strict';

import alt from './../alt';

class TaskActions {
  toggleComplete(task) {
    this.dispatch(task);
  }
  updateNewTask(val) {
    this.dispatch(val);
  }
  saveNewTask() {
    this.dispatch()
  }
};

export default alt.createActions(TaskActions);
