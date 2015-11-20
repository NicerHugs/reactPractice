'use strict';

import Backbone from 'backbone';

import Task from './task.js';

let Tasks = Backbone.Collection.extend({
  model: Task
});

let tasks = new Tasks();

export default tasks;
