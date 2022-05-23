DigitalClock.js:

import React, { Component } from 'react'

 

  class DigitalClock extends Component {

      current = new Date();

     date = `${this.current.getDate()}/${this.current.getMonth()+1}/${this.current.getFullYear()}`;

 

      render()

      {

     return (

       <div><h1>Digital Clock</h1>

       <h1>Current date is {this.date}</h1>

       <h2>Time Now is { new Date().toLocaleTimeString()}</h2>

       </div>)

   }

 }

 

 export default DigitalClock

app.js:

import logo from './logo.svg';
import './App.css';
import DigitalClock from './Components/DigitalClock';

function App() {
  return (
    <div className="App">
      <Hello />
      <DigitalClock />
    </div>
  );
}

export default App;