import React, { Component } from 'react';
import './App.scss';
import Icon from './components/Icon';
import Title from './components/Title';
import AboutMe from './components/AboutMe';
import Education from './components/Education';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Icon />
        <Title />
        <AboutMe />
        <Education />
      </main>
    );
    // <main className="app">start here</main>;
  }
}

export default App;
