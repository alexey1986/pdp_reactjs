import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
class CreationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: "",
            description: "",
            isNodeValid: true
        }
    }

    componentDidUpdate(prevProps) {
        /// rese validation
        if (this.props.type !== prevProps.type) {
          this.setState({isNodeValid: true})
        }
      }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        // Validate name
        name == "name" && value && this.setState({isNodeValid: true});
    }

    handleSubmit(id, type, name, description) {
        const { handleSubmit } = this.props;
        // Validate name
        if (!name) {
            this.setState({isNodeValid: false});
            return;
        }
        // save
        handleSubmit(id, type, name, description);
    }


    render() {
        const { type } = this.props, { id, name, description, isNodeValid } = this.state;

        return (
            <fieldset className="mb-4">
                <legend>Set new {type} name</legend>
                <Form>
                    <FormGroup row>
                        <div className="col-8">
                            <Input className={(!isNodeValid ? " is-invalid" : "")} type="text" name="name" id="NodeName" placeholder="Please enter name..." value={name} onChange={(e) => this.handleChange(e)} />
                        </div>
                        {(name || description) && <Button color="primary" onClick={() => this.handleSubmit(id, type, name, description)}>Submit</Button>}
                        {!isNodeValid && <div className="invalid-feedback">Please enter name</div>}
                    </FormGroup>
                    {type == "file" && (
                        <FormGroup>
                            <Input className="col-8" type="textarea" name="description" placeholder="Please enter description..." value={description} onChange={(e) => this.handleChange(e)} />
                        </FormGroup>
                    )}                
                </Form>
            </fieldset>
        )
    }
}

export default CreationForm;