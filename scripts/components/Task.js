'use strict';

import React from 'react';

let Task = React.createClass({
  handleChange(e) {
    let completed = e.target.checked;
    this.props.handleChange(this.props.id, completed)
  },
  render() {
    return (
      <li><input type="checkbox" checked={this.props.completed} onChange={this.handleChange}/>{this.props.body}</li>
    )
  }
})

export default Task;
