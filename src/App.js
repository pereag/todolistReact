import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Todo from './components/Todo';
import './App.css';
import React, { Component } from 'react'

class App extends Component {

  render() {
    
  return (
      <div className="App container">
        <Todo></Todo>
      </div>
    );
  }
}

export default App;
