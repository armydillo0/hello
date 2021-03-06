import React from 'react';
import './App.css';
import Navbar from './components/Navigation';
import About from './components/About';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
  <Router>
      <div className="app">
      <Navbar/>
          <div className="page">
                  <Switch>
                      <Route exact path="/"> <About/></Route>
                  </Switch>
          </div>
      </div>
  </Router>
  );
}

export default App;