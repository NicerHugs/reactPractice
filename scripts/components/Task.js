'use strict';

import React from 'react';
import TaskActions from './../actions/taskActions';
import TaskStore from './../stores/taskStore';

let Task = React.createClass({
  handleChange() {
    let task = TaskStore.getTask(this.props.id);
    TaskActions.toggleComplete(task);
  },
  render() {
    return (
      <li>
        <input type="checkbox"
               checked={this.props.completed}
               onChange={this.handleChange}/>
        {this.props.body}
      </li>
    )
  }
})

export default Task;
