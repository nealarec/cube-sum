import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, } from 'react-router-dom'
import Calculator from './calculator';
import Instructions from './instructions'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className='navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar'>
            <NavLink exact to='/' >Cube Summation</NavLink>
            <NavLink to='/instructions'>Instrucciones</NavLink>
            <a href="https://github.com/nealarec/cube-sum" target='_blank' rel='noopener noreferrer'>Código</a>
          </nav>
          <Switch>
            <Route exact path='/'><Calculator /></Route>
            <Route path='/instructions'><Instructions /></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
