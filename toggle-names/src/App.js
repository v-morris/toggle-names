import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asdf1', name: "Vicki", age: 29 },
      { id: 'dsfs3', name: "John", age: 30 },
      { id: 'ewr3', name: "Sarah", age: 35 }
    ],
    showPersons: false,
    someValue: "some other value"
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  nameToggler = () => {
    const doesChange = this.state.showPersons;
    this.setState({ showPersons: !doesChange })
  }

  deleteHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  render() {

    const style = {
      backgroundColor: '#fff',
      border: '1px solid blue',
      font: 'inherit',
      padding: '10px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                  click={() => this.deleteHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  change={(event) => this.nameChangeHandler(event, person.id)} />)
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi, I'm a React App!</h1>
          <p>Yay! This works!</p>
          <button
            style={style}
            onClick={this.nameToggler}>Toggle Names</button>
          {persons}
        </header>
      </div>
    );
  }
}

export default App;
