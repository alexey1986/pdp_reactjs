import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconFile from 'assets/icons/file';
import IconFolder from 'assets/icons/folder';

class LeafNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }

  toggleNode = () => {
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
        <div className={"node-icon float-left" + (this.state.isToggleOn ? " opened" : "") + (!children.props.nodes.length ? " empty" : "")} onClick={this.toggleNode}>
            <IconFolder />
        </div>
      )
    }

    return (
      <li className="node-item clearfix">
        { nodeIcon }
        <div className="node-name d-inline-block" onClick={(e) => handleClick(e, node)}>{node.name}</div>          
        <div className={this.state.isToggleOn ? "" : "hide"}>
          {children}
        </div>
      </li>
    );
  }
}

LeafNode.propTypes = {
  node: PropTypes.object,
  handleClick: PropTypes.func,
  children: PropTypes.element.isRequired
}

export default LeafNode;