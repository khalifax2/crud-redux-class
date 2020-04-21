import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, ButtonToolbar } from "react-bootstrap";
import { reduxForm } from "redux-form";

import TableRow from "./TableRow";
import CreateUser from "./CreateUser";
import GetUser from "./GetUser";
import EditUser from "./EditUser";

import { fetchUsers, showCreateModal } from "../actions";

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  showCreateModal = value => {
    const { initialize, showCreateModal } = this.props;
    initialize({});
    showCreateModal(value);
  };

  tabRow = () => {
    const { users } = this.props;
    return users.map((d, i) => <TableRow obj={d} key={i} />);
  };

  render() {
    return (
      <div>
        <h3 align="center">User List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Person</th>
              <th>address</th>
              <th>email</th>
              <th>contact</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
        <ButtonToolbar>
          <Button variant="primary" onClick={() => this.showCreateModal(true)}>
            Create
          </Button>
          <CreateUser
            show={this.props.createModal}
            onHide={() => this.showCreateModal(false)}
          />
        </ButtonToolbar>

        <GetUser />
        <EditUser />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    users: state.users.data,
    createModal: state.users.createModal
  };
};

UserList = reduxForm({ form: "userForm" })(UserList);
export default connect(mapStateToProps, {
  fetchUsers,
  showCreateModal
})(UserList);
