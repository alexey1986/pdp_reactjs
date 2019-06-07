import React, { Component } from 'react';
import NavBar from 'components/nav/nav';
import Articles from 'components/articles/articles';
import TreeView from 'components/treeview/treeview_2';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component { // TODO: переделать на функциональные компоненты те, которым события жизненного циклы не нужны
  render() {
    return (
      <BrowserRouter>
          <div className="content">
              <NavBar />
              <Switch>
                <Route exact path='/' component={Articles}/>
                <Route path='/articles' component={Articles}/>
                <Route path='/tree' component={TreeView}/>
              </Switch>
          </div>
      </BrowserRouter>
    )
  }
}

export default App;