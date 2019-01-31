import React, { Component } from 'react';
import { treeView } from "./data";
import FileTree from './file-tree';
import SelectedNode from './selected-node';
import './style.css';
class TreeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeView,
      selectedNode: null
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  selectNode = (e, selected) => {
    e.stopPropagation();
    this.setState({
      selectedNode: selected
    });
  }

  handleDelete() {
    const { treeView, selectedNode } = this.state;
    this.removeNode(treeView, selectedNode.name);
    this.forceUpdate();
  }

  removeNode(parent, childNameToRemove) {
    if (parent.children) { 
        parent.children = parent.children
        .filter(child => child.name !== childNameToRemove)
        .map(child => this.removeNode(child, childNameToRemove));
    }
    return parent;
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
            {selectedNode && <SelectedNode node={selectedNode} handleDelete={this.handleDelete} /> || <p>please select some...</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default TreeView;