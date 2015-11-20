'use strict';

import Backbone from 'backbone';
import $ from 'jquery';
import ToDoItem from './itemView';

export default Backbone.View.extend({
  initialize: function(opts) {
    this.listenTo(this.model, 'change', function() {
      opts.parentView.render();
    });
  },
  tagName: 'li',
  className: 'task-item',
  render: function() {
    this.$el.html('<input type="checkbox">' + this.model.get('body'));
    this.$('input').prop('checked', this.model.get('complete'));
    if (this.model.get('complete')) {
      this.$el.addClass('complete');
    } else {
      this.$el.removeClass('complete');
    }
    return this;
  },
  events: {
    'click input': 'handleCheck'
  },
  handleCheck: function(e) {
    this.model.set('complete', $(e.target).prop('checked'));
  }
});
