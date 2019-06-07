import React, { Component } from 'react';
import { tree } from "treeview/data_2";
import FileTree from 'treeview/file-tree';
import SelectedNode from 'treeview/selected-node';
import 'assets/styles/components/treeview.css';


class LeafNode extends Component {
    render() {
        const { leaf } = this.props;

        return (
            <div>
                {leaf.name && <h4>Name: {leaf.name}</h4>}
                {leaf.type && <div>Type {leaf.type}</div>}
                {leaf.description && <div>Description: {leaf.description}</div>}
                {leaf.children && <ul>
                    {leaf.children.map(childId => {
                        const childNode = tree.byId[childId];

                        return childNode ? <li key={childId}><LeafNode leaf={childNode} /></li> : null;
                    })}
                </ul>}
            </div>
        );
    }
}

class TreeView extends Component {

    render() {
        return (
            <div className="container-fluid">
                <h1>Tree view with files and folders</h1>
                <div className="row">
                    <div className="col-4 node-list-container">
                        <LeafNode leaf={tree.root} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeView;