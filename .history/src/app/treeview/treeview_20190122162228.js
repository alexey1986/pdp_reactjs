import React, { Component } from 'react';
import { treeView } from "./data.js";
import './style.css'
  
class File extends React.Component {
  render() {
    const { node } = this.props;

    return (
      <li>
        <div>Type: {node.type}</div>
        <div>Name: {node.name}</div>
        <div>Content: {node.content}</div>
      </li>
    );
  }
}

class Folder extends React.Component {
  render() {
    const { node, children } = this.props;

    return (
      <li>
        <svg viewBox="0 0 8 8"><use xlink:href="#file"></use></svg>
        <div>Type: {node.type}</div>
        <div>Name: {node.name}</div>
        {children}
      </li>
    );
  }
}

class LeafNode extends React.Component {
  render() {
    const { nodes } = this.props;

    return (
      <ul>
        {nodes.map(node => {
          if (node.type === "file") {
            return <File key={node.id} node={node} />;
          } else if (node.type === "folder") {
            return (
              <Folder node={node}>
                <LeafNode nodes={node.children} />
              </Folder>
            );
          } else {
            return null;
          }
        })}
      </ul>
    );
  }
}

class TreeView extends Component {
  state = {
    treeView
  };

  render() {
    const { treeView } = this.state;

    return (
      <div className="container-fluid">
        <h1>Tree view with files and folders</h1>
        <div className="row">
          <div className="col-4">
            {treeView.name}
            <LeafNode nodes={treeView.children} />>
          </div>
          <div className="col-8">
            Hello world
          </div>
        </div>
      </div>
    );
  }
}

export default TreeView;