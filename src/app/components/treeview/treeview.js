import React, { Component } from 'react';
import { treeView } from "treeview/data";
import FileTree from 'treeview/file-tree';
import SelectedNode from 'treeview/selected-node';
import 'assets/styles/components/treeview.css';

class TreeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeView: {},
      selectedNode: null
    };
  }

  // TODO add reset button or add folder into root


//TODO PureComponent , immutability, data normilize, redux

  componentDidMount() {
    const tree = this.getFromLocalStorage() || treeView;
    this.setState({
      treeView: {...tree}
    })
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
    try {
      localStorage.setItem('treeView', JSON.stringify(this.state.treeView));
    } catch(e) {
      if (this.isStorageExceeded(e)) {
        console.error("Storage full, maybe notify user or do some clean-up");
      }
    }
  }

  getFromLocalStorage() {
    try {
      if (window.localStorage) {
        return JSON.parse(localStorage.getItem('treeView'));
      }
    } catch(e) {
        console.error("Access denied");
    }
  }

  isStorageExceeded(e) {
    var storageExceeded = false;
    if (e) {
      if (e.code) {
        switch (e.code) {
          case 22:
          storageExceeded = true;
            break;
          case 1014:
            // Firefox
            if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
              storageExceeded = true;
            }
            break;
        }
      } else if (e.number === -2147024882) {
        // Internet Explorer 8
        storageExceeded = true;
      }
    }
    return storageExceeded;
  }

  generateUniqueIdNumber() {
    return Math.random().toString(36).substr(2, 9);
  }

  updateTree(newTree) {
    this.setState(state => ({
        treeView: state.treeView.children.concat(newTree)
      }),
      this.saveToLocalStorage
    );
  }

  handleSelectNode = (e, selected) => {
    e.stopPropagation();
    this.setState({
      selectedNode: selected
    });
  }

  handleSave = (id, name, description) => {
    const newArray = this.state.treeView,
          currentNode = this.findNode(newArray.children, id);

    currentNode.name = name;
    currentNode.description = description;
    this.updateTree(newArray);
  }

  handleCreate = (id, newNodeType, newNodeName, newNodeDescription) => {
    const newArray = this.state.treeView, currentNode = this.findNode(newArray.children, id);
    let template = {
      id: this.generateUniqueIdNumber(),
      name: newNodeName,
      type: newNodeType,
      [newNodeType == "file" ? 'description' : 'children']: newNodeType == "file" ? newNodeDescription : []
    };
    currentNode.children.push(template);
    this.updateTree(newArray);
  }

  handleDelete = () => {
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
            <FileTree nodes={treeView.children} handleClick={this.handleSelectNode} />
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