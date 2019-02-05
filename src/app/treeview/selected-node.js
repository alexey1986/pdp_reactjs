import React, { Component } from 'react';
import CreationForm from './creation-form';

class SelectedNode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.node,
            nodeType: null,
            newNodeName: "",
            newNodeDescription: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.node.id,
            name: nextProps.node.name,
            description: nextProps.node.description,
            nodeType: null,
            newNodeName: "",
            newNodeDescription: ""
        });
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    setNodeType(type) {
        this.setState({
            nodeType: type
        });
    }

    handleSubmit(id, type, name, description) {
        this.setNodeType(null);
        this.props.handleCreate(id, type, name, description);
    }

    render() {
        const { node, handleDelete, handleSave } = this.props;
        const { id, name, description, nodeType } = this.state;

        return (
            <div>
                {node && (
                    <div>
                        <form>
                            <div className="form-group row">
                                <label className="col-sm-1 col-form-label">Name</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control-plaintext" name="name" value={name} onChange={(e) => this.handleChange(e)} />
                                </div>
                            </div>

                            {node.description && (
                                <div className="form-group row">
                                    <label className="col-sm-1 col-form-label">Description</label>
                                    <div className="col-sm-8">
                                        <textarea className="form-control-plaintext" rows="1" name="description" value={description} onChange={(e) => this.handleChange(e)}></textarea>
                                    </div>
                                </div>
                            )}

                            <div className="btn-group mb-4">
                                {node.children && <button type="button" className="btn btn-light" onClick={() => this.setNodeType("folder")}>Create folder</button>}
                                {node.children && <button type="button" className="btn btn-light" onClick={() => this.setNodeType("file")}>Create file</button>}
                                <button type="button" className="btn btn-light" onClick={() => handleDelete()}>Delete</button>
                                {(name != node.name || description != node.description) && <button type="button" className="btn btn-light mr-2" onClick={() => handleSave(id, name, description)}>Save</button>}
                            </div>
                        </form>
                        {nodeType && <CreationForm type={nodeType} id={id} handleSubmit={this.handleSubmit} />}
                    </div>
                )}
            </div>
        );
    }
}

export default SelectedNode;