import React, { Component } from 'react';
import ChirpList from './components/ChirpList';
import './App.css';

//Class based componenet that extends from React base class
//Initalize State

class App extends Component {
  state = {
    //array of objects of chirps
    list: [
      {
        id: 1,
        title: "This is the first chrip!  Chirp...ssssssssffffffff",
        completed: false
      },

      {
        id: 2,
        title: "This is the second chrip!  Chirp, Chirp...rrrrrrrrrrrrrrrrr",
        completed: true
      },

      {
        id: 3,
        title: "This is the third chrip!  Chirp, Chirp, Chirp...bbbbbbbbbbbbbb",
        completed: false
      }

    ]
  }

  markRead = (id) => {

  }

  render() {
    return (
      <div className="App">
        {/* Passing array of objects properties to the ChirpList component */}
        <ChirpList list={this.state.list} markRead={this.markRead} />

      </div>
    );
  }

}

export default App;



