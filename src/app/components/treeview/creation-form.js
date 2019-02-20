import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class CreationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            isNodeValid: true
        }
    }

    componentDidUpdate(prevProps) {
        /// reset validation and fields values
        if (this.props.nodeType !== prevProps.nodeType) {
            this.setState({
                name: "",
                description: "",
                isNodeValid: true
            })
        }
    }
    
    handleChange = (event) => {
        const { name, value } = event.target;
        // Validate name
        name == "name" && value && this.setState({isNodeValid: true});
        this.setState({[name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, description } = this.state;
        // Validate name
        if (!name) {
            this.setState({isNodeValid: false});
            return;
        }
        // save
        this.props.handleSubmit(name, description);
    }

    render() {
        const { nodeType } = this.props, { name, description, isNodeValid } = this.state;

        return (
            <fieldset className="mb-4">
                <legend>Set new {nodeType} name</legend>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <div className="col-8">
                            <Input className={(!isNodeValid ? " is-invalid" : "")} type="text" name="name" id="NodeName" placeholder="Please enter name..." value={name} onChange={this.handleChange} />
                        </div>
                        {(name || description) && <Button color="primary">Submit</Button>}
                        {!isNodeValid && <div className="invalid-feedback">Please enter name</div>}
                    </FormGroup>
                    {nodeType == "file" && (
                        <FormGroup>
                            <Input className="col-8" type="textarea" name="description" placeholder="Please enter description..." value={description} onChange={this.handleChange} />
                        </FormGroup>
                    )}                
                </Form>
            </fieldset>
        )
    }
}

export default CreationForm;
