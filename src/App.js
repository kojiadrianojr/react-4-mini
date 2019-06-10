import React, { Component } from 'react';

import './App.css';
import Nav from './Components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <h1 style={{ padding: '200px 35%' }}>
          This is where your pages will appear
        </h1>
      </div>
    );
  }
}

export default App;
