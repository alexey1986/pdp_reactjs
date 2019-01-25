import React, { Component } from 'react';
import IconFile from "./icons/file";

class File extends Component {
    render() {
      const { node, handleClick } = this.props;
  
      return (
        <li className="node-item clearfix" onClick={(e) => handleClick(e, node)}>
            <IconFile className="float-left" />
            <div className="node-name">{node.name}</div>
        </li>
      );
    }
}

export default File;