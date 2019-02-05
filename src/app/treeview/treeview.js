import React, { Component } from 'react';
import { treeView } from "./data";
import nodeModel from "./models/node-model";
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
    this.handleCreate = this.handleCreate.bind(this);
  }

  componentDidMount() {
    const tree = this.getFromLocalStorage();
    tree && this.setState({
      treeView: tree
    })
  }
  
  selectNode = (e, selected) => {
    e.stopPropagation();
    this.setState({
      selectedNode: selected
    });
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

  saveToLocalStorage() {
    localStorage.setItem('treeView', JSON.stringify(this.state.treeView));    
  }

  getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('treeView'));
  }

  updateTree(newTree) {
    this.setState({treeView: newTree},
      this.saveToLocalStorage
    );
  }

  handleSave(id, name, description) {
    const newArray = this.state.treeView, currentNode = this.findNode(newArray.children, id);
    currentNode.name = name;
    currentNode.description = description;
    this.updateTree(newArray);
  }

  handleCreate(id, newNodeType, newNodeName, newNodeDescription) {
    const newArray = this.state.treeView, currentNode = this.findNode(newArray.children, id);
    let template;
    // TODO import templates returns object    

    if (newNodeType == "file") {
      template = {
        id: Math.random().toString(36).substr(2, 9),
        name: newNodeName,
        type: newNodeType,
        description: newNodeDescription,
        aliaksei: "its me"
      }
    } else if (newNodeType == "folder") {
      template = {
        id: Math.random().toString(36).substr(2, 9),
        name: newNodeName,
        type: newNodeType,
        children: []
      }
    }

    currentNode.children.push(template);
    this.updateTree(newArray);
  }

  handleDelete() {
    const { treeView, selectedNode } = this.state;
    this.setState(
      {
        treeView: this.removeNode(treeView, selectedNode.id),
        selectedNode: null
      },
      this.saveToLocalStorage
    )
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
            {selectedNode && <SelectedNode
              node={selectedNode}
              handleDelete={this.handleDelete}
              handleSave={this.handleSave}
              handleCreate={this.handleCreate} /> || <p>please select some...</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default TreeView;