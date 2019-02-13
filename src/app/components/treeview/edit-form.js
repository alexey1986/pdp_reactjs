import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.node.id,
            name: this.props.node.name,
            description: this.props.node.description
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { id, name, description } = this.state, { handleSave } = this.props;


        handleSave(id, name, description)
    }

    render() {
        const { node, handleSave } = this.props;
        const { id, name, description } = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label className="col-sm-1 col-form-label" for="NodeName">Name</Label>
                    <Input className="col-sm-8 mr-3" type="text" name="name" id="NodeName" placeholder="Please enter name..." value={name} onChange={this.handleChange} />
                    {(name && (name != node.name || description != node.description)) && <Button color="primary">Save</Button>}
                </FormGroup>
                {node.type == "file" && <FormGroup row>
                    <Label className="col-sm-1 col-form-label" for="NodeDscription">Description</Label>
                    <Input className="col-sm-8" type="textarea" name="description" id="NodeDscription" placeholder="Please enter description..." value={description} onChange={this.handleChange} />
                </FormGroup>}
            </Form>
        )
    }
}

export default EditForm;