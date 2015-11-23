'use strict';

import React from 'react';

let NewTask = React.createClass({
  handleChange(e) {
    this.props.updateTask(this.refs.newTaskInput.value);
  },

  handleKeypress(e) {
    if (e.which === 13) {
      this.props.saveTask();
      this.props.updateTask('');
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
