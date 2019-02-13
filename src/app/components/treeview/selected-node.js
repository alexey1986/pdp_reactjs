import React, { Component } from 'react';
import EditForm from './edit-form';
import CreationForm from './creation-form';
import { Button, ButtonGroup } from 'reactstrap';

class SelectedNode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.node,
            newNodeType: null,
            isEditing: false
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.node.id,
            name: nextProps.node.name,
            description: nextProps.node.description,
            newNodeType: null,
            isEditing: false
        });
    }

    setNodeType = (type) => {
        this.setState({
            newNodeType: type
        });
    }

    handleSubmit = (id, type, name, description) => {
        //console.log("handleSubmit: ", id, type, name, description)
        this.props.handleCreate(id, type, name, description);
        this.setNodeType(null);
    }

    handleCancel = () => {
        this.setState({
            newNodeType: null,
            isEditing: false
        });
    }

    render() {
        const { node, handleDelete, handleSave } = this.props;
        const { id, newNodeType, isEditing } = this.state;

        return (
            <div>
                {node && <div>
                    <h3>{node.name}</h3>
                    <p>{node.description}</p>
                    {isEditing && <EditForm node={node} handleSave={handleSave} handleDelete={handleDelete} setNodeType={this.setNodeType} />}
                    {newNodeType && <CreationForm type={newNodeType} id={id} handleSubmit={this.handleSubmit} />}
                    <ButtonGroup>
                        {(node.children && !isEditing) && <Button color="light" onClick={() => this.setNodeType("folder")}>Create folder</Button>}
                        {(node.children && !isEditing) && <Button color="light" onClick={() => this.setNodeType("file")}>Create file</Button>}
                        {(!isEditing && !newNodeType) && <Button color="light" onClick={() => this.setState({isEditing: !isEditing})}>Edit</Button>}
                        {(isEditing || newNodeType) && <Button color="light" onClick={() => this.handleCancel()}>Cancel</Button>}
                        <Button color="light" onClick={() => handleDelete()}>Delete</Button>
                    </ButtonGroup>
                </div>}
            </div>
        );
    }
}

export default SelectedNode;