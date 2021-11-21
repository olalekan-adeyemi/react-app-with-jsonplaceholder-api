import React, { Component } from 'react';
import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import './App.css';


//Use classes instead of functions - to be able to access STATE
class App extends Component {

  constructor() {
    super();
    this.state = {
      family: [],
      string: 'Hey React'
    }
  }

  componentDidMount() {
    //Fetching data from an API with componentDidMount
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      console.log(users)
      this.setState({ family: users})
    })
 }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <CardList name='Lakes'>
          {this.state.family.map( family => (
            <h3 key={family.id}>
              { family.name }
            </h3>
          ))}
          </CardList>

          

        </header>
      </div>
    );
  }
}

/*function App() {
  
}*/

export default App;
