import React, { Component } from 'react';
import CardContainer from './components/CardContainer/CardContainer';
import Menu from './components/Menu/Menu';
import Navigation from './components/Navigation/Navigation';
class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Menu />
        <CardContainer />
      </div>
    );
  }
}

export default App;