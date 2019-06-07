import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LeafNode from 'treeview/leaf-node';

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

FileTree.propTypes = {
  nodes: PropTypes.array
}

FileTree.defaultProps = {
  nodes: []
};

export default FileTree;