import React, { Component } from 'react';

class LeafNode extends Component {

    render() {
      const { node, handleClick, children } = this.props;

      
      console.log(this.props);

      console.log(children);

      let icon = null;
/*
      let nodeType = null;

      if (node.type === "file") {
        nodeType = <div>file</div>
      } else if (node.type === "folder") {
        (
          nodeType = <div>
            folder
            <ul className="node-list">
              {node.children && node.children.map((node2, i) => {
                return <LeafNode key={i + "_node"} node={node2} handleClick={handleClick} />
              })}
            </ul>
            </div>
        )
      }*/
      

      return (
        <li className="node-item clearfix" onClick={(e) => handleClick(e, node)}>
          <div className="node-name">{node.name}</div>
          {/* {children} */}
        </li>
      );
    }
  }

  export default LeafNode;