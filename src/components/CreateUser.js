import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../actions";
import UserForm from "./UserForm";

class CreateUser extends Component {
  onSubmit = formValues => {
    this.props.createUser(formValues);
  };

  render() {
    const { onHide, show } = this.props;

    return (
      <UserForm
        onHide={onHide}
        show={show}
        onSubmit={this.onSubmit}
        btnName="Create"
      />
    );
  }
}

const mapStateToProps = state => {
  return { showModal: state.createModal };
};

export default connect(mapStateToProps, { createUser })(CreateUser);
