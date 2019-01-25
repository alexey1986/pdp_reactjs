import React, { Component } from 'react';
import LeafNode from './leaf-node';

class FileTree extends Component {

    render() {
      const { nodes, handleClick } = this.props;      

      return (
        <ul className="node-list">
          {nodes.map((node, i) => {
            return (
              <LeafNode key={i + "_node"} node={node} handleClick={handleClick}>
                <FileTree nodes={node.children} handleClick={handleClick} />
              </LeafNode>
            )
          })}
        </ul>
      );
    }
  }

  export default FileTree;