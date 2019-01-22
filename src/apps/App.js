import React, { Component } from 'react';
import NavBar from "./Articles/components/nav/nav.js"
import Articles from './Articles/articles-list.js';
import { HashRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
      return (
        <Router>
            <div>
                <NavBar />
                <Route path='/articles' component={Articles}/>
            </div>
        </Router>
      )
    }
  }
  
  export default App;