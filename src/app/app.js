import React, { Component } from 'react';
import NavBar from './components/nav/nav.js';
import Articles from './articles/articles-list.js';
import TreeView from './treeview/treeview.js';
import { HashRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
      return (
        <Router>
            <div>
                <NavBar />
                <Route path='/articles' component={Articles}/>
                <Route path='/tree' component={TreeView}/>
            </div>
        </Router>
      )
    }
  }
  
export default App;