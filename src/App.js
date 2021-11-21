import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';


//Use classes instead of functions - to be able to access STATE
class App extends Component {

  constructor() {
    super();
    this.state = {
      family: [
        {
          name: 'Modupe Adeyemi',
          id: '1'
        },
        {
          name: 'Morife Adeyemi',
          id: '2'
        },
        {
          name: 'Mayokun Adeyemi',
          id: '3'
        }
      ],
      string: 'Hey React'
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {this.state.family.map( family => (
            <h3 key={family.id}>
              { family.name }
            </h3>
          ))}

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
