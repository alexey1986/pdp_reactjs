import React, { Component } from 'react';
import LeafNode from './leaf-node';
class FileTree extends Component {
    render() {
      const { nodes, handleClick } = this.props;
      let count = 0;

      return (
        <ul className="node-list">
          {nodes.map((node, i) => {
            if (node.children) {
              count = node.children.length;
            }
            return (
              <LeafNode key={i + "_node"} node={node} handleClick={handleClick} numberOfChildren={count}>
                { node.children && <FileTree nodes={node.children} handleClick={handleClick} numberOfChildren={count} /> }
              </LeafNode>
            )
          })}
        </ul>
      );
    }
  }

  export default FileTree;