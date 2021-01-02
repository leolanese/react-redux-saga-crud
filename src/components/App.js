import React, { Component } from "react";
import NewUserComponent from "./NewUserComponent";
import UserList from "./UserListComponent";
import { connect } from "react-redux";
import "./App.css";
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError,
} from "../actions/users";
import { Alert } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.props.getUsersRequest();
  }

  handleCreateUserSubmit = ({ firstName, lastName }) => {
    this.props.createUserRequest({
      firstName,
      lastName,
    });
  };

  handleDeleteUserClick = (userId) => {
    this.props.deleteUserRequest(userId);
  };

  handleCloseAlert = () => {
    this.props.usersError({
      error: "",
    });
  };

  render() {
    const users = this.props.users;
    return (
      <div className="the-cord">
        <div className="the-form">
          <h2>React Redux Saga CRUD</h2>

          {/* Alert Saga Component */}
          <Alert
            color="danger"
            isOpen={!!this.props.users.error}
            toggle={this.handleCloseAlert}
          >
            {this.props.users.error}
          </Alert>
        </div>

        <div className="the-list">
          <NewUserComponent onSubmit={this.handleCreateUserSubmit} />
          {!!users.items && !!users.items.length && (
            <UserList
              onDeleteUserClick={this.handleDeleteUserClick}
              users={users.items}
            />
          )}
        </div>
      </div>
    );
  }
}

export default connect(({ users }) => ({ users }), {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError,
})(App);