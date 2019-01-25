import React, { Component } from 'react';

class ViewNode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            someState: ''
        };
      }

    render() {  
      return (
          <div>selected node</div>
      );
    }
}

export default ViewNode;