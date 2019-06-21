import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div>
          <img
            src="https://boom.camp/wp-content/uploads/2019/04/logo-boomcamp.png"
            alt="boomcamp logo"
          />
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav;
