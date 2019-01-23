import React, { Component } from 'react';
import IconFile from "./icons/file";

class File extends Component {
    render() {
      const { node } = this.props;
  
      return (
        <li className="node-item clearfix">
            <IconFile className="float-left" />
            <div className="node-name">{node.name}</div>
        </li>
      );
    }
}

export default File;