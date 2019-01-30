import React, { Component } from 'react';

class ViewNode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.node
        };
    }

    handleChange(e) {
        console.log(e.target.value)
    }

    render() {
        const { node } = this.props;

        return (
            <div>
                {node && (
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-1 col-form-label">Name</label>
                            <div className="col-sm-8">
                                {node.name}
                                {/* <input type="text" className="form-control-plaintext" defaultValue={node.name} onChange={(e) => this.handleChange(e)} /> */}
                            </div>
                        </div>
                        {node.content && (
                            <div className="form-group row">
                                <label className="col-sm-1 col-form-label">Description</label>
                                <div className="col-sm-8">
                                    {node.content}
                                    {/* <textarea className="form-control-plaintext" rows="5" defaultValue={node.content} onChange={(e) => this.handleChange(e)}></textarea> */}
                                </div>
                            </div>
                        )}
                        <div className="btn-group">
                            {node.children && <button type="button" className="btn btn-light">Create folder</button>}
                            {node.children && <button type="button" className="btn btn-light">Create file</button>}
                            <button type="button" className="btn btn-light">Delete</button>
                        </div>
                        {/* {(nameHasChanged || descriptionHasChanged) && <button type="button" className="btn btn-primary mr-2" onClick={(e) => this.handleSubmit(e)}>Save</button>} */}
                    </form>
                )}
            </div>
        );
    }
}

export default ViewNode;