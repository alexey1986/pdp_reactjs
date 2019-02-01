import React, { Component } from 'react';
import IconFile from './icons/file';
import IconFolder from './icons/folder';

class LeafNode extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isToggleOn: false
      };
    }

    toggleNode() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
      const { node, handleClick, numberOfChildren, children } = this.props;
      let nodeIcon = null;

      if (node.type === "file") {
        nodeIcon = <IconFile />
      } else if (node.type === "folder") {
        nodeIcon = (
          <div className={"node-icon" + (this.state.isToggleOn ? " opened" : "") + (!numberOfChildren ? " empty" : "")} onClick={() => this.toggleNode()}>
              <IconFolder />
          </div>
        )
      }

      return (
        <li className="node-item clearfix" onClick={(e) => handleClick(e, node)}>
          <div className="d-flex">
            { nodeIcon }
            <div className="node-name">{node.name}</div>
          </div>
          { children && (
            <div className={this.state.isToggleOn ? "" : "hide"}>
              {children}
            </div>
          )}
        </li>
      );
    }
  }

  export default LeafNode;