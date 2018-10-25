import React, { Component } from 'react';
import { Route } from 'react-router-dom';
//import logo from './logo.svg';
import './style/css/App.css';
//Templates
import Home from './templates/Home'
import Search from './templates/Search'

class App extends Component {
  render() {
    return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/search" component={Search}/>
    </div>
      
    );
  }
}

export default App;
