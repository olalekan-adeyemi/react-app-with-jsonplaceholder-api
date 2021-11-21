import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';


//Use classes instead of functions - to be able to access STATE
class App extends Component {

  constructor() {
    super();
    this.state = {
      string: 'Hello Adeyemi'
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            { this.state.string }
          </p>
          <button onClick = {() => {this.setState({ string: 'Hello Momo'})}} >
            Change Text
          </button>
        </header>
      </div>
    );
  }
}

/*function App() {
  
}*/

export default App;
