'use strict';

import Backbone from 'backbone';
import $ from 'jquery';
import Input from './views/newTask';
import List from './views/listView';
import tasks from './tasks';
import Nav from './views/navView';

let input = new Input({collection: tasks});
let list = new List({collection: tasks});
let nav = new Nav();

let Router = Backbone.Router.extend({
  initialize: function() {
    $('body').prepend('<div class="container"></div>')
  },
  routeViews: [],
  routes: {
    '': 'all',
    'active': 'active',
    'complete': 'complete'
  },
  mainView: function(filter) {
    $('.container').html(input.el);
    $('.container').append(list.render(filter).el);
    $('.container').append(nav.render().el);
  },
  all: function() {
    this.mainView('');
  },
  active: function() {
    this.mainView('active');
  },
  complete: function() {
    this.mainView('complete');
  }
});

export default new Router();

Backbone.history.start();
