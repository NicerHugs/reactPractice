'use strict';

import React from 'react';
import {Link, IndexLink} from 'react-router';

let Links = React.createClass({
  render() {
    return (
      <nav>
        <IndexLink to="/">All</IndexLink>
        <Link to="active">Active</Link>
        <Link to="completed">Completed</Link>
      </nav>
    )
  }
});

export default Links;
