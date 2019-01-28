import React, { Component } from 'react';

class ViewNode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            nameHasChanged: false,
            descriptionHasChanged: false
        };
    }

    handleNameChange(e) {
        const { value, defaultValue } = e.target, isChanged = (value != defaultValue) ? true : false;
        this.setState({
            name: value,
            nameHasChanged: isChanged
        })
    }

    handleDescriptionChange(e) {
        const { value, defaultValue } = e.target, isChanged = (value != defaultValue) ? true : false;
        this.setState({
            description: value,
            descriptionHasChanged: isChanged
        })
    }

    handleSubmit(e) {
        //e.stopPropagation();
        e.preventDefault();
        // TODO
        //e.target.value
    }

    handleDelete() {
        e.preventDefault();
        // TODO
    }

    render() {
        const { node } = this.props;
        const { nameHasChanged, descriptionHasChanged } = this.state;
        const hasChanged = nameHasChanged || descriptionHasChanged;

        return (
            <div>
                {node && (
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control-plaintext" onChange={(e) => this.handleNameChange(e)} defaultValue={node.name} />
                        </div>
                        {node.content && (
                            <div className="form-group">
                                <label className="">Description</label>
                                <textarea className="form-control-plaintext" onChange={(e) => this.handleDescriptionChange(e)} defaultValue={node.content} rows="5"></textarea>
                            </div>
                        )}
                        <div className="btn-group">
                            {hasChanged && <button type="button" className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Save</button>}
                            <button type="button" className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Delete</button>
                        </div>
                    </form>
                )}
            </div>
        );
    }
}

export default ViewNode;