import React, { Component } from 'react';
import { treeView } from "./data";
import FileTree from './file-tree';
import ViewNode from './selected-node';
import './style.css';
class TreeView extends Component {
  state = {
    treeView,
    selectedNode: null
  };
  
  selectNode = (e, selected) => {
    e.stopPropagation();
    this.setState({
      selectedNode: selected
    });
  }

  render() {
    const { treeView, selectedNode } = this.state;

    return (
      <div className="container-fluid">
        <h1>Tree view with files and folders</h1>
        <div className="row">
          <div className="col-4 node-list-container">
            <FileTree nodes={treeView.children} handleClick={this.selectNode} />
          </div>
          <div className="col-8">
            {selectedNode && <ViewNode node={selectedNode} />}
          </div>
        </div>
      </div>
    );
  }
}

export default TreeView;