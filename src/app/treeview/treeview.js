import React, { Component } from 'react';
import { treeView } from "./data";
import File from './file';
import Folder from './folder';
import './style.css';

class LeafNode extends React.Component {
  render() {
    const { nodes } = this.props;

    return (
        <ul className="node-list">
          {nodes.map(node => {
            if (node.type === "file") {
              return <File key={node.id + "_file"} node={node} />;
            } else if (node.type === "folder") {
              return (
                <Folder key={node.id + "_folder"} node={node}>
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
          <div className="col-4 node-list-container">
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