import React, { Component } from 'react';
import EditForm from 'treeview/edit-form';
import CreationForm from 'treeview/creation-form';
import { Button, ButtonGroup } from 'reactstrap';

class SelectedNode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newNodeType: null,
            isEditing: false
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.node.id !== prevProps.node.id) {
            this.setState({
                newNodeType: null,
                isEditing: false
            });
        }
    }

    setNodeType = (type) => {
        this.setState({
            newNodeType: type
        });
    }

    handleSubmit = (name, description) => {
        this.props.handleCreate(this.props.node.id, this.state.newNodeType, name, description);
        this.setNodeType(null);
    }

    handleSave = (id, name, description) => {
        this.props.handleSave(id, name, description);
        this.setState({isEditing: false});
    }

    handleCancel = () => {
        this.setState({
            newNodeType: null,
            isEditing: false
        });
    }

    render() {
        const { node, handleDelete } = this.props;
        const { newNodeType, isEditing } = this.state;

        return (
            <div>
                {node && <div>
                    <h3>{node.name}</h3>
                    <p>{node.description}</p>
                    {isEditing && <EditForm node={node} handleSave={this.handleSave} />}
                    {newNodeType && <CreationForm nodeType={newNodeType} handleSubmit={this.handleSubmit} />}
                    <ButtonGroup>
                        {(node.children && !isEditing) && <Button color="light" onClick={() => this.setNodeType("folder")}>Create folder</Button>}
                        {(node.children && !isEditing) && <Button color="light" onClick={() => this.setNodeType("file")}>Create file</Button>}
                        {(!isEditing && !newNodeType) && <Button color="light" onClick={() => this.setState({isEditing: true})}>Edit</Button>}
                        {(isEditing || newNodeType) && <Button color="light" onClick={() => this.handleCancel()}>Cancel</Button>}
                        <Button color="light" onClick={() => handleDelete()}>Delete</Button>
                    </ButtonGroup>
                </div>}
            </div>
        );
    }
}

export default SelectedNode;