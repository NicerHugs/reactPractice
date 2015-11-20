'use strict';

import _ from 'underscore';
import Backbone from 'backbone';
import ToDoItem from './itemView';

export default Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
  },
  tagName: 'ul',
  className: 'task-list',
  children: [],
  renderChildren: function() {
    this.children.forEach(function(child) {
      child.remove();
    });
    let filtered = _.chain(this.collection.models)
      .filter(function(model) {
        if (this.filterType && this.filterType === 'complete') {
          return model.get('complete');
        } else if (this.filterType && this.filterType === 'active') {
          return !model.get('complete');
        } else {
          return model;
        }
      }.bind(this)).each(function(model) {
        var childView = new ToDoItem({
          model: model,
          parentView: this
        });
        this.children.push(childView);
        this.$el.append(childView.render().el);
      }.bind(this));
  },
  render: function(filterType) {
    this.$el.html('')
    this.filterType = filterType === undefined ? this.filterType : filterType;
    this.renderChildren();
    return this;
  }
});
