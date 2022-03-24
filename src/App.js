import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Max', age:28},
      {name:'Manu', age:29},
      {name:'Stephanie', age:26}
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('Was cliced');
    // this.state.persons[0].name = 'Maximillian';
    this.setState({
      persons: [
        {name: newName, age:28},
        {name:'Manu', age:29},
        {name:'Stephanie', age:27}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age:28},
        {name: event.target.value, age:29},
        {name: 'Stephanie', age:26}
      ]
    })
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
     <div className="App">
       <h1>hi, react app</h1>
       <p>this is really working!</p>
       <button 
       style={style}
       onClick={()=> this.switchNameHandler('maximiliian!')}>Swicth Name</button>
       <Person 
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age} />
       <Person 
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age}
       click={this.switchNameHandler.bind(this, 'Max!')}
       changed={this.nameChangedHandler} 
       >My hobbies: Racing</Person>
       <Person 
       name={this.state.persons[2].name} 
       age={this.state.persons[2].age} />
     </div>
    );
  }
}
 
export default App;
