import React, { Component } from 'react';
import { Route } from 'react-router-dom';
//import logo from './logo.svg';
import './style/css/App.css';
//Templates
import Home from './templates/Home'
import Search from './templates/Search'
import Login from './templates/Login';
import Registration from './templates/Register';
import BookDetails from './templates/BookDetails'

class App extends Component {
  render() {
    return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Registration}/>
      <Route exact path="/books/:id" component={BookDetails}/>
    </div>
      
    );
  }
}

export default App;
