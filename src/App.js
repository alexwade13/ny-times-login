import React, { Component } from 'react';
import logo from './pics/nyt-logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      loggingIn: true,

    }
    this.changeAction = this.changeAction.bind(this)
  }

  changeAction(){
    this.setState({loggingIn:!this.state.loggingIn})
  }

  render() {
    const { loggingIn } = this.state
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
          <div className="form-container">
            <h2>{loggingIn ? "Log In" : "Create Your Account"}</h2>
            <p className="question">{loggingIn ? "Don't have an account?" :"Already have an account?"}
              <a onClick={this.changeAction} className="answer"> {loggingIn ? "Create one >>" :"Log in >>"}</a>
            </p>


          </div>

        </div>
      </div>
    );
  }
}

export default App;
