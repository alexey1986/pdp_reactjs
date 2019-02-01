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
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  findNode(array, nodeId) {
    if (array) {
      for (var i = 0; i < array.length; i++) {
          if (array[i].id == nodeId) {
              return array[i];
          };
          var found = this.findNode(array[i].children, nodeId);
          if (found) return found;
      }
    }
  }
  
  selectNode = (e, selected) => {
    e.stopPropagation();
    this.setState({
      selectedNode: selected
    });
  }

  handleSave(id, name, description) {
    const newArray = this.state.treeView, node_ = this.findNode(newArray.children, id);
    node_.name = name;
    node_.description = description;
    this.setState({
      treeView: newArray
    });
  }

  handleDelete() {
    const { treeView, selectedNode } = this.state;
    this.setState({
      treeView: this.removeNode(treeView, selectedNode.id),
      selectedNode: null
    });
  }

  removeNode(parent, childToRemove) {
    if (parent.children) { 
        parent.children = parent.children
        .filter(child => child.id !== childToRemove)
        .map(child => this.removeNode(child, childToRemove));
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
            {selectedNode && <SelectedNode node={selectedNode} handleDelete={this.handleDelete} handleSave={this.handleSave} /> || <p>please select some...</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default TreeView;