import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import Data from './Components/Data';
import Home from './Components/Home';
import Login from './Components/Login';
import AddFilm from './Components/AddFilm';
import NoMatch from './Components/NoMatch';


// const data = [1, 2, 3]
class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav className="nav">
            <div className="nav-right nav-menu">
              <a className="nav-item"><Link to="/">Home</Link></a>
              <a className="nav-item"><Link to="/login">Login</Link></a>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/data" component={Data} />
            <Route exact path="/add" component={AddFilm} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
