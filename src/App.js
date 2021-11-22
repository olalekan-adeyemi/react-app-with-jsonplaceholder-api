import React, { Component } from 'react';
//import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


//Use classes instead of functions - to be able to access STATE
class App extends Component {

  constructor() {
    super();
    this.state = {
      family: [],
      searchField: ''
    }
  }

  componentDidMount() {
    //Fetching data from an API with componentDidMount
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      //console.log(users)
      this.setState({ family: users})
    })
  }


  //REFACTORING THE SEARCH VALUE INTO A FUNCTION
  handleChange = (e) => {
    this.setState({ searchField: e.target.value})
  }

  render() {

    //Implement search on the members of the family - leave the main state unedited by destructuring the main state object
    const { family, searchField } = this.state
    const filteredFamily = family.filter( family => 
      family.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App"> 
        
        <header className="App-header">
         
          <SearchBox 
            handle = {'search family members'} 
            handleChange = {  this.handleChange } //e => this.setState({ searchField: e.target.value}) 
          />

          <CardList family = {filteredFamily} />
        </header>
      </div>
    );
  }
}

/*function App() {
  
}*/

export default App;
