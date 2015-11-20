'use strict';

import Backbone from 'backbone';
import Task from './../task';

export default Backbone.View.extend({
  tagName: 'input',
  className: 'new-task',
  attributes: {
    placeholder: 'What do you have to do?'
  },
  events: {
    'keydown': 'handleKeypress'
  },
  handleKeypress: function(event) {
    if (event.keyCode === 13) {
      this.collection.add(new Task({
        id: Date.now(),
        body: this.$el.val()
      }))
      this.el.value = '';
    }
  }
});
