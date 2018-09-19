import React, { Component } from 'react';
import YearChoice from '../YearChoice/index';
import Accident from '../Accident/index';
import './style.css'
import './style-font.css'

class App extends Component {
  render() {
    return (
          <div className="app">
            <div className="bg-img-content" />
            <YearChoice />
            <Accident />
          </div>
    );
  }
}

export default App;
