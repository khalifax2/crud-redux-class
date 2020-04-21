import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Modal, Button } from "react-bootstrap";
import { required, email, validateForm } from "redux-form-validators";

class UserForm extends Component {
  renderError = ({ error, submitFailed }) => {
    if (error && submitFailed) {
      return (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="form-group">
        <div>{this.renderError(meta)}</div>
        <label>{label}</label>
        <input {...input} className="form-control" />
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
    this.props.onHide();
  };

  render() {
    // console.log(this.props);

    return (
      <Modal
        show={this.props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.btnName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ marginTop: 10 }}>
            <form>
              <Field name="name" component={this.renderInput} label="Name" />
              <Field
                name="address"
                component={this.renderInput}
                label="Address"
              />
              <Field name="email" component={this.renderInput} label="Email" />
              <Field
                name="contact"
                component={this.renderInput}
                label="Contact"
              />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={this.props.handleSubmit(this.onSubmit)}
          >
            {this.props.btnName}
          </Button>
          <Button variant="danger" onClick={() => this.props.onHide()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const validate = validateForm({
  name: [required({ msg: "Name is required" })],
  address: [required({ msg: "Adress is required" })],
  email: [
    required({ msg: "Email is required" }),
    email({ msg: "Please enter a valid email" })
  ],
  contact: [required({ msg: "Contact is required" })]
});

export default reduxForm({
  form: "userForm",
  validate
})(UserForm);
