Empl.js:

import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";


function Empl(employe) {
  return (
    <div>
      <p>
        <label>empl Name: {employe.name}</label>
      </p>
      <p>
        <label>empl Salary:{employe.job}</label>
      </p>
    </div>
  );
}


export default Empl

App.js:

import logo from './logo.svg';
import './App.css';
import Empl from './Components/Empl'

function App() {
  return (
    <div className="App">
      <Empl name = 'AKASH' job = 'VP' />
      <Empl name = 'SHUBHAM' job = 'ANALYST' />
      <Empl name = 'ANANYA' job = 'Aspiring Actress' />
      <Empl name = 'MOHIT' job = 'Bartender' />
      
    </div>
  );
}

export default App;