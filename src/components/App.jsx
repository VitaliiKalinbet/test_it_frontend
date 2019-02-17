import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import InstructionPage from "../pages/InstructionPage";
import TestPage from "../pages/TestPage";
import ResultPage from "../pages/ResultPage";
import style from "./App.module.css";
import { ResultContext } from "../context/ResultContext";
import Header from './Header/Header';

class App extends Component {
  state = {
    results: {}
  };

  handleUpdateResults = results => {
    this.setState({
      results
    });
  };
  render() {
    const { results } = this.state;
    return (
      <div className={style.App}>
        <ResultContext.Provider
          value={{ results, updateResults: this.handleUpdateResults }}
        >
        <Header/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            
            <Route path="/instruction" component={InstructionPage} />
            <Route path="/test" component={TestPage} />
            <Route path="/result/:id" component={ResultPage} />
            <Route path="/result" component={ResultPage} />
          </Switch>
        </ResultContext.Provider>
      </div>
    );
  }
}

export default withRouter(App);
