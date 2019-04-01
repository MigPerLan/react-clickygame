import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Imgs from './components/images';
// import Jumbotron from './components/jumbotron';


class App extends Component {
  shuffle = (array) => {
    let
      i = array.length,
      j = 0,
      temp;
    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  };

  render() {
    return (
      <div className="App container-fluid">
        <Imgs shuffle={this.shuffle} />
      </div>
    );
  }

}








export default App;
