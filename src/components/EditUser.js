import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { editUser, showEditModal, fetchUsers } from "../actions";
import { reduxForm, reset } from "redux-form";
import UserForm from "./UserForm";

class EditUser extends Component {
  onSubmit = async formValues => {
    const { editUser } = this.props;
    await editUser(this.props.form._id, formValues);
  };

  closeModal = () => {
    const { clearFields } = this.props;
    this.props.showEditModal(null, false);
    clearFields();
  };

  render() {
    const { editModal } = this.props;

    return (
      <UserForm
        show={editModal}
        onHide={() => this.closeModal()}
        onSubmit={this.onSubmit}
        btnName="Update"
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    form: state.users.form,
    editModal: state.users.editModal
  };
};

EditUser = reduxForm({ form: "userForm" })(EditUser);
export default connect(mapStateToProps, {
  editUser,
  showEditModal,
  fetchUsers
})(EditUser);
