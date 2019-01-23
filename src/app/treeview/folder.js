import React, { Component } from 'react';
import IconFolder from "./icons/folder";

class Folder extends Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: false};
    }
    
    handleClick() {
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
      const { node, children } = this.props;
  
      return (
        <li className="node-item clearfix">
            <div className={"node-icon float-left " + (this.state.isToggleOn ? "opened" : "")} onClick={() => this.handleClick()}>
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