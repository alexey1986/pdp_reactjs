import React, { Component } from 'react';

class SelectedNode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.node
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.node.name,
            description: nextProps.node.description
        });
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const { node, handleDelete } = this.props;
        const { name, description } = this.state;
 
        return (
            <div>
                {node && (
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-1 col-form-label">Name</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control-plaintext" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                            </div>
                        </div>
                        {node.description && (
                            <div className="form-group row">
                                <label className="col-sm-1 col-form-label">Description</label>
                                <div className="col-sm-8">
                                    <textarea className="form-control-plaintext" rows="1" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)}></textarea>
                                </div>
                            </div>
                        )}
                        <div className="btn-group">
                            {node.children && <button type="button" className="btn btn-light">Create folder</button>}
                            {node.children && <button type="button" className="btn btn-light">Create file</button>}
                            <button type="button" className="btn btn-light" onClick={() => handleDelete()}>Delete</button>
                            {(name != node.name || description != node.description) && <button type="button" className="btn btn-light mr-2">Save</button>}
                        </div>
                    </form>
                )}
            </div>
        );
    }
}

export default SelectedNode;