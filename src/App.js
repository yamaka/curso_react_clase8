import logo from "./logo.svg";
import "./App.css";

import Header from "./Header";
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Cursos from "./pages/Cursos/Cursos";
import Curso from "./pages/Curso/Curso";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/cursos">
                <Cursos />
              </Route>
              <Route exact path="/cursos/:id">
                <Curso />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
