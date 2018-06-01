import React, { Component } from 'react';
import logo from './pics/nyt-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <header className="App-header">
            <div className="a-href-container" >
              <a href="https://www.nytimes.com/" className="a-href">
                <img src={logo} className="App-logo" alt="logo" />
              </a>
            </div>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
