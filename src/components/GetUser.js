import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
// import { reset, reduxForm } from "redux-form";
import TableRow from "./TableRow";
import { showViewModal } from "../actions";

class GetUser extends Component {
  tabRow = () => {
    const user = [];
    user.push(this.props.form);

    return user.map((object, i) => <TableRow obj={object} key={i} />);
  };

  render() {
    // console.log("GET_USER", this.props);
    const { viewModal } = this.props;

    return (
      <Modal show={viewModal} size="lg" aria-labelledby="false" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            User Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h3 align="center">User</h3>
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
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => this.props.showViewModal(null, false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    form: state.users.form,
    viewModal: state.users.viewModal
  };
};

export default connect(mapStateToProps, { showViewModal })(GetUser);
