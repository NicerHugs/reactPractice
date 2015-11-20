'use strict';

import Backbone from 'backbone';

export default Backbone.View.extend({
  tagName: 'nav',
  className: 'task-list-nav',
  render: function() {
    this.$el.html('<a href="#">All</a><a href="#active">Active</a><a href="#complete">Complete</a>');
    return this;
  }
});
