import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
// Components
import Header from './Header/Header';

// Pages
import HomePage from '../pages/HomePage';
import InstructionPage from '../pages/InstructionPage';
import TestPage from '../pages/TestPage';
import ResultPage from '../pages/ResultPage';
import style from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={style.App}>
      <Header />
       <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/instruction' component={InstructionPage} />
          <Route path='/test' component={TestPage} />
          <Route path='/result' component={ResultPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
