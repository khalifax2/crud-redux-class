import React, { Component, Fragment } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, ButtonToolbar } from "react-bootstrap";
import { reduxForm, reset } from "redux-form";
import { pick } from "lodash";
import {
  deleteUser,
  fetchUsers,
  showViewModal,
  showEditModal
} from "../actions";

class TableRow extends Component {
  edit = user => {
    const { initialize, showEditModal } = this.props;
    initialize(pick(user, "name", "address", "contact", "email"));
    showEditModal(user, true);
  };

  deleteUserBtn = async id => {
    const { deleteUser, fetchUsers } = this.props;
    await deleteUser(id);
    await fetchUsers();
  };

  render() {
    // console.log(this.props);
    const { _id, name, address, email, contact } = this.props.obj;
    return (
      <Fragment>
        <tr>
          <td>{name}</td>
          <td>{address}</td>
          <td>{email}</td>
          <td>{contact}</td>
          <td>
            <ButtonToolbar>
              <Button
                variant="info"
                onClick={() => this.props.showViewModal(this.props.obj, true)}
              >
                View
              </Button>
            </ButtonToolbar>
          </td>
          <td>
            <ButtonToolbar>
              <Button
                variant="success"
                onClick={() => this.edit(this.props.obj)}
              >
                Edit
              </Button>
            </ButtonToolbar>
          </td>
          <td>
            <button
              onClick={() => this.deleteUserBtn(_id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      </Fragment>
    );
  }
}

TableRow = reduxForm({ form: "userForm" })(TableRow);

export default connect(null, {
  deleteUser,
  fetchUsers,
  showEditModal,
  showViewModal
})(TableRow);
