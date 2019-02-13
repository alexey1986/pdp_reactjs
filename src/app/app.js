import React, { Component } from 'react';
import NavBar from './components/nav/nav';
import Articles from './components/articles/articles';
import TreeView from './components/treeview/treeview';
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