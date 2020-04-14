import React, { Component } from 'react';
import ChirpList from './components/ChirpList';
import Header from './components/layout/Header';
import AddChirp from './components/AddChirp';
import './App.css';

//Class based componenet that extends from React base class
//Initalize State

class App extends Component {
  state = {
    //array of objects of chirps
    list: [
      {
        id: 1,
        title: "This is the first chirp!  Chirp...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        read: false
      },

      {
        id: 2,
        title: "This is the second chirp!  Chirp, Chirp...",
        read: false
      },

      {
        id: 3,
        title: "This is the third chrip!  Chirp, Chirp, Chirp...",
        read: false
      }

    ]
  }


  updateList = (pizza) => {
    this.setState({
      list: [...this.state.list, {
        id: 4,
        title: pizza,
        read: false
      }]
    });

  }





  markRead = (id) => {
    this.setState({
      list: this.state.list.map(c => {
        if (c.id === id) {
          c.read = !c.read
        }
        return c;
      })
    });

  }

  //Delete using filter method
  delChirp = (id) => {
    this.setState({
      list: [...this.state.list.filter(c => c.id !== id)]
    });

  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddChirp updateList={this.updateList} />
          {/* Passing array of objects properties to the ChirpList component */}
          <ChirpList list={this.state.list} markRead={this.markRead} delChirp={this.delChirp} />
        </div>
      </div >
    );
  }

}

export default App;



