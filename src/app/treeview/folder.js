import React, { Component } from 'react';
import IconFolder from "./icons/folder";

class Folder extends Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: false};
    }
    
    toggleNode() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }

    updateFolder() {

    }

    deleteFolder() {

    }

    createFolder() {

    }

    createFile() {
      
    }

    render() {
      const { node, children, handleClick } = this.props;
  
      return (
        <li className="node-item clearfix" onClick={(e) => handleClick(e, node)}>
            <div className={"node-icon float-left " + (this.state.isToggleOn ? "opened" : "")} onClick={() => this.toggleNode()}>
                <IconFolder />
            </div>
            <div className="node-name">{node.name}</div>
            <div className={this.state.isToggleOn ? "" : "hide"}>
              {children}
            </div>
        </li>
      );
    }
}

export default Folder