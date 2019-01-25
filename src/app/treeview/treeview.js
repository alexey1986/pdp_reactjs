import React, { Component } from 'react';
import { treeView } from "./data";
import File from './file';
import Folder from './folder';
import FileTree from './file-tree';
import SelectedNode from './selected-node';
import './style.css';
class TreeView extends Component {
  state = {
    treeView
  };
  
  selectNode = (e, node) => {
    e.stopPropagation();
    // TODO

  }

  render() {
    const { treeView } = this.state;

    return (
      <div className="container-fluid">
        <h1>Tree view with files and folders</h1>
        <div className="row">
          <div className="col-4 node-list-container">
            <FileTree nodes={treeView.children} handleClick={this.selectNode} />
          </div>
          <div className="col-8">
            <SelectedNode />
          </div>
        </div>
      </div>
    );
  }
}

export default TreeView;