import React, { Component } from 'react';
import IconFile from './icons/file';
import IconFolder from './icons/folder';

class LeafNode extends Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: false};
    }

    toggleNode() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }

    render() {
      const { node, handleClick, children } = this.props;
      let nodeIcon = null;

      if (node.type === "file") {
        nodeIcon = <IconFile />
      } else if (node.type === "folder") {
        nodeIcon = (
          <div className={"node-icon float-left " + (this.state.isToggleOn ? "opened" : "")} onClick={() => this.toggleNode()}>
              <IconFolder />
          </div>
        )
      }

      let childrenList = null;
      if (children) {
        childrenList = children
      } else {
        childrenList = "empty..."
      }

      return (
        <li className="node-item clearfix" onClick={(e) => handleClick(e, node)}>
          { nodeIcon }
          <div className="node-name">{node.name}</div>
          { children && (
            <div className={this.state.isToggleOn ? "" : "hide"}>
              {childrenList}
            </div>
          )}          
        </li>
      );
    }
  }

  export default LeafNode;