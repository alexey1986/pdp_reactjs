import React, { Component } from 'react';

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

        handleSubmit(id, type, name, description);
    }


    render() {
        const { type } = this.props, { id, name, description, isNodeValid } = this.state;

        return (
            <form>                
                <div className="form-group">
                    <label className="form-label">New {type} name</label>
                    <input type="text" className={"form-control col-4" + (!isNodeValid ? " is-invalid" : "")} name="name" value={name} onChange={(e) => this.handleChange(e)} />
                    {!isNodeValid && <div className="invalid-feedback">Please enter name</div>}
                </div>

                {type == "file" && <div className="form-group">
                    <textarea className="form-control col-4" rows="3" name="description" value={description} onChange={(e) => this.handleChange(e)}></textarea>
                </div>}
                
                <button type="button" className="btn btn-light" onClick={() => this.handleSubmit(id, type, name, description)}>Submit</button>
            </form>
        )
    }
}

export default CreationForm;