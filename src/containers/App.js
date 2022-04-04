import React, { Component } from 'react';

import './App.css';
import Radium from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import { StyleRoot } from 'radium';


class App extends Component {
  state = {
    persons: [
      {id: 'bam1', name:'Max', age:28},
      {id: 'bam2', name:'Manu', age:29},
      {id: 'bam3', name:'Stephanie', age:26}
    ],
    otherState: 'some other value',
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});    
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState( {persons: persons} )
    
  }

  render () {
    const style = {
      backgroundColor: 'green',
      color : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover' : {
        backgroundColor : 'lightgreen',
        color: 'black'
      }
    }; 

    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
          persons ={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;
    }

    return (
      <StyleRoot>
      <div className="App">
        <Cockpit 
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler} />
          
        {persons}       
      </div>
      </StyleRoot>
    );
  }
}
 
export default Radium(App);
