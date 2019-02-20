import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// TODO use PureComponent instead
class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            cansave: false
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            cansave: value && value !== this.props.node[name]
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {name, description } = this.state,
            { handleSave } = this.props,
            { id } = this.props.node;

        handleSave(id, name, description)
    }

    render() {
        const { node } = this.props;

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label className="col-sm-1 col-form-label" for="NodeName">Name</Label>
                    <Input className="col-sm-8 mr-3" type="text" name="name" id="NodeName" placeholder="Please enter name..." defaultValue={node.name} onChange={this.handleChange} />
                    {this.state.cansave && <Button color="primary">Save</Button>}
                </FormGroup>
                {node.type == "file" && <FormGroup row>
                    <Label className="col-sm-1 col-form-label" for="NodeDscription">Description</Label>
                    <Input className="col-sm-8" type="textarea" name="description" id="NodeDscription" placeholder="Please enter description..." defaultValue={node.description} onChange={this.handleChange} />
                </FormGroup>}
            </Form>
        )
    }
}

EditForm.propTypes = {
    node: PropTypes.object.isRequired
}

export default EditForm;
