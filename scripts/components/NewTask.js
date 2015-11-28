'use strict';

import React from 'react';
import TaskActions from './../actions/taskActions';

let NewTask = React.createClass({
  handleChange(e) {
    let val = this.refs.newTaskInput.value;
    TaskActions.updateNewTask(val);
  },

  handleKeypress(e) {
    if (e.which === 13) {
      TaskActions.saveNewTask();
    }
  },

  render() {
    return (
      <input
        placeholder="Whatchu gotta do?"
        ref="newTaskInput"
        type="text"
        onChange={this.handleChange}
        onKeyPress={this.handleKeypress}
        value={this.props.value}
      />
    )
  }
});

export default NewTask;
